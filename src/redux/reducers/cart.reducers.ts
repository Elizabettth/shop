export default function cartReducer(state: any = [], action: any) {
  switch (action.type){
    case "ADD_TO_CART":
      return [...state,action.payload]
    default:
    return state;
  }
}
