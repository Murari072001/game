import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { gameStart } from "./gameSlice";
import Snake2 from "./Snake2.jpg"
function StartPage()
{
    const game=useSelector(state=>state.game)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const startGame=()=>{
      dispatch(gameStart())
      navigate("/game")
    }
    return (
        <div style={{backgroundImage:`url(${Snake2})`,backgroundSize:"100%"}} className="home">
            <div className="card">
            <h1 className="title">{game.mode?.toUpperCase()} Mode</h1>
            <button className='btn btn-outline-dark' onClick={()=>{startGame()}}>Let's Start</button>
            </div>
        </div>
    )
}

export default StartPage