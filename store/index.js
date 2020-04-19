export const state = () => ({
  visits:[]
})

export const mutations = {
  ADD_VISIT (state, data) {
    state.visits.push({
      path: data.path,
      date: new Date().toJSON()
    })
  }
}

export const getters={
  getVisits(state){
    return state.visits
  }
}
