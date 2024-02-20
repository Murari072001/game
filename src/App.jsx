import React from "react"
function App() {
  const [Computer,setComp]=React.useState("")
  const [player,setPlay]=React.useState("")
  const [result,setResult]=React.useState("")
  const keys=["rock","paper","scissor"]
  const evaluate=(e)=>{
    let play=e.target.value
    setPlay(e.target.value)
    let comp=keys[Math.floor(Math.random()*keys.length)]
    setComp(comp)
    if(comp===e.target.value)
    {
      setResult("Draw")  
    }
    else if((comp==="rock"&&play==="paper")||(comp==="paper"&&play==="scissor")||(comp==="scissor"&&play==="rock")){
      setResult("You Won")
    }
    else{
      setResult("You Lost")
    }
  }
  return (
    <div className='board w-50 ms-auto me-auto text-center mt-5 rounded-5'>
        <div className="m-3">
            <h3>Player:{player.toUpperCase()}</h3>
            <h3>Computer:{Computer.toUpperCase()}</h3>
            <h3>Result:{result}</h3>
        </div>
        <div className="m-3">
          <button onClick={(e)=>{evaluate(e)}} className="btn btn-outline-danger m-3" value="rock">Rock</button>
          <button onClick={(e)=>{evaluate(e)}} className="btn btn-outline-danger m-3" value="paper">Paper</button>
          <button onClick={(e)=>{evaluate(e)}} className="btn btn-outline-danger m-3" value="scissor">Scissor</button>
        </div>
    </div>
  );
}

export default App;
