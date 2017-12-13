export default function API(state = {
  isFetching: false,
  isSuccess: false
}, action) {
  switch (action.type) {
    case 'API_REQUEST':
      return {
        ...state,
        isFetching: true
      }
    case 'API_SUCCESS':
      return {
        ...state,
        isFetching: false,
        isSuccess: true
      }
    case 'API_FAILURE':
      return {
        ...state,
        isFetching: false,
        isSuccess: false
      }
    default:
      return state
  }
}