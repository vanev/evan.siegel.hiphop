import React from "react"
import Links from "./Links.jsx"
import { array } from "prop-types"
import { connect } from "react-redux"

const Portfolio = ({ links }) => (
  <div className="Portfolio">
    <h1 className="title">Evan Siegel</h1>
    <Links links={links} />
  </div>
)

Portfolio.propTypes = {
  links: array.isRequired,
}

const mapStateToProps = ({ portfolio }) => ({ links: portfolio.links })

export default connect(mapStateToProps)(Portfolio)
