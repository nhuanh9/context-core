import React from "react";
import {Link} from "react-router-dom";
import {Outlet} from "react-router";

export default function StudentPage() {
    return (
        <div>
            <Link to={'list'}>Student List</Link> |
            <Link to={'create'}>Create Student</Link>

            <Outlet></Outlet>
        </div>
    )
}
