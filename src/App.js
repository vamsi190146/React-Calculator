// import React, { useState } from 'react';
// import Keypad from "./keypad"
// import "./App.css"

// function App(){

//     let[input,setInput]=useState("")
//     function handleClick(value){
//         setInput(input+value)

//     }
//     function calculate(value){
//         let outputval=eval(input)
//         setInput(outputval)
//     }
//     function handleClear(){
//         setInput("")
//     }
//   return (
//     <div className="container">
//       <h1>Calculator App </h1>
//       <div className="calculator">
//         <input type="text"  value ={input}className="output"/>
//         <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}></Keypad>

//       </div>

//     </div>
//   )

// }
// export default App

import React, { useState } from 'react';
import Keypad from "./keypad";
import "./App.css";

function App() {
    let [input, setInput] = useState("");

    function handleClick(value) {
        setInput(input + value);
    }

    function calculate() {
        try {
            const outputValue = eval(input);
            setInput(outputValue.toString());
        } catch (error) {
            setInput("Error");
        }
    }

    function handleClear() {
        setInput("");
    }

    function handleFunction(func) {
        switch (func) {
            case "sqrt":
                setInput(Math.sqrt(parseFloat(input)).toString());
                break;
            case "power":
                setInput(Math.pow(parseFloat(input), 2).toString());
                break;
            case "log":
                setInput(Math.log10(parseFloat(input)).toString());
                break;
            case "sin":
                setInput(Math.sin(parseFloat(input)).toString());
                break;
            // Add more scientific functions as needed
            default:
                break;
        }
    }

    return (
        <div className="container">
            <h1>Calculator App</h1>
            <div className="calculator">
                <input type="text" value={input} className="output" readOnly />
                <Keypad
                    handleClick={handleClick}
                    handleClear={handleClear}
                    calculate={calculate}
                    handleFunction={handleFunction}
                />
            </div>
        </div>
    );
}

export default App;
