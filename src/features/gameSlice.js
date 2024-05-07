import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playerA: ['coin1', 'coin2', 'coin3'],
  positionA:[],
  positionB:[],
  playerB: ['coin1', 'coin2', 'coin3'],
  win:[["0","1","2"],["3","4","5"],["6","7","8"],["0","3","6"],["1","4","7"],["2","5","8"],["0","4","8"],["2","4","6"]],
  turn: "playerA",
  gameOver:false,
  selectedCoin:''
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addCoin: (state, action) => {
      state[state.turn].pop()
      if (state.turn === "playerA") {
        state.positionA.push(action.payload)
      }
      if (state.turn === "playerB") {
        state.positionB.push(action.payload)
      }
    },
    changeTurn: (state, action) => {
     
      if (state.turn === "playerA")
        state.turn = "playerB"
      else
        state.turn = "playerA"
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCoin, changeTurn } = gameSlice.actions

export default gameSlice.reducer