import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../../images/icon-menu.svg';
import { ReactComponent as MenuCloseIcon } from '../../images/icon-close-menu.svg';
import { NavItem } from '../nav-item';
import { NavMenu } from '../nav-menu';
import { COMPANY, FEATURES } from './constants';
import { Button } from '../button';
import { MobileMenu } from '../mobile-menu';
import Logo from '../../images/logo-no-background.svg';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selected, setSelected] = useState(''); // Состояние для открытого подменю

  const handleSelect = (menu) => {
    setSelected(selected === menu ? '' : menu);
  };

  return (
    <>
      <header className='flex items-center'>
        <Link to="/" className='flex ml-2 mr-10 text-xl antialiased cursor-pointer tracking-widest'>
          <img className='flex w-60' src={Logo} alt="Logo" />
        </Link>
        <nav className='hidden xl:flex space-x-6 ml-8 items-center'>
        <NavItem text='Company' onSelect={handleSelect} selected={selected}>
  <NavMenu items={FEATURES} onClose={() => setSelected('')} />
</NavItem>
<NavItem text='Services' onSelect={handleSelect} selected={selected}>
  <NavMenu items={COMPANY} onClose={() => setSelected('')} />
</NavItem>
          <NavItem text='Portfolio' to="/portfolio" />
          <NavItem text='About' to="/about" />
          <NavItem text='Contact Us' to="/contact" />
        </nav>
        <div className="hidden ml-auto xl:flex space-x-5">
          <Button hasBlueStyle={true}>
            Get Help
          </Button>
        </div>
        <div 
          className="flex xl:hidden ml-auto cursor-pointer z-30"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <MenuCloseIcon /> : <MenuIcon />}
        </div>
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </header>
    </>
  );
};
