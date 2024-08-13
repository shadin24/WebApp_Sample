import React, { useState } from "react";

function Home(){
    const [userName,setUserName] =useState("Joel");
    const [bgcolor,setBgcolor] =useState("grey");
    const [theme,settheme] =useState("Dark");
    const handleChange=()=>{
        setUserName(userName=== "Joel"? "Nidhi":"Joel")
    }
    const handleColor=()=>{
        setBgcolor(bgcolor=== "white"? "grey":"white")
        settheme(theme=== "Dark"? "Light":"Dark")
    }
    const handleRandomColor=()=>{
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        setBgcolor(randomColor)
    }

    return(
        <div style={{backgroundColor: bgcolor,padding:330}}>
            <h1>
                State Example
            </h1>
            <h3 style={{border :'2px solid black', borderRadius: 10,padding:10}}>{userName}</h3>
            <div style={{border: '2px solid black',padding:20, borderRadius: 10}}>
            <button style={{border: '2px', borderRadius: 10,width:200,padding:10,margin:5}} onClick={handleChange}>Toggle Name</button>
            <br />
            <button style={{border: '2px', borderRadius: 10,width:200,padding:10,margin:5,borderColor:"red"}} onClick={handleColor}>{theme}</button><br />
            <button style={{border: '2px', borderRadius: 10,width:200,padding:10,margin:5}} onClick={handleRandomColor}>Random Colour</button>
            </div>
        </div>
    )
} 
export default Home