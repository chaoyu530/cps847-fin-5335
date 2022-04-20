<template> <div>
<p>The Temperature in London Ontario is: {{ temperature }}°C</p> </div>
</template>
<script>
const API_KEY = '1dbbf7d3f5e2f13b9a0058117fd32500';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.984270&lon=-81.247530&units=metric&appid=' + API_KEY
export default { name: 'DateView', data() {
return { temperature: null,
} },
created() { this.fetchData()
}, methods: {
async fetchData() {
const url = `${API_URL}`
const res = await (await fetch(url)).json() 
this.temperature = res.main.temp
}, }
} </script>