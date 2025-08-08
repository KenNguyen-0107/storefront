import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import {
  PDPSpecificationsElementDataFragmentDoc,
  type PDPSpecificationsElementDataFragment,
} from "@/gql/graphql";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/packages/niteco-ui/components/molecules/Tab";
import { cn } from "@/packages/niteco-ui/utils/utils";

interface ProductSpecification {
  Description?: string;
  HtmlContent?: string;
  Id?: string;
  Name?: string;
  NameDisplay?: string;
  SortOrder?: number;
  Value?: string;
}
interface ExtendedPDPSpecificationsData
  extends PDPSpecificationsElementDataFragment {
  specifications?: ProductSpecification[];
}

/**
 * PDP Specifications Element
 *
 */
export const PDPSpecificationsElementComponent: CmsComponent<
  ExtendedPDPSpecificationsData
> = ({ data, children }) => {
  const componentName = "PDP Specifications Element";
  const componentInfo = "";
  const mockData: ProductSpecification[] = [
    {
      Id: "spec-001",
      Name: "Material",
      NameDisplay: "Material Type",
      Description: "The main material used in product construction",
      Value: "Premium hardwood",
      HtmlContent:
        "<p>Premium <strong>hardwood</strong> sourced from sustainable forests</p>",
      SortOrder: 1,
    },
    {
      Id: "spec-002",
      Name: "Dimensions",
      NameDisplay: "Product Dimensions",
      Description: "Physical dimensions of the product",
      Value: "120cm x 80cm x 45cm",
      HtmlContent: "<p>Length: 120cm<br>Width: 80cm<br>Height: 45cm</p>",
      SortOrder: 2,
    },
    {
      Id: "spec-003",
      Name: "Weight",
      NameDisplay: "Product Weight",
      Description: "Total weight of the product",
      Value: "25kg",
      HtmlContent: "<p>25kg (55lbs)</p>",
      SortOrder: 3,
    },
  ];

  return (
    <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
      <div className="font-bold italic">{componentName}</div>
      <div>{componentInfo}</div>
      {Object.getOwnPropertyNames(mockData).length > 0 && (
        <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">
          {JSON.stringify(mockData, undefined, 4)}
        </pre>
      )}
      {children && <div className="mt-4 mx-4 flex flex-col">{children}</div>}
      <Tabs defaultValue={mockData[0].Id || ""}>
        <TabsList>
          {mockData.map((item) => (
            <TabsTrigger key={item.Id} value={item.Id || ""}>
              {item.NameDisplay}
            </TabsTrigger>
          ))}
        </TabsList>

        {mockData.map((item) => (
          <TabsContent key={item.Id} value={item.Id || ""}>
            <div
              className={cn(
                "max-w-[720px] mx-auto px-4",
                "[&_h2]:text-blue [&_h2]:uppercase [&_h2]:!mt-0",
                "[&_h3]:text-blue [&_h3]:uppercase [&_h3]:mt-10 [&_h3]:mb-2 [&_h3_strong]:text-blue",
                "[&_h4]:text-blue [&_h4]:uppercase",
                "[&_h5]:text-blue [&_h5]:uppercase",
                "[&_h6]:text-blue [&_h6]:uppercase",
                "[&_p]:font-lora [&>p]:text-muted",
                "[&_ul]:text-muted",
                "[&_strong]:text-duck",
                "[&_li]:text-muted [&_li]:list-none [&_li]:before:content-['•'] [&_li]:before:text-yellow [&_li]:before:mr-2 [&_li]:font-lora",
              )}
              dangerouslySetInnerHTML={{ __html: item.HtmlContent || "" }}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
PDPSpecificationsElementComponent.displayName =
  "PDP Specifications Element (Component/PDPSpecificationsElement)";
PDPSpecificationsElementComponent.getDataFragment = () => [
  "PDPSpecificationsElementData",
  PDPSpecificationsElementDataFragmentDoc,
];

export default PDPSpecificationsElementComponent;
