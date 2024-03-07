import {  useState } from "react"

export default function A(){
const [data,setData] = useState({
    name:"priyal",
    age:"2sal"
});

const mybutton  = ()=>{
    setData(prev =>{
        return {...prev,age:"21sal",name:"payal"}
    });
}



    return(
        <>
         <h1> fucntion A call{data.age}</h1>
         <h1> fucntion A call{data.name}</h1>
         <button type="button" onClick={mybutton}>click</button>
        </>
    )
}