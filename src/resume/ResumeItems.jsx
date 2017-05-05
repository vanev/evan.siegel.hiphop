import React from "react"
import { array } from "prop-types"
import map from "lodash/fp/map"
import ResumeItem from "./ResumeItem.jsx"

const renderItem = (props) => <ResumeItem {...props} />

const renderItems = map(renderItem)

const ResumeItems = ({ items }) => (
  <div className="resume-items">
    {renderItems(items)}
  </div>
)

ResumeItems.propTypes = {
  items: array.isRequired,
}

export default ResumeItems
