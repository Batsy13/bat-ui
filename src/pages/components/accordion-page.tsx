import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../components/ui/accordion";
import { PreviewCode } from "../../components/ui/preview-code";
import { Terminal } from "../../components/ui/terminal";

export default function AccordionPage() {
    return (
        <div className="flex flex-col w-full max-w-2xl gap-12 mx-auto text-white md:px-0 lg:py-14">
            <div className="flex flex-col gap-2">
                <h1>Accordion</h1>
                <p className="description">
                    A collapsible content container that allows users to show or
                    hide sections of information.
                </p>
            </div>
            <PreviewCode
                preview={
                    <Accordion defaultOpen="item-1">
                        <AccordionItem value="item-1">
                            <AccordionTrigger value="item-1">
                                What's the difference between the Basic and Pro
                                plans?
                            </AccordionTrigger>
                            <AccordionContent value="item-1">
                                The Basic plan is perfect for individuals and
                                small teams, offering essential features like
                                task management and basic analytics. The Pro
                                plan, on the other hand, is designed for larger
                                organizations and includes everything in the
                                Basic plan plus advanced features like custom
                                integrations, priority support, and enhanced
                                security options.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger value="item-2">
                                What are the best places to eat in Paris?
                            </AccordionTrigger>
                            <AccordionContent value="item-2">
                                For a classic Parisian experience, you must
                                visit a local bistro. Le Comptoir du Relais is a
                                fantastic choice for traditional French food. If
                                you're looking for something more modern, check
                                out Septime, which is known for its innovative,
                                seasonal menu. And for a truly unforgettable
                                meal, book a table at L'Arpège, a
                                three-Michelin-star restaurant.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger value="item-3">
                                What will I learn in Introduction to Psychology?
                            </AccordionTrigger>
                            <AccordionContent value="item-3">
                                This course provides a comprehensive overview of
                                the fundamental principles of psychology. You
                                will explore major topics such as human
                                development, cognitive processes, social
                                behavior, and abnormal psychology. We'll also
                                cover different research methods and their
                                ethical implications, giving you a solid
                                foundation for more advanced studies.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                }
                code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionDemo = () => (
  <Accordion>
    <AccordionItem value="item-1">
      <AccordionTrigger value="item-1">
        What's the difference between the Basic and Pro plans?
      </AccordionTrigger>
      <AccordionContent value="item-1">
        The Basic plan is perfect for individuals and small teams, offering essential features like task management and basic analytics. The Pro plan, on the other hand, is designed for larger organizations and includes everything in the Basic plan plus advanced features like custom integrations, priority support, and enhanced security options.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger value="item-2">
        What are the best places to eat in Paris?
      </AccordionTrigger>
      <AccordionContent value="item-2">
        For a classic Parisian experience, you must visit a local bistro. Le Comptoir du Relais is a fantastic choice for traditional French food. If you're looking for something more modern, check out Septime, which is known for its innovative, seasonal menu. And for a truly unforgettable meal, book a table at L'Arpège, a three-Michelin-star restaurant.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger value="item-3">
        What will I learn in Introduction to Psychology?
      </AccordionTrigger>
      <AccordionContent value="item-3">
        This course provides a comprehensive overview of the fundamental principles of psychology. You will explore major topics such as human development, cognitive processes, social behavior, and abnormal psychology. We'll also cover different research methods and their ethical implications, giving you a solid foundation for more advanced studies.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default AccordionDemo;
  `}
            />

            <div className="flex flex-col gap-2">
                <h2>Installing</h2>
                <Terminal
                    type="bash"
                    code={"accordion"}
                    library="shadcn@latest"
                />
            </div>

            <div className="flex flex-col gap-2">
                <h2>Usage</h2>
                <Terminal
                    type="code"
                    code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";`}
                />
                <Terminal
                    type="code"
                    code={`<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger value="item-1">
      What's the difference between the Basic and Pro plans?
    </AccordionTrigger>
    <AccordionContent value="item-1">
      The Basic plan is perfect for individuals and small teams
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
                />
            </div>
        </div>
    );
}
