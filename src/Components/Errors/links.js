import React from 'react';
import "./Links.css"
const Linkss = ({x}) => {
   const {err,hints,slink}=x;
//    console.log(err,hints,slink);
    // console.log(props.x);
    return (
        <div style={{overflow: 'hidden'}} className="lorem-in">
            <small style={{padding:"5px",color:"#730000",fontWeight:"bold"}}>Error Name : {err}</small> <br />
            <small style={{padding:"5px" , color:"yellow"}}>Link-  <br /><a href={slink} target="_blank" rel="noreferrer">{slink}</a></small> <br />
            <small style={{padding:"5px",color:"rgb(31 19 15)"}}>Hints - <span >{hints}</span></small>
        </div>
    );
};

export default Linkss;