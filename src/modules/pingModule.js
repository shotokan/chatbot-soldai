const counterModule = {
  state: {
    count: 0
  },
  // estas mutaciones serán ejecutadas por Node.js, deben comenzar por SOCKET_
  mutations: {
    SOCKET_COUNTER_INCREMENT (state) {
      state.count = state.count + 1
    },
    SOCKET_COUNTER_DECREMENT (state) {
      state.count = state.count - 1
    }
  },
  // emitimos acciones desde nuestra app
  actions: {
    socket_increment: ({ commit, state, rootState }) => {
      rootState.io.emit('increment', state.count) // emitimos al server el evento increment
    },
    socket_decrement: ({ commit, state, rootState }) => {
      rootState.io.emit('decrement', state.count) // emitimos al server el evento decrement
    }
  }
}

export default counterModule
