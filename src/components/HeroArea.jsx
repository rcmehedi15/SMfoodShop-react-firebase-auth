import React from 'react';
import { Link } from 'react-router-dom';

const HeroArea = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://st2.depositphotos.com/4135663/10198/i/450/depositphotos_101982634-stock-photo-restaurant-blurred-background.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-3 text-4xl font-bold text-white">Welcome to our Official Chef Website</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to="/register" className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroArea;