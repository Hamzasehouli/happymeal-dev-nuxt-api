<template lang="">
  <base-section :title="$route.params.meal">
    <base-card
      v-for="meal in meals"
      :key="meal.idMeal"
      :title="meal.strMeal"
      :img-path="meal.strMealThumb"
      :path="`/meals/${meal.idMeal}`"
    ></base-card>
  </base-section>
</template>
<script>
export default {
  data() {
    return {
      meals: [],
      //   meala: '',
    }
    /* eslint-disable */
  },
  //   watch: {
  //     $route(val, nval) {
  //       console.log(val)
  //       console.log(nval)
  //     },
  //   },
  created() {
    document.title = 'Meal | ' + this.$route.params.meal
    this.meals = this.$store.getters.getFetchedMeals
  },
}
</script>
<style lang=""></style>
