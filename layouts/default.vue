<template>
  <div>
    <header>
      <Nav />
    </header>
    <main>
      <Nuxt
        keep-alive
        :keep-alive-props="{
          exclude: ['pages/index.vue', 'pages/meals/index.vue'],
        }"
      />
    </main>
    <the-footer></the-footer>
  </div>
</template>
