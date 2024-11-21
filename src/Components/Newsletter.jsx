

const Newsletter = () => {
    return (
        <div className="text-center flex flex-col w-[70%] mx-auto border-2 rounded bg-green-200 p-5 border-green-700">
            <h1 className="text-4xl text-grey mt-4 font-bold">NewsLetter</h1>
            <p className="text-lg text-grey-">Get your daily dose of travel news & tips. Sign up today!</p>

            <input type="text" placeholder="Your name" name='name' className="my-3  md:w-1/2 w-full input input-bordered  mx-auto" required />
            <input type="text" placeholder=" Your email"  className=" md:w-1/2 w-full input input-bordered  mx-auto" required />
         <button className="btn  md:w-1/4 w-full mx-auto my-3 bg-green-800 text-white">Subscribe</button>
       
        </div>
    );
};

export default Newsletter;