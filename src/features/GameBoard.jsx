import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ateFood, setFood, gameOn, setdirection, gameStart } from './gameSlice'
import { useNavigate } from 'react-router';
import Snake3 from "./Snake3.jpg"
function GameBoard() {

  const cells = []
  const game = useSelector(state => state.game)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const startGame = setInterval(() => {
      moveSnake()
    }, game.speed)

    return () => clearInterval(startGame)
  },[game.speed,game.gameOver,game.food])
  const moveSnake = () => {
    if (game.gameOver)
      return;
    dispatch(gameOn())
    dispatch(ateFood())
    if(game.snake.find((ele)=>ele.x===game.food.x&&ele.y===game.food.y))
    {
      dispatch(setFood())
    }
  }
  
  useEffect(() => { dispatch(setFood()) }, [])
  window.onkeydown = function (e) {

    switch (e.key) {
      case "ArrowUp":
      case "w":
        if (game.direction[game.direction.length - 1] !== "down" && game.direction[game.direction.length - 1] !== "up")
          dispatch(setdirection({ dir: "up", loc: game.snake[0] }))
        break;
      case "ArrowDown":
      case "s":
        if (game.direction[game.direction.length - 1] !== "up" && game.direction[game.direction.length - 1] !== "down")
          dispatch(setdirection({ dir: "down", loc: game.snake[0] }))
        break;
      case "ArrowRight":
      case "d":
        if (game.direction[game.direction.length - 1] !== "left" && game.direction[game.direction.length - 1] !== "right")
          dispatch(setdirection({ dir: "right", loc: game.snake[0] }))
        break;
      case "ArrowLeft":
      case "a":
        if (game.direction[game.direction.length - 1] !== "right" && game.direction[game.direction.length - 1] !== "left")
          dispatch(setdirection({ dir: "left", loc: game.snake[0] }))
        break;
      default: break;
    }
  }

  for (let x = 0; x < game.rows; x++) {
    for (let y = 0; y < game.column; y++) {
      cells.push({ x, y })
    }
  }
  const playAgain=()=>{
    dispatch(gameStart())
  }
  return (
    <>
      <div className="App" style={{backgroundImage:`url(${Snake3})`,backgroundSize:"100%"}}>
        <div className='w-100 text-center'>
        <h1 className='m-2 ms-auto me-auto p-3 title score'>{game.mode?.toUpperCase()} MODE</h1>
        <div className='d-flex flex-wrap p-0 ms-auto me-auto  position-relative' style={{ width: game.blocksize * game.column, height: game.blocksize * game.rows }} id='board'>
          {cells.map((cell) => {
            return (
              <div className={`${(game.snake.find((ele) => ele.x === cell.x && ele.y === cell.y)) ? ((game.snake[0].x===cell.x&&game.snake[0].y===cell.y)?`snakehead ${game.snake[0].dir}`:"snakebody" ): (((game.food.x === cell.x) && (game.food.y === cell.y)) ? "food" : "cell")} m-0 p-0`} key={`${cell.x}-${cell.y}`} style={{ width: game.blocksize, height: game.blocksize }} ></div>
            )
          })}

        </div>
        <h2 className='text-center ms-auto me-auto m-3 p-3 score'>Score:{game.score}</h2>
        </div>
        <div style={{display:game.gameOver?"flex":"none"}} id='finalscore'>
              <div>
              <h1>!!! Great Job !!!</h1>
              <h2> Your Score </h2>
              <h2>{game.score}</h2>
              <button className='btn btn-success w-75 m-2' onClick={()=>{playAgain()}}>Play Again ??</button>
              <button className='btn btn-warning w-75 m-2'onClick={()=>{navigate("/")}}>Go To Home</button>
              </div>
        </div>
      </div>
    </>
  );
}
export default GameBoard