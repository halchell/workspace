<script setup lang="ts">
defineProps<{
  name: string;
  image: string;
  tldList: string[];
}>();
</script>

<template>
  <article>
    <picture>
      <img :src="image" alt="flag" />
    </picture>
    <div>
      <h2>{{ name }}</h2>
      <dl>
        <dt>Top-level domains</dt>
        <dd v-for="tld in tldList">
          {{ tld }}
        </dd>
      </dl>
    </div>
  </article>
</template>

<style scoped>
article {
  display: flex;
  text-align: left;
  padding: 2rem;
  gap: 1rem;
  background-color: lightskyblue;
  border-radius: 1rem;
  margin-top: 2rem;
}
</style>