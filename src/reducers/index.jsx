const initState = {items:[], size : 0};

export default (state = initState, action) => {
    switch (action.type) {
      case 'ADD_LIST_ITEM':
        return {
          items: [...state.items, action.text],
          size: state.size + 1
        }
      default:
        return state
    }
  }