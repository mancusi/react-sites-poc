
import React from "react";
import { Template, TemplateConfig } from "../../types/types";
import { renderToStaticMarkup, renderToStaticNodeStream, renderToString } from "react-dom/server";


export const config: TemplateConfig = {
  hydrate: true,
  getTitle: (data: PageData): string => `${data.name}`,
};

type PageData = {
    name: string;
    description: string;
    id: number;
    externalEntityId: string;
}

export const react = React;

export const getUrl  = (data: PageData) => `location-${data.id}-h`;


type TemplateState = {
  count: number;
};

type TemplateProps = {
  data: PageData
}
class PageTempl extends React.Component<TemplateProps, TemplateState> {
  constructor(props: TemplateProps) {
    super(props);

    this.state = {
      count: 0
    };

   this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    const {count} = this.state;
    const newCount = count + 1;
    this.setState({ count: newCount });
  }

  render() {
    const { data } = this.props;
    const { count } = this.state;
    const { name, description, id, externalEntityId } = data;

    return (
      <div>
        <h1>{`Entity ${id}: ${name}`}</h1>
        <p>{`External Id: ${externalEntityId}`}</p>
        <p>{description}</p>
        <button onClick={() => this.increaseCount()}>
          {`The current count is ${count}`}
        </button>
      </div>
    );
  }
}

const Tmpl: Template = ({
  data,
}: {
  data: PageData;
}) => {
  const { name, description, id, externalEntityId } = data;
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>{`Entity ${id}: ${name}`}</h1>
      <p>{`External Id: ${externalEntityId}`}</p>
      <p>{description}</p>
      <button onClick={() => setCount(prev => prev + 1)}>{`The current count is ${count}`}</button>
    </div>
  );
};

export const render = (data: any) => renderToString(<Tmpl data={data}/>)


export default Tmpl;
