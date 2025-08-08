"use client";
import { useNavMenuStore } from "../../../store/nav-store";
import MobileNavigation from "../MobileNavigation";
import { ISetting } from "../../types/cms/ISetting";
import { INavigation, INavigationItem } from "../../types/cms/INavigation";
import { ITopHeader } from "@/packages/niteco-ui/components/types/cms/ITopHeader";
import { useEffect, useState, useMemo } from "react";
import NextImage from "next/image";

// Define interfaces to match MobileNavigation component requirements
interface LinkType {
  text: string;
  url: string;
}

interface MenuItem {
  link: LinkType;
  children: MenuItem[];
}

// Adapter function to convert INavigationItem to MenuItem
const adaptNavigationItems = (items: INavigationItem[] = []): MenuItem[] => {
  return items.map((item) => ({
    link: {
      text: item.link?.text || "",
      url: item.link?.url || "",
    },
    children: adaptNavigationItems(item.children),
  }));
};

const PrimaryHeader = ({
  data,
}: {
  data: {
    mainNavigationData: INavigation;
    settings: ISetting;
    topHeaderData: ITopHeader;
  };
}) => {
  const { mainNavigationData, settings, topHeaderData } = data || {};
  const { toggle } = useNavMenuStore();
  const [isMounted, setIsMounted] = useState(false);

  const handleToggleMegaMenu = () => {
    toggle();
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Convert navigation items using the adapter
  const adaptedNavigationItems = useMemo(() => {
    return adaptNavigationItems(mainNavigationData?.items);
  }, [mainNavigationData?.items]);
  return (
    <>
      <div className="grid-cols-12 mx-auto gap-8 w-full flex h-14 items-center justify-end lg:h-20 sticky top-0 z-80 px-2 bg-white">
        <div className="col-span-full flex justify-end w-full h-full gap-6 items-center">
          <div className="gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 wrapper mx-auto place-items-center flex items-center justify-between flex-wrap lg:grid [&>div:last-child]:hidden lg:[&>div:last-child]:block">
            <div className="w-full hidden lg:block">
              <div className="flex gap-2 items-center">
                <img
                  src="/icons/phone.svg"
                  width={24}
                  height={24}
                  alt="Phone icon"
                />
                <h3 className="text-blue">
                  {settings?.companyAddress?.phoneNumber}
                </h3>
              </div>
            </div>
            <a
              className="max-w-[320px]"
              rel=""
              title={settings?.logo?.title || "Jacksons Fencing Logo"}
              href={settings?.logo?.href || "/"}
            >
              <NextImage
                src={settings?.logo?.src}
                alt={settings?.logo?.alt || "Image"}
                loading="eager"
                priority={true}
                width={356}
                height={36}
                className="object-contain"
              />
            </a>
            <div className="grid-cols-12 mx-auto gap-8 w-full flex h-14 items-center justify-end lg:h-20 sticky top-0 z-10 px-2 bg-white font-primary">
              <div className="col-span-full flex justify-end w-full h-full gap-6 items-center">
                <div className="hidden lg:block">
                  <div className="font-medium text-blue">
                    {settings?.account?.greeting || "HELLO"}{" "}
                    {settings?.account?.guestText || "Guest"}
                  </div>
                  <div className="relative group z-[3]">
                    <a
                      className="font-medium text-blue flex items-center gap-2"
                      rel=""
                      href="/login-register"
                    >
                      <div>
                        {settings?.account?.accountText || "MY ACCOUNT"}
                      </div>
                      <span className="arrow-down" />
                    </a>
                    <div className="group-hover:block hidden absolute w-[200px] ">
                      {settings?.account?.links &&
                        settings?.account?.links.map(
                          (link: any, index: number) => (
                            <a
                              key={index}
                              className="block px-5 py-3 bg-[#f8f8f8] text-blue hover:bg-gray-300"
                              rel=""
                              href={link.href}
                            >
                              {link.text}
                            </a>
                          ),
                        )}
                      <a
                        className="block px-5 py-3 bg-[#f8f8f8] text-blue hover:bg-gray-300"
                        rel=""
                        href={settings?.cart?.href || "/cart"}
                      >
                        {settings?.cart?.title || "Basket"}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative hidden lg:block">
                  <a
                    className="inline-flex items-center justify-center rounded-md text-sm lg:text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none uppercase bg-cta-secondary-bg text-cta-secondary-text hover:border-cta-secondary-bg active:bg-cta-secondary-hover-bg active:text-cta-secondary-hover-text disabled:opacity-50 hw-9 hover:bg-transparent p-0 hover:text-blue"
                    rel=""
                    title={settings?.cart?.title || "Cart"}
                    href={settings?.cart?.href || "/cart"}
                  >
                    <span className="line-clamp-1">
                      <img
                        src="/icons/cart.svg"
                        alt="cart"
                        width={40}
                        height={40}
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute z-50 justify-center items-center bg-transparent right-4 top-0 h-full hidden lg:flex">
            <button
              className="flex-shrink-0 text-white transition-colors"
              aria-label={settings?.search?.ariaLabel || "Open Search"}
              title={settings?.search?.title || "Open Search"}
            >
              <img
                src={settings?.search?.iconSrc || "/icons/search.svg"}
                alt="search"
                width={40}
                height={40}
                sizes="(max-width: 991px) 20px, 40px"
                className="w-7 lg:w-10"
              />
            </button>
          </div>
          <div
            className="flex items-center gap-4 lg:hidden relative min-w-[144px] justify-end"
            id="nav-mobile-icons"
          >
            <button>
              <img src="/icons/phone.svg" alt="phone" width={24} height={24} />
            </button>
            <button
              className="flex-shrink-0 text-white transition-colors"
              aria-label={settings?.search?.ariaLabel || "Open Search"}
              title={settings?.search?.title || "Open Search"}
            >
              <img
                src="/icons/search.svg"
                alt="search"
                width={40}
                height={40}
                sizes="(max-width: 991px) 20px, 40px"
                className="w-7 lg:w-10"
              />
            </button>
            <a
              className="inline-flex items-center justify-center rounded-md text-sm lg:text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none uppercase bg-cta-secondary-bg text-cta-secondary-text hover:border-cta-secondary-bg active:bg-cta-secondary-hover-bg active:text-cta-secondary-hover-text disabled:opacity-50 hw-9 hover:bg-transparent p-0 hover:text-blue relative"
              rel=""
              title={settings?.cart?.title || "Cart"}
              href={settings?.cart?.href || "/cart"}
            >
              <span className="line-clamp-1">
                <img src="/icons/cart.svg" alt="cart" width={24} height={24} />
              </span>
            </a>
            <button onClick={handleToggleMegaMenu}>
              <img src="/icons/menu.svg" alt="menu" width={24} height={24} />
            </button>
            {isMounted && (
              <MobileNavigation
                data={{ items: adaptedNavigationItems }}
                topHeaderData={topHeaderData}
                settings={settings}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PrimaryHeader;
