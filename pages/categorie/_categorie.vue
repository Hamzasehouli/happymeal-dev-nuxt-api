<template>
  <base-section title="Recipes to try">
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
    }
  },

  async fetch() {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.$route.params.categorie}`
    ).then((res) => res.json())
    this.meals = data.meals
    console.log(this.meals)
  },
  fetchOnServer: false,
}
</script>
<style lang="scss" scoped></style>
