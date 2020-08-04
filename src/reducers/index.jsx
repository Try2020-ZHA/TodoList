const initState = {items:[], size : 0};

export default (state = initState, action) => {
    switch (action.type) {
      case 'ADD_LIST_ITEM':
        return {
          items: [...state.items , action.obj],
          size: state.size + 1
        }
      case 'DELETE_LIST_ITEM':
        return {
          items: state.items.filter(i=> i !== action.item),
          size: state.size-1
        }
      case 'MARK_LIST_ITEM':
        console.log(state.items[action.index].done)
        state.items[action.index].done = !state.items[action.index].done;
        return {items:[...state.items],size: state.size + 1}
      default:
        return state
    }
  }