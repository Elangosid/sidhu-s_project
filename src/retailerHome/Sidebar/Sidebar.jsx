import React from 'react';
import './Sidebar.css';
import DropDown from '../DropDown/DropDown';

const Sidebar = () => {
  return (
    <section className='sidebar-section'>
      <div className='row'>
        <div className='col-lg-12 sidebar-head'>
          <div className='sidebar'>
            <div className='sidebar-title'>
              <h3>Categories</h3>
              <div className='d-flex align-items-center'>
                <div className='sidebar-hr col-2'></div>
                <div className='sidebar-hr2 col-10'></div>
              </div>
            </div>
            <div className='sidebar-menu'>
              <DropDown />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
