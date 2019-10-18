export const state = () => ({
  wishList: [
    { id: 0, type: 'checkbox', content: '官方lightning数据线', checked: false },
    { id: 1, type: 'checkbox', content: 'ip11 pro', checked: false },
  ],
  todos: [
    { id: 0, type: 'checkbox', content: '个人网站', checked: false },
  ]
})

export const mutations = {
  toggleWishList(state, id) {
    let index = findIndex(state.wishList, (item) => item.id === id)
    state.wishList[index].checked = !state.wishList[index].checked
  },
  toggleTodos(state, id) {
    let index = findIndex(state.todos, (item) => item.id === id)
    state.todos[index].checked = !state.todos[index].checked
  }
}

const findIndex = (list, pred) => {
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (pred(item)) return i
  }
  return undefined
}