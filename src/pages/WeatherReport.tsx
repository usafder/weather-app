/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import { convertMPSToKMH, roundOffValue } from '../shared/utils/converters';
import { mapWeatherBgColor, mapWindIcon } from '../shared/utils/mappers';
import { ErrorMessage, Icon, Loader, SearchBar, WeatherAnimation } from '../components';
import { getWeatherData } from '../shared/state/action-creators/weather';
import { WeatherAnimationType } from '../components/WeatherAnimation';
import Temperature from '../components/Temperature';

const WeatherReport = () => {
  const [searchText, setSearchText] = useState('');
  const location = useLocation();
  const history = useHistory();
  const weatherData = useSelector((state) => (state as any).weather.data);
  const isLoading = useSelector((state) => (state as any).weather.isLoading);
  const error = useSelector((state) => (state as any).weather.error);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const city = params.get('city') as string;
    dispatch(getWeatherData(city));
  }, [location, dispatch]);

  const onTextInputChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const onButtonClick = () => {
    history.push(`?city=${searchText}`);
  };

  const renderDataWithIcon = (data: number, unit: string, iconName: string) => (
    <h1
      css={css`
        padding: 4px;
        margin: 0;
        font-family: 'Fjalla One', sans-serif;
      `}
    >
      <span
        css={css`
          padding: 8px;
          padding-bottom: 0;
          padding-top: 0;
        `}
      >
        <Icon name={iconName} />
      </span>
      {roundOffValue(data)}
      <span
        css={css`
          font-size: 16px;
        `}
      >
        {unit}
      </span>
    </h1>
  );

  return (
    <div
      className={weatherData && mapWeatherBgColor(weatherData.main.temp)}
      css={css`
        height: 100%;
        overflow-y: scroll;

        &.hot {
          background: #f12711; /* fallback for old browsers */
          /* Chrome 10-25, Safari 5.1-6 */
          background: -webkit-linear-gradient(to bottom, #f5af19, #f12711);
          /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          background: linear-gradient(to bottom, #f5af19, #f12711);
        }

        &.warm {
          background: #ffb347; /* fallback for old browsers */
          /* Chrome 10-25, Safari 5.1-6 */
          background: -webkit-linear-gradient(to bottom, #ffcc33, #ffb347);
          /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          background: linear-gradient(to bottom, #ffcc33, #ffb347);
        }

        &.moderate {
          background: #a8ff78; /* fallback for old browsers */
          /* Chrome 10-25, Safari 5.1-6 */
          background: -webkit-linear-gradient(to bottom, #78ffd6, #a8ff78);
          /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          background: linear-gradient(to bottom, #78ffd6, #a8ff78);

          background: #11998e; /* fallback for old browsers */
          /* Chrome 10-25, Safari 5.1-6 */
          background: -webkit-linear-gradient(to bottom, #38ef7d, #11998e);
          /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          background: linear-gradient(to bottom, #38ef7d, #11998e);
        }

        &.cold {
          background: #373b44; /* fallback for old browsers */
          /* Chrome 10-25, Safari 5.1-6 */
          background: -webkit-linear-gradient(to bottom, #4286f4, #373b44);
          /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          background: linear-gradient(to bottom, #4286f4, #373b44);
        }
      `}
    >
      <SearchBar
        searchText={searchText}
        buttonText="Get Weather Report"
        placeholder="Enter city name"
        onSearchTextChange={onTextInputChange}
        onButtonClick={onButtonClick}
      />
      <Loader isLoading={isLoading} />
      <ErrorMessage error={error} />

      {weatherData && (
        <div
          css={css`
            color: white;
          `}
        >
          {/* City Name */}
          <h1
            css={css`
              margin: 0;
              margin-bottom: 10px;
              font-family: 'Share Tech Mono', monospace;
              font-size: 2em;
            `}
          >
            {weatherData.name.toUpperCase()}
          </h1>

          <WeatherAnimation
            color="white"
            type={WeatherAnimationType[weatherData.weather[0].main]}
            size={220}
          />

          <div
            css={css`
              display: flex;
              justify-content: center;
              margin-top: 10px;
            `}
          >
            <Temperature value={weatherData.main.temp} />

            <div
              css={css`
                border-top-color: white;
                border-top: 1px solid;
              `}
            >
              {/* Humidity */}
              {renderDataWithIcon(roundOffValue(weatherData.main.humidity), '%', 'wi wi-raindrop')}

              {/* Wind Speed */}
              {renderDataWithIcon(
                roundOffValue(convertMPSToKMH(weatherData.wind.speed)),
                'Km/h',
                mapWindIcon(roundOffValue(convertMPSToKMH(weatherData.wind.speed)))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherReport;
