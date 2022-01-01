<template>
  <section>
    <h1>{{ title }}</h1>
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
section {
  width: 90%;
  margin: 7rem auto;
}

h1 {
  margin-bottom: 2rem;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33rem, 1fr));
  grid-gap: 7rem 3rem;
}
</style>
