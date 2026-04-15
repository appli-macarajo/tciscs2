using tcics2.api.Data;
using Microsoft.EntityFrameworkCore;



var builder = WebApplication.CreateBuilder(args);

// ======================
// SERVICES
// ======================

// Controllers
builder.Services.AddControllers();

// PostgreSQL DbContext
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// OpenAPI (optional)


// CORS for React
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowClient", policy =>
    {
       policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});
var app = builder.Build();

// ======================
// PIPELINE
// ======================

// 1. CORS MUST BE FIRST
app.UseCors("AllowClient");

// 2. HANDLE PREFLIGHT (VERY IMPORTANT FOR IIS)
app.Use(async (context, next) =>
{
    if (context.Request.Method == "OPTIONS")
    {
        context.Response.StatusCode = 200;
        await context.Response.CompleteAsync();
        return;
    }

    await next();
});

// 3. HTTPS redirect
app.UseHttpsRedirection();

// 4. Controllers
app.MapControllers();

app.Run();