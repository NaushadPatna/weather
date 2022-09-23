const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const tempstatus = document.getElementById('temp_status');
const datahide = document.querySelector('.data_hide');
const datahide1 = document.querySelector('.data_hide1');
const curDate=document.getElementById("today_date");

const Visiblity = document.getElementById("Visiblity");
const tempstatusd = document.getElementById("temp_status_d");
const windspeed = document.getElementById("windSpeed");

const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal===""){
        city_name.innerText=`Please write the name before search`;
        datahide.classList.add('data_hide');
        datahide1.classList.add('data_hide1');
    } else {
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9b5c39afe0820c7934ede6a95848339a`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData =[data];

            city_name.innerText =`${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText=Math.round(arrData[0].main.temp);
           
            const visib = arrData[0].visibility;
            Visiblity.innerText = 'Visibility: ' + visib/1000 +' km';
            windspeed.innerText ="Wind Speed: " + arrData[0].wind.speed + " km/h";
            tempstatusd.innerText = arrData[0].weather[0].description;
            // alert(arrData[0].weather[0].description);


            // tempstatus.innerText=arrData[0].weather[0].main;
            // console.log(data);

            const tempMood = arrData[0].weather[0].main;
            // condition to check sunny or cloudy
            if (tempMood == "Clear"){
                tempstatus.innerHTML = 
                "<i class='fa-solid fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Haze"){
                tempstatus.innerHTML = 
                "<i class='a-sharp fa-solid fa-cloud-meatball'></i>";
            } else if (tempMood == "Clouds"){
                tempstatus.innerHTML = 
                "<i class='fa-solid fa-cloud text-secondary' ></i>";
            } else if (tempMood == "Drizzle"){
                tempstatus.innerHTML = 
                "<i class='fa-sharp fa-solid fa-cloud-sun-rain' style='color: #darkkhaki;'></i>";
            } else if (tempMood == "Rain"){
                tempstatus.innerHTML = 
                "<i class='fa-solid fa-cloud-rain text-success'></i>";
            } else if (tempMood == "Thunderstorm"){
                tempstatus.innerHTML = 
                "<i class='fa-solid fa-cloud-bolt text-danger'></i>";
            } else if (tempMood == "Mist"){
                tempstatus.innerHTML = 
                "<i class='fa-solid fa-water text-success'></i>";
            } else if (tempMood == "Snow"){
                tempstatus.innerHTML = 
                "<i class='fa-solid fa-igloo text-white'></i>";
            } else {
                tempstatus.innerHTML = 
                "<i class='fa-solid fa-sun text-warning'></i>";
            }
            datahide.classList.remove('data_hide');
            datahide1.classList.remove('data_hide1');
            // alert(tempMood);
        } catch {
            city_name.innerText=`Please enter the city name properly`;
            datahide.classList.add('data_hide');
            datahide1.classList.add('data_hide1');
        }
    }
}

submitBtn.addEventListener('click', getInfo);

