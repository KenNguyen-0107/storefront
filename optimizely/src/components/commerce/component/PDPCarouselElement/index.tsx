import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import {
  PDPCarouselElementDataFragmentDoc,
  type PDPCarouselElementDataFragment,
} from "@/gql/graphql";
import { PDPCarouselElementLayoutProps } from "./displayTemplates";
import { parseSliderValue } from "@/utils/common-utils";
import { extractSettings } from "@remkoj/optimizely-cms-react/rsc";
import { CommerceProduct } from "@/app/lib/commercetools/models/commerce-dto.model";
import SliderComponent from "../../../../../../packages/niteco-ui/components/organisms/Slider/SliderComponent";

/**
 * PDP Carousel Element
 * Product Carousel Element
 */
export const PDPCarouselElementComponent: CmsComponent<
  PDPCarouselElementDataFragment,
  PDPCarouselElementLayoutProps
> = ({ data, layoutProps, children }) => {
  const componentName = "PDP Carousel Element";
  const componentInfo = "Product Carousel Element";

  console.log("data", data);
  console.log("layoutProps", layoutProps);
  console.log("children", children);

  const {
    slidesPerGroupDesktop = "",
    slidesPerGroupMobile = "",
    slidesPerViewDesktop = "",
    slidesPerViewMobile = "",
    arrowPositionDesktop = "",
    arrowPositionMobile = "",
    autoPlayDelayMS = "",
    autoPlay = "",
    infinite = "",
    arrowIconDisplay = "both",
    speed = 1000,
  } = extractSettings(layoutProps as any);

  const slidesPerGroupDesktopParsed = parseSliderValue(
    slidesPerGroupDesktop,
  ) as number;
  const slidesPerGroupMobileParsed = parseSliderValue(
    slidesPerGroupMobile,
  ) as number;
  const slidesPerViewDesktopParsed = parseSliderValue(
    slidesPerViewDesktop,
  ) as number;
  const slidesPerViewMobileParsed = parseSliderValue(
    slidesPerViewMobile,
  ) as number;
  const arrowPositionDesktopParsed = parseSliderValue(
    arrowPositionDesktop,
  ) as boolean;
  const arrowPositionMobileParsed = parseSliderValue(
    arrowPositionMobile,
  ) as boolean;
  const autoPlayDelayMSParsed = parseSliderValue(autoPlayDelayMS) as boolean;
  const autoPlayParsed = parseSliderValue(autoPlay) as boolean;
  const infiniteParsed = parseSliderValue(infinite) as boolean;
  const speedParsed = parseSliderValue(speed) as number;

  let products: CommerceProduct[] = [
    {
      id: "5b75f803-10e1-4c11-91c1-71c0ade3e803",
      type: "relatedProduct",
      slug: "wire-fencing-plain-wire",

      name: "Plain Wire Fencing",

      images: [
        {
          url: "https://images.eu-central-1.aws.commercetools.com/e282ca61-c631-4e6e-ba33-7d0ac90e7516/Machine%20Rounded%20Half-zxisD2X9.jpg",
          alt: "",
        },
      ],
    },

    {
      id: "be7f9ac6-6a74-4310-89c9-a38fe4786e5f",
      type: "relatedProduct",
      slug: "chain-mesh",
      name: "Horse Safe Chain Mesh Fencing",
      images: [
        {
          url: "https://images.eu-central-1.aws.commercetools.com/e282ca61-c631-4e6e-ba33-7d0ac90e7516/Machine%20Rounded%20Half-vTVa_6L9.jpg",
          alt: "",
        },
      ],
    },
  ];

  let convertData = (products: CommerceProduct[]) => {
    let a = products.map((product) => {
      return {
        type: "relatedProduct",
        image: {
          image: {
            src: product?.images?.[0]?.url,
            alt: product?.images?.[0]?.alt,
            height: 334,
            width: 334,
          },
          imageMobile: {
            src: product?.images?.[0]?.url,
            alt: product?.images?.[0]?.alt,
            height: 168,
            width: 171,
          },
        },
        text: {
          content: `<h2 className="text-white">${product?.name}</h2>`,
        },
      };
    });
    return a;
  };

  console.log("123", convertData(products));

  return (
    <div className="">
      {data.CarouselSource === "relatedproducts" && (
        <div>
          <SliderComponent
            loop={infiniteParsed}
            arrowsDesktop={arrowPositionDesktopParsed}
            arrowsMobile={arrowPositionMobileParsed}
            slidesPerViewDesktop={slidesPerViewDesktopParsed}
            slidesPerViewMobile={slidesPerViewMobileParsed}
            slidesPerGroupDesktop={slidesPerGroupDesktopParsed}
            slidesPerGroupMobile={slidesPerGroupMobileParsed}
            autoplay={autoPlayParsed}
            autoplayDelay={autoPlayDelayMSParsed}
            speed={speedParsed}
            arrowIconDisplay={arrowIconDisplay}
            mobileSpaceBetween={16}
          >
            {/* {convertData(products)} */}
          </SliderComponent>
        </div>
      )}
    </div>
  );
};
PDPCarouselElementComponent.displayName =
  "PDP Carousel Element (Component/PDPCarouselElement)";
PDPCarouselElementComponent.getDataFragment = () => [
  "PDPCarouselElementData",
  PDPCarouselElementDataFragmentDoc,
];

export default PDPCarouselElementComponent;
