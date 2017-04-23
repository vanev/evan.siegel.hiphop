import React, { Component } from "react"
import Links from "./Links.jsx"
import links from "./data/links.js"

class Application extends Component {
  constructor() {
    super()

    this.state = {
      links
    }
  }

  render() {
    return (
      <div className="Application">

        <h1 className="title">Evan Siegel</h1>

        <Links links={this.state.links} />

      </div>
    )
  }
}

export default Application
