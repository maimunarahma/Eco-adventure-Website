/* eslint-disable react/jsx-no-undef */
// import { useContext } from "react";
// import { useLoaderData, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import { FaSchoolCircleExclamation } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


 
const Details = () => {
    const location = useLocation();
    const { data } = location.state;
    const [time,setTime]=useState(new Date().toLocaleTimeString())
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
    if(currentHour>=10 && currentHour<=20) window.open(meetUrl, "_blank");
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
        {/* <VerticalTimeline> */}
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />
        
    }
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaSchoolCircleExclamation />}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaSchoolCircleExclamation />}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaSchoolCircleExclamation />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} */}
    {/* icon={<FaSchoolCircleExclamation />}
  />
</VerticalTimeline> */}
        </div>
     

    );
};

export default Details;