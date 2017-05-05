import React from "react"
import { string } from "prop-types"
import startsWith from "lodash/fp/startsWith"

const className = (category) => `link _${category}`
const target = (url) => (startsWith("http", url)) ? "_blank" : ""

const Link = ({ url, category, label }) => (
  <a
    href={url}
    className={className(category)}
    target={target(url)}
  >
    {label}
  </a>
)

Link.propTypes = {
  url: string.isRequired,
  category: string,
  label: string.isRequired,
}

export default Link
