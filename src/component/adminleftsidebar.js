import React from 'react';
import { Link } from "react-router-dom";
import "./adminsidebar.css"
import AdminRightSidebar from "./adminrightsidebar";

 function AdminLeftSidebar() {
    return (
      <div className="sidebar position-fixed">
        <div className="link">
          <Link className="linked" to="./dashboard">
            <i class="fas fa-table"></i> &nbsp; Dashboard
          </Link>
          <Link className="linked" to="./users">
            <i class="fas fa-user-friends"> </i> &nbsp; User Management
          </Link>
          <Link className="linked" to="./feedback">
            <i class="fas fa-comments"></i> &nbsp; Feedback
          </Link>
        </div>

        <AdminRightSidebar />
      </div>
    );
}
export default AdminLeftSidebar;