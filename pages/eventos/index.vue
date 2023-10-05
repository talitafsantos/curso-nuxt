<script setup lang="ts">
// function enableCustomLayout () {
//   setPageLayout('custom')
// }
definePageMeta({
  layout: "custom",
  middleware: [
    function (to, from) {
      console.log('acessou evento')
      console.log(to, from)
    },
  ]
});
</script>

<template>
  <div>Eventos</div>
  <!-- <div>
    <button @click="enableCustomLayout">Update layout</button>
  </div> -->
</template>
