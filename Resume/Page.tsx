import React, { ReactNode } from "react";
import * as Array from "fp-ts/lib/Array";
import { flow } from "fp-ts/lib/function";
import * as Record from "fp-ts/lib/Record";
import * as Tuple from "fp-ts/lib/Tuple";
import * as Item from "./Item";
import ListItem from "./ListItem";
import css from "./Page.module.css";

const renderItems: (items: Record<number, Item.Item>) => Array<ReactNode> =
  flow(
    Record.toArray,
    Array.map(Tuple.snd),
    Array.sort(Item.Ord),
    Array.reverse,
    Array.map((item) => (
      <ListItem
        key={item.id}
        category={item.category}
        header={item.title}
        subtitle={Item.subtitle(item)}
        body={Item.body(item)}
      />
    )),
  );

type Props = {
  items: Record<number, Item.Item>;
};

const Resume = ({ items }: Props) => (
  <div className={css.root}>
    <h1 className={css.title}>Evan Siegel</h1>

    <p className={css.details}>
      <a href="tel:5167329658" className={css.detail}>
        516 732 9658
      </a>

      <a href="mailto:siegel.evan@gmail.com" className={css.detail}>
        siegel.evan@gmail.com
      </a>
    </p>

    <div className={css.items}>{renderItems(items)}</div>
  </div>
);

export default Resume;
