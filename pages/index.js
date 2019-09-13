import React from "react";
import Head from "next/head";
import { map, startsWith } from "lodash/fp";
import { items } from "../data/portfolio";
import "../styles/index.scss";

const target = url => (startsWith("http", url) ? "_blank" : "");

const Item = ({ url, label, category }) => (
  <a
    key={`${url}-${label}`}
    href={url}
    className={`IndexPage--item _${category}`}
    target={target(url)}
  >
    {label}
  </a>
);

const Index = () => (
  <div className="IndexPage">
    <Head>
      <title>Evan Siegel</title>
      <link
        rel="stylesheet"
        href="http://fonts.googleapis.com/css?family=Inconsolata:400,700&amp;subset=latin"
        media="all"
      />
    </Head>

    <h1 className="IndexPage--title">Evan Siegel</h1>

    <div className="IndexPage--items">{map(Item)(items)}</div>
  </div>
);

export default Index;
