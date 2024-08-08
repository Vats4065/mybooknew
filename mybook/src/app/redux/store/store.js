// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducers';

// import incomeReducer from './reducers/incomeReducers';
// import userReducer from './reducers/userReducer';
// import counter from './reducers/counter';
// import { loadStateFromLocalStorage, saveStateToLocalStorage } from './features/localStorageUtils';

// import userReducer from './features/userReducer';
// const preloadedState = loadStateFromLocalStorage();

const store = configureStore({
  reducer: rootReducer
});

// store.subscribe(() => {
//   saveStateToLocalStorage(store.getState());
// });
export default store;
