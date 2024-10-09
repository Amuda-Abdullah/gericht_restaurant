import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subcribe to our Newsletter</h1>
      <p className="p__opensans">And never miss latest updates!</p>
      <div className="app__newsletter-input flex-center">
        <input type="email" placeholder="Enter your email" />
        <button className="custom__button">Subsccibe</button>
      </div>
    </div>
  </div>
);

export default Newsletter;
