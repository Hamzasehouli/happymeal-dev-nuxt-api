<template>
  <v-sheet
    :style="{ margin: '7rem 0' }"
    class="mx-auto"
    elevation="8"
    max-width="1500"
    ><base-section><h2>Search by Origin</h2></base-section>
    <v-slide-group
      v-model="model"
      center-active
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="country in countries"
        :key="country.id"
        v-slot="{ active, toggle }"
      >
        <v-card
          shaped
          hover
          outlined
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="100"
          width="200"
          :to="`/origin/${country.name}`"
          :img="'./assets/images/' + country.img"
          @click="toggle"
        >
          <v-row class="fill-height" align="center" justify="center">
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    model: null,
    countries: [
      { id: 1, name: 'Moroccan', img: 'Moroccan.png' },
      { id: 2, name: 'American', img: 'American.png' },
      { id: 3, name: 'Mexican', img: 'Mexican.jpg' },
      // { id: 4, name: 'Israeli', img: 'Israeli.jpg' },
      { id: 5, name: 'Indian', img: 'Indian.png' },
      { id: 6, name: 'French', img: 'French.png' },
      { id: 7, name: 'Italian', img: 'Italian.jpeg' },
      { id: 8, name: 'Turkish', img: 'Turkish.png' },
      { id: 9, name: 'Chinese', img: 'Chinese.png' },
    ],
  }),
}
</script>
