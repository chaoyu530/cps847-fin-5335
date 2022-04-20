<template>
<div class="home"> <Date/> <Weather/>
</div>
</template>
<script>
// @ is an alias to /src
import Weather from '@/components/WeatherView.vue'
import Date from '@/components/DataView.vue'
export default { name: 'HomeView', components: {
Weather,
Date }
} </script>
