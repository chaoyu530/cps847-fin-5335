<template>
<div>
<p>{{ date }}</p>
</div>
</template>
<script>
import { format } from 'date-fns'
export default { name: 'DateView', data() {
return {
date: 'You loaded this page on ' + format(new Date(), 'yyyy-MM-dd HH:mm:ss'), }
} }
</script>