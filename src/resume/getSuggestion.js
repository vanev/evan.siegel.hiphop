import split from "lodash/fp/split"
import startsWith from "lodash/fp/startsWith"
import keys from "lodash/fp/keys"
import find from "lodash/fp/find"

const getSuggestion = ({ actions, actionBarValue }) => {
  const [action, option] = split(" ", actionBarValue)
  if (!action) return ""

  const actionSuggestion = find(startsWith(action), keys(actions))
  if (action !== actionSuggestion) return actionSuggestion

  const options = actions[action]
  if (options.length === 0) return ""

  const optionSuggestion = find(startsWith(option), options) || ""
  if (option !== optionSuggestion) return actionSuggestion + " " + optionSuggestion

  return ""
}

export default getSuggestion
