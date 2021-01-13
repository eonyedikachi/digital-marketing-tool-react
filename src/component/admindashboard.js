import React, { Link } from 'react';
// import './user-management.css';

 function AdminDashboard() {
    return (
        <div className="wrapper">
      <div className="sidebar">
        <Link to="">Dashboard</Link>
        <Link to="">User Management</Link>
        <Link to="">Feedback</Link>
        <p>Administrator</p>
      </div>
            <div className="main">
            </div>
            
      <div className="sidebar"></div>
        </div>
    )
}
export default AdminDashboard;
