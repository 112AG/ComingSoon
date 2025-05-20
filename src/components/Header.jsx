import React, { useContext } from 'react';
import viteLogo from '../../public/SDFinance.svg';
import { NavigationContext } from '../utils/NavigationProvider ';

function Header() {
  const { goBack } = useContext(NavigationContext);

  return (
    <div className='w-full flex items-center justify-between '>
      <img src={viteLogo} alt="Logo" className="h-[42px] sm:h-[58px]" />
      <button 
        onClick={goBack} 
        className="h-[40px] w-[40px] bg-white rounded-full hover:bg-gray-300 transition shadow-xl"
      >
        <i className="ri-arrow-left-line text-2xl"></i>
      </button>
    </div>
  );
}

export default Header;
