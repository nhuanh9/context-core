import React from "react";
import {Link, useNavigate, useParams, useSearchParams} from "react-router-dom";

export default function Home() {
    // const {id} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    return (
        <div>
            <Link to={'products'}>Manage Product</Link> |
            <Link to={'students'}>Manage Student</Link>
        </div>
    )
}
