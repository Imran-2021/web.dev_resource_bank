import React, { useEffect, useState } from 'react';
import "./Errors.css"
const Errors = () => {
    const [err,setErr]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3002/errors')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setErr(data);
        })
    },[])
    console.log(err);
    return (
        <div className="errors">
           <div className="errors-in">
               <div className="lorem">
                    <div className="lorem-in extra">
                        <h3>Errors solutions</h3>
                    </div>
                    <div className="lorem-in">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis adipisci aspernatur perspiciatis ea, quisquam asperiores quas sequi accusamus repudiandae maxime mollitia voluptatem, ipsa sunt praesentium possimus vel sed saepe illum?</p>
                    </div>
                    <div className="lorem-in">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis adipisci aspernatur perspiciatis ea, quisquam asperiores quas sequi accusamus repudiandae maxime mollitia voluptatem, ipsa sunt praesentium possimus vel sed saepe illum?</p>
                    </div>
                    </div>
               <div className="lorem1">
               <div className="lorem-inn extra">
                        <h3>Important links for handle errors</h3>
                    </div>
                    <div className="lorem-inn">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum ea repellat hic consequuntur nam sint dolor totam quibusdam nisi rerum porro perspiciatis reiciendis doloremque repudiandae omnis sapiente, corrupti nulla!</p>
                    </div>
                    
               </div>
            
               
           </div>
        </div>
    );
};

export default Errors;