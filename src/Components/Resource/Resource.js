import React, { useEffect, useState } from 'react';
import { Link,useParams } from 'react-router-dom';
import FakeData from '../../FakeData/FakeData';
import "./Resource.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Resource = () => {
    const {idd} = useParams();
    // console.log(idd);
    const [data,setData]=useState([])
    // console.log(data);
    useEffect(()=>{
       let dat=FakeData.filter(x=>x.name==`${idd}`);
       setData(dat[0]);
    },[])
    console.log(data);
    console.log(data?.documentations?.[0].w3);
    return (
        <section className="single-resource">
            <div className="single-resource-in">

            <p>TOPIC - {idd}</p>
           
            <h4>{data.description}</h4>
            <h3>Basic Key- </h3>
            {/* <p className="as">{data.keywords}</p> */}
           <div className="as">
           {
                data?.keywords?.map((x,y)=><div className="ass">
               <div>
                 {x}
                </div>
            </div>)
            }
           </div>
            <h3>Documentations -</h3>
            {/* <p>{data.documentations[0].link ||"lorem"}</p> */}
           {/* <p>{data?.documentations?.[0]}</p> */}
           {
               data?.documentations?.map((x,y)=><div>
                   <p>{y+1} <FontAwesomeIcon style={{color:"black",fontSize:"15px",color:"blue"}} icon={faArrowRight} /> <a className='ahover' target="_blank" rel="noreferrer" href={x}>{x}</a></p>
                   
               </div>)
           }
            <h3>Tutorial - </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, cupiditate? Accusamus, ab quasi vero possimus fuga repellat ipsam numquam enim, provident perferendis explicabo! Quaerat quasi nostrum maxime repellendus, quisquam sed?</p>
            </div>
        </section >
    );
};

export default Resource;