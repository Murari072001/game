import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Dashboard(props)
{
    const navigate=useNavigate()
    useEffect(()=>{
        if(!props.user.isLoggedIn)
            {
                navigate("/login")
            }
    },[])
    return <div>
        <h1>Welcome {props.user.loginUser?.name}</h1>
    </div>
}

export default connect(store=>store)(Dashboard)