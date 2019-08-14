import {
  CHANGE_IS_MOBILE,
} from './actions';

export default store => {
  if (window.innerWidth <= 767) {
    store.dispatch({
      type: CHANGE_IS_MOBILE,
      payload: true,
    });
  } else {
    store.dispatch({
      type: CHANGE_IS_MOBILE,
      payload: false,
    });
  }

  window.addEventListener('resize', ({ target }) => {
    if (target.innerWidth <= 767) {
      store.dispatch({
        type: CHANGE_IS_MOBILE,
        payload: true,
      });
    } else {
      store.dispatch({
        type: CHANGE_IS_MOBILE,
        payload: false,
      });
    }
  });

  return store;
};