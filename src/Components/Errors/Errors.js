import React, { useEffect, useState } from 'react';
import "./Errors.css"
import Linkss from './links';
import Llinks from './Llinks';
const Errors = () => {
    const [err,setErr]=useState([]);
    const [linka,setLink]=useState([]);
    useEffect(()=>{
        fetch('https://salty-garden-38529.herokuapp.com/links')
        .then(res=>res.json())
        .then(data=>{
            setLink(data);
        })
    },[])
    useEffect(()=>{
        fetch('https://salty-garden-38529.herokuapp.com/errors')
        .then(res=>res.json())
        .then(data=>{
            setErr(data);
        })
    },[])
    console.log(linka);
    return (
        <div className="errors">
           <div className="errors-in">
                    <div className="lorem">
                        <div className="lorem-in extra">
                        <h3>Errors & solutions</h3>
                    </div>
                    {
                            err.map(x=><Linkss x={x}/>)
                        }
                    </div>
                    <div className="lorem">
                        <div className="lorem-in extra">
                        <h3>Important links</h3>
                    </div>
                    {
                            linka.map(x=><Llinks x={x}/>)
                        }
                    </div>
            
               
           </div>
        </div>
    );
};

export default Errors;