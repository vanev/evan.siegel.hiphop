import * as String from "fp-ts/lib/string";
import css from "./ListItem.module.css";

const target = (url: string): string =>
  String.startsWith("http")(url) ? "_blank" : "";

type Props = {
  url: string;
  label: string;
  category: string;
};

const ListItem = ({ url, label, category }: Props) => (
  <a href={url} className={`${css.item} ${css[category]}`} target={target(url)}>
    {label}
  </a>
);

export default ListItem;
