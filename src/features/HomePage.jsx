import React from "react";
import { useDispatch } from "react-redux";
import { setMode } from "./gameSlice";
import Snake1 from "./Snake1.png"
import { useNavigate } from "react-router";
function HomePage()
{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const modeSet=(e)=>{
        dispatch(setMode(e))
        navigate("/start")
    }
    return (
        <div style={{backgroundImage:`url(${Snake1})`,backgroundSize:"100%"}} className="home">
            <div className="card">
            <h1 className="title">Welcome To Snake World</h1>
            <div className="text-center">
                <button className="btn btn-outline-dark m-2 w-75" onClick={(e)=>{modeSet(e.target.value)}} value="classic">Classic Mode</button>
                <button className="btn btn-outline-dark m-2 w-75" onClick={(e)=>{modeSet(e.target.value)}} value="strict">Strict Mode</button>
            </div>
            </div>
        </div>
    )
}

export default HomePage