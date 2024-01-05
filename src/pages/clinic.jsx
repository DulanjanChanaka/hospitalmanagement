import React, { useState } from 'react'
import ClinicRegister from '../components/clinicRegister'
import ClinicTable from '../components/clinicTable';

const Clinic = () => {
  const [screen, setScreen] = useState(1);

  const dwidth = window.innerWidth;

  const styles = {
    tabStyles: {
      width: `${Number((dwidth/2).toFixed(0))}px`,
      padding: '5px 7px',
      alignItems: 'center',
      cursor: 'pointer',
    },

    activeTabIndicator: {
      borderBottom: '3px solid orange',
      color:'orange'
    }
  }
  return (
    <div>
      <div><h3 className='text-slate-400 pl-4 py-3 font-semibold text-lg'>Clinic Patient</h3></div>
      <div>
     <button
      style={{ ...styles.tabStyles,...(screen === 1 && styles.activeTabIndicator)}}
      onClick={() =>setScreen(1)}
      className='font-medium '
     >Registration</button>
     <button
     style={{...styles.tabStyles, ...(screen === 2 && styles.activeTabIndicator)}}
     onClick={()=> setScreen(2)}
     className='font-medium '
     >Patients</button>
     </div>
     <div>
      {screen === 1? (<ClinicRegister/>) : screen === 2 ? (<ClinicTable/>) : null}
     </div>
    </div>
  )
}

export default Clinic