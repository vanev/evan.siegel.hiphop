import { items, categories } from "./resume/data.js"
import { links } from "./portfolio/data.js"

const initialState = {
  resume: {
    items,
    categories,
    showActionBar: false,
    actions: {
      sort: ['start_time', 'location'],
    },
  },
  portfolio: {
    links,
  },
}

export default initialState
