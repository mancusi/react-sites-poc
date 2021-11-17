export type GetTemplateConfiguration = () => {
  hydrate?: boolean;
  getTitle: (data: any) => string;
  getPath: (data: any) => string;
  dataPath: string;
};

export type Template = ({ data }: { data: any }) => JSX.Element;

export type TemplateExports = {
  default: Template;
  getConfiguration: GetTemplateConfiguration;
};

export type TemplateConfig = {
  stream: StreamConfig;
  urlFormat: string;
};

export type StreamConfig = {
  $id: string;
  $source: string;
  destination: string;
  localization: () => { locales: Array<string> };
  fields: Array<string>;
  filter: any;
};