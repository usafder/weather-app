import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
import {
  convertMPSToKMH,
  mapWeatherBgColor,
  mapWeatherIcon,
  mapWindIcon,
  roundOffValue,
} from '../shared/utils';
import { Button, Icon, TextInput } from '../components';
import { getWeatherData } from '../state/action-creators/weather';
import './WeatherReport.css';

const WeatherReport = () => {
  const [searchText, setSearchText] = useState('');
  const location = useLocation();
  const history = useHistory();
  const weather = useSelector((state) => (state as any).weather.data);
  const isLoading = useSelector((state) => (state as any).weather.isLoading);
  const error = useSelector((state) => (state as any).weather.error);
  const dispatch = useDispatch();

  const onTextInputChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const onButtonClick = () => {
    history.push('?city=' + searchText);
  };

  useEffect(() => {
    // TODO: caching
    const params = queryString.parse(location.search);
    dispatch(getWeatherData(params.city as string));
  }, [location, dispatch]);

  const renderSearchBar = () => (
    <div style={{ paddingTop: 20, marginBottom: '50px' }}>
      <TextInput
        placeholder="Enter city name"
        value={searchText}
        onChange={onTextInputChange}
      />

      <Button
        text="Get Weather Report"
        style={{ marginLeft: 10, marginTop: 4 }}
        onClick={onButtonClick}
      />
    </div>
  );

  const renderLoadingMessage = () => <h2>Loading Weather Report...</h2>;

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
      }}
    >
      {`${roundOffValue(weather.main.temp)}\u00B0`}
    </h1>
  );

  const renderDataWithIcon = (data: number, unit: string, iconName: string) => (
    <h1 style={{ padding: 4, margin: 0 }}>
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
        weather && mapWeatherBgColor(weather.main.temp)
      }`}
    >
      {renderSearchBar()}
      {isLoading && renderLoadingMessage()}
      {error && renderErrorMessage()}

      {weather && (
        <div style={{ color: 'white' }}>
          {/* City Name */}
          <h2>{weather.name.toUpperCase()}</h2>

          {/* Weather Icon */}
          <Icon name={mapWeatherIcon(weather.weather[0].main)} size={180} />

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
                roundOffValue(weather.main.humidity),
                '%',
                'wi wi-raindrop'
              )}

              {/* Wind Speed */}
              {renderDataWithIcon(
                roundOffValue(convertMPSToKMH(weather.wind.speed)),
                'Km/h',
                mapWindIcon(roundOffValue(convertMPSToKMH(weather.wind.speed)))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherReport;
