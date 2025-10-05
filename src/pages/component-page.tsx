import { useParams } from "react-router";
import { componentsData } from "../lib/components-data";
import { Page404 } from "./404-not-found";
import { ComponentPageTemplate } from "../components/component-page-template";

export const ComponentPage = () => {
  const { componentName } = useParams<{ componentName: string }>();

  if (!componentName) {
    return <Page404 />;
  }

  const componentData = componentsData[componentName];

  if (!componentData) {
    return (
      <Page404
        buttonDescription="Go back to first item"
        url="/docs/components/accordion"
      />
    );
  }

  return <ComponentPageTemplate data={componentData} />;
};
