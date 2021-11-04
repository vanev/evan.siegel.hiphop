import React from "react";
import Head from "next/head";
import { items } from "../data/resume";
import Page from "../Resume/Page";

const Resume = () => (
  <>
    <Head>
      <title>Resume | Evan Siegel</title>
    </Head>

    <Page items={items} />
  </>
);

export default Resume;
