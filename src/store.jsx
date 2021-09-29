import { configureStore } from '@reduxjs/toolkit';
import { userReducer, fetchUser } from './reducers';

function localState() {
  try {
    const night = JSON.parse(localStorage.getItem('night'));
    if (night) {
      return { status: 'idle', night }
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
}

const store = configureStore({
  reducer: userReducer,
  preloadedState: localState(),
});

export default store;