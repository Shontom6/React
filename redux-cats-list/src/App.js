import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import rootReducer from "./store/reducer";
import initialState from "./store/initialState";

import CatsParent from "./components/CatsParent";

const reduxStore = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: initialState,
});

function App() {
  return (
    <Provider store={reduxStore}>
      <div className="App">
        <CatsParent/>
      </div>
    </Provider>
  );
}

export default App;
