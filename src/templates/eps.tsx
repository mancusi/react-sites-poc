
import React from "react";
import { Template, TemplateConfig } from "../../types/types";

export const config: TemplateConfig = {
  hydrate: false,
  getTitle: (data: PageData): string => `${data.name}`,
};

type PageData = {
    name: string;
    description: string;
    id: number;
    externalEntityId: string;
}

export const getUrl  = (data: PageData) => `location-${data.id}`;

const page: Template = ({
  data,
}: {
  data: PageData;
}) => {
  const { name, description, id, externalEntityId } = data;

  return (
    <div>
      <h1>{`Entity ${id}: ${name}`}</h1>
      <p>{`External Id: ${externalEntityId}`}</p>
      <p>{description}</p>
    </div>
  );
};
export default page;
