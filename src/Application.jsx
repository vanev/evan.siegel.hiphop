import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import initialState from "./initialState.js"
import reducer from "./reducer.js"
import Portfolio from "./portfolio/index.jsx"
import Resume from "./resume/index.jsx"

import "./styles/main.scss"

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const Application = () => (
  <Provider store={store}>
    <Router>
      <div className="Application">
        <Route exact path="/" component={Portfolio} />
        <Route path="/resume" component={Resume} />
      </div>
    </Router>
  </Provider>
)

export default Application
