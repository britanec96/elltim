import React from 'react';
import { NavItem } from '../nav-item';
import { COMPANY, FEATURES } from '../header/constants';
import { MenuItem } from '../menu-item';
import { Button } from '../button';
import { Link } from 'react-router-dom'; // Импортируем Link

export const MobileMenu = ({ isOpen = false, onClose }) => {
  const [selected, setSelected] = React.useState('');

  const handleSelect = (menu) => {
    setSelected(selected === menu ? '' : menu);
  };

  return (
    <>
      <div className={`absolute top-0 left-0 right-0 bg-gray-300 opacity-50 z-10 min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`} onClick={onClose}></div>
      <div className={`absolute right-0 top-0 w-1/2 bg-white z-20 justify-center min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`}>
        <nav className="my-20 mx-5 space-y-5 text-xl w-full">

          <NavItem text='Company' onSelect={handleSelect} selected={selected}>
            <div className="flex flex-col space-y-5 p-2">
              {FEATURES.map(({ text, icon, to }) => (
                <Link to={to} key={text}>
                  <MenuItem text={text} icon={icon} />
                </Link>
              ))}
            </div>
          </NavItem>


          <NavItem text='Services' onSelect={handleSelect} selected={selected}>
            <div className="flex flex-col space-y-5 p-2">
              {COMPANY.map(({ text, icon, to }) => (
                <Link to={to} key={text}>
                  <MenuItem text={text} icon={icon} />
                </Link>
              ))}
            </div>
          </NavItem>

          <div className="mx-4" />
          <Link to="/portfolio">
  <NavItem text='Portfolio' />
</Link>
<div className="mx-4" /> 
<Link to="/about">
  <NavItem text='About Us' />
</Link>
<div className="mx-4" /> 
<Link to="/contact">
  <NavItem text='Contact Us' />
</Link>



          <div className="flex flex-col space-y-5">
            <Button hasBorderCustom={true}>
              Get Help
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};



