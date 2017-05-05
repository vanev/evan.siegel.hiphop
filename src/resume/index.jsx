import React, { Component } from "react"
import { array, bool, string, func } from "prop-types"
import { connect } from "react-redux"
import compose from "lodash/fp/compose"
import { actionBarChange, windowKeyup } from "./actions.js"
import split from "lodash/fp/split"
import sortBy from "lodash/fp/sortBy"
import prop from "lodash/fp/prop"
import ResumeItems from "./ResumeItems.jsx"
import ActionBar from "./ActionBar.jsx"
import { prepare } from "./ResumeItem.js"
import getSuggestion from "./getSuggestion.js"

class Resume extends Component {
  componentDidMount() {
    window.addEventListener('keyup', this.props.onWindowKeyup)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.props.onWindowKeyup)
  }

  render() {
    return (
      <div className="Resume">

        <h1 className="title">Evan Siegel</h1>

        <p className="details">
          <a href="tel:5167329658">516 732 9658</a> | <a href="mailto:siegel.evan@gmail.com" className="detail">siegel.evan@gmail.com</a>
        </p>

        <ResumeItems items={this.props.items} />

        {(this.props.showActionBar) ? <ActionBar suggestion={this.props.suggestion} onChange={this.props.onActionBarChange} /> : ""}

      </div>
    )
  }
}

Resume.propTypes = {
  items: array,
  showActionBar: bool,
  suggestion: string,
  onActionBarChange: func,
  onWindowKeyup: func,
}

const applyAction = ({ actionBarValue, actions }) => (items) => {
  const [action, option] = split(" ", actionBarValue)
  if (!action || !option) return items

  const options = actions[action]
  if (options.length === 0) return items

  switch (action) {
    case "sort": return sortBy(option)(items)
    default: return items
  }
}

const getItems = (resume) => compose(
  prepare(resume.categories),
  applyAction(resume)
)(resume.items)

const showActionBar = prop('resume.showActionBar')

const mapStateToProps = (state) => ({
  items: getItems(state.resume),
  showActionBar: showActionBar(state),
  suggestion: getSuggestion(state.resume),
})

const mapDispatchToProps = (dispatch) => ({
  onActionBarChange: compose(dispatch, actionBarChange),
  onWindowKeyup: compose(dispatch, windowKeyup),
})

export default connect(mapStateToProps, mapDispatchToProps)(Resume)
