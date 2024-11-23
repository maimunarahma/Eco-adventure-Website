import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
    const location = useLocation();
    const { data } = location.state;

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
    const navigate = useNavigate();

    // Update time every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []);

    const openMeet = () => {
        const currentHour = new Date().getHours();
        const meetUrl = "https://meet.google.com/cgt-hqin-kjn";

        if (currentHour >= 10 && currentHour <= 20) {
            window.open(meetUrl, "_blank");
        } else {
            setIsModalOpen(true); // Show modal
        }
    };

    return (
        <div className="mx-auto px-0 flex flex-col justify-center items-center gap-3">
            <h1 className="font-semibold text-5xl my-4 text-green-600">{data.adventureTitle}</h1>
            <img src={data.image} alt="" className="h-[500px]" />
            <button className="rounded-full text-gray-500 bg-green-100 p-3">{data.categoryName}</button>
            <h1 className="text-6xl font-semibold text-green-700 mt-3">Tour Overview</h1>
            <h1 className="px-36 my-5 text-center text-2xl">{data.overview}</h1>
            <div className="w-[60%] mb-6">
                <div className="bg-green-500 text-white mb-0 flex justify-between items-center p-5 font-bold text-2xl">
                    <h1>Tour starts and Ends Place</h1>
                    <h1>Duration</h1>
                    <h1>Total Cost</h1>
                </div>
                <div className="mt-0 bg-green-100 flex justify-between items-center p-5 font-bold text-2xl">
                    <h1>Dhaka</h1>
                    <h1>{data.duration}</h1>
                    <h1>{data.adventureCost}</h1>
                </div>
            </div>

            {/* Button to trigger meeting */}
            <button className="btn" onClick={openMeet}>
                Talk with Expert
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="font-bold text-lg">Google Meet Notice</h3>
                        <p className="py-4">Google Meet is only available between 10 AM and 8 PM.</p>
                        <button
                            className="btn mt-4"
                            onClick={() => {
                                setIsModalOpen(false);
                                navigate("/");
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;
