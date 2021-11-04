import * as Array from "fp-ts/lib/Array";
import Item from "./Item";
import ListItem from "./ListItem";
import css from "./Page.module.css";

type Props = {
  items: Array<Item>;
};

const Page = ({ items }: Props) => (
  <div className={css.root}>
    <h1 className={css.title}>Evan Siegel</h1>

    <div className={css.items}>
      {Array.map((item: Item) => <ListItem key={item.url} {...item} />)(items)}
    </div>
  </div>
);

export default Page;
