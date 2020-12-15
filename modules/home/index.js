import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

import Map from '@components/map';
import Info from '@components/info';

import { dateFormat } from '@utils/index';

const dateString = 'YYY/MM/dd H:mm aa';

const Home = ({ total, countries }) => {
  const [content, setContent] = useState('');
  return (
    <div className='home__page'>
      <div className='home__header'>
        <div className='container'>
          <h1 className='home__title'>WHO Coronavirus Disease (COVID-19) Dashboard</h1>
          <p className='home__date'>Data last updated: {dateFormat(total.updated, dateString)}</p>
        </div>
      </div>
      <Map countries={countries} setTooltipContent={setContent} />
      <Info total={total} />

      <ReactTooltip html={true} uuid='tooltip'>
        {content}
      </ReactTooltip>
    </div>
  );
};

export default Home;
