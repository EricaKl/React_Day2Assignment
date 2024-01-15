import React from 'react'
import {useState, useEffect} from 'react'

export default function EffectUse()
{
    const [D, setVariable] = useState(0);

    /* Only First Time */
    // useEffect(()=>{
    //     document.title = `You clicked ${D} times`;
    // },[]);

    /* On Every Page Render */
    // useEffect(()=>{
    //     document.title = `You clicked ${D} times`;
    // });

    /* Only When value of variable D changes */
    useEffect(()=>{
        document.title = `You clicked ${D} times`;
    },[D]);
   
    return(
        <>
        <button type="button" onClick={()=>setVariable(D+1)}>Click Me!!</button>
        <h2>Variable has a value : {D}</h2>
        </>
        
    );
}