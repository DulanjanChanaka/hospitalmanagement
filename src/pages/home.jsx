import React, { useState } from 'react';
import Registration from '../components/registration';
import Search from '../components/search'; 

const Home = () => {
  const [screen, setScreen] = useState(1);

  const dwidth = window.innerWidth;

  const styles = {
    tabStyles: {
      width: `${Number((dwidth / 2).toFixed(0))}px`,
      padding: '5px 7px',
      alignItems: 'center',
      cursor: 'pointer', // Add cursor style
    },

    // Active tab indicator style
    activeTabIndicator: {
      borderBottom: '3px solid orange',
      color:' orange'
    },
  };

  return (
    <div>
      <div>
        <h3 className="py-3 pl-5 text-slate-400">Welcome to PMCU</h3>
      </div>

      <div>
        <div>
          <button
            style={{ ...styles.tabStyles, ...(screen === 1 && styles.activeTabIndicator) }}
            onClick={() => setScreen(1)}
            className='font-medium '
          >
            Registration
          </button>

          <button
            style={{ ...styles.tabStyles, ...(screen === 2 && styles.activeTabIndicator) }}
            onClick={() => setScreen(2)}
            className='font-medium '
          >
            Search
          </button>
        </div>
      </div>

      <div>
        {screen === 1 ? (
          <Registration />
        ) : screen === 2 ? (
          <Search />
        ) : null}
      </div>
    </div>
  );
};

export default Home;
