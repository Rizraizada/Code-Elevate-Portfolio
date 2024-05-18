import React from 'react';
import './consultant.css';

const Consultant = () => {
    return (
        <section className="section-6">
            <div className="section-container two-column">
                <div className="col-left">
                    <form action="" className="form-class">
                        <h2>Consultation For Free</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        <br />
                        <input type="text" placeholder="Your name" className="form-com-class" />
                        <br />
                        <input type="text" placeholder="Company" className="form-com-class" />
                        <br />
                        <input type="text" placeholder="Title" className="form-com-class" />
                        <br />
                        <input type="text" placeholder="Email" className="form-com-class" />
                        <br />
                        <input type="text" placeholder="Project Category" className="form-com-class" />
                        <br />
                        <button type="button" className="form-com-class send-button">Send</button>
                    </form>
                </div>
                <div className="col-right hire-dev-subsection">
                    <h3>Hire Developer</h3>
                    <h1>We have helped more than <br /> 700+ clients worldwide</h1>
                    <p>Quis eleifend quam adipiscing vitae proin <br /> sagittis nisl. Lectus vestibulum mattis.</p>
                </div>
            </div>
        </section>
    );
}

export default Consultant;
