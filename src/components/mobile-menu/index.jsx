import React from 'react'
import { NavItem } from '../nav-item'
import { COMPANY, FEATURES } from '../header/constants'
import { MenuItem } from '../menu-item'
import { Button } from '../button'

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
              {FEATURES.map(({ text, icon }) => <MenuItem text={text} icon={icon} key={text} />)}
            </div>
          </NavItem>
          <NavItem text='Services' onSelect={handleSelect} selected={selected}>
            <div className="flex flex-col space-y-5 p-2">
              {COMPANY.map(({ text, icon }) => <MenuItem text={text} icon={icon} key={text} />)}
            </div>
          </NavItem>
          <NavItem text='Portfolio' />
          <NavItem text='About Us' />
          <NavItem text='Contact Us' />
          <div className="flex flex-col space-y-5">
            <Button hasBorderCustom={true}>
              Get Help
            </Button>
          </div>
        </nav>
      </div>
    </>
  )
}


