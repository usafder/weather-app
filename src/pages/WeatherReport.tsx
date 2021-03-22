import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
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
import './WeatherReport.css';
import { WeatherAnimationType } from '../components/WeatherAnimation';

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
    <div
      className={`weather-report-container ${
        weatherData && mapWeatherBgColor(weatherData.main.temp)
      }`}
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
    </div>
  );
};

export default WeatherReport;
