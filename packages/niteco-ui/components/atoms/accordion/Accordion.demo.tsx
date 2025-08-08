import React from "react";
import { Accordion } from "./Accordion";
import { IAccordionItem } from "./Accordion.type";

const AccordionDemo = () => {
  const faqItems: IAccordionItem[] = [
    {
      id: "fence-panel-type",
      title: "WHAT IS THE MOST POPULAR TYPE OF FENCE PANEL?",
      content: (
        <p>
          The most popular type of fence panel is the closeboard fence panel, also known as featherboard fencing. These
          panels offer excellent privacy and security while providing a traditional, attractive appearance that
          complements most garden styles.
        </p>
      ),
    },
    {
      id: "fence-panel-styles",
      title: "WHAT ARE THE DIFFERENT STYLES OF FENCE PANEL?",
      content: (
        <div>
          <p>There are several popular styles of fence panels:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Closeboard/Featherboard:</strong> Traditional overlapping boards for maximum privacy
            </li>
            <li>
              <strong>Lap Panel:</strong> Horizontal slats with gaps for partial privacy
            </li>
            <li>
              <strong>Trellis Top:</strong> Solid panel with decorative lattice top
            </li>
            <li>
              <strong>Picket Fence:</strong> Vertical slats with pointed or rounded tops
            </li>
            <li>
              <strong>Hit and Miss:</strong> Alternating boards for privacy with airflow
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "fence-panel-lifespan",
      title: "HOW LONG DO FENCE PANELS LAST?",
      content: (
        <p>
          Quality fence panels typically last 15-20 years with proper maintenance. Pressure-treated panels can last even
          longer. Factors affecting lifespan include wood quality, weather exposure, ground contact, and regular
          maintenance like staining or painting.
        </p>
      ),
    },
    {
      id: "fence-panel-sizes",
      title: "WHAT SIZES ARE FENCE PANELS?",
      content: (
        <div>
          <p>Standard fence panel sizes include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Width:</strong> 3ft, 4ft, 5ft, 6ft (most common: 6ft)
            </li>
            <li>
              <strong>Height:</strong> 3ft, 4ft, 5ft, 6ft (most common: 6ft)
            </li>
            <li>
              <strong>Thickness:</strong> Typically 1 inch for residential use
            </li>
          </ul>
          <p className="mt-2">Custom sizes are also available for specific requirements.</p>
        </div>
      ),
    },
    {
      id: "fence-panel-compatibility",
      title: "DO OUR FENCE PANELS WORK WITH OTHERS CONCRETE AND METAL POSTS?",
      content: (
        <p>
          Yes, our fence panels are designed to work with various post types including concrete, metal, and wooden
          posts. We provide compatible brackets and fixing systems for different post materials. Concrete posts offer
          the longest lifespan, while metal posts provide good durability and easy installation.
        </p>
      ),
    },
    {
      id: "fence-panel-painting",
      title: "DO I NEED TO PAINT OR STAIN FENCE PANELS?",
      content: (
        <p>
          While not strictly necessary, painting or staining fence panels significantly extends their lifespan and
          maintains their appearance. We recommend treating panels every 2-3 years with quality wood stain or paint to
          protect against weather damage and UV exposure.
        </p>
      ),
    },
    {
      id: "fence-panel-fire-risk",
      title: "ARE FENCE PANELS A FIRE RISK?",
      content: (
        <p>
          Wooden fence panels can be a fire risk if not properly maintained or if positioned too close to fire sources.
          We recommend keeping panels at least 2 meters from barbecues, fire pits, or other heat sources, and treating
          them with fire-retardant products where necessary.
        </p>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Frequently Asked Questions</h1>

      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Default Accordion (Single Open)</h2>
        <Accordion items={faqItems} />
      </div>

      <div className="space-y-4 mt-8">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Multiple Open Accordion</h2>
        <Accordion items={faqItems.slice(0, 3)} allowMultiple={true} defaultOpenItems={["fence-panel-type"]} />
      </div>

      <div className="space-y-4 mt-8">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Flush Variant</h2>
        <Accordion items={faqItems.slice(0, 4)} variant="flush" className="border-t border-gray-200" />
      </div>
    </div>
  );
};

export default AccordionDemo;
