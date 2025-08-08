import { LinkText } from "@/packages/niteco-ui/components/atoms/link/Link";
// import { LinkText } from "components/atoms/link";
import { ILink } from "@/packages/niteco-ui/components/types/cms/ILink";
import { ITopHeader } from "@/packages/niteco-ui/components/types/cms/ITopHeader";
const TopHeader = ({ data }: { data: ITopHeader }) => {
  const { rows } = data || {};

  const containerClasses = {
    wrapper:
      "grid-cols-12 mx-auto w-full min-h-10 bg-background-tertiary flex items-center justify-between flex-wrap lg:flex-nowrap px-2 lg:px-4 gap-0 lg:gap-8 scroll-mt-28 font-primary",
    content: "flex flex-row w-full",
    navigation: "flex items-center gap-4 w-full",
    otherSitesText: "text-blue",
    mutedText: "text-muted",
  };

  return (
    <>
      {!!rows.length &&
        rows?.map((row, index) => {
          return (
            <div className={containerClasses.wrapper} key={index}>
              <div className={containerClasses.content}>
                <nav className={containerClasses.navigation}>
                  <div>
                    <img
                      src="/icons/wrench.svg"
                      alt="search"
                      width="24"
                      height="24"
                      className="hidden lg:inline-block"
                    />
                  </div>
                  {row?.columns?.map((column, index) => {
                    const columnsLength =
                      row?.columns && row?.columns?.length - 1;
                    return (
                      <div
                        key={index}
                        className={`flex flex-row gap-4 ${index === columnsLength ? "ml-auto hidden md:flex" : ""}`}
                      >
                        {column?.blocks?.map((block) => {
                          return block?.links?.map(
                            (link: ILink, index: number) => {
                              const isLast =
                                index === block?.links?.length - 1 ||
                                index === block?.links?.length - 2
                                  ? "hidden md:flex"
                                  : "";
                              return (
                                <div
                                  className={`flex flex-row gap-4 ${isLast}`}
                                  key={index}
                                >
                                  {block?.richText && (
                                    <div
                                      className="text-muted"
                                      dangerouslySetInnerHTML={{
                                        __html: block.richText,
                                      }}
                                    />
                                  )}
                                  <LinkText
                                    className={`flex items-center space-x-1 border-b border-transparent hover:border-b-blue text-xs md:text-base text-center md:text-left text-blue hover:text-blue/80 ${link.cssClass}`}
                                    href={link.url}
                                    target={link.target}
                                    children={link.text}
                                    clampText={false}
                                  />
                                </div>
                              );
                            },
                          );
                        })}
                      </div>
                    );
                  })}
                </nav>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default TopHeader;
