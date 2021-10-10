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
        {/* <div className="">
            <div className="admin-in">
                <div style={{margin:"10px"}}>
                    <input type="text" id="name" placeholder="name" name="name"/> <br/><br/>
                    <input type="text" id="value" placeholder="value" name="value"/> <br/><br/>
                    <input type="text" id="quantity" placeholder="quantity" name="quantity"/> <br/><br/>
                    <input type="submit"  value="addProduct" onClick={handleSubmit} name="addProduct"/>


                </div>
            </div>
        </div> */}
        <div className="admins">
        <div class="wrapper">
            <div class="title">
                <h1>Errors and solutions</h1>
            </div>
            <div class="contact-form">
                <div class="input-fields">
                <input type="text"class="input" id="name" placeholder="Error Name" name="name"/>
                <input type="text"class="input" id="value" placeholder="Solution Link" name="value"/>
                {/* <input type="text"class="input" id="quantity" placeholder="quantity" name="quantity"/>
                <input type="text" class="input" placeholder="Subject"/> */}
                </div>
                <div class="msg">
                <textarea placeholder="Hints of solutions"></textarea>
                <div class="btn" onClick={handleSubmit}>submit</div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="title">
                <h1>Important Links</h1>
            </div>
            <div class="contact-form">
                <div class="input-fields">
                <input type="text" class="input" placeholder="Name"/>
                <input type="text" class="input" placeholder="Links"/>
                <input type="text" class="input" placeholder="What for"/>
                </div>
                <div class="msg">
                <textarea placeholder="Message"></textarea>
                <div class="btn">submit</div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="title">
                <h1>Blogs</h1>
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
                <h1>nterview-Q</h1>
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