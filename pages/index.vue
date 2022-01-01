<template>
  <div>
    <the-category></the-category>
    <section-morocco></section-morocco>
    <section-random></section-random>
    <origin></origin>
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      document.title = `Happy Meal | Home Page`
    },
  },
  mounted() {
    document.title = `Happy Meal | Home Page`
  },
}
</script>
