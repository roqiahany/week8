// to day
var todayByName = document.getElementById('todayByName'); //done
var todayByNum = document.getElementById('todayByNum'); //done
var todayInMonth = document.getElementById('todayInMonth'); //done
var todayLocation = document.getElementById('todayLocation'); //done
var todayTemp = document.getElementById('todayTemp'); //done
var todayConditionImg = document.getElementById('todayConditionImg'); //done
var todayConditionText = document.getElementById('todayConditionText'); //done
var humidity = document.getElementById('humidity'); //done
var wind = document.getElementById('wind'); //done
var windDirection = document.getElementById('windDirection'); //done

// next Data
var nextDayName = document.getElementsByClassName('nextDayName');
var nextMaxTemp = document.getElementsByClassName('nextMaxTemp'); //done
var nextMinTemp = document.getElementsByClassName('nextMinTemp'); //done
var nextConditionText = document.getElementsByClassName('nextConditionText'); //done
var nextConditionImg = document.getElementsByClassName('nextConditionImg'); //done

// input
var searchInput = document.getElementById('searchFined');

// date
// var date = new Date();//current data
// console.log(date.getDate());
// console.log(date.toLocaleDateString('en-us', { weekday: 'long' }));
// console.log(date.toLocaleDateString('en-us', { month: 'long' }));

// function fetch
async function getDataWeather(cityName) {
  var dataResponse = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=d92319e7b9f74ac984362613241802&q=${cityName}&days=3`
  );
  var dataWeather = await dataResponse.json();
  return dataWeather;
}
// function display today data
function displayTOday(data) {
  var todayDate = new Date();
  todayByName.innerHTML = todayDate.toLocaleDateString('en-us', {
    weekday: 'long',
  });
  todayInMonth.innerHTML = todayDate.toLocaleDateString('en-us', {
    month: 'long',
  });
  todayByNum.innerHTML = todayDate.getDate();
  todayLocation.innerHTML = data.location.name;
  todayTemp.innerHTML = data.current.temp_c;
  todayConditionImg.setAttribute('src', data.current.condition.icon);
  todayConditionText.innerHTML = data.current.condition.text;
  humidity.innerHTML = data.current.humidity + '%';
  wind.innerHTML = data.current.wind_kph + 'km/h';
  windDirection.innerHTML = data.current.wind_dir;
}
// function display next days
function displayNextDay(data) {
  for (var i = 0; i < 2; i++) {
    var nextDate = new Date(data.forecast.forecastday[i + 1].date);
    nextDayName[i].innerHTML = nextDate.toLocaleDateString('en-us', {
      weekday: 'long',
    });
    nextMaxTemp[i].innerHTML = data.forecast.forecastday[i + 1].day.maxtemp_c;
    nextMinTemp[i].innerHTML = data.forecast.forecastday[i + 1].day.mintemp_c;
    nextConditionText[i].innerHTML =
      data.forecast.forecastday[i + 1].day.condition.text;
    nextConditionImg[i].setAttribute(
      'src',
      data.forecast.forecastday[i + 1].day.condition.icon
    );
  }
}

// function start App
async function startApp(city = 'cairo') {
  var data = await getDataWeather(city);

  if (!data.error) {
    displayTOday(data);
    displayNextDay(data);
  }
}
startApp();
searchInput.addEventListener('input', function () {
  startApp(searchInput.value);
});
