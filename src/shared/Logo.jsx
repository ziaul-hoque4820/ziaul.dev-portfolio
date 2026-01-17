import React from 'react';
import logoImg from '../assets/coding.png'

const Logo = () => {
    return (
        <div className="flex items-center space-x-2">
            {/* icon */}
            <img className='w-10 h-10 object-cover' src={logoImg} alt="logo-img" />

            {/* text logo */}
            <div className="font-bold text-4xl">
                <span className="text-gray-800">Ziaul</span>
                <span className="text-blue-400">.</span>
                <span className="text-green-600">Dev</span>
            </div>
        </div>
    );
};

export default Logo;