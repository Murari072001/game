import React from "react"
function App() {
    let [genNum,setGen]=React.useState(null)
    let ref=React.useRef()
    // console.log(genNum);
    function generate(i)
    {
      console.dir();
      let count=0
      let random=Math.round(Math.random()*9)
      if(random===genNum)
      {
        random=Math.round(Math.random()*9)
      }
      const spin=setInterval(()=>{
        ref.current.style.rotate=`${(180-(36*random))}deg`
        console.log(count);
        count+=1;
        if(count===20)
        {
          clearInterval(spin)
        }
      },120)
      setGen(random)
    }
  return (
    <div className='main positive-relative'>
        <div className="board">
          <div className="spin">
            <img ref={ref} src="https://www.canassist.ca/assets/SpinnerOverlays/VarietySpinnerOverlaysJpg/0-9%20Overlay_Final.jpg" alt="" />
          </div>
          <h2 className="text-center"><i className="bi bi-arrow-up"></i></h2>
          <button className="btn btn-primary" onClick={()=>{generate()}}>Generate Number</button>
          <h3>Generated Number:{genNum}</h3>
        <div className="triangle"></div>
        </div>
    </div>
  );
}

export default App;
