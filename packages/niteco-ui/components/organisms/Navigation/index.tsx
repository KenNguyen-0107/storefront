"use client";
import { LinkText } from "../../atoms/link";
import { BasicBanner } from "../BasicBanner";
import { INavigation } from "../../../components/types/cms/INavigation";
import { useEffect, useMemo, useRef, useState } from "react";

interface NavigationItem {
  link?: {
    text?: string;
    url?: string;
  };
  children?: NavigationItem[];
  content?: any;
}

function Navigation({ data }: { data: INavigation }) {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<string | null>(null);
  const [menuSubTitle, setMenuSubTitle] = useState<string | null>(null);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenuIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle mouse leave to close menu
  useEffect(() => {
    const handleMouseLeave = () => {
      setActiveMenuIndex(null);
    };

    if (navRef.current) {
      navRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (navRef.current) {
        navRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [navRef]);

  const linksInHerobanner = `#navigation-menu section[data-component="BannerItemBlock"] a`;

  useEffect(() => {
    const handleBannerLinkClick = () => {
      setActiveMenuIndex(null);
    };

    const bannerLinks = document.querySelectorAll(linksInHerobanner);
    bannerLinks.forEach((link) => {
      link.addEventListener("click", handleBannerLinkClick);
    });

    return () => {
      const bannerLinks = document.querySelectorAll(linksInHerobanner);
      bannerLinks.forEach((link) => {
        link.removeEventListener("click", handleBannerLinkClick);
      });
    };
  }, [linksInHerobanner]);

  // Handle link click to close menu
  const handleLinkClick = () => {
    setActiveMenuIndex(null);
  };

  // Update menuSubTitle when hovering over submenu items
  const handleSubItemHover = (text: string | undefined) => {
    if (text) {
      setMenuSubTitle(text);
    }
  };

  // Set the first submenu item text as default when menu opens
  useMemo(() => {
    if (
      activeMenuIndex !== null &&
      data?.items?.[activeMenuIndex]?.children?.length > 0
    ) {
      const firstSubItem = data.items[activeMenuIndex].children[0];
      firstItemRef.current = firstSubItem?.link?.text || null;
      setMenuSubTitle(firstItemRef.current);
    } else {
      setMenuSubTitle(null);
    }
  }, [activeMenuIndex, data?.items]);

  return (
    <>
      <div
        className="hidden lg:grid grid-cols-12 mx-auto gap-8 w-full bg-white"
        id="navigation-menu"
      >
        <div className="col-span-full">
          <div className="relative">
            <nav
              className="wrapper mx-auto hidden lg:flex items-center gap-8"
              ref={navRef}
            >
              {data?.items?.map((item: NavigationItem, index: number) => (
                <div
                  key={index}
                  className={`py-2 border-b-[3px] ${activeMenuIndex === index ? "border-yellow" : "border-transparent hover:border-yellow"}`}
                  onMouseEnter={() => setActiveMenuIndex(index)}
                >
                  <div className="cursor-pointer">
                    <LinkText
                      clampText={false}
                      className="font-primary text-blue uppercase"
                      href={item?.link?.url}
                      title={item?.link?.text}
                      onClick={handleLinkClick}
                    >
                      {item?.link?.text}
                    </LinkText>
                  </div>
                  {item?.children && item?.children?.length > 0 && (
                    <div
                      className={`absolute z-20 top-full left-0 right-0 bg-muted-background shadow-lg h-[500px] transition-all ease-in ${activeMenuIndex === index ? "visible opacity-100" : "invisible opacity-0"}`}
                    >
                      {item?.link && (
                        <h4 className="uppercase wrapper text-blue mt-10 mb-6">
                          {item?.link?.text}
                        </h4>
                      )}
                      <div className="wrapper relative flex flex-col items-start">
                        {item?.children.map(
                          (subItem: NavigationItem, subIndex: number) => (
                            <div
                              key={subIndex}
                              className={`group/item pb-2 font-primary  ${!subItem?.link?.text ? "hidden" : ""}`}
                              // onMouseEnter={() =>
                              //   handleSubItemHover(subItem?.link?.text)
                              // }
                            >
                              <div
                                className="flex items-center gap-[6px] text-muted hover:text-blue cursor-pointer z-10 relative"
                                onClick={handleLinkClick}
                              >
                                <LinkText
                                  className="sub-menu-link"
                                  href={subItem?.link?.url}
                                  title={subItem?.link?.text}
                                >
                                  {subItem?.link?.text}
                                </LinkText>
                              </div>
                              <div className=" absolute left-[210px] pl-[calc(20%-80px)] pr-[165px] h-[500px] top-0 space-y-2 z-20 w-content transform transition-all duration-500 ease-in-out group-hover/item:visible group-hover/item:opacity-100 invisible opacity-0">
                                {subItem?.children &&
                                  subItem?.children?.length > 0 && (
                                    <div className="   ">
                                      {subItem?.children?.map(
                                        (
                                          nestedItem: NavigationItem,
                                          nestedIndex: number,
                                        ) => (
                                          <div
                                            key={nestedIndex}
                                            onClick={handleLinkClick}
                                          >
                                            <LinkText
                                              className="text-muted inline-block lg:min-w-48"
                                              href={nestedItem?.link?.url}
                                              title={nestedItem?.link?.text}
                                            >
                                              <div className="border-b-[2px] border-transparent hover:border-yellow w-max">
                                                {nestedItem?.link?.text}
                                              </div>
                                            </LinkText>
                                          </div>
                                        ),
                                      )}
                                    </div>
                                  )}
                              </div>
                              {subItem?.content && (
                                <div className="absolute left-[calc(50%+90px)] top-0 w-[544px] h-[334px] p-6 transform transition-all duration-500 ease-in-out group-hover/item:visible group-hover/item:opacity-100 invisible opacity-0">
                                  {activeMenuIndex === index && (
                                    <BasicBanner block={subItem?.content} />
                                  )}
                                </div>
                              )}
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
