import { PreviewCode } from "../../components/preview-code";

export default function AccordionPage() {
  return (
    <div className="flex flex-col max-w-2xl gap-8 mx-auto text-white md:px-0 lg:py-14">
      <div className="flex flex-col gap-2">
        <h1>Accordion</h1>
        <p className="description">
          A collapsible content container that allows users to show or hide
          sections of information.
        </p>
      </div>
      <PreviewCode />
    </div>
  );
}
