import React, { useEffect, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation()
    const [footermenu, setFootermenu] = useState("/")

    const footerData = [
        {
            Icon:HomeIcon,
            title:"Home",
            path:"/"
        },
        {
            Icon:MedicalServicesIcon,
            title:"Clinic",
            path:"/clinic"
        },
        {
            Icon:InfoIcon,
            title:"Info",
            path:"/info"
        },
        {
            Icon:PersonIcon,
            title:"About",
            path:"/about"
        },
    ]

    useEffect(()=>{
        setFootermenu(location.pathname)
    },[location])
    return (
        <div className='w-full bottom-0 left-0 fixed bg-blue-400 lg:hidden'>
            <ul className='flex flex-row justify-around py-2 '>
           {footerData.map(({Icon, path, title}, index)=>(
            <Link key={index} to={path}  onClick={()=> setFootermenu(path)}  style={{
                color: footermenu === path? 'white':'black'
              }}><li className='text-center'><Icon/><p>{title}</p></li></Link>

           ))}
           </ul>
        </div>
    )
}

export default Footer

{/* <div >
<ul className='flex flex-row justify-around py-2 text-white'>
    <Link to="/"  onClick={()=> setFootermenu(path)}><li className='text-center'><HomeIcon/><p>Home</p></li></Link>
    <Link to="/"><li className='text-center'><MedicalServicesIcon/><p>Clinic</p></li></Link>
    <Link to="/"><li className='text-center'><InfoIcon/><p>Info</p></li></Link>
    <Link to="/"><li className='text-center'><PersonIcon/><p>About</p></li></Link>
</ul>
</div> */}