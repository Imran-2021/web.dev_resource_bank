import React from 'react';

const Llinks = ({x}) => {
    const {name,linke,hintss}=x;
    return (
        <div>

        <div style={{overflow: 'hidden'}} className="lorem-in">
            <small style={{padding:"5px",color:"#730000",fontWeight:"bold"}}>Error Name : {name}</small> <br />
            <small style={{padding:"5px" , color:"yellow"}}>Link-  <br /><a href={linke} target="_blank" rel="noreferrer">{linke}</a></small> <br />
            <small style={{padding:"5px",color:"rgb(31 19 15)"}}>Hints - <span >{hintss}</span></small>
        </div>
    );
        </div>
    );
};

export default Llinks;