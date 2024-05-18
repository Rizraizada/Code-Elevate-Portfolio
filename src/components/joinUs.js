import React from 'react';
import './join.css';

const JoinUs = () => {
    return (
        <div className="container">
            {/* Left Section */}
            <div className="hire_section_left">
                {/* Left section main area */}
                <div className="left_header">
                    <div className="borderline"></div>
                    <span>Join With Us!</span>
                </div>

                <div className="left_main">
                    <h1 className="l_main_head1 header_style">Hire Now!</h1>
                    <h1 className="header_style">1250+ CVs already submitted here</h1>
                    <img src="/assets/section6_right.png" alt="Section right" className="hidden_img img_hidden" />

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo neque quisquam quidem quam. Nihil eaque facere repellat nulla nemo rerum ut soluta debitis distinctio explicabo.</p>

                    <div className="btn_area">
                        <button type="button" className="btn">
                            <a href="#" target="_blank" rel="noopener noreferrer">Hire Employee</a>
                        </button>
                        <a href="#" target="_blank" rel="noopener noreferrer">Looking for a job?</a>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="hire_section_right">
                {/* Image Area */}
                <img src="/assets/section6_right.png" alt="Section right" className="section6_img" />
            </div>
        </div>
    );
}

export default JoinUs;
