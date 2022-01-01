export const state = () => {
  return { fetchedMeals: [] }
}

export const getters = {
  getFetchedMeals(state) {
    return state.fetchedMeals
  },
}

export const actions = {
  fetchMeals(context, payload) {
    context.commit('fetchMeals', payload)
  },
}
export const mutations = {
  fetchMeals(state, payload) {
    state.fetchedMeals = payload
  },
}
