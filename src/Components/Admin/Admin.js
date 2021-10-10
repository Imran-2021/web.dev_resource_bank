import React from 'react';
import "./Admin.css"
const Admin = () => {
    const handleSubmit=() => {
        const name=document.getElementById("name").value;
        const value=document.getElementById("value").value;
        const quantity=document.getElementById("quantity").value;
        const info={name,value,quantity}
       fetch("http://localhost:3002/addData1",{
        method: 'POST',
        body: JSON.stringify({info}),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
       })
       .then(response => response.json())
       .then(data => console.log(data));
       

    }
    return (
        <div className="admin">
            <div className="admin-in">
                <div style={{margin:"10px"}}>
                    <input type="text" id="name" placeholder="name" name="name"/> <br/><br/>
                    <input type="text" id="value" placeholder="value" name="value"/> <br/><br/>
                    <input type="text" id="quantity" placeholder="quantity" name="quantity"/> <br/><br/>
                    <input type="submit"  value="addProduct" onClick={handleSubmit} name="addProduct"/>


                </div>
            </div>
        </div>
    );
};

export default Admin;