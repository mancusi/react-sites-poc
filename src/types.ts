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
