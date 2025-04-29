import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="h-screen flex items-center justify-center bg-gray-50">
            <div className="w-[360px] h-[640px] bg-white rounded-xl shadow-md flex flex-col justify-end p-6">
                <div className="mb-6">
                    <h1 className="text-xl font-semibold text-gray-900 mb-2">Welcome to PopX</h1>
                    <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit,
                    </p>
                </div>
                <div className="space-y-4">
                    <button
                        style={{ backgroundColor: "rgb(108, 37, 255)" }}
                        className="w-full text-white py-3 rounded-md font-medium"
                        onClick={() => navigate("/create-account")}
                    >
                        Create Account
                    </button>
                    <button
                    
                    style={{ backgroundColor: "rgb(206,186,251)" }}
                        className="w-full  text-black py-3 rounded-md font-medium"
                        onClick={() => navigate("/login")}
                    >
                        Already Registered? Login
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Home;