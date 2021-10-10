import React, { useEffect, useState } from 'react';
import "./Notes.css"
const Notes = () => {
// const date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
const [note,setNotes]=useState([])
useEffect(()=>{
    fetch("http://localhost:3002/note")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setNotes(data.reverse());
    })
},[])
const [note2,setNotes2]=useState([])
useEffect(()=>{
    fetch("http://localhost:3002/note2")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setNotes2(data.reverse());
    })
},[])


    return (
        <div className="notes">
            <div className="notes-in">
                <div className="abs">
                    <h1 style={{textAlign: 'center'}}>Notes</h1>
                    <div>
                    {
                            note.map(x=><div style={{padding:"10px",background:"#d2cabb",borderRadius:"5px",margin:"4px"}}>
                                 <h3 style={{padding:"5px",fontSize:"1.6rem",color:"#910000",borderBottom:"2px solid rgb(113 71 71)"}}>Date - {x.date}</h3>
                                <h3 style={{padding:"5px"}}>Topic - {x.noteTopic}</h3>
                                <h3 style={{padding:"5px"}}>Link - <a style={{textDecoration:"none",color:"#1a2e8b"}} target="_blank" rel="noreferrer"href={x.hLink}>{x.hLink}</a></h3>
                                <h3 style={{padding:"5px"}}>Note - {x.Idea}</h3>
                            </div>)
                        }
                    </div>
                </div>
                <div className="abs">
                    <h1 style={{textAlign: 'center'}}>To Do List</h1>
                    <div>
                    {
                            note2.map(x=><div style={{padding:"10px",background:"#d2cabb",borderRadius:"5px",margin:"4px"}}>
                                 <h3 style={{padding:"5px",fontSize:"1.6rem",color:"#910000",borderBottom:"2px solid rgb(113 71 71)"}}>Date - {x.datea}</h3>
                                <h3 style={{padding:"5px"}}>Topic - {x.Topic}</h3>
                                <h3 style={{padding:"5px"}}>Link - <a style={{textDecoration:"none",color:"#1a2e8b"}} target="_blank" rel="noreferrer"href={x.Linkf}>{x.Linkf}</a></h3>
                                <h3 style={{padding:"5px"}}>Note - {x.how}</h3>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notes;