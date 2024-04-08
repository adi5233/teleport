import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import accordions from "../public/assets/data/accordions.json";

const TravelPlans = () => {
  return (
    <div className="my-10 px-5 md:px-10">
      <div className="text-2xl font-semibold">
        Start your travel planning here
      </div>
      <div className="mt-1 text-md">
        Search <span className="text-[#079]">Flights</span>,{" "}
        <span className="text-[#079]">Hotels</span> &{" "}
        <span className="text-[#079]">Hire Cars</span>
      </div>
      <div>
        <Accordion
          type="single"
          collapsible
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-x-5 md:gap-y-2 mt-2"
        >
          {accordions.map((accordion) => (
            <AccordionItem value={accordion.title} className="border-b-2">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex flex-col">
                  <div className="text-left">{accordion.title}</div>
                  <div className="mt-2 text-sm text-[#079]">
                    CARS • FLIGHTS • HOTELS
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {accordion.placeAndPrices.map((item) => (
                  <div className="flex justify-between flex-row hover:underline">
                    <div>{item.place}</div>
                    <div>{item.price}</div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default TravelPlans;
