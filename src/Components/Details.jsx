/* eslint-disable react/jsx-no-undef */
// import { useContext } from "react";
// import { useLoaderData, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


 
const Details = () => {
    const location = useLocation();
    const { data } = location.state;
    const [time,setTime]=useState(new Date().toLocaleTimeString())
    const navigate=useNavigate();
 useEffect(() => {
    const intervalId = setInterval(() => {
        setTime(new Date().toLocaleTimeString()); 
        console.log(time)
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
}, [time]);
  const openMeet=()=>{
    const currentHour=new Date().getHours()
     const meetUrl="https://meet.google.com/cgt-hqin-kjn";
    if(currentHour>=10 && currentHour<=20) 
               window.open(meetUrl, "_blank");
    else {
        alert("Google Meet is available only between 10 AM and 8 PM.");
    }
  }
    console.log(typeof data)
    return (
          
        <div className="mx-auto px-0 flex flex-col justify-center items-center gap-3">
       <h1 className="font-semibold text-5xl my-4 text-green-600">{data.adventureTitle}</h1>
        <img src={data.image} alt="" className="h-[500px]"/>
        <button className="rounded-full text-gray-500 bg-green-100 p-3">{data.categoryName}</button>
        <h1 className="text-6xl font-semibold text-green-700 mt-3 ">Tour OverView</h1>
        <h1 className="px-36 my-5 text-center  text-2xl ">{data.overview}</h1>
        <div className="w-[60%] mb-6">
        <div className=" bg-green-500 text-white mb-0 flex justify-between items-center p-5 font-bold text-2xl">
         <h1>Tour starts and Ends Place</h1>
            <h1>Duration</h1>
        <h1>Total Cost</h1>
        </div>
        <div className="mt-0  bg-green-100  flex justify-between items-center p-5 font-bold text-2xl">
            <h1>Dhaka</h1>
            <h1>{data.duration}</h1>
        <h1>{data.adventureCost}</h1>
        </div>
        </div>
        <button className="btn" onClick={openMeet}><Link >Talk with Expert</Link></button>
     
  
        </div>
     

    );
};

export default Details;