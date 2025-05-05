<script setup lang="ts">
  import { ref } from "vue";

  const countries = ref();

  async function fetchCountries(){
    const response = await fetch("https://restcountries.com/v3.1/name/japan");
    const data = await response.json();
    countries.value = data
}
</script>

<template>
  <h1>Country Info</h1>

  <button @click = "fetchCountries">Fetch</button>
  <article v-for="country in countries">
    <div>{{ country.name.common }}</div>
    <div>{{ country.flags.png }}</div>
    <div>{{ country.tld }}</div>
  </article>
  <div>{{ countries }}</div>
</template>

<style scoped></style>

