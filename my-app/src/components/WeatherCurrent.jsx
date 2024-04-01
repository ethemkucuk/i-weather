import { useWeatherContext } from "../context/WeatherContext";
import CardContainer from "./CardContainer";
import { weatherIcons, weatherBackground } from "../alerts/imageBG";
import { isDay } from "../alerts/helpers";
export default function WeatherCurrent() {
  const { weatherData } = useWeatherContext();
  const { city, countryCode } = weatherData.city;
  const { weather, temp, dt } = weatherData.currentWeather;
  const { min, max } = weatherData.forecastWeather[0].temp;

  const date = new Date(dt * 1000).toDateString().replaceAll(" ", " , ");
  const timezoneOffset = weatherData.timezoneOffset;
  const period = isDay(timezoneOffset) ? "day" : "night";
  const iconId = weather[0].icon.slice(0, -1);
  const backgroundUrl = weatherBackground[iconId][period];
  return (
    <CardContainer>
      <div
        style={{ backgroundImage: `url(${backgroundUrl})` }}
        className={`flex h-72 w-full flex-col justify-between rounded-lg
        bg-cover `}
      >
        <header className="flex flex-col p-5">
          <span className="heading-sm">
            {city} {countryCode}
          </span>
          <span className="text-xsmall">{date}</span>
        </header>
        <div className="flex items-end justify-between">
          <div className="p-5">
            <div className="heading-xl">{Math.round(temp)}ºc</div>
            <div className="flex flex-col">
              <span className="heading-sm">
                {Math.round(max)}ºc / {Math.round(min)}ºc
              </span>
              <span className="text-small">{weather[0].main}</span>
            </div>
          </div>
          <div className="w-1/2 p-4">
            <img
              className="w-full"
              src={weatherIcons[iconId][period]}
              alt="weather icon"
            />
          </div>
        </div>
      </div>
    </CardContainer>
  );
}
