/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import WeatherReport from '@components/WeatherReport';
import SearchBar from '@components/SearchBar';
import Loader from '@components/Loader';
import ErrorMessage from '@components/ErrorMessage';
import { getWeatherData } from '@state/action-creators/weather';
import { mapWeatherBgColor } from '@utils/mappers';
import './index.css';

const containerCss = css({
  height: '100%',
  overflowY: 'scroll',
});

const Home = () => {
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

  return (
    <div css={containerCss} className={weatherData && mapWeatherBgColor(weatherData.main.temp)}>
      <SearchBar
        searchText={searchText}
        buttonText="Get Weather Report"
        placeholder="Enter city name"
        onSearchTextChange={onTextInputChange}
        onButtonClick={onButtonClick}
      />
      <Loader isLoading={isLoading} />
      <ErrorMessage error={error} />

      <WeatherReport weatherData={weatherData} />
    </div>
  );
};

export default Home;
