import {Outlet} from "react-router";
import React from "react";
import {Link} from "react-router-dom";

export default function ProductPage() {
    return (
        <div>
            <h3><Link to={'create'}>Create new Product</Link></h3>
            <h3><Link to={'list'}>List Product</Link></h3>
            <Outlet></Outlet>
        </div>
    )
}

// Đường dẫn API cho crud product:
// Get All: GET /products
// Get One: GET /products/1
// Update: PUT /products/1 {data}
// Delete: DELETE /products/1
// Add: POST /products {data}
// Search by name: GET /products/search?name=Dương


