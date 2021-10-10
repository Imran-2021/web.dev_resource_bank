import React from 'react';
import "./Admin.css"
const Admin = () => {

    // Errors and solutions

    const handleSubmit1=() => {
        const err=document.getElementById("err").value;
        const slink=document.getElementById("slink").value;
        const hints=document.getElementById("hints").value;
        const info={err,slink,hints}
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
    // Important Links
    const handleSubmit2=() => {
        const name=document.getElementById("name").value;
        const linke=document.getElementById("linke").value;
        const hintss=document.getElementById("hintss").value;
        const infoo={name,linke,hintss}
       fetch("http://localhost:3002/addData2",{
        method: 'POST',
        body: JSON.stringify({infoo}),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
       })
       .then(response => response.json())
       .then(data => console.log(data));

    }

    // Notes - 
    const date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`

    const handleSubmit3=() => {
        const noteTopic=document.getElementById("noteTopic").value;
        const dates=document.getElementById("date").value;
        const hLink=document.getElementById("hLink").value;
        const Idea=document.getElementById("Idea").value;
        const infoo={noteTopic,dates,hLink,Idea}
       fetch("http://localhost:3002/addData3",{
        method: 'POST',
        body: JSON.stringify({infoo}),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
       })
       .then(response => response.json())
       .then(data => console.log(data));

    }

    // to do list --- 

    const handleSubmit4=() => {
        const Topic=document.getElementById("Topic").value;
        const datea=document.getElementById("datea").value;
        const Linkf=document.getElementById("Linkf").value;
        const how=document.getElementById("how").value;
        const infoo={Topic,datea,Linkf,how}
       fetch("http://localhost:3002/addData4",{
        method: 'POST',
        body: JSON.stringify({infoo}),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
       })
       .then(response => response.json())
       .then(data => console.log(data));

    }

    return (
        <div className="admin">
        <div className="admins">
        
        
        <div class="wrapper">
            <div class="title">
                <h1>Errors and solutions</h1>
            </div>
            <div class="contact-form">
                <div class="input-fields">
                <input type="text"class="input" id="err" placeholder="Error Name" name="name"/>
                <input type="text"class="input" id="slink" placeholder="Solution Link" name="value"/>
                {/* <input type="text"class="input" id="quantity" placeholder="quantity" name="quantity"/>
                <input type="text" class="input" placeholder="Subject"/> */}
                </div>
                <div class="msg">
                <textarea placeholder="Hints of solutions" id="hints"></textarea>
                <div class="btn" onClick={handleSubmit1}>submit</div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="title">
            <h1>Important Links</h1>
            </div>
            <div class="contact-form">
                <div class="input-fields">
                <input type="text"class="input" id="name" placeholder="Name" name="name"/>
                <input type="text"class="input" id="linke" placeholder="Link" name="value"/>
                {/* <input type="text"class="input" id="quantity" placeholder="quantity" name="quantity"/>
                <input type="text" class="input" placeholder="Subject"/> */}
                </div>
                <div class="msg">
                <textarea placeholder="Hints" id="hintss"></textarea>
                <div class="btn" onClick={handleSubmit2}>submit</div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="title">
                <h1>Daily Notes</h1>
            </div>
            <div class="contact-form">
                <div class="input-fields">
                <input type="text"class="input" id="date" placeholder="date" value={date} readOnly name="name"/>
                <input type="text"class="input" id="noteTopic" placeholder="Topic" name="name"/>
                
                <input type="text"class="input" id="hLink" placeholder="Link" name="value"/>
                {/* <input type="text"class="input" id="quantity" placeholder="quantity" name="quantity"/>
                <input type="text" class="input" placeholder="Subject"/> */}
                </div>
                <div class="msg">
                <textarea placeholder="How to do?" id="Idea"></textarea>
                <div class="btn" onClick={handleSubmit3}>submit</div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="title">
                <h1>To Do List</h1>
            </div>
            <div class="contact-form">
                <div class="input-fields">
                <input type="text"class="input" id="datea" placeholder="datea" value={date} readOnly name="name"/>
                <input type="text"class="input" id="Topic" placeholder="Topic" name="name"/>
                
                <input type="text"class="input" id="Linkf" placeholder="Link" name="value"/>
                {/* <input type="text"class="input" id="quantity" placeholder="quantity" name="quantity"/>
                <input type="text" class="input" placeholder="Subject"/> */}
                </div>
                <div class="msg">
                <textarea placeholder="what's to note !" id="how"></textarea>
                <div class="btn" onClick={handleSubmit4}>submit</div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="title">
                <h1>Interview-Q</h1>
            </div>
            <div class="contact-form">
                <div class="input-fields">
                <input type="text" class="input" placeholder="Name"/>
                <input type="text" class="input" placeholder="Email Address"/>
                <input type="text" class="input" placeholder="Phone"/>
                <input type="text" class="input" placeholder="Subject"/>
                </div>
                <div class="msg">
                <textarea placeholder="Message"></textarea>
                <div class="btn">submit</div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="title">
                <h1>Basic</h1>
            </div>
            <div class="contact-form">
                <div class="input-fields">
                <input type="text" class="input" placeholder="Name"/>
                <input type="text" class="input" placeholder="Email Address"/>
                <input type="text" class="input" placeholder="Phone"/>
                <input type="text" class="input" placeholder="Subject"/>
                </div>
                <div class="msg">
                <textarea placeholder="Message"></textarea>
                <div class="btn">submit</div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="title">
                <h1>Resources</h1>
            </div>
            <div class="contact-form">
                <div class="input-fields">
                <input type="text" class="input" placeholder="Name"/>
                <input type="text" class="input" placeholder="Email Address"/>
                <input type="text" class="input" placeholder="Phone"/>
                <input type="text" class="input" placeholder="Subject"/>
                </div>
                <div class="msg">
                <textarea placeholder="Message"></textarea>
                <div class="btn">submit</div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Admin;