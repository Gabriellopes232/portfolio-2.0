import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      titles: string;
      text: string;
      footer: string;
      links: string;
      boxshadow: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }

  export interface CustomTheme {
    title: string;
    colors: {
      background: string;
      titles: string;
      text: string;
      footer: string;
      links: string;
      boxshadow: string;
    };
  }
}
