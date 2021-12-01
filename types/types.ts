export type TemplateConfig = {
  hydrate?: boolean;
  getTitle: (data: any) => string;
};

export type Template = ({ data }: { data: any }) => JSX.Element;

export type TemplateExports = {
  default: Template;
  config: TemplateConfig;
};