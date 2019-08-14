import { CHANGE_IS_MOBILE } from './actions';

const initialState = {
  isMobile: false,
};

const nubank = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_IS_MOBILE:
      return {
        ...state,
        isMobile: action.payload,
      }
    default:
      return state;
  }
};

export default nubank;