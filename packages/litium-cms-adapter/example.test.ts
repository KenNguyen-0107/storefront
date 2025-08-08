declare function describe(name: string, fn: () => void): void;
declare function it(name: string, fn: () => void): void;
declare function beforeEach(fn: () => void): void;
declare function expect(actual: any): {
  toEqual: (expected: any) => void;
};

import { AdapterFactory } from "../cms-adapter-core/src/AdapterFactory";
import { LitiumAdapter } from "./litiumAdapter";

describe("LitiumAdapter", () => {
  let adapter: LitiumAdapter;

  beforeEach(() => {
    adapter = AdapterFactory.create("litium") as LitiumAdapter;
  });

  it("should transform page data correctly", async () => {
    const input = {
      data: {
        content: {
          __typename: "Page",
          id: "test-id",
          url: "/",
          name: "Test Page",
          fields: {
            _name: "Test Page",
            __typename: "PageFieldContainer",
          },
          blocks: {
            main: [
              {
                __typename: "SectionBlock",
                fields: {
                  __typename: "SectionBlockFieldContainer",
                  _name: "Test Section",
                  contentVerticalAlign: null,
                  contentMarginTop: null,
                  contentMarginLeft: null,
                  contentMarginBottom: null,
                  contentMarginRight: null,
                  contentPaddingTop: null,
                  contentPaddingLeft: null,
                  contentPaddingBottom: null,
                  contentPaddingRight: null,
                  contentAlign: null,
                },
                children: [
                  {
                    __typename: "RowBlock",
                    fields: {
                      __typename: "RowBlockFieldContainer",
                      _name: "Test Row",
                      widthOptionDesktop: null,
                      widthOptionMobile: null,
                      numberOfItemOnDesktop: 1,
                      numberOfItemOnMobile: 1,
                      contentSpace: null,
                    },
                    children: [
                      {
                        __typename: "ColumnBlock",
                        fields: {
                          __typename: "ColumnBlockFieldContainer",
                          _name: "Test Column",
                          widthOptionDesktop: [
                            {
                              __typename: "TextOptionDefinition",
                              value: "Full",
                              name: "Full",
                            },
                          ],
                          widthOptionMobile: [
                            {
                              __typename: "TextOptionDefinition",
                              value: "Full",
                              name: "Full",
                            },
                          ],
                          commonStyles: [
                            {
                              __typename: "CommonStylesBlockFieldDefinition",
                              contentAlign: [
                                {
                                  __typename: "TextOptionDefinition",
                                  value: "Center",
                                  name: "Center",
                                },
                              ],
                              contentVerticalAlign: [
                                {
                                  __typename: "TextOptionDefinition",
                                  value: "Middle",
                                  name: "Middle",
                                },
                              ],
                              contentPaddingTop: null,
                              contentPaddingRight: null,
                              contentPaddingBottom: null,
                              contentPaddingLeft: null,
                              contentMarginTop: null,
                              contentMarginRight: null,
                              contentMarginBottom: null,
                              contentMarginLeft: null,
                            },
                          ],
                        },
                        children: [
                          {
                            __typename: "BannerItemBlock",
                            fields: {
                              __typename: "BannerItemBlockFieldContainer",
                              _name: "Test Banner",
                              commonStyles: [
                                {
                                  __typename: "CommonStylesBlockFieldDefinition",
                                  contentAlign: [
                                    {
                                      __typename: "TextOptionDefinition",
                                      value: "Center",
                                      name: "Center",
                                    },
                                  ],
                                  contentVerticalAlign: [
                                    {
                                      __typename: "TextOptionDefinition",
                                      value: "Middle",
                                      name: "Middle",
                                    },
                                  ],
                                  contentPaddingTop: null,
                                  contentPaddingRight: null,
                                  contentPaddingBottom: null,
                                  contentPaddingLeft: null,
                                  contentMarginTop: null,
                                  contentMarginRight: null,
                                  contentMarginBottom: null,
                                  contentMarginLeft: null,
                                },
                              ],
                              richTitle: "<h1>Test Title</h1>",
                              richSubTitle: "<h3>Test Subtitle</h3>",
                              richText: "<p>Test Text</p>",
                              backgroundType: [
                                {
                                  __typename: "TextOptionDefinition",
                                  value: "Image",
                                  name: "Image",
                                },
                              ],
                              backgroundImage: [
                                {
                                  __typename: "BackgroundImageBlockFieldDefinition",
                                  imageAltText: "test",
                                  image: {
                                    __typename: "PointerMediaImageItem",
                                    item: {
                                      url: "/test.jpg",
                                      dimension: {
                                        __typename: "Size",
                                        height: 700,
                                        width: 1905,
                                      },
                                      alt: null,
                                      filename: "test.jpg",
                                    },
                                  },
                                },
                              ],
                              backgroundLink: {
                                __typename: "LinkFieldDefinition",
                                url: "/",
                                text: "",
                              },
                              backgroundColorHex: null,
                              backgroundColorOpacity: null,
                              button: [
                                {
                                  __typename: "ButtonBlockFieldDefinition",
                                  buttonLink: {
                                    __typename: "LinkFieldDefinition",
                                    url: "/",
                                    text: "Test Button",
                                  },
                                  buttonType: [
                                    {
                                      __typename: "TextOptionDefinition",
                                      value: "Primary",
                                      name: "",
                                    },
                                  ],
                                },
                              ],
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      },
    };

    const result = await adapter.getPageData(input);

    expect(result).toEqual({
      pageId: "test-id",
      title: "Test Page",
      meta: {
        title: undefined,
        description: undefined,
        ogDescription: undefined,
        ogTitle: undefined,
        ogType: undefined,
        ogLocale: undefined,
        ogUrl: undefined,
        robots: undefined,
        language: undefined,
        links: [],
      },
      rows: [
        {
          style: undefined,
          columns: [
            {
              style: undefined,
              columns: [
                {
                  width: "full",
                  blocks: [
                    {
                      type: "banner",
                      props: {
                        title: "<h1>Test Title</h1>",
                        subtitle: "<h3>Test Subtitle</h3>",
                        text: "<p>Test Text</p>",
                        backgroundType: "Image",
                        backgroundImage: {
                          url: "/test.jpg",
                          dimension: {
                            height: 700,
                            width: 1905,
                          },
                          alt: null,
                          filename: "test.jpg",
                        },
                        backgroundLink: {
                          url: "/",
                          text: "",
                        },
                        backgroundColor: null,
                        backgroundColorOpacity: null,
                        buttons: [
                          {
                            text: "Test Button",
                            url: "/",
                            type: "Primary",
                          },
                        ],
                        style: {
                          textAlign: "center",
                          verticalAlign: "middle",
                          padding: {
                            top: null,
                            right: null,
                            bottom: null,
                            left: null,
                          },
                          margin: {
                            top: null,
                            right: null,
                            bottom: null,
                            left: null,
                          },
                        },
                      },
                    },
                  ],
                  style: {
                    className: "center middle",
                  },
                },
              ],
            },
          ],
        },
      ],
      extra: {
        url: "/",
        __typename: "Page",
        language: undefined,
      },
    });
  });

  it("should transform homepage data correctly", async () => {
    const input = {
      data: {
        content: {
          __typename: "HomePage",
          id: "test-id",
          url: "/",
          name: "Homepage",
          fields: {
            _name: "Homepage",
            __typename: "HomePageFieldContainer",
          },
          blocks: {
            main: [
              {
                __typename: "SectionBlock",
                fields: {
                  __typename: "SectionBlockFieldContainer",
                  _name: "HeroBanner",
                  contentVerticalAlign: null,
                  contentMarginTop: null,
                  contentMarginLeft: null,
                  contentMarginBottom: null,
                  contentMarginRight: null,
                  contentPaddingTop: null,
                  contentPaddingLeft: null,
                  contentPaddingBottom: null,
                  contentPaddingRight: null,
                  contentAlign: null,
                },
                children: [
                  {
                    __typename: "RowBlock",
                    fields: {
                      __typename: "RowBlockFieldContainer",
                      _name: "Banners",
                      widthOptionDesktop: null,
                      widthOptionMobile: null,
                      numberOfItemOnDesktop: 1,
                      numberOfItemOnMobile: 1,
                      contentSpace: null,
                    },
                    children: [
                      {
                        __typename: "BannerItemBlock",
                        fields: {
                          __typename: "BannerItemBlockFieldContainer",
                          _name: "HeroBanner",
                          commonStyles: [
                            {
                              __typename: "CommonStylesBlockFieldDefinition",
                              contentAlign: [
                                {
                                  __typename: "TextOptionDefinition",
                                  value: "Center",
                                  name: "Center",
                                },
                              ],
                              contentVerticalAlign: [
                                {
                                  __typename: "TextOptionDefinition",
                                  value: "Middle",
                                  name: "Middle",
                                },
                              ],
                              contentPaddingTop: null,
                              contentPaddingRight: null,
                              contentPaddingBottom: null,
                              contentPaddingLeft: null,
                              contentMarginTop: null,
                              contentMarginRight: null,
                              contentMarginBottom: null,
                              contentMarginLeft: null,
                            },
                          ],
                          richTitle: "<h1>Test Title</h1>",
                          richSubTitle: "<h3>Test Subtitle</h3>",
                          richText: "<p>Test Text</p>",
                          backgroundType: [
                            {
                              __typename: "TextOptionDefinition",
                              value: "Image",
                              name: "Image",
                            },
                          ],
                          backgroundImage: [
                            {
                              __typename: "BackgroundImageBlockFieldDefinition",
                              imageAltText: "test",
                              image: {
                                __typename: "PointerMediaImageItem",
                                item: {
                                  url: "/test.jpg",
                                  dimension: {
                                    __typename: "Size",
                                    height: 700,
                                    width: 1905,
                                  },
                                  alt: null,
                                  filename: "test.jpg",
                                },
                              },
                            },
                          ],
                          backgroundLink: {
                            __typename: "LinkFieldDefinition",
                            url: "/",
                            text: "",
                          },
                          backgroundColorHex: null,
                          backgroundColorOpacity: null,
                          button: [
                            {
                              __typename: "ButtonBlockFieldDefinition",
                              buttonLink: {
                                __typename: "LinkFieldDefinition",
                                url: "/",
                                text: "Test Button",
                              },
                              buttonType: [
                                {
                                  __typename: "TextOptionDefinition",
                                  value: "Primary",
                                  name: "",
                                },
                              ],
                            },
                          ],
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      },
    };

    const result = await adapter.getPageData(input);

    expect(result).toEqual({
      pageId: "test-id",
      title: "Homepage",
      meta: {
        title: undefined,
        description: undefined,
        ogDescription: undefined,
        ogTitle: undefined,
        ogType: undefined,
        ogLocale: undefined,
        ogUrl: undefined,
        robots: undefined,
        language: undefined,
        links: [],
      },
      rows: [
        {
          style: undefined,
          columns: [
            {
              style: undefined,
              columns: [
                {
                  width: undefined,
                  blocks: [
                    {
                      type: "banner",
                      props: {
                        title: "<h1>Test Title</h1>",
                        subtitle: "<h3>Test Subtitle</h3>",
                        text: "<p>Test Text</p>",
                        backgroundType: "Image",
                        backgroundImage: {
                          url: "/test.jpg",
                          dimension: {
                            height: 700,
                            width: 1905,
                          },
                          alt: null,
                          filename: "test.jpg",
                        },
                        backgroundLink: {
                          url: "/",
                          text: "",
                        },
                        backgroundColor: null,
                        backgroundColorOpacity: null,
                        buttons: [
                          {
                            text: "Test Button",
                            url: "/",
                            type: "Primary",
                          },
                        ],
                        style: {
                          textAlign: "center",
                          verticalAlign: "middle",
                          padding: {
                            top: null,
                            right: null,
                            bottom: null,
                            left: null,
                          },
                          margin: {
                            top: null,
                            right: null,
                            bottom: null,
                            left: null,
                          },
                        },
                      },
                    },
                  ],
                  style: undefined,
                },
              ],
            },
          ],
        },
      ],
      extra: {
        url: "/",
        __typename: "HomePage",
        language: undefined,
      },
    });
  });

  it("should transform header data correctly", async () => {
    const input = {
      data: {
        channel: {
          website: {
            blocks: {
              topHeader: [
                {
                  __typename: "TopHeaderContainerBlock",
                  type: "top-header",
                  hidden: false,
                  commonStyles: [
                    {
                      __typename: "CommonStylesBlockFieldDefinition",
                      contentAlign: [
                        {
                          __typename: "TextOptionDefinition",
                          value: "Center",
                          name: "Center",
                        },
                      ],
                    },
                  ],
                  children: [
                    {
                      __typename: "RowBlock",
                      fields: {
                        __typename: "RowBlockFieldContainer",
                        _name: "TopHeaderRow",
                        numberOfItemOnDesktop: 1,
                        numberOfItemOnMobile: 1,
                      },
                      children: [
                        {
                          __typename: "ColumnBlock",
                          fields: {
                            __typename: "ColumnBlockFieldContainer",
                            _name: "Top Header Column",
                            widthOptionDesktop: [
                              {
                                __typename: "TextOptionDefinition",
                                value: "Full",
                                name: "Full",
                              },
                            ],
                          },
                          children: [
                            {
                              __typename: "BannerItemBlock",
                              fields: {
                                __typename: "BannerItemBlockFieldContainer",
                                _name: "Header Banner",
                                richTitle: "<h2>Header Title</h2>",
                                richText: "<p>Header content</p>",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
              mainMenu: [
                {
                  __typename: "NavigationContainerBlock",
                  fields: {
                    layoutDesktop: [
                      {
                        __typename: "TextOptionDefinition",
                        value: "horizontal",
                        name: "",
                      },
                    ],
                    layoutMobile: [
                      {
                        __typename: "TextOptionDefinition",
                        value: "vertical",
                        name: "",
                      },
                    ],
                    layoutTablet: [
                      {
                        __typename: "TextOptionDefinition",
                        value: "horizontal",
                        name: "",
                      },
                    ],
                  },
                  children: [
                    {
                      __typename: "NavigationItemBlock",
                      fields: {
                        _name: "Home",
                        navigationLink: {
                          __typename: "LinkFieldDefinition",
                          url: "/",
                          text: "Home",
                          target: "_self",
                        },
                      },
                      children: [
                        {
                          __typename: "NavigationItemBlock",
                          fields: {
                            _name: "Submenu",
                            navigationLink: {
                              __typename: "LinkFieldDefinition",
                              url: "/submenu",
                              text: "Submenu",
                              target: "_self",
                            },
                          },
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    };

    const result = await adapter.getHeaderData(input);

    expect(result).toEqual({
      topHeader: {
        rows: [
          {
            style: {
              textAlign: "center",
            },
            columns: [
              {
                width: "Full",
                widthOptionDesktop: "Full",
                widthOptionMobile: undefined,
                blocks: [
                  {
                    type: "banner",
                    props: {
                      title: "<h2>Header Title</h2>",
                      text: "<p>Header content</p>",
                      style: {
                        textAlign: undefined,
                        verticalAlign: undefined,
                        padding: {
                          top: null,
                          right: null,
                          bottom: null,
                          left: null,
                        },
                        margin: {
                          top: null,
                          right: null,
                          bottom: null,
                          left: null,
                        },
                      },
                    },
                  },
                ],
                style: undefined,
              },
            ],
            numberOfItemOnDesktop: 1,
            numberOfItemOnMobile: 1,
            backgroundColorHex: undefined,
            backgroundColorOpacity: undefined,
            rowWidthOptionDesktop: undefined,
            rowWidthOptionMobile: undefined,
            contentSpace: undefined,
          },
        ],
        type: "TopHeaderContainerBlock",
        style: {
          textAlign: "center",
        },
        hidden: false,
      },
      mainNavigation: {
        layoutDesktop: "horizontal",
        layoutMobile: "vertical",
        layoutTablet: "horizontal",
        items: [
          {
            link: {
              type: "internal",
              text: "Home",
              url: "/",
              target: "_self",
              cssClass: "",
              style: {},
            },
            text: "Home",
            content: [],
            children: [
              {
                link: {
                  type: "internal",
                  text: "Submenu",
                  url: "/submenu",
                  target: "_self",
                  cssClass: "",
                  style: {},
                },
                text: "Submenu",
                content: [],
              },
            ],
          },
        ],
      },
    });
  });

  it("should transform footer data correctly", async () => {
    const input = {
      data: {
        channel: {
          website: {
            blocks: {
              footer: [
                {
                  __typename: "FooterContainerBlock",
                  type: "footer",
                  hidden: false,
                  commonStyles: [
                    {
                      __typename: "CommonStylesBlockFieldDefinition",
                      contentAlign: [
                        {
                          __typename: "TextOptionDefinition",
                          value: "Center",
                          name: "Center",
                        },
                      ],
                    },
                  ],
                  children: [
                    {
                      __typename: "RowBlock",
                      fields: {
                        __typename: "RowBlockFieldContainer",
                        _name: "Footer Row",
                        numberOfItemOnDesktop: 3,
                        numberOfItemOnMobile: 1,
                      },
                      children: [
                        {
                          __typename: "ColumnBlock",
                          fields: {
                            __typename: "ColumnBlockFieldContainer",
                            _name: "Footer Column 1",
                            widthOptionDesktop: [
                              {
                                __typename: "TextOptionDefinition",
                                value: "One Third",
                                name: "One Third",
                              },
                            ],
                          },
                          children: [
                            {
                              __typename: "BannerItemBlock",
                              fields: {
                                __typename: "BannerItemBlockFieldContainer",
                                _name: "Footer Content 1",
                                richTitle: "<h3>Footer Section 1</h3>",
                                richText: "<p>Footer content 1</p>",
                              },
                            },
                          ],
                        },
                        {
                          __typename: "ColumnBlock",
                          fields: {
                            __typename: "ColumnBlockFieldContainer",
                            _name: "Footer Column 2",
                            widthOptionDesktop: [
                              {
                                __typename: "TextOptionDefinition",
                                value: "One Third",
                                name: "One Third",
                              },
                            ],
                          },
                          children: [
                            {
                              __typename: "BannerItemBlock",
                              fields: {
                                __typename: "BannerItemBlockFieldContainer",
                                _name: "Footer Content 2",
                                richTitle: "<h3>Footer Section 2</h3>",
                                richText: "<p>Footer content 2</p>",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    };

    const result = await adapter.getFooterData(input);

    expect(result).toEqual({
      footer: {
        rows: [
          {
            style: {
              textAlign: "center",
            },
            columns: [
              {
                width: "One Third",
                widthOptionDesktop: "One Third",
                widthOptionMobile: undefined,
                blocks: [
                  {
                    type: "banner",
                    props: {
                      title: "<h3>Footer Section 1</h3>",
                      text: "<p>Footer content 1</p>",
                      style: {
                        textAlign: undefined,
                        verticalAlign: undefined,
                        padding: {
                          top: null,
                          right: null,
                          bottom: null,
                          left: null,
                        },
                        margin: {
                          top: null,
                          right: null,
                          bottom: null,
                          left: null,
                        },
                      },
                    },
                  },
                ],
                style: undefined,
              },
              {
                width: "One Third",
                widthOptionDesktop: "One Third",
                widthOptionMobile: undefined,
                blocks: [
                  {
                    type: "banner",
                    props: {
                      title: "<h3>Footer Section 2</h3>",
                      text: "<p>Footer content 2</p>",
                      style: {
                        textAlign: undefined,
                        verticalAlign: undefined,
                        padding: {
                          top: null,
                          right: null,
                          bottom: null,
                          left: null,
                        },
                        margin: {
                          top: null,
                          right: null,
                          bottom: null,
                          left: null,
                        },
                      },
                    },
                  },
                ],
                style: undefined,
              },
            ],
            numberOfItemOnDesktop: 3,
            numberOfItemOnMobile: 1,
            backgroundColorHex: undefined,
            backgroundColorOpacity: undefined,
            rowWidthOptionDesktop: undefined,
            rowWidthOptionMobile: undefined,
            contentSpace: undefined,
          },
        ],
        type: "FooterContainerBlock",
        style: {
          textAlign: "center",
        },
        hidden: false,
      },
    });
  });

  it("should transform real header data structure correctly", async () => {
    const input = {
      data: {
        channel: {
          id: "RGVmYXVsdENoYW5uZWxGaWVsZFRlbXBsYXRlQ2hhbm5lbApkSXRlbVN5c3RlbUlkPWJiNjNkYmI3NTYxNjQ1NjlhODk4ZmUwNmQzMDRkNGZhJkNoYW5uZWxTeXN0ZW1JZD1iYjYzZGJiNzU2MTY0NTY5YTg5OGZlMDZkMzA0ZDRmYQ==",
          url: "/",
          culture: {
            code: "en-GB",
          },
          website: {
            blocks: {
              topHeader: [
                {
                  __typename: "TopHeaderContainerBlock",
                  children: [
                    {
                      __typename: "RowBlock",
                      fields: {
                        __typename: "RowBlockFieldContainer",
                        _name: "TopHeaderRow",
                        numberOfItemOnDesktop: null,
                        numberOfItemOnMobile: null,
                        contentSpace: null,
                        backgroundColorHex: null,
                        backgroundColorOpacity: null,
                        commonStyles: null,
                        rowWidthOptionDesktop: null,
                        rowWidthOptionMobile: null,
                        blockHeight: null,
                      },
                      children: [
                        {
                          __typename: "ColumnBlock",
                          fields: {
                            __typename: "ColumnBlockFieldContainer",
                            _name: "column left",
                            commonStyles: null,
                            numberOfItemOnDesktop: null,
                            numberOfItemOnMobile: null,
                            widthOptionDesktop: null,
                            widthOptionMobile: null,
                            blockHeight: null,
                          },
                          children: [
                            {
                              __typename: "TopHeaderBlock",
                              fields: {
                                __typename: "TopHeaderBlockFieldContainer",
                                _name: "TopHeader-Left",
                                position: [
                                  {
                                    __typename: "TextOptionDefinition",
                                    value: "left",
                                    name: "",
                                  },
                                ],
                                richText: null,
                                backgroundColorHex: "#D8D8DD",
                                links: [
                                  {
                                    __typename: "LinksBlockFieldDefinition",
                                    navigationLink: {
                                      __typename: "LinkFieldDefinition",
                                      url: "/",
                                      text: "FENCE CALCULATOR",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
              mainMenu: [
                {
                  __typename: "NavigationContainerBlock",
                  fields: {
                    layoutDesktop: [
                      {
                        __typename: "TextOptionDefinition",
                        value: "horizontal",
                        name: "",
                      },
                    ],
                    layoutMobile: [
                      {
                        __typename: "TextOptionDefinition",
                        value: "burger",
                        name: "",
                      },
                    ],
                    layoutTablet: [
                      {
                        __typename: "TextOptionDefinition",
                        value: "horizontal",
                        name: "",
                      },
                    ],
                  },
                  children: [
                    {
                      __typename: "NavigationItemBlock",
                      fields: {
                        _name: "Fencing",
                        navigationLink: null,
                      },
                      children: [
                        {
                          __typename: "NavigationItemBlock",
                          fields: {
                            _name: "Agricultural Fencing",
                            navigationLink: null,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    };

    const result = await adapter.getHeaderData(input);

    expect(result).toEqual({
      topHeader: {
        rows: [
          {
            style: undefined,
            columns: [
              {
                width: undefined,
                widthOptionDesktop: undefined,
                widthOptionMobile: undefined,
                blocks: [
                  {
                    type: "topHeader",
                    props: {
                      position: "left",
                      backgroundColorHex: "#D8D8DD",
                      links: [
                        {
                          text: "FENCE CALCULATOR",
                          url: "/",
                          target: "_self",
                          cssClass: "",
                          style: {},
                        },
                      ],
                      style: {
                        textAlign: undefined,
                        verticalAlign: undefined,
                        padding: {
                          top: null,
                          right: null,
                          bottom: null,
                          left: null,
                        },
                        margin: {
                          top: null,
                          right: null,
                          bottom: null,
                          left: null,
                        },
                      },
                    },
                  },
                ],
                style: undefined,
              },
            ],
            numberOfItemOnDesktop: null,
            numberOfItemOnMobile: null,
            backgroundColorHex: null,
            backgroundColorOpacity: null,
            rowWidthOptionDesktop: null,
            rowWidthOptionMobile: null,
            contentSpace: null,
          },
        ],
        type: "TopHeaderContainerBlock",
        style: undefined,
        hidden: undefined,
      },
      mainNavigation: {
        layoutDesktop: "horizontal",
        layoutMobile: "burger",
        layoutTablet: "horizontal",
        items: [
          {
            link: {
              type: "internal",
              text: "Fencing",
              url: "",
              target: "_self",
              cssClass: "",
              style: {},
            },
            text: "Fencing",
            content: [],
            children: [
              {
                link: {
                  type: "internal",
                  text: "Agricultural Fencing",
                  url: "",
                  target: "_self",
                  cssClass: "",
                  style: {},
                },
                text: "Agricultural Fencing",
                content: [],
              },
            ],
          },
        ],
      },
    });
  });
});
