import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import Map from '@components/map';
import Info from '@components/info';

import { getTotalData, getCountries } from '@services/index';

import { dateFormat, transfromContriesData } from '@utils/index';

const dateString = 'YYY/MM/dd H:mm aa';

const Home = ({ total, countries }) => {
  const [content, setContent] = useState('');
  const [curTotal, setCurTotal] = useState(total || {});
  const [curContries, setCurContries] = useState(countries || []);

  useEffect(async () => {
    try {
      const restotal = await getTotalData();
      const resCountries = await getCountries();

      setCurTotal(restotal.data);
      setCurContries(transfromContriesData(resCountries.data));
    } catch (error) {
      console.log('🚀 ~ file: index.js ~ line 27 ~ Home ~ error', error);
    }
  }, []);

  return (
    <div className='home__page'>
      <div className='home__header'>
        <div className='container'>
          <h1 className='home__title'>WHO Coronavirus Disease (COVID-19) Dashboard</h1>
          <p className='home__date'>Data last updated: {dateFormat(curTotal.updated, dateString)}</p>
        </div>
      </div>
      <Map countries={curContries} setTooltipContent={setContent} />
      <Info total={curTotal} />

      <ReactTooltip html={true} uuid='tooltip'>
        {content}
      </ReactTooltip>
    </div>
  );
};

export default Home;
