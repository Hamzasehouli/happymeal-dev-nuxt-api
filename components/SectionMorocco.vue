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
      `https://themealdb.com/api/json/v1/1/filter.php?a=Moroccan`
    ).then((res) => res.json())
    this.meals = data.meals
  },
  fetchOnServer: false,
}
</script>

