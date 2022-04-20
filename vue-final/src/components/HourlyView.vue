<template> <div>
<p>At {{X}} the condition will be {{Y}}. The template will be {{Z}}°C</p> </div>
</template>
<script>
const API_KEY = '1dbbf7d3f5e2f13b9a0058117fd32500';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.984270&lon=-81.247530&units=metric&appid=' + API_KEY
export default { name: 'weatherComponent', 
data() {
return { X: null,
        Y: null,
        Z: null

} },
created() { this.fetchData()
}, 
methods: {
    async fetchData() {
    const url = `${API_URL}`
    const res = await (await fetch(url)).json() 
    this.Z = res.main.temp
    this.X = res.name;
    this.Y = res.weather[0].descrption;
}, }
} </script>