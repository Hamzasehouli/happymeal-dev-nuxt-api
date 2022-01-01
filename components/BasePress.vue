<template>
  <button v-if="pressType === 'btn'" :class="mode"><slot></slot></button>
  <a v-else-if="pressType === 'anch'" :class="mode"><slot></slot></a>
  <nuxt-link v-else :to="path" :class="mode"><slot></slot></nuxt-link>
</template>
<script>
export default {
  props: {
    pressType: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
button,
a {
  transition: all 0.3s;
}
button {
  cursor: pointer;
  padding: 1rem 1rem;
}
a {
  text-decoration: none;
}
.flat {
  border-radius: 5px;
  background-color: var(--color-secondary);
  color: var(--color-white);
  border: 2px solid transparent;
  &:hover {
    background: transparent;
    border: 2px solid var(--color-secondary);
    color: var(--color-secondary);
  }
}

.outline {
  border-radius: 5px;
  box-sizing: border-box;
  background: transparent;
  border: 2px solid var(--color-secondary);
  color: var(--color-secondary);
  &:hover {
    background: var(--color-secondary-dark);
    color: var(--color-white);
    border: 2px solid transparent;
  }
}

.standard {
  box-sizing: border-box;
  background: transparent;
  border-bottom: 2px solid transparent;
  color: var(--color-secondary);
  &:hover {
    border-bottom: 2px solid var(--color-secondary);
  }
}
</style>
