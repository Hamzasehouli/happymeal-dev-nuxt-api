<template lang="">
  <div class="container">
    <base-press class="anch" mode="standard" path="/">Home</base-press>
    <figure>
      <h1>{{ meal.strMeal }}</h1>
      <img :src="meal.strMealThumb" />
      <h2>Category: {{ meal.strCategory }}</h2>
      <h3>Origin: {{ meal.strArea }}</h3>
      <div class="details">
        <ul class="list ingredients">
          <h3>Ingerdients</h3>
          <li v-for="ingMea in ingMeas" :key="ingMea">
            {{ ingMea }}
          </li>
        </ul>
      </div>
      <ul class="list instructions">
        <h3>Instructions</h3>
        <li v-for="instruction in instructions" :key="instruction">
          {{ instruction }}
        </li>
      </ul>
    </figure>
  </div>
</template>
<script>
export default {
  data() {
    return {
      meal: '',
      ingMeas: [],
      instructions: [],
    }
  },
  async fetch() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.$route.params.id}`
    )
    const data = await res.json()
    /*eslint-disable*/
    const [rawData] = data.meals
    this.meal = rawData
    console.log(this.meal)
    document.title = `Meal | ${this.meal.strMeal}`

    for (let i = 1; i <= 20; i++) {
      // arr.push(this.meal['strIngredient' + i])
      // measures.push(this.meal['strMeasure' + i])
      this.ingMeas.push(
        this.meal['strIngredient' + i] + ': ' + this.meal['strMeasure' + i]
      )
    }

    this.ingMeas = this.ingMeas.filter((a) => {
      return a.trim() !== ':'
    })

    console.log(this.ingMeas)

    this.instructions = this.meal.strInstructions.split('Step ').filter((a) => {
      return a.trim() !== ''
    })
  },
  fetchOnServer: false,
}
</script>
<style lang="scss" scoped>
.container {
  width: 80%;
  margin: 0 auto;
  padding: 7rem 0;
}
figure {
  display: flex;
  flex-direction: column;
  img {
    height: 40rem;
    width: 40rem;
    object-fit: cover;
    display: block;
    margin-bottom: 3rem;
    border-radius: 5px;
  }
  & > * {
    display: block;
  }
}
.list {
  list-style: none;
  margin-bottom: 4rem;
  width: 50%;

  & > * {
    margin-bottom: 1rem;
  }
}

.instructions {
  line-height: 180%;
}

h1,
h2,
h3 {
  margin-bottom: 1.5rem;
}

.anch {
  margin-bottom: 4rem;
  display: inline-block;
}
</style>
