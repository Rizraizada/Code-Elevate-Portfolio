import React from 'react';
import './service.css';

const Service = () => {
    return (
        <div className="success-section">
            <div className="title">Our <span style={{ color: 'purple' }}>Services</span></div>
            <div className="description">We provide All-in-one Solution for every IT job</div>
            <div className="success-items">
                {/* First Div */}
                <div className="success-item">
                    <div className="software-development">Software Development</div>
                    <div className="div-data">Posuere morbi leo urna molestie at elementum eu egestas.</div>
                    <div className="learn-more">Learn more<span className="arrow"></span></div>
                </div>
                {/* Second Div */}
                <div className="success-item">
                    <div className="software-development">AI Programmer & Technical</div>
                    <div className="div-data">Posuere morbi leo urna molestie at elementum eu egestas.</div>
                    <div className="learn-more">Learn more<span className="arrow"></span></div>
                </div>
                {/* Third Div */}
                <div className="success-item">
                    <div className="software-development">System Application Development</div>
                    <div className="div-data">Posuere morbi leo urna molestie at elementum eu egestas.</div>
                    <div className="learn-more">Learn more<span className="arrow"></span></div>
                </div>
                {/* Fourth Div */}
                <div className="success-item">
                    <div className="software-development">Server and Network Solutions</div>
                    <div className="div-data">Posuere morbi leo urna molestie at elementum eu egestas.</div>
                    <div className="learn-more">Learn more<span className="arrow"></span></div>
                </div>
            </div>
        </div>
    );
};

export default Service;
