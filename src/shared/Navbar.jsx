import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Navbar(props)
{
    const navigate=useNavigate()
    return <nav className="navbar bg-success mb-4 navbar-expand-lg border-bottom border-body sticky-top" data-bs-theme="dark" >
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {!props.user.isLoggedIn && <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to={`/login`}>Login</Link>
                </li>}
                {!props.user.isLoggedIn && <li className="nav-item">
                    <Link className="nav-link" to={`/register`}>Register</Link>
                </li>}
                {props.user.isLoggedIn && <li className="nav-item">
                    <button className="nav-link" onClick={()=>{props.dispatch({type:"logout"}); navigate("/login")}}>Sign Out</button>
                </li>}
            </ul>
        </div>
    </div>
</nav>
}

export default connect(store=>store)(Navbar)