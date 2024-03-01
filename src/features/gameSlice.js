import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  blocksize: 25,
  rows: 20,
  column: 20,
  snake: [{ x: 12, y: 5, dir: "right", cross: 0 }],
  food: { x: null, y: null },
  direction: [],
  speed: 300,
  location: [],
  score: 0,
  gameOver: true,
  mode:null
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    gameOn: (state) => {

      switch (state.score) {
        case 50: state.speed = 200
          break;
        case 150: state.speed = 150
          break;
        case 300: state.speed = 125
          break;
        case 400: state.speed = 100
        break;
        default:
          break;
      }

      state.snake.map((ele, ind) => {

        if (ele.x === state.location[ele.cross]?.x && ele.y === state.location[ele.cross]?.y) {
          ele.dir = state.direction[ele.cross]
          ele.cross += 1
        }

        if (state.direction.length > state.snake.length) {
          state.direction.shift()
          state.location.shift()
          state.snake.map((body) => { return { x: body.x, y: body.y, dir: body.dir, cross: body.cross-- } })
        }

        if (ind !== 0 && state.snake[0].x === ele.x && state.snake[0].y === ele.y) {
          state.gameOver = true
        }
        switch (ele.dir) {
          case "up": if (ele.x >= 0) {
            return { x: ele.x--, y: ele.y, dir: ele.dir, cross: ele.cross }
          }
          else if (state.mode==="strict" && ele.x<0)
          {
            console.log(1);
            state.gameOver=true;
          }
          else {
            ele.x = state.rows-1
            return { x: ele.x, y: ele.y, dir: ele.dir, cross: ele.cross }
          }
          break;
          case "down": if (ele.x <= state.rows-1) {
            return { x: ele.x++, y: ele.y, dir: ele.dir, cross: ele.cross }
          }
          else if (state.mode==="strict"&&ele.x===state.rows)
          {
            state.gameOver=true;
          }
          else {
            ele.x = 0
            return { x: ele.x, y: ele.y, dir: ele.dir, cross: ele.cross }
          }
          break;
          case "right": if (ele.y <= state.rows-1) {
            return { x: ele.x, y: ele.y++, dir: ele.dir, cross: ele.cross }
          }
          else if (state.mode==="strict"&&ele.y===state.rows)
          {
            state.gameOver=true;
          }
          else {
            ele.y = 0
            return { x: ele.x, y: ele.y, dir: ele.dir, cross: ele.cross }
          }
          break;
          case "left": if (ele.y >= 0) {
            return { x: ele.x, y: ele.y--, dir: ele.dir, cross: ele.cross }
          }
          else if (state.mode==="strict"&&ele.y<0)
          {
            state.gameOver=true;
          }
          else {
            ele.y = state.rows-1
            return { x: ele.x, y: ele.y, dir: ele.dir, cross: ele.cross }
          }
          break;
          default: return ele;
        }

      })
    },
    setFood: (state) => {
      state.food = { x: Math.floor(Math.random() * state.rows-1), y: Math.floor(Math.random() * state.rows-1) }
    },
    setdirection: (state, action) => {
      state.direction = [...state.direction, action.payload.dir]
      state.location = [...state.location, { ...action.payload.loc }]
    },

    ateFood: (state) => {
      if (state.snake[0].x === state.food.x && state.snake[0].y === state.food.y) {
        state.food = { x: Math.floor(Math.random() * (state.rows-1)), y: Math.floor(Math.random() * (state.rows-1)) }
        let newX = state.snake[state.snake.length - 1].x
        let newY = state.snake[state.snake.length - 1].y
        let newCross = state.snake[state.snake.length - 1].cross
        switch (state.snake[state.snake.length - 1].dir) {
          case "left": newY++
            break;
          case "right": newY--
            break;
          case "up": newX++
            break;
          case "down": newX--
            break;
          default:
            break;
        }
        let newbody = { x: newX, y: newY, dir: state.snake[state.snake.length - 1].dir, cross: newCross }
        state.snake = [...state.snake, newbody]
        state.score += 10
      }
    },
    gameStart: (state) => {
      state.snake=initialState.snake
      state.score=initialState.score      
      state.gameOver = false
      state.direction=initialState.direction
      state.speed=initialState.speed
      state.location=initialState.location
      state.food = { x: Math.floor(Math.random() * (state.rows-1)), y: Math.floor(Math.random() * (state.rows-1)) }
    },
    setMode:(state,action)=>{
      state.mode=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { gameOn, setFood, setdirection, ateFood, gameStart,setMode } = gameSlice.actions
const gameReducer = gameSlice.reducer
export default gameReducer