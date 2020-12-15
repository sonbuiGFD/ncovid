import React from 'react';
import { formatNumber } from '@utils/index';
const Info = ({ total }) => {
  return (
    <div className='home__info'>
      <div className='container'>
        <div className='info'>
          <div className='row'>
            <div className='col-12 col-md-4'>
              <div className='info__item'>
                <div className='info__title'>{formatNumber(total.tests)}</div>
                <div className='info__des info__des__red'>Total Tests</div>
                <div className='info__sub'>{formatNumber(total.testsPerOneMillion)}</div>
                <div className='info__des info__des__blue'>Per 1 Million</div>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='info__item'>
                <div className='info__title'>{formatNumber(total.cases)}</div>
                <div className='info__des info__des__red'>Total Cases</div>
                <div className='info__sub'>{formatNumber(total.casesPerOneMillion)}</div>
                <div className='info__des info__des__blue'>Per 1 Million</div>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='info__item'>
                <div className='info__title'>{formatNumber(total.deaths)}</div>
                <div className='info__des info__des__red'>Total Deaths</div>
                <div className='info__sub'>{formatNumber(total.deathsPerOneMillion)}</div>
                <div className='info__des info__des__blue'>Per 1 Million</div>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='info__item'>
                <div className='info__title'>{formatNumber(total.active)}</div>
                <div className='info__des info__des__red'>Active</div>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='info__item'>
                <div className='info__title'>{formatNumber(total.critical)}</div>
                <div className='info__des info__des__red'>Critical</div>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='info__item'>
                <div className='info__title'>{formatNumber(total.recovered)}</div>
                <div className='info__des info__des__red'>Recovered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
