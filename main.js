let getWheather= async (myCity)=>{
   let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=c51cb46a060059b6486ce8581ae1eae5`)
   let data=await res.json()
   console.log(data)
   let img=document.querySelector('img')
   let temp=document.querySelector('#temp')
   let city=document.querySelector('#city')
   let humidity=document.querySelector('#humidity')
   let wind=document.querySelector('#wind') 
   img.setAttribute('src' , `http://openweathermap.org/img/w/${data.weather[0].icon}.png`)
   temp.innerHTML=`${Math.floor((data.main.temp-273.15)) } °C`
city.innerHTML=`${data.name}`
humidity.innerHTML=` humidity : ${Math.floor(data.main.humidity)}%`
wind.innerHTML=`wind : ${Math.floor(data.wind.speed)} km/h`
}
let input=document.querySelector('input')
let button=document.querySelector('button')
button.addEventListener('click' , ()=>{
   getWheather(input.value) 
})




