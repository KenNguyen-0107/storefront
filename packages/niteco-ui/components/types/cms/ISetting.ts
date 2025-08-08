export interface ISetting {
  companyAddress: {
    phoneNumber: string;
  };
  logo: {
    title: string;
    href: string;
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  account: {
    greeting: string;
    guestText: string;
    accountText: string;
    links: Array<{
      text: string;
      href: string;
    }>;
  };
  cart: {
    title: string;
    href: string;
  };
  search: {
    ariaLabel: string;
    title: string;
    iconSrc: string;
  };
}
