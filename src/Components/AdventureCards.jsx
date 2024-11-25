/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import 'animate.css';

import { AuthContext } from "../Providrs/Authentication";
import { useContext, useEffect } from "react";
import Newsletter from "./Newsletter";
import AOS from 'aos';
import 'aos/dist/aos.css';




const AdventureCards = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const datas = useLoaderData();
    // console.log(datas)

    useEffect(() => {
        AOS.init();
    }, []);

    return (


        <div className="mt-5 w-full lg:w-[900px] mx-auto" >
            <h1 className="text-black text-3xl font-bold text-center">Adventure Experiences</h1>

            <div className="">
                <div className=" shadow-xl rounded-lg">
                    <div className=" grid grid-cols-1 gap-8">

                        {
                            datas.map(data => <div key={data.id} className=" border-2 p-6 border-black rounded bg-slate-200" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                <img src={data.image} alt="" className="w-full h-[300px] lg:h-[550px] p-3  rounded-lg" />

                                <div className="p-3">
                                    <h2 className="card-title text-4xl font-bold">{data.adventureTitle}</h2>
                                    {data.ecoFriendlyFeatures.map((features, ind) => <li key={ind} className="text-xl p-1">{features}   </li>)}
                                    <div className="card-actions justify-start ">
                                        {user ? <>


                                            <button className="btn bg-green-900 text-white" ><Link to={`details/${data.id}`} state={{ data }}>Explore More</Link></button>


                                        </> : <button className="btn bg-green-900 text-white"><Link to='/auth/login'>Explore More</Link></button>}

                                    </div>
                                </div>
                            </div>)
                        }

                        <Newsletter></Newsletter>
                    </div>





                </div>
            </div>
        </div>

    );
};

export default AdventureCards;