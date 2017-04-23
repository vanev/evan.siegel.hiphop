import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Portfolio from "./Portfolio.jsx"
import Resume from "./Resume.jsx"

const Application = () => (
  <Router>
    <div className="Application">
      <Route exact path="/" component={Portfolio} />
      <Route path="/resume" component={Resume} />
    </div>
  </Router>
)

export default Application
