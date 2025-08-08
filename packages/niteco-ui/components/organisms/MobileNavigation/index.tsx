"use client";
import { useNavMenuStore } from "../../../store/nav-store";
import { useEffect, useState, useMemo } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { LinkText } from "../../atoms/link";
import { ITopHeader } from "@/packages/niteco-ui/components/types/cms/ITopHeader";
import { ISetting } from "@/packages/niteco-ui/components/types/cms/ISetting";

// Define proper types for menu data
interface LinkType {
  text: string;
  url: string;
}

interface MenuItem {
  link: LinkType;
  children: MenuItem[];
}

interface MobileNavigationProps {
  data: {
    items?: MenuItem[];
  };
  topHeaderData: ITopHeader;
  settings: ISetting;
}

function MobileNavigation({
  data,
  topHeaderData,
  settings,
}: MobileNavigationProps) {
  const loginOrRegister = topHeaderData?.rows?.[0]?.columns?.[1]?.blocks?.[0];
  const { items = [] } = data || {};
  const { isOpen, close } = useNavMenuStore();

  // Track expanded states for each menu level
  const [expandedLevel1, setExpandedLevel1] = useState<number | null>(null);
  const [expandedLevel2, setExpandedLevel2] = useState<number | null>(null);

  // Memoize the mobile menu state
  const mobileMenuState = useMemo(() => {
    return {
      isOpen,
      hasItems: items && items.length > 0,
    };
  }, [isOpen, items]);

  // Handle body overflow when menu is open
  useEffect(() => {
    if (document.body.offsetWidth > 640) return;

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Handle level 1 menu expansion
  const handleLevel1Click = (index: number) => {
    setExpandedLevel1(expandedLevel1 === index ? null : index);
    setExpandedLevel2(null); // Reset level 2 when changing level 1
  };

  // Handle level 2 menu expansion
  const handleLevel2Click = (index: number) => {
    setExpandedLevel2(expandedLevel2 === index ? null : index);
  };

  return (
    <>
      <div
        className={`flex justify-end lg:hidden
            absolute top-[calc(100%+14px)] -right-2 h-screen overflow-x-hidden overflow-y-auto ${isOpen ? "translate-x-0 w-screen" : "translate-x-full w-0"}`}
      >
        {isOpen && (
          <div
            className="absolute top-0 right-0 w-screen h-screen bg-black/10"
            role="button"
            onClick={() => close()}
          />
        )}
        <div
          className={`bg-white w-[calc(100%-40px)] relative z-20 overflow-y-auto
            transform transition-all ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full w-0"}`}
        >
          <nav className="flex flex-col relative">
            {items?.map((item, index) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = expandedLevel1 === index;

              return !hasChildren ? (
                <LinkText
                  key={`level1-${index}`}
                  className="w-full flex items-center justify-between pl-6 pr-4 py-3"
                  href={item?.link?.url}
                  children={
                    <h4 className="uppercase text-blue">{item?.link?.text}</h4>
                  }
                />
              ) : (
                <div
                  key={`level1-${index}`}
                  className={`${isExpanded ? "absolute top-0 right-0 w-full h-screen bg-white" : ""}`}
                >
                  <button
                    className={`w-full flex items-center justify-between pl-6 pr-4 py-3 transition-all ${
                      isExpanded
                        ? "mb-2 bg-muted-background gap-4 justify-start"
                        : ""
                    }`}
                    onClick={() => handleLevel1Click(index)}
                  >
                    {isExpanded && <ChevronLeft size={20} />}
                    <h4 className="uppercase text-blue">{item?.link?.text}</h4>
                    {!isExpanded && <ChevronRight size={20} />}
                  </button>

                  <div
                    className={`transition-all ease-in-out ${
                      isExpanded
                        ? "opacity-100 visible block"
                        : "opacity-0 invisible hidden"
                    }`}
                  >
                    <a
                      className="pl-6 pr-4 py-3 flex"
                      rel=""
                      href={item?.link?.url}
                    >
                      <h4 className="uppercase text-blue">View all</h4>
                    </a>

                    {item?.children?.map((child, childIndex) => {
                      const hasGrandchildren =
                        child.children && child.children.length > 0;
                      const isChildExpanded = expandedLevel2 === childIndex;

                      return !hasGrandchildren ? (
                        <LinkText
                          key={`level2-${childIndex}`}
                          className="w-full flex items-center justify-between pl-6 pr-4 py-3"
                          href={child?.link?.url}
                          children={
                            <h4 className="uppercase text-blue">
                              {child?.link?.text}
                            </h4>
                          }
                        />
                      ) : (
                        <div key={`level2-${childIndex}`}>
                          <div
                            className={`flex flex-col ${!child?.link?.text ? "hidden" : ""}`}
                          >
                            <button
                              className="pl-6 pr-4 py-3 flex items-center justify-between"
                              onClick={() => handleLevel2Click(childIndex)}
                            >
                              <h4 className="text-blue uppercase">
                                {child?.link?.text}
                              </h4>
                              <ChevronDown
                                size={20}
                                className={`transition-transform ${isChildExpanded ? "rotate-180" : ""}`}
                              />
                            </button>
                          </div>

                          <div
                            className={`flex flex-col gap-6 transition-all overflow-hidden ${
                              isChildExpanded
                                ? "max-h-[500px] py-2"
                                : "max-h-0 py-0"
                            }`}
                          >
                            <a
                              className="text-muted pl-10"
                              rel=""
                              href={child?.link?.url}
                            >
                              View All
                            </a>

                            {child?.children?.map((childSub, subIndex) => (
                              <LinkText
                                key={`level3-${subIndex}`}
                                className="text-muted pl-10"
                                href={childSub?.link?.url}
                                children={childSub?.link?.text}
                              />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex flex-col uppercase border-t border-b border-[#8C8B90]">
            <a
              className="block pl-6 pr-4 py-3 text-blue hover:bg-gray-300"
              rel=""
              href="/login-register"
            >
              {settings?.account?.links[0]?.text}
            </a>
          </div>

          <div className="pl-6 pr-4 py-3">
            <p
              className="text-muted font-primary"
              dangerouslySetInnerHTML={{
                __html: loginOrRegister?.richText || "",
              }}
            />
            <p className="text-base text-blue uppercase flex justify-between">
              <span className="font-primary">
                {loginOrRegister?.links[0]?.text}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileNavigation;
