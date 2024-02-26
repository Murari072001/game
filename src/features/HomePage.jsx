import React from "react";
import { useDispatch } from "react-redux";
import { setMode } from "./gameSlice";
import { useNavigate } from "react-router-dom";

function HomePage()
{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const modeSet=(e)=>{
        dispatch(setMode(e))
        navigate("/start")
    }
    return (
        <div style={{backgroundImage:"",backgroundSize:"150%"}} className="home">
            <h1>Welcome To NaaGin World</h1>
            {/* <img src="https://img.freepik.com/premium-vector/cartoon-green-snake-isolated_29190-4759.jpg?w=740" alt="" /> */}
            <div className="text-center">
                <button className="btn btn-outline-dark m-2 w-75" onClick={(e)=>{modeSet(e.target.value)}} value="classic">Classic Mode</button>
                <button className="btn btn-outline-info m-2 w-75" onClick={(e)=>{modeSet(e.target.value)}} value="strict">Strict Mode</button>
            </div>
        </div>
    )
}

export default HomePage