<template>
  <nav class="nav">
    <nuxt-link class="linko" to="/"
      ><img
        class="logo"
        alt="Happy meal logo"
        :src="require('~/assets/images/logo-white.png')"
    /></nuxt-link>
    <form class="form" @submit.prevent="submitFrom">
      <input
        v-model.trim="meal"
        type="text"
        class="input"
        placeholder="search a meal e.g couscous"
      />
      <base-press mode="flat" type="submit" press-type="btn">search</base-press>
    </form>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      meal: '',
    }
  },
  /* eslint-disable */
  methods: {
    async submitFrom() {
      try {
        this.meal = this.meal[0].toUpperCase() + this.meal.slice(1)
        console.log(this.meal)
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.meal}`
        )
        const data = await res.json()

        if (!data.meals) return
        this.$store.dispatch('fetchMeals', data.meals)
        this.$router.push(`/meals/meal/${this.meal}`)
        this.meal = ''
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.nav {
  background: var(--color-primary-light);
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 37rem) {
    flex-direction: column;
  }
}
.linko {
  text-decoration: none;
  color: white;
}
.logo {
  width: 10rem;
  height: 5rem;
  object-fit: cover;
}
.form {
  @media only screen and (max-width: 37rem) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & > * {
    padding: 1rem 1rem;
    border-radius: 5px;
  }

  input {
    margin-right: 1rem;
    background: white;
    width: 30rem;
    border: none;
    outline: none;
    border: 2px solid transparent;
    transition: all 0.3s;
    @media only screen and (max-width: 37rem) {
      display: block;
      margin-bottom: 1rem;
    }
    &:focus {
      width: 35rem;
    }
  }
}
</style>
