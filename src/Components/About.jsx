

const About = () => {
    return (
        <div className="mt-5 p-6 lg:h-[1070px]">
            <h1 className="text-4xl mb-3 text-green-700 ">About Us</h1>
            <p className="text-gray-500 text-xl">Bangladesh Eco Adventure started its journey with some intellectual tour officials with a mission to change the country’s negative image.  With this dream & theme, we came a long way with great success. Bangladesh Eco Adventure not only provides you with a trusted and reliable source for purchasing your travel, the level of service you will receive from us only begins during the purchasing phase. Both before and throughout your trip, you will have the security of knowing you have a partner nearby to ensure your satisfaction. Whether it is something as simple as notifying you of a schedule change on an international flight, re-routing an island hop due to weather, or recommending an optional excursion when greeted at your hotel upon arrival, our travel specialists and international infrastructure are in place to ensure a seamless experience for you and your travel companions.

Regardless of your travel needs, you will find the utmost experience, service, and value when working with Bangladesh Eco Adventure. We invite you to explore our website, submit a trip request, or call one of our destination specialists to discuss your next trip. We look forward to hearing from you soon.</p>
       
       <div className="flex  flex-col justify-center text-center mt-5">

        <h1 className="font-bold text-2xl">We have been featured in</h1>
        <img src="https://i.ibb.co.com/ZX6cg1t/Screenshot-2023-09-02-221528-png.webp" alt=""  className="w-1/2 mx-auto"/>
       
       </div>
       <div className="flex  flex-col justify-center text-center mt-5">
       <h1 className="text-4xl mb-3 text-green-700 ">Why Eco-Tourism</h1>
       <p className="text-gray-500 text-xl my-3" >Watch the video to get clear concept of what eco-tourism is and why should you prefer it.</p>
     <div className="mx-auto">
     <iframe  height="315" src="https://www.youtube.com/embed/Sgtf6hd1VvM?si=rEGZXODGUiocU8XA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     </div>
     
       </div>
 
     
        </div>
    );
};

export default About;