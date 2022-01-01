<template>
  <div class="box">
    <img :src="imgPath" />
    <h3>{{ title }}</h3>
    <p>{{ details }}</p>
    <base-press :path="path" mode="flat">Explore</base-press>
    <p v-if="country && country !== 'Unknown'">Origin: {{ country }}</p>
    <div>
      <base-press
        :style="{ marginRight: '.5rem' }"
        v-if="source && source !== ''"
        press-type="anch"
        :href="source"
        mode="flat"
        target="_blank"
        >Source</base-press
      >
      <base-press
        v-if="youtube && youtube !== ''"
        target="_blank"
        press-type="anch"
        :href="youtube"
        mode="outline"
        >Watch video</base-press
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgPath: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    details: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '',
    },
    country: {
      type: String,
      default: '',
    },
    source: {
      type: String,
      default: '',
    },
    youtube: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  padding: 2rem;
  box-shadow: 2px 2px 20px rgba(65, 63, 63, 0.452);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  img {
    width: 100%;
    object-fit: cover;
    margin-bottom: 2rem;
    display: block;
  }
  a {
    padding: 1rem 1.3rem;
    display: inline-block;
  }
  & > * {
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }
}
</style>
