import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <div className='w-full py-4 bg-blue-400'>
        <div className='flex flex-row justify-between px-6'>
            <div>
                <h3 className='text-white font-bold'>PMCU</h3>
            </div>
            <div className='hidden lg:block' >
                <ul className='flex flex-row gap-8 text-white '>
                    <li>OPD</li>
                    <li>CLINIC</li>
                    <li>INFO</li>
                    <li>ABOUT</li>
                </ul>
            </div>
            <div className='lg:hidden text-white'><MenuIcon/></div>
        </div>
    </div>
  )
}

export default Header