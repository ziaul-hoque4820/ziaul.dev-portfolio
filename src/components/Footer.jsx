import React from 'react';

const Footer = () => {
    return (
        <footer className=" footer sm:footer-horizontal footer-center bg-base-300 p-6 max-w-[2500px] mx-auto text-gray-100 text-center">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='font-semibold text-[#a29bfe]'>Ziaul.Dev</span>
                </p>
            </aside>
        </footer>
    );
};

export default Footer;