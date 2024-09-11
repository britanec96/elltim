import React, {useState} from 'react';
import LogoIcon from '../../images/logo.png';
import { ReactComponent as MenuIcon } from '../../images/icon-menu.svg';
import { ReactComponent as MenuCloseIcon } from '../../images/icon-close-menu.svg';
import { NavItem } from '../nav-item';
import { NavMenu } from '../nav-menu';
import { COMPANY, FEATURES } from './constants';
import { Button } from '../button';
import { MobileMenu } from '../mobile-menu';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className='flex items-center'>
      <img className='flex w-10 mb-1 cursor-pointer' src={LogoIcon} alt="Logo" />
      <h1 className='flex ml-2 font-medium text-lg antialiased cursor-pointer tracking-widest'><span className='text-pink-500 font-black'>ELL</span>Tim</h1>
      <nav className='hidden xl:flex space-x-6 ml-8 items-center'>
        <NavItem text='Feature'>
            <NavMenu items={ FEATURES }/>
        </NavItem>
        <NavItem text='Company'>
            <NavMenu items={ COMPANY }/>
        </NavItem>
        <NavItem text='Careers'/>
        <NavItem text='About'/>
      </nav>
      <div className="hidden ml-auto xl:flex space-x-5">
        <Button>
          Login
        </Button>
        <Button hasBorder={ true }>
          Register
        </Button>
      </div>
      <div 
      className="flex xl:hidden ml-auto cursor-pointer z-30"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <MenuCloseIcon/> : <MenuIcon/>}
      </div>
      <MobileMenu isOpen = {isMobileMenuOpen}/>
    </header>
  )
}
