import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const AdventureCards = () => {
    const datas=useLoaderData();
    console.log(datas)
    datas.map(data=>console.log(data.adventureTitle))
    return (
        <div className="mt-5">
            <h1 className="text-black text-3xl font-bold text-center">Adventure Experiences</h1>
       <div className="w-full p-3">
       <div className="  bg-base-100  shadow-xl p-6 rounded-lg">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {
        datas.map(data=><div key={data.id} className="card-body border-2 rounded">
            <img src={data.image} alt="" className="w-full h-[350px] rounded p-5"/>
          
            <div className="card-body">
    <h2 className="card-title">{data.adventureTitle}</h2>
   { data.ecoFriendlyFeatures.map((features,ind)=> <li key={ind}>{features}   </li>)}
    <div className="card-actions justify-start">
      <button className="btn bg-green-900 text-white"><Link to={`details/${data.id}`}>Explore More</Link></button>
    </div>
  </div>
        </div>)
    }
        </div>
  
   
  
 

</div>
       </div>
        </div>
    );
};

export default AdventureCards;