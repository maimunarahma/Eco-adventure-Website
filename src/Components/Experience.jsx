import { Link } from "react-router-dom";

const Experience = () => {
    return (
        <div className="flex flex-col justify-between items-center">
            <img src="https://i.ibb.co.com/87BrRPX/gettyimages-943488490-612x612.jpg" alt="" className="w-[700px] h-[550px]" />
       <p className="text-center text-xl p-5">Embark on an unforgettable eco-tour journey through some of the world's most pristine and biodiverse locations. Start your adventure in the heart of the <b> Amazon Rainforest</b>, where you’ll witness the lush greenery and vibrant wildlife that thrive in this vital ecosystem. Next, venture into the <b>majestic Himalayas</b> , home to snow-capped peaks and rare wildlife, offering breathtaking views and a tranquil escape from the hustle and bustle of daily life. Continue your exploration in the <b>Galapagos Islands</b> , a living laboratory of evolution, where unique species and untouched landscapes will leave you in awe. Finally, immerse yourself in the diverse beauty of <b>Costa Rica's </b> National Parks, where rainforests, volcanic landscapes, and abundant wildlife come together, offering one of the most biodiverse eco-tourism experiences on the planet. Each stop on this journey offers a chance to connect with nature, learn about sustainable practices, and contribute to the preservation of these irreplaceable ecosystems.</p>
     <p>Experience the beauty of nature like never before with our eco-tour packages, featuring Camping Retreats that offer a peaceful escape under the stars, surrounded by pristine wilderness. For those seeking adventure, embark on thrilling Forest Expeditions, where you’ll hike through lush forests, spot wildlife, and immerse yourself in the tranquil beauty of the trees. Feel the rush of excitement with our <span className="text-blue-400 "><Link to='river'>River Adventures</Link></span> , where you can canoe, kayak, or raft through crystal-clear waters, surrounded by breathtaking landscapes. For a truly unique experience, join us for Desert Exploration, where the vast, golden sands of the desert stretch out before you, and the silence of the dunes offers a profound connection to the natural world. Whether you’re looking for adventure, relaxation, or a deeper connection with nature, these eco-tours provide an unforgettable experience.</p>
        </div>
    );
};

export default Experience;