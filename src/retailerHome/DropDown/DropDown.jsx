import React, { useState } from 'react';
import './DropDown.css';

const menus = [
  {
    title: 'Food Grains, Oils & Masala',
    submenu: [
      'Atta , Flour & Sooji',
      'Dals & Pulses',
      'Dry Fruits',
      'Oil , Ghee & Masala',
    ],
  },
  {
    title: 'Snacks & Packed Food',
    submenu: [
      'Atta , Flour & Sooji',
      'Dals & Pulses',
      'Dry Fruits',
      'Oil , Ghee & Masala',
    ],
  },
  {
    title: 'Beverages',
    submenu: [
      'Atta , Flour & Sooji',
      'Dals & Pulses',
      'Dry Fruits',
      'Oil , Ghee & Masala',
    ],
  },
  {
    title: 'Beverages',
    submenu: [
      'Atta , Flour & Sooji',
      'Dals & Pulses',
      'Dry Fruits',
      'Oil , Ghee & Masala',
    ],
  },
  {
    title: 'Beverages',
    submenu: [
      'Atta , Flour & Sooji',
      'Dals & Pulses',
      'Dry Fruits',
      'Oil , Ghee & Masala',
    ],
  },
  {
    title: 'Beverages',
    submenu: [
      'Atta , Flour & Sooji',
      'Dals & Pulses',
      'Dry Fruits',
      'Oil , Ghee & Masala',
    ],
  },
  {
    title: 'Beverages',
    submenu: [
      'Atta , Flour & Sooji',
      'Dals & Pulses',
      'Dry Fruits',
      'Oil , Ghee & Masala',
    ],
  },
  {
    title: 'Beverages',
    submenu: [
      'Atta , Flour & Sooji',
      'Dals & Pulses',
      'Dry Fruits',
      'Oil , Ghee & Masala',
    ],
  },
  {
    title: 'Beverages',
    submenu: [
      'Atta , Flour & Sooji',
      'Dals & Pulses',
      'Dry Fruits',
      'Oil , Ghee & Masala',
    ],
  },
  {
    title: 'Beverages',
    submenu: [
      'Atta , Flour & Sooji',
      'Dals & Pulses',
      'Dry Fruits',
      'Oil , Ghee & Masala',
    ],
  },

  // Add more menu items here
];

const DropDown = () => {
  const [showMenu, setShowMenu] = useState({});
  const [iconState, setIconState] = useState({});

  const toggleMenu = (index) => {
    setShowMenu({ ...showMenu, [index]: !showMenu[index] });
    setIconState({
      ...iconState,
      [index]: iconState[index] === 'plus' ? 'minus' : 'plus',
    });
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='sidebarmenu'>
            {menus.map((menu, index) => (
              <React.Fragment key={index}>
                <ul className='sidebarmenu-sub'>
                  <li className='menu-item'>{menu.title}</li>
                  <button onClick={() => toggleMenu(index)}>
                    {iconState[index] === 'plus' ? (
                      <i className='fa-solid fa-minus'></i>
                    ) : (
                      <i className='fa-solid fa-plus'></i>
                    )}
                  </button>
                </ul>
                <ul
                  className={
                    showMenu[index] ? 'sub-menu slide-down' : 'sub-menu'
                  }
                >
                  {menu.submenu.map((item, subIndex) => (
                    <li key={subIndex} className='submenu-item'>
                      {item}
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
