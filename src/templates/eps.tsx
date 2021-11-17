
import React from "react";
import { GetTemplateConfiguration, Template } from "../types";

export const getStreamConfiguration = () => {
  return {
    "streamId": "joe-stream",
      "urlFormat": "kg-react-{{.meta.locale}}-{{.uid}}.html"
  }
};


export const getConfiguration: GetTemplateConfiguration = () => {
  return {
    hydrate: true,
    getTitle: (data: any) => data.name,
    getPath: (data: any) => data.path,
    dataPath: "locations",
  };
};

const page: Template = ({
  data,
}: {
  data: {
    name: string;
  };
}) => {
  const { name } = data;

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};
export default page;
