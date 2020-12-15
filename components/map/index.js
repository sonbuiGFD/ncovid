import React, { memo } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';

import { renderCountryTemplate, rounded } from '@utils/index';
import { useWindowSize } from '@utils/hook';

const geoUrl = '/world-110m.json';

const Map = ({ setTooltipContent, countries }) => {
  const size = useWindowSize();
  const w = size.width;
  const h = size.height;

  return (
    <div className='page__map'>
      <ComposableMap
        data-tip=''
        data-type='dark'
        width={w}
        height={h}
        projectionConfig={{
          scale: 250,
        }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies
                .filter((geo) => geo.rsmKey !== 'geo-6')
                .map((geo) => {
                  return <Geography key={geo.rsmKey} geography={geo} fill={'#002a48'} stroke='#003b60' />;
                })
            }
          </Geographies>
          {countries.map((country) => (
            <Marker
              key={country.country}
              coordinates={country.coordinates}
              onMouseEnter={() => {
                setTooltipContent(renderCountryTemplate(country));
              }}
              onMouseLeave={() => {
                setTooltipContent('');
              }}>
              <g fill='#FF5533' stroke='#FF5533' strokeLinecap='round' strokeLinejoin='round' transform='translate(-12, -24)'>
                <path d='M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z' />
              </g>
              <text textAnchor='middle' y={-10} style={{ fontFamily: 'system-ui', fill: '#fff', fontSize: '9px' }}>
                {rounded(country.cases)}
              </text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(Map);
