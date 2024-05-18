import React from 'react';
import './about.css';

const AboutUs = () => {
  return (
    <div className="Wrapper">
      <div className="topSection">
        <div className="top-portion">Loved by teams around the world</div>
        <div className="bottom-portion">
          <div className="first-portion">
            <div className="im"><img src="/assets/about/logos/1.png" alt="image" /></div>
            <div className="im"><img src="/assets/about/logos/scale.png" alt="image" /></div>
            <div className="im"><img src="/assets/about/logos/iniuit.png" alt="image" /></div>
            <div className="im"><img src="/assets/about/logos/guideare.png" alt="image" /></div>
            <div className="im"><img src="/assets/about/logos/5.png" alt="image" /></div>
            <div className="im"><img src="/assets/about/logos/12.png" alt="image" /></div>
          </div>
          <div className="second-portion">
            <div className="im"><img src="/assets/about/logos/7.png" alt="image" /></div>
            <div className="im"><img src="/assets/about/logos/6.png" alt="image" /></div>
            <div className="im"><img src="/assets/about/logos/8.png" alt="image" /></div>
            <div className="im"><img src="/assets/about/logos/9.png" alt="image" /></div>
            <div className="im"><img src="/assets/about/logos/10.png" alt="image" /></div>
            <div className="im"><img src="/assets/about/logos/11.png" alt="image" /></div>
          </div>
        </div>
      </div>
      <div className="about-us-alt"><center>About <span style={{ color: '#6358E5' }}>us</span></center></div>
      <div className="bottomSection">
        <div className="left"><img src="/assets/about/logos/img.jpeg" alt="image" /></div>
        <div className="right">
          <div className="about-us">
            About <span style={{ color: '#6358E5' }}>us</span>
          </div>
          <p>
            <div className="about-top">
              CodeElevate is your one-stop destination for top-tier software engineering, development, UI/UX design, and QA services. As a dynamic and innovative company, we specialize in transforming concepts into powerful digital solutions. Our expert team is dedicated to delivering excellence, ensuring your software not only meets but exceeds industry standards. Elevate your digital presence with CodeElevate – where technology meets ingenuity.
            </div>
          </p>
          <div className="about-bottom">
            <div className="2k">2K+</div>
            <div className="500k">500K+</div>
            <div className="1000">100+</div>
          </div>
          <div className="about-bottom2">
            <div className="jobs">Jobs</div>
            <div className="users">Users</div>
            <div className="Partners">Partners</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
