import { useEffect } from "react"
import { useRef } from "react"

function CanvasBoard()
{
    const ref=useRef()
    useEffect(()=>{
        let canvas=ref.current;
        let context=canvas.getContext("2d")

        canvas.width=1000;
        canvas.height=600;
        context.fillStyle="green"
        context.fillRect(50,50,500,500)

        context.beginPath()
        context.fillArc='black'
        context.arc(50,50,10,0,Math.PI*2)
        context.lineWidth=1
        context.stroke()
        context.closePath()

        context.fillStyle="blue"
        context.fillRect(300,300,250,100)
        canvas.style.backgroundColor="red"
    },[])
    return <div>
        <canvas ref={ref}></canvas>
    </div>
}

export default CanvasBoard