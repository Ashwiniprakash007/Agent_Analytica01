const initialState = {
    productList: [],
    selectedProduct: null,
  };
  
  export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return { ...state, productList: action.payload };
      case 'SELECT_PRODUCT':
        return { ...state, selectedProduct: action.payload };
      case 'ADD_PRODUCT':
        return { ...state, productList: [...state.productList, action.payload] };
      case 'UPDATE_PRODUCT':
        return {
          ...state,
          productList: state.productList.map(product =>
            product.id === action.payload.id ? action.payload : product
          ),
        };
      default:
        return state;
    }
  };
  