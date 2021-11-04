import React from "react";
import Head from "next/head";
import { items } from "../data/portfolio";
import Page from "../Portfolio/Page";

const Index = () => (
  <>
    <Head>
      <title>Evan Siegel</title>
    </Head>

    <Page items={items} />
  </>
);

export default Index;
