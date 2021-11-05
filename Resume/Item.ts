import { flow, pipe } from "fp-ts/lib/function";
import * as D from "fp-ts/lib/Date";
import * as Option from "fp-ts/lib/Option";
import * as O from "fp-ts/lib/Ord";
import * as Tuple from "fp-ts/lib/Tuple";
import { parse, format } from "date-fns/fp";

export enum Category {
  Work = "work",
  Leadership = "leadership",
  Education = "education",
}

export type Work = {
  id: number;
  category: Category.Work;
  title: string;
  company: string;
  department?: string;
  location: string;
  startTime: string;
  endTime: string | null;
  body?: Array<string>;
};

export type Leadership = {
  id: number;
  category: Category.Leadership;
  title: string;
  organization: string;
  location: string;
  startTime: string;
  endTime: string | null;
  body: Array<string>;
};

export type Education = {
  id: number;
  category: Category.Education;
  title: string;
  school: string;
  location: string;
  startTime: string;
  endTime: string | null;
};

export type Item = Work | Leadership | Education;

const formatDateString: (str: string) => string = flow(
  parse(new Date())("yyyy-MM"),
  format("MMMM yyyy"),
);

export const duration = ({ startTime, endTime }: Item): string =>
  pipe(
    [startTime, endTime],
    Tuple.bimap(Option.fromNullable, Option.fromNullable),
    Tuple.bimap(Option.map(formatDateString), Option.map(formatDateString)),
    Tuple.bimap(
      Option.getOrElse<string>(() => "Present"),
      Option.getOrElse<string | null>(() => null),
    ),
    ([fst, snd]) => (fst ? `${fst} - ${snd}` : snd),
  );

export const subtitle = (item: Item): string => {
  switch (item.category) {
    case Category.Work:
      return `${item.company}, ${item.location}, ${duration(item)}`;

    case Category.Leadership:
      return `${item.organization}, ${item.location}, ${duration(item)}`;

    case Category.Education:
      return `${item.school}, ${item.location}, ${duration(item)}`;
  }
};

export const body = (item: Item): Array<string> => {
  switch (item.category) {
    case Category.Work:
      return item.body || [];

    case Category.Leadership:
      return item.body;

    case Category.Education:
      return [];
  }
};

export const Ord: O.Ord<Item> = O.contramap<Date, Item>((item) => {
  return item.endTime ? parse(new Date())("yyyy-MM")(item.endTime) : new Date();
})(D.Ord);

export default Item;
