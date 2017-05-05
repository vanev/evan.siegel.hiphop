import compose from "lodash/fp/compose"
import cloneDeep from "lodash/fp/cloneDeep"
import set from "lodash/fp/set"
import { ACTION_BAR_CHANGED, WINDOW_KEYUP } from "./actions.js"

const handleWindowKeyup = (state, payload) => compose(
  set('actionBarValue', (payload === "Escape") ? "" : state.actionBarValue),
  set('showActionBar', (payload === "Escape") ? false : (payload === ":") ? true : state.showActionBar),
  cloneDeep
)(state)

const handleActionBarChanged = (state, payload) => compose(
  set('actionBarValue', payload),
  cloneDeep
)(state)

const reducer = (state={}, action) => {
  switch (action.type) {

    case ACTION_BAR_CHANGED:
      return handleActionBarChanged(state, action.payload)

    case WINDOW_KEYUP:
      return handleWindowKeyup(state, action.payload)

    default:
      return state

  }
}

export default reducer
