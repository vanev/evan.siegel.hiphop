import React from "react";
import Head from "next/head";
import { compose, join, values } from "lodash/fp";
import { parse, format } from "date-fns/fp";
import { items, categories } from "../data/resume";
import "../styles/resume.scss";

const TIMING_FORMAT = "MMMM yyyy";

const bimap = (f, g) => ([fst, snd]) => [f(fst), g(snd)];

class Maybe {
  static of(value) {
    return new Maybe(value);
  }

  constructor(value) {
    this.__value = value;
  }

  map(fn) {
    return this.__value ? Maybe.of(fn(this.__value)) : this;
  }

  join() {
    if (this.__value instanceof Maybe) return this.__value;

    throw new TypeError("Value must be Maybe");
  }

  chain(fn) {
    return this.join(this.map(fn));
  }

  extract(other) {
    return this.__value || other;
  }
}

const extract = other => extractable => extractable.extract(other);

const map = fn => mappable => mappable.map(fn);

const timing = compose(
  join(" - "),
  bimap(extract(null), extract("Present")),
  map(map(format(TIMING_FORMAT))),
  map(map(parse(new Date())("yyyy-MM"))),
  map(Maybe.of)
);

const subtitle = ({
  company,
  organization,
  school,
  location,
  start_time,
  end_time
}) =>
  `${company || organization || school}, ${location}, ${timing([
    start_time,
    end_time
  ])}`;

const prepareItem = categories => item => ({
  key: item.id,
  category: categories[item.category_id].name,
  header: item.title,
  subtitle: subtitle(item),
  body: item.body
});

const prepare = categories => map(prepareItem(categories));

const ResumeItemBodyDetail = detail => (
  <li key={detail} className="ResumePage--Item--detail">
    {detail}
  </li>
);

const Item = ({ category, header, subtitle, body }) => (
  <div className={`ResumePage--Item _${category}`}>
    <h3 className="ResumePage--Item--header">{header}</h3>

    <p className="ResumePage--Item--subtitle">{subtitle}</p>

    <ul className="ResumePage--Item--details">
      {map(ResumeItemBodyDetail)(body || [])}
    </ul>
  </div>
);

const renderItems = compose(
  map(Item),
  prepare(categories),
  values
);

const Resume = () => (
  <div className="ResumePage">
    <Head>
      <title>Resume | Evan Siegel</title>
      <link
        rel="stylesheet"
        href="http://fonts.googleapis.com/css?family=Inconsolata:400,700&amp;subset=latin"
        media="all"
      />
    </Head>

    <h1 className="ResumePage--title">Evan Siegel</h1>

    <p className="ResumePage--details">
      <a href="tel:5167329658" className="ResumePage--detail">
        516 732 9658
      </a>

      <a href="mailto:siegel.evan@gmail.com" className="ResumePage--detail">
        siegel.evan@gmail.com
      </a>
    </p>

    <div className="ResumePage--items">{renderItems(items)}</div>
  </div>
);

export default Resume;
