import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
   <div className="app__wrapper_info">
    <SubHeading title="Chase the new flavour" />
<h1 className='app__header-h1'>THE KEY TO FINE DINING</h1>
    <p className="p__opensans" style={{ margin: '2rem 0'}}>Sit Tellus Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facillisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
    <button type="button" className="custom__button">Explore Menu</button>
   </div>

   <div className="app__wrapper_img">
    <img src={images.welcome} alt="header img" />
   </div>
  </div>
);

export default Header;
