import React, { Component } from "react"
import ResumeItems from "./ResumeItems.jsx"
import { items, categories } from "./data/resume.js"
import { prepare } from "./models/ResumeItem.js"

class Resume extends Component {
  constructor() {
    super()

    this.state = {
      items
    }
  }

  render() {
    return (
      <div className="Resume">

        <h1 className="title">Evan Siegel</h1>

        <p className="details">
          <a href="tel:5167329658">516 732 9658</a> | <a href="mailto:siegel.evan@gmail.com" className="detail">siegel.evan@gmail.com</a>
        </p>

        <ResumeItems items={prepare(categories)(items)} />

      </div>
    )
  }
}

export default Resume
