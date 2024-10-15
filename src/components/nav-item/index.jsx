import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { ReactComponent as ArrowDownIcon } from '../../images/icon-arrow-down.svg';
import { ReactComponent as ArrowUpIcon } from '../../images/icon-arrow-up.svg';

export const NavItem = ({ text = "", children, to, onSelect, selected }) => {
    const handleClick = () => {
        if (onSelect) {
            onSelect(text);
        }
    };
    
    return (
        <div className='relative'>
            <div className="flex space-x-2 cursor-pointer items-center" onClick={handleClick}>
                {to ? (
                    <Link to={to} className='text-almost-black hover:text-sky-600'>
                        {text}
                    </Link>
                ) : (
                    <span className='text-almost-black hover:text-sky-600'>{text}</span>
                )}
                {children && selected !== text && <ArrowDownIcon />}
                {children && selected === text && <ArrowUpIcon />}
            </div>
            {selected === text && children}
        </div>
    );
};



