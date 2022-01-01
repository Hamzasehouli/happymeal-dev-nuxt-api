<template>
  <!-- <div class="slider">
    <span class="btn btn-left" @click="leftBtn">left</span>
    <span class="btn btn-right" @click="rightBtn">right</span>
    <ul class="slider__list">
      <li
        v-for="category in categories"
        :key="category.idCategory"
        class="slider__item"
        :style="{ transform: `translateX(${count}rem)`, transition: 'all .3s' }"
      >
        <img class="slider__img" :src="category.strCategoryThumb" />
        <p class="slider__title">{{ category.strCategory }}</p>
      </li>
    </ul>
  </div> -->

  <v-sheet
    :style="{ marginTop: '4rem' }"
    :outlined="false"
    class="mx-auto"
    elevation="24"
    max-width="100vw"
  >
    <v-slide-group
      center-active
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item v-for="category in categories" :key="category.idCategory">
        <v-card
          class="ma-4"
          height="150"
          hover
          width="240"
          :to="`/categorie/${category.strCategory}`"
          :img="category.strCategoryThumb"
        >
          <p
            :style="{
              background: 'white',
              color: 'black',
              display: 'inline-block',
              padding: '.5rem 1rem',
              position: 'relative',
              top: '1rem',
              left: '1rem',
            }"
          >
            {{ category.strCategory }}
          </p>
          <v-row class="fill-height" align="center" justify="center">
            <v-scale-transition> </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      count: 0,
      slider: '',
      bound: null,
      kaka: null,
      model: '',
    }
  },

  async fetch() {
    /* eslint-disable*/
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    )
    const data = await res.json()
    console.log(data)
    this.categories = data.categories
  },
  fetchOnServer: false,
  mounted() {},
  methods: {
    leftBtn() {
      if (this.count >= 0) {
        this.count = -160
        return
      }
      this.count += 10
      console.log(this.count)
    },

    rightBtn() {
      if (this.count < -160) {
        return (this.count = 0)
      }
      this.count -= 10
      console.log(this.count)
    },
  },
}
</script>

//
<style lang="scss" scoped>
// .slider {
//   width: 90%;
//   margin: 2rem auto;
//   position: relative;
//   overflow: hidden;
//   transition: all 0.7s;
//   &__list {
//     width: 100%;
//     display: flex;
//     list-style: none;
//     margin-right: 4rem;
//     transition: all 0.7s;
//   }
//   &__img {
//     width: 20rem;
//     height: 10rem;
//     display: inline-block;
//   }
// }

// .btn {
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   background-color: red;
//   z-index: 999;
//   display: block;
//   cursor: pointer;
//   &-right {
//     right: 3rem;
//   }
//   &-left {
//     left: 3rem;
//   }
// }
//
</style>
