// function Keypad({handleClick,handleClear,calculate}){
//     return(
//         <div className="keypad">
//             <div className="column">
//                 <button className="digit" onClick={ () => {
//                     handleClick("7")

//                 }
//                 }>7</button>
//                 <button className="digit" onClick={ () => {
//                     handleClick("8")

//                 }
//                 }>8</button>
//                 <button className="digit" onClick={ () => {
//                     handleClick("9")

//                 }
//                 }>9</button>
//                 <button className="operator" onClick={ () => {
//                     handleClick("/")

//                 }
//                 }>/</button>
//                 <div className="column ">
//                 <button className="digit" onClick={ () => {
//                     handleClick("4")

//                 }
//                 }>4</button>
//                 <button className="digit" onClick={ () => {
//                     handleClick("5")

//                 }
//                 }>5</button>
//                 <button className="digit" onClick={ () => {
//                     handleClick("6")

//                 }
//                 }>6</button>
//                 <button className="operator" onClick={ () => {
//                     handleClick("*")

//                 }
//                 }>*</button>
//                 <div className="column">
//                 <button className="digit" onClick={ () => {
//                     handleClick("1")

//                 }
//                 }>1</button>
//                 <button className="digit" onClick={ () => {
//                     handleClick("2")

//                 }
//                 }>2</button>
//                 <button className="digit" onClick={ () => {
//                     handleClick("3")

//                 }
//                 }>3</button>
//                 <button className="operator" onClick={ () => {
//                     handleClick("-")

//                 }
//                 }>-</button>
//                 <div className="column"> 
//                 <button className="digit" onClick={ () => {
//                     handleClick("0")

//                 }
//                 }>0</button>
//                 <button className="fun-key " onClick={ () => {
//                     handleClear("")

//                 }
//                 }>C</button>
//                 <button className="fun-key" onClick={ () => {
//                     calculate()

//                 }
//                 }>=</button>
//                 <button className="operator" onClick={ () => {
//                     handleClick("+")

//                 }
//                 }>+</button>


//                 </div>
//                 </div>

//                 </div>

//             </div>

//         </div>
//     )

// }

// export default Keypad

// import React from 'react';

// function Keypad({ handleClick, handleClear, calculate, handleFunction }) {
//     return (
//         <div className="keypad">
//             <div className="column">
//                 <button className="digit" onClick={() => handleClick("7")}>7</button>
//                 <button className="digit" onClick={() => handleClick("8")}>8</button>
//                 <button className="digit" onClick={() => handleClick("9")}>9</button>
//                 <button className="operator" onClick={() => handleClick("/")}>/</button>
//             </div>
//             <div className="column">
//                 <button className="digit" onClick={() => handleClick("4")}>4</button>
//                 <button className="digit" onClick={() => handleClick("5")}>5</button>
//                 <button className="digit" onClick={() => handleClick("6")}>6</button>
//                 <button className="operator" onClick={() => handleClick("*")}>*</button>
//             </div>
//             <div className="column">
//                 <button className="digit" onClick={() => handleClick("1")}>1</button>
//                 <button className="digit" onClick={() => handleClick("2")}>2</button>
//                 <button className="digit" onClick={() => handleClick("3")}>3</button>
//                 <button className="operator" onClick={() => handleClick("-")}>-</button>
//             </div>
//             <div className="column">
//                 <button className="digit" onClick={() => handleClick("0")}>0</button>
//                 <button className="fun-key" onClick={() => handleClear()}>C</button>
//                 <button className="fun-key" onClick={() => calculate()}>=</button>
//                 <button className="operator" onClick={() => handleClick("+")}>+</button>
//             </div>
//             <div className="column">
//                 <button className="scientific" onClick={() => handleFunction("sqrt")}>√</button>
//                 <button className="scientific" onClick={() => handleFunction("power")}>x^2</button>
//                 <button className="scientific" onClick={() => handleFunction("log")}>log</button>
//                 <button className="scientific" onClick={() => handleFunction("sin")}>sin</button>
//             </div>
//         </div>
//     );
// }

// export default Keypad;

import React from 'react';

function Keypad({ handleClick, handleClear, calculate, handleFunction }) {
    return (
        <div className="keypad">
            <div className="column">
                <button className="digit" onClick={() => handleClick("7")}>7</button>
                <button className="digit" onClick={() => handleClick("8")}>8</button>
                <button className="digit" onClick={() => handleClick("9")}>9</button>
                <button className="operator" onClick={() => handleClick("/")}>/</button>
            </div>
            <div className="column">
                <button className="digit" onClick={() => handleClick("4")}>4</button>
                <button className="digit" onClick={() => handleClick("5")}>5</button>
                <button className="digit" onClick={() => handleClick("6")}>6</button>
                <button className="operator" onClick={() => handleClick("*")}>*</button>
            </div>
            <div className="column">
                <button className="digit" onClick={() => handleClick("1")}>1</button>
                <button className="digit" onClick={() => handleClick("2")}>2</button>
                <button className="digit" onClick={() => handleClick("3")}>3</button>
                <button className="operator" onClick={() => handleClick("-")}>-</button>
            </div>
            <div className="column">
                <button className="digit" onClick={() => handleClick("0")}>0</button>
                <button className="fun-key" onClick={() => handleClear()}>C</button>
                <button className="fun-key" onClick={() => calculate()}>=</button>
                <button className="operator" onClick={() => handleClick("+")}>+</button>
            </div>
            <div className="column">
                <button className="scientific" onClick={() => handleFunction("sqrt")}>√</button>
                <button className="scientific" onClick={() => handleFunction("power")}>x^2</button>
                <button className="scientific" onClick={() => handleFunction("log")}>log</button>
                <button className="scientific" onClick={() => handleFunction("sin")}>sin</button>
            </div>
        </div>
    );
}

export default Keypad;
