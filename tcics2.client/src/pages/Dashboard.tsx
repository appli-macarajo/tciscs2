import "bootstrap/dist/css/bootstrap.min.css";

export default function Dashboard() {
  return (
    <div className="d-flex vh-100 bg-light">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
        <h4 className="mb-4">TCICS</h4>
        <ul className="nav flex-column gap-2">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Users</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Reports</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Settings</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        {/* Topbar */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>Dashboard</h3>
          <button className="btn btn-primary">Logout</button>
        </div>

        {/* Cards */}
        <div className="row g-3">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Total Users</h5>
                <h2>120</h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Active Sessions</h5>
                <h2>35</h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">System Status</h5>
                <h2 className="text-success">Online</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="card mt-4 shadow-sm">
          <div className="card-body">
            <h5 className="mb-3">Recent Activity</h5>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User</th>
                  <th>Action</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Admin</td>
                  <td>Login</td>
                  <td><span className="badge bg-success">Success</span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>John</td>
                  <td>Update</td>
                  <td><span className="badge bg-warning">Pending</span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Maria</td>
                  <td>Delete</td>
                  <td><span className="badge bg-danger">Failed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}