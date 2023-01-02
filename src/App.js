
import { useState } from "react";
function App() {

  const [calc, setCalc]=useState("");
  const [res,setRes]=useState("");

const opr=['/','*','+','-','.'];
//create function to update 
const update= value =>{
  if(

opr.includes(value) && calc === '' || 
opr.includes(value) && opr.includes(calc.slice(-1))
  ){
    return;
  }
setCalc(calc+value);
if(!opr.includes(value)){
  setRes(eval(calc+value).toString())
}

}
//create createDigits
  const createDigits=()=>{
    const digits =[];
    for(let i=1;i<10;i++){
      digits.push(
        <button  
        onClick={()=>{update(i.toString())}} 
        key={i}>
          {i}
          </button>
      )
    }
    return digits;
  }
  //create function to display the value
  const Eq=()=>{
    setCalc(eval(calc).toString())
  }
  //create function to delete the value

  const del =()=>{
    if(calc ==''){
      return;
    }else{
      const value= calc.slice(0,-1);
      setCalc(value);
    }
  }
  return (
    <div className="App">
     <div className="calculator">
      <div className="display">
       {res ?  <span>({res})</span> :''}{calc || "0"}
      </div>
      <div className="opreatorsButoon">
        <button onClick={()=>{update('/')}}>/</button>
        <button onClick={()=>{update('*')}}>*</button>
        <button  onClick={()=>{update('+')}}>+</button>
        <button  onClick={()=>{update('-')}}>-</button>
        <button onClick={del} >DEL</button>
      </div>
      <div className="digits">
      {/* <button>9</button>
      <button>8</button>
      <button>7</button>
      <button>6</button>
      <button>5</button>
      <button>4</button>
      <button>3</button>
      <button>2</button>
      <button>1</button> */}
      {createDigits()}
      <button  onClick={()=>{update('0')}}>0</button>
        <button  onClick={()=>{update('.')}}>.</button>
        <button onClick={Eq}>=</button>
      </div>
     </div>
    </div>
  );
}

export default App;
