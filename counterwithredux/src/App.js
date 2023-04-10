import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import ParentComp from "./components/ParentComp";
import { initialValue } from "./redux/initialValue";
import reducer from "./redux/reducer";

const reduxStore = configureStore({
  reducer: reducer,
  devTools: true,
  preloadedState: initialValue,
});

function App() {
  return (
    <Provider store={reduxStore}>
      <div className="App">
        <ParentComp />
      </div>
    </Provider>
  );
}

export default App;
