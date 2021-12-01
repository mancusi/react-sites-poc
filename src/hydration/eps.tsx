import React from "react";
import { hydrate } from "react-dom";
import Page from "/Users/jmancusi/gatsby-incremental-builds/react-sites-poc/src/templates/eps";

const data = (window as any).data;
hydrate(<Page data={data} />, document.getElementById("reactele"));
