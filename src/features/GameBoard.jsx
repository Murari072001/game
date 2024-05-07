import { useDispatch, useSelector } from "react-redux"
import { addCoin, changeTurn } from "./gameSlice";
import { useRef } from "react";

function Gameboard() {
    const user = useSelector(state => state.game)
    const dispatch = useDispatch()
    let ref = useRef()
    const AddCoin = (a, e) => {
        console.log(e);

    }
    const checkWin = () => {
        let x=user.win.some((ele) => {
            let y=ele.every((item) => {
                if (user.turn === "playerA") {
                    console.log(1);
                    return user.positionA.includes(item)
                }
                if (user.turn === "playerB") {
                    console.log(user.positionB,item);
                    return user.positionB.includes(item)
                }
            })
            console.log(y);
            return y
        })
        // console.log(x);
    }
    const placeCoin = (e) => {
        if (user[user.turn].length > 0) {
            e.target.className = e.target.id + `  ${user.turn}`
            dispatch(addCoin(e.target.value))
        }
        else {
            document.querySelectorAll(".game").forEach((ele) => {
                if (ele.className.includes("selected")) {
                    let index = ele.className.indexOf("selected")
                    ele.className = ele.className.split(" ").filter(a => a !== "selected").join(' ')
                    console.log(index, ele.className);
                }
            })
            e.target.className = e.target.className + ` selected`
            // dispatch(addCoin(user.turn))
        }
        checkWin()
        dispatch(changeTurn())
    }
    console.log(user);
    return (
        <section>
            {user.gameOver && <section className="gameover"><div><h1>{user.turn} Wins</h1><button>Play Again</button></div></section>}
            <h2 style={{ color: "white" }}>{user.turn} Chance</h2>
            <section id="gameboard">
                <section className="boxes"><span id="vertical1" /></section>
                <section className="boxes"><span id="vertical2" /></section>
                <section className="boxes"><span id="vertical3" /></section>
                <section className="boxes"><span id="vertical4" /></section>
                <button onClick={(e) => { placeCoin(e) }} id="positions game row-0 col-0" value={0} className="positions game row-0 col-0"></button>
                <button onClick={(e) => { placeCoin(e) }} id="positions game row-0 col-1" value={1} className="positions game row-0 col-1"></button>
                <button onClick={(e) => { placeCoin(e) }} id="positions game row-0 col-2" value={2} className="positions game row-0 col-2"></button>
                <button onClick={(e) => { placeCoin(e) }} id="positions game row-1 col-0" value={3} className="positions game row-1 col-0"></button>
                <button onClick={(e) => { placeCoin(e) }} id="positions game row-1 col-1" value={4} className="positions game row-1 col-1"></button>
                <button onClick={(e) => { placeCoin(e) }} id="positions game row-1 col-2" value={5} className="positions game row-1 col-2"></button>
                <button onClick={(e) => { placeCoin(e) }} id="positions game row-2 col-0" value={6} className="positions game row-2 col-0"></button>
                <button onClick={(e) => { placeCoin(e) }} id="positions game row-2 col-1" value={7} className="positions game row-2 col-1"></button>
                <button onClick={(e) => { placeCoin(e) }} id="positions game row-2 col-2" value={8} className="positions game row-2 col-2"></button>
            </section>
            <section id="main">
                <section className="teams">
                    <h4>Player A</h4>
                    <div >
                        {
                            user.playerA.map((coin, index) => {
                                return <button key={index} disabled={user.turn !== "playerA"} className="coin playerA" onClick={(e) => { AddCoin("playerA", e) }}>
                                </button>
                            })
                        }
                    </div>
                </section>
                <section className="teams" disabled={true}>
                    <h4>Player B</h4>
                    <div>
                        {
                            user.playerB.map((coin, index) => {
                                return <button key={index} disabled={user.turn !== "playerB"} className="coin playerB" onClick={(e) => { AddCoin("playerB", e) }}>
                                </button>
                            })
                        }
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Gameboard