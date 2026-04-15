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
builder.Services.AddOpenApi();

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

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseCors("AllowClient");

// Enable controllers
app.MapControllers();

app.Run();