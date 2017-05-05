import React from "react"
import { func, string } from "prop-types"

const ActionBar = ({ suggestion, onChange }) => (
  <div className="action-bar">
    <input
      className="action-bar--input"
      onChange={onChange}
      autoFocus="true"
    />
    <span className="action-bar--suggestion">{suggestion}</span>
  </div>
)

ActionBar.propTypes = {
  onChange: func.isRequired,
  suggestion: string,
}

export default ActionBar
