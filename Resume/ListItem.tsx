import React from "react";
import * as Array from "fp-ts/lib/Array";
import { Category } from "./Item";
import css from "./ListItem.module.css";

const Detail = (detail: string) => (
  <li key={detail} className={css.detail}>
    {detail}
  </li>
);

export type Props = {
  category: Category;
  header: string;
  subtitle: string;
  body?: Array<string>;
};

const ListItem = ({ category, header, subtitle, body = [] }: Props) => (
  <div className={`${css.item} ${css[category]}`}>
    <h3 className={css.header}>{header}</h3>

    <p className={css.subtitle}>{subtitle}</p>

    <ul className={css.details}>{Array.map(Detail)(body)}</ul>
  </div>
);

export default ListItem;
