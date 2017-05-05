import React from "react"
import { array } from "prop-types"
import map from "lodash/fp/map"
import Link from "./Link.jsx"

const renderLink = (props) => <Link {...props} />

const renderLinks = map(renderLink)

const Links = ({ links }) => (
  <div className="links">
    {renderLinks(links)}
  </div>
)

Links.propTypes = {
  links: array.isRequired,
}

export default Links
