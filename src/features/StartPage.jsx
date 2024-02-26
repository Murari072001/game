import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { gameStart } from "./gameSlice";

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
        <div className="home">
            <h1>{game.mode.toUpperCase()} Mode</h1>
          <button className='btn btn-outline-danger' onClick={()=>{startGame()}}>Let's Start</button>
        </div>
    )
}

export default StartPage