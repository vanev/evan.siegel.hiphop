import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Portfolio from "./Portfolio.jsx"

const Application = () => (
  <Router>
    <div className="Application">
      <Route exact path="/" component={Portfolio} />
    </div>
  </Router>
)

export default Application
