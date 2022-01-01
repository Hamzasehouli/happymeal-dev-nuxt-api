<template>
  <base-section title="You need some inspirations, check this one">
    <base-card
      v-for="meal in meals"
      :key="meal.idMeal"
      :title="meal.strMeal"
      :img-path="meal.strMealThumb"
      :path="`/meals/${meal.idMeal}`"
      :country="meal.strArea"
      :source="meal.strSource"
      :youtube="meal.strYoutube"
    ></base-card>
  </base-section>
</template>
<script>
export default {
  data() {
    return {
      meals: undefined,
    }
  },
  async fetch() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    )
    const data = await res.json()
    /* eslint-disable */

    this.meals = data.meals
  },
  fetchOnServer: false,
}
</script>
