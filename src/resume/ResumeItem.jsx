import React from "react"
import { string, array } from "prop-types"
import map from "lodash/fp/map"

const ResumeItem = ({ category, header, subtitle, body }) => (
  <div className={`resume-item _${category}`}>

    <h3 className="resume-item--header">{header}</h3>

    <p className="resume-item--subtitle">{subtitle}</p>

    <ul className="resume-item--body">
      {map((detail) => (
        <li key={detail} className="resume-item--body--detail">{detail}</li>
      ), body)}
    </ul>
  </div>
)

ResumeItem.propTypes = {
  category: string,
  header: string.isRequired,
  subtitle: string,
  body: array,
}

export default ResumeItem
