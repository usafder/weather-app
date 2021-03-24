import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  convertMPSToKMH,
  mapWeatherBgColor,
  mapWindIcon,
  roundOffValue,
} from '../shared/utils';
import {
  Button,
  Icon,
  TextInput,
  Loader,
  WeatherAnimation,
} from '../components';
import { getWeatherData } from '../state/action-creators/weather';
import { WeatherAnimationType } from '../components/WeatherAnimation';

const WeatherReportContainer = styled.div`
  height: 100%;
  overflow-y: scroll;

  &.hot {
    background: #f12711; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to bottom,
      #f5af19,
      #f12711
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to bottom,
      #f5af19,
      #f12711
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  &.warm {
    background: #ffb347; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to bottom,
      #ffcc33,
      #ffb347
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to bottom,
      #ffcc33,
      #ffb347
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  &.moderate {
    background: #a8ff78; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to bottom,
      #78ffd6,
      #a8ff78
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to bottom,
      #78ffd6,
      #a8ff78
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    background: #11998e; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to bottom,
      #38ef7d,
      #11998e
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to bottom,
      #38ef7d,
      #11998e
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  &.cold {
    background: #373b44; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to bottom,
      #4286f4,
      #373b44
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to bottom,
      #4286f4,
      #373b44
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`;

const WeatherReport = () => {
  const [searchText, setSearchText] = useState('');
  const location = useLocation();
  const history = useHistory();
  const weatherData = useSelector((state) => (state as any).weather.data);
  const isLoading = useSelector((state) => (state as any).weather.isLoading);
  const error = useSelector((state) => (state as any).weather.error);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = queryString.parse(location.search);
    dispatch(getWeatherData(params.city as string));
  }, [location, dispatch]);

  const onTextInputChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const onButtonClick = () => {
    history.push(`?city=${searchText}`);
  };

  const renderSearchBar = () => (
    <div style={{ paddingTop: 20, marginBottom: '6%' }}>
      <TextInput
        placeholder="Enter city name"
        value={searchText}
        onChange={onTextInputChange}
      />

      <Button
        text="Get Weather Report"
        style={{ marginLeft: 10, marginTop: 4 }}
        disabled={!searchText}
        onClick={onButtonClick}
      />
    </div>
  );

  const renderLoader = () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Loader />
    </div>
  );

  // TODO: customize error message based on the type of error
  const renderErrorMessage = () => (
    <h2>An Error Occurred. Please try again.</h2>
  );

  const renderTemperatureSection = () => (
    <h1
      style={{
        margin: 0,
        fontSize: '80px',
        borderTopColor: 'white',
        borderTop: '1px solid',
        paddingRight: 20,
        fontFamily: 'fjalla one, sans-serif',
      }}
    >
      {`${roundOffValue(weatherData.main.temp)}\u00B0`}
    </h1>
  );

  const renderDataWithIcon = (data: number, unit: string, iconName: string) => (
    <h1
      style={{
        padding: 4,
        margin: 0,
        fontFamily: 'fjalla one, sans-serif',
      }}
    >
      <span
        style={{
          padding: 8,
          paddingBottom: 0,
          paddingTop: 0,
        }}
      >
        <Icon name={iconName} size={30} />
      </span>
      {roundOffValue(data)}
      <span style={{ fontSize: '16px' }}>{unit}</span>
    </h1>
  );

  return (
    <WeatherReportContainer
      className={weatherData && mapWeatherBgColor(weatherData.main.temp)}
    >
      {renderSearchBar()}
      {isLoading && renderLoader()}
      {error && renderErrorMessage()}

      {weatherData && (
        <div style={{ color: 'white' }}>
          {/* City Name */}
          <h1
            style={{
              margin: 0,
              marginBottom: 10,
              fontFamily: 'share tech mono, monospace',
              fontSize: '2em',
            }}
          >
            {weatherData.name.toUpperCase()}
          </h1>

          <WeatherAnimation
            color="white"
            type={WeatherAnimationType[weatherData.weather[0].main]}
            size={220}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 10,
            }}
          >
            {renderTemperatureSection()}

            <div style={{ borderTopColor: 'white', borderTop: '1px solid' }}>
              {/* Humidity */}
              {renderDataWithIcon(
                roundOffValue(weatherData.main.humidity),
                '%',
                'wi wi-raindrop'
              )}

              {/* Wind Speed */}
              {renderDataWithIcon(
                roundOffValue(convertMPSToKMH(weatherData.wind.speed)),
                'Km/h',
                mapWindIcon(
                  roundOffValue(convertMPSToKMH(weatherData.wind.speed))
                )
              )}
            </div>
          </div>
        </div>
      )}
    </WeatherReportContainer>
  );
};

export default WeatherReport;
