import { RenderPayload } from "../../../packages/composable-content-engine/types/renderPayload";

export const samplePayload: RenderPayload = {
  pageId: "pageId",
  title: "Server-Side Rendered Page from GraphQL",
  meta: {
    description: "This page content was fetched from GraphQL on the server-side",
    keywords: ["graphql", "server-side", "nextjs", "renderer"],
    ogimage: "/og-image.jpg",
  },
  sections: [
    {
      rows: [
        {
          style: {
            className: "mb-6 py-10 px-6 border border-gray-200 rounded-lg",
            inlineStyles: { textAlign: "left", paddingTop: 16, paddingBottom: 24, paddingLeft: 8, paddingRight: 8 },
          },
          rowWidthOptionDesktop: "narrow",
          columns: [
            {
              width: "100%",
              blocks: [
                {
                  type: "ImageTextBlocks",
                  loading: "eager",
                  content: "<div>Hello 111</div>",
                  image: {
                    image: {
                      src: "http://t1.gstatic.com/images?q=tbn:ANd9GcQjQBYjKZEnpFf4ZWAHep0tuMG8sEhrPVvZENa2VoYITC60iEWwijA4NWfSRiCAnw",
                      alt: "Image1",
                      width: 214,
                      height: 162,
                      cssClass: "object-cover",
                    },
                  },
                  button: [
                    {
                      label: "Primary",
                      link: {
                        url: "https://www.google.com",
                        target: "_blank",
                      },
                      variant: "Primary",
                    },
                  ],
                  contentImagePosition: "top",
                  style: { className: "border border-black border-[1px] py-10 px-6" },
                },
                {
                  type: "ImageTextBlocks",
                  loading: "eager",
                  content: "<div>Hello</div>",
                  image: {
                    image: {
                      src: "http://t1.gstatic.com/images?q=tbn:ANd9GcQjQBYjKZEnpFf4ZWAHep0tuMG8sEhrPVvZENa2VoYITC60iEWwijA4NWfSRiCAnw",
                      alt: "Image1",
                      width: 214,
                      height: 162,
                      cssClass: "object-cover",
                    },
                  },
                  button: [
                    {
                      label: "Primary",
                      link: {
                        url: "https://www.google.com",
                        target: "_blank",
                      },
                      variant: "Primary",
                    },
                  ],
                  contentImagePosition: "top",
                  style: { className: "border border-black border-[1px] py-10 px-6" },
                },
                {
                  type: "ImageTextBlocks",
                  loading: "eager",
                  content: "<div>Hello</div>",
                  image: {
                    image: {
                      src: "http://t1.gstatic.com/images?q=tbn:ANd9GcQjQBYjKZEnpFf4ZWAHep0tuMG8sEhrPVvZENa2VoYITC60iEWwijA4NWfSRiCAnw",
                      alt: "Image1",
                      width: 214,
                      height: 162,
                      cssClass: "object-cover",
                    },
                  },
                  button: [
                    {
                      label: "Primary",
                      link: {
                        url: "https://www.google.com",
                        target: "_blank",
                      },
                      variant: "Primary",
                    },
                  ],
                  contentImagePosition: "top",
                  style: { className: "border border-black border-[1px] py-10 px-6" },
                },
                {
                  type: "ImageTextBlocks",
                  loading: "eager",
                  content: "<div>Hello</div>",
                  image: {
                    image: {
                      src: "http://t1.gstatic.com/images?q=tbn:ANd9GcQjQBYjKZEnpFf4ZWAHep0tuMG8sEhrPVvZENa2VoYITC60iEWwijA4NWfSRiCAnw",
                      alt: "Image1",
                      width: 214,
                      height: 162,
                      cssClass: "object-cover",
                    },
                  },
                  button: [
                    {
                      label: "Primary",
                      link: {
                        url: "https://www.google.com",
                        target: "_blank",
                      },
                      variant: "Primary",
                    },
                  ],
                  contentImagePosition: "top",
                  style: { className: "border border-black border-[1px] py-10 px-6" },
                },
                {
                  type: "ImageTextBlocks",
                  loading: "eager",
                  content: "<div>Hello</div>",
                  image: {
                    image: {
                      src: "http://t1.gstatic.com/images?q=tbn:ANd9GcQjQBYjKZEnpFf4ZWAHep0tuMG8sEhrPVvZENa2VoYITC60iEWwijA4NWfSRiCAnw",
                      alt: "Image1",
                      width: 214,
                      height: 162,
                      cssClass: "object-cover",
                    },
                  },
                  button: [
                    {
                      label: "Primary",
                      link: {
                        url: "https://www.google.com",
                        target: "_blank",
                      },
                      variant: "Primary",
                    },
                  ],
                  contentImagePosition: "top",
                  style: { className: "border border-black border-[1px] py-10 px-6" },
                },
                {
                  type: "ImageTextBlocks",
                  loading: "eager",
                  content: "<div>Hello</div>",
                  image: {
                    image: {
                      src: "http://t1.gstatic.com/images?q=tbn:ANd9GcQjQBYjKZEnpFf4ZWAHep0tuMG8sEhrPVvZENa2VoYITC60iEWwijA4NWfSRiCAnw",
                      alt: "Image1",
                      width: 214,
                      height: 162,
                      cssClass: "object-cover",
                    },
                  },
                  button: [
                    {
                      label: "Primary",
                      link: {
                        url: "https://www.google.com",
                        target: "_blank",
                      },
                      variant: "Primary",
                    },
                  ],
                  contentImagePosition: "top",
                  style: { className: "border border-black border-[1px] py-10 px-6" },
                },
                {
                  type: "ImageTextBlocks",
                  loading: "eager",
                  content: "<div>Hello</div>",
                  image: {
                    image: {
                      src: "http://t1.gstatic.com/images?q=tbn:ANd9GcQjQBYjKZEnpFf4ZWAHep0tuMG8sEhrPVvZENa2VoYITC60iEWwijA4NWfSRiCAnw",
                      alt: "Image1",
                      width: 214,
                      height: 162,
                      cssClass: "object-cover",
                    },
                  },
                  button: [
                    {
                      label: "Primary",
                      link: {
                        url: "https://www.google.com",
                        target: "_blank",
                      },
                      variant: "Primary",
                    },
                  ],
                  contentImagePosition: "top",
                  style: { className: "border border-black border-[1px] py-10 px-6" },
                },
                {
                  type: "ImageTextBlocks",
                  loading: "eager",
                  content: "<div>Hello</div>",
                  image: {
                    image: {
                      src: "http://t1.gstatic.com/images?q=tbn:ANd9GcQjQBYjKZEnpFf4ZWAHep0tuMG8sEhrPVvZENa2VoYITC60iEWwijA4NWfSRiCAnw",
                      alt: "Image1",
                      width: 214,
                      height: 162,
                      cssClass: "object-cover",
                    },
                  },
                  button: [
                    {
                      label: "Primary",
                      link: {
                        url: "https://www.google.com",
                        target: "_blank",
                      },
                      variant: "Primary",
                    },
                  ],
                  contentImagePosition: "top",
                  style: { className: "border border-black border-[1px] py-10 px-6" },
                },
              ],
            },
          ],
          numberOfItemOnDesktop: 4,
          numberOfItemOnMobile: 2,
        },
        {
          style: {
            className: "mb-6 py-10 px-6 border border-gray-200 rounded-lg",
          },
          columns: [
            {
              width: "100%",
              blocks: [
                {
                  type: "quote",
                  quote:
                    "Server-side rendering with GraphQL provides the best of both worlds: fast initial loads and rich interactivity.",
                  author: "Modern Web Architecture",
                  style: { className: "text-black bg-white" },
                },
              ],
            },
          ],
        },
        {
          style: {
            className: "gap-4",
          },
          columns: [
            {
              style: {
                className: "bg-red-500",
                inlineStyles: { paddingTop: 16, paddingBottom: 24, paddingLeft: 8, paddingRight: 8 },
              },
              blocks: [
                {
                  type: "Image",
                  width: 300,
                  height: 200,
                  src: "http://t1.gstatic.com/images?q=tbn:ANd9GcQjQBYjKZEnpFf4ZWAHep0tuMG8sEhrPVvZENa2VoYITC60iEWwijA4NWfSRiCAnw",
                  alt: "Image",
                  loading: "eager",
                  style: { className: "flex justify-center h-[200px] w-[200px]" },
                },
              ],
            },
            {
              style: {
                className: "bg-red-500",
              },
              blocks: [
                {
                  type: "Image",
                  width: 300,
                  height: 200,
                  src: "http://t1.gstatic.com/images?q=tbn:ANd9GcQjQBYjKZEnpFf4ZWAHep0tuMG8sEhrPVvZENa2VoYITC60iEWwijA4NWfSRiCAnw",
                  alt: "Image",
                  loading: "eager",
                  style: { className: "flex justify-center h-[200px] w-[200px]" },
                },
              ],
            },
            {
              style: {
                className: "bg-red-500",
              },
              blocks: [
                {
                  type: "Image",
                  width: 300,
                  height: 200,
                  src: "http://t1.gstatic.com/images?q=tbn:ANd9GcQjQBYjKZEnpFf4ZWAHep0tuMG8sEhrPVvZENa2VoYITC60iEWwijA4NWfSRiCAnw",
                  alt: "Image",
                  loading: "eager",
                  style: { className: "flex justify-center h-[200px] w-[200px]" },
                },
              ],
            },
          ],
        },
        {
          style: {
            className: "bg-white",
          },
          columns: [
            {
              style: {
                className: "bg-red-500",
              },
              width: 4,
              blocks: [
                {
                  type: "Image",
                  width: 300,
                  height: 200,
                  src: "http://t1.gstatic.com/images?q=tbn:ANd9GcQjQBYjKZEnpFf4ZWAHep0tuMG8sEhrPVvZENa2VoYITC60iEWwijA4NWfSRiCAnw",
                  alt: "Image",
                  loading: "eager",
                  style: { className: "flex justify-center h-[200px] w-[200px]" },
                },
              ],
            },
            {
              width: 8,
              blocks: [
                {
                  // type: "HomeCategory",
                  type: "Slider",
                  // desktopNumberItems: 3,
                  // mobileNumberItems: 3,
                  settings: {
                    navigation: true,
                    loop: true,
                    slidesPerView: 3,
                    spaceBetween: 32,
                  },
                  style: {
                    className:
                      "bg-white grid grid-cols-4 gap-10 px-6 max-w-[1120px] text-center justify-items-center mx-auto",
                  },
                  children: [
                    {
                      type: "ImageTextBlocks",
                      loading: "eager",
                      content: "<div>Hello</div>",
                      image: {
                        image: {
                          src: "http://t1.gstatic.com/images?q=tbn:ANd9GcQjQBYjKZEnpFf4ZWAHep0tuMG8sEhrPVvZENa2VoYITC60iEWwijA4NWfSRiCAnw",
                          alt: "Image1",
                          width: 214,
                          height: 162,
                          cssClass: "object-cover",
                        },
                      },
                      button: [
                        {
                          label: "Primary",
                          link: {
                            url: "https://www.google.com",
                            target: "_blank",
                          },
                          variant: "Primary",
                        },
                      ],
                      contentImagePosition: "top",
                      style: { className: "border border-black border-[1px] py-10 px-6" },
                    },
                    {
                      type: "ImageTextBlocks",
                      loading: "eager",
                      content: "<div>Hello</div>",
                      image: {
                        image: {
                          src: "http://t1.gstatic.com/images?q=tbn:ANd9GcQjQBYjKZEnpFf4ZWAHep0tuMG8sEhrPVvZENa2VoYITC60iEWwijA4NWfSRiCAnw",
                          alt: "Image1",
                          width: 214,
                          height: 162,
                          cssClass: "object-cover",
                        },
                      },
                      button: [
                        {
                          label: "Primary",
                          link: {
                            url: "https://www.google.com",
                            target: "_blank",
                          },
                          variant: "Primary",
                        },
                      ],
                      contentImagePosition: "top",
                      style: { className: "border border-black border-[1px] py-10 px-6" },
                    },
                    {
                      type: "ImageTextBlocks",
                      loading: "eager",
                      content: "<div>Hello</div>",
                      image: {
                        image: {
                          src: "http://t1.gstatic.com/images?q=tbn:ANd9GcQjQBYjKZEnpFf4ZWAHep0tuMG8sEhrPVvZENa2VoYITC60iEWwijA4NWfSRiCAnw",
                          alt: "Image1",
                          width: 214,
                          height: 162,
                          cssClass: "object-cover",
                        },
                      },
                      button: [
                        {
                          label: "Primary",
                          link: {
                            url: "https://www.google.com",
                            target: "_blank",
                          },
                          variant: "Primary",
                        },
                      ],
                      contentImagePosition: "top",
                      style: { className: "border border-black border-[1px] py-10 px-6" },
                    },
                    {
                      type: "ImageTextBlocks",
                      loading: "eager",
                      content: "<div>Hello 2</div>",
                      image: {
                        image: {
                          src: "http://t1.gstatic.com/images?q=tbn:ANd9GcQjQBYjKZEnpFf4ZWAHep0tuMG8sEhrPVvZENa2VoYITC60iEWwijA4NWfSRiCAnw",
                          alt: "Image1",
                          width: 214,
                          height: 162,
                          cssClass: "object-cover",
                        },
                      },
                      button: [
                        {
                          label: "Primary",
                          link: {
                            url: "https://www.google.com",
                            target: "_blank",
                          },
                          variant: "Secondary",
                        },
                      ],
                      contentImagePosition: "top",
                      style: { className: "border border-black border-[1px] py-10 px-6" },
                    },
                    {
                      type: "ImageTextBlocks",
                      loading: "eager",
                      content: "<div>Hello3</div>",
                      image: {
                        image: {
                          src: "http://t1.gstatic.com/images?q=tbn:ANd9GcQjQBYjKZEnpFf4ZWAHep0tuMG8sEhrPVvZENa2VoYITC60iEWwijA4NWfSRiCAnw",
                          alt: "Image1",
                          width: 214,
                          height: 162,
                          cssClass: "object-cover",
                        },
                      },
                      button: [
                        {
                          label: "Primary",
                          link: {
                            url: "https://www.google.com",
                            target: "_blank",
                          },
                          variant: "Emphasize",
                        },
                      ],
                      contentImagePosition: "top",
                      style: { className: "border border-black border-[1px] py-10 px-6" },
                    },
                    {
                      type: "ImageTextBlocks",
                      loading: "eager",
                      content: "<div>Hello4</div>",
                      image: {
                        image: {
                          src: "http://t1.gstatic.com/images?q=tbn:ANd9GcQjQBYjKZEnpFf4ZWAHep0tuMG8sEhrPVvZENa2VoYITC60iEWwijA4NWfSRiCAnw",
                          alt: "Image1",
                          width: 214,
                          height: 162,
                          cssClass: "object-cover",
                        },
                      },
                      button: [
                        {
                          label: "Primary",
                          link: {
                            url: "https://www.google.com",
                            target: "_blank",
                          },
                          variant: "Stroke",
                        },
                      ],
                      contentImagePosition: "top",
                      style: { className: "border border-black border-[1px] py-10 px-6" },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
