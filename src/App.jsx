import './App.css';
import one from './Images/one.png'
import two from './Images/two.png'
import three from './Images/three.png'
import four from './Images/four.png'
import five from './Images/five.png'
import six from './Images/six.png'
function App() {
  function rollDice()
  {
    let x= Math.ceil(Math.random()*6)
    console.log(x);
    let y=document.querySelectorAll(".dice")
    y[0].style.display="none"
    y[1].style.display="none"
    y[2].style.display="none"
    y[3].style.display="none"
    y[4].style.display="none"
    y[5].style.display="none"
    document.getElementById(x).style.rotate="90deg"
    document.getElementById(x).style.display="block"

  }
  return (
    <div className="App">
      
        <div id='1' className='dice' style={{backgroundImage:`url(${one})`}}></div>
        <div id='2' className='dice' style={{backgroundImage:`url(${two})`}}></div>
        <div id='3' className='dice' style={{backgroundImage:`url(${three})`}}></div>
        <div id='4' className='dice' style={{backgroundImage:`url(${four})`}}></div>
        <div id='5' className='dice' style={{backgroundImage:`url(${five})`}}></div>
        <div id='6' className='dice' style={{backgroundImage:`url(${six})`}}></div>
        <button onClick={()=>{rollDice()}}>Click</button>
    </div>
  );
}

export default App;
