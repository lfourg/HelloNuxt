export default function ({ store, route, redirect }) {
  store.commit('ADD_VISIT', { path: route.path })
}
