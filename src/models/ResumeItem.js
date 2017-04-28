import map from "lodash/fp/map"
import join from "lodash/fp/join"
import compact from "lodash/fp/compact"
import compose from "lodash/fp/compose"
import { format } from "date-fns"

const TIMING_FORMAT = "MMMM YYYY"

const timing = ({ start_time, end_time }) => {
  const start = (start_time) ? format(start_time, TIMING_FORMAT) : null
  const end = (end_time) ? format(end_time, TIMING_FORMAT) : "Present"
  return compose(join(" - "), compact)([start, end])
}

const subtitle = ({ company, organization, school, location, start_time, end_time }) =>
  `${company || organization || school}, ${location}, ${timing({ start_time, end_time })}`

const prepareItem = (categories) => (item) => ({
  key: item.id,
  category: categories[item.category_id].name,
  header: item.title,
  subtitle: subtitle(item),
  body: item.body,
})

export const prepare = (categories) => map(prepareItem(categories))
