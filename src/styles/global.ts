import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line no-shadow
export enum ColorPallete {
  PRIMARY_LIGHT = '#9ab1c8',
  PRIMARY_LIGHT_ALT = '#9bb2ca',
  PRIMARY_DARK = '#09416c',
  PRIMARY_BLANK = '#e6e7e7',
  NEUTRAL_DARK = '#18191d',
  NEUTRAL_BLANK = '#fcfcfc',
  NEUTRAL_LIGHTER = '#808080',
  NEUTRAL_LIGHTER_ALT = '#d6d4d4',
  NEUTRAL_DARKER = '#1d2024',
  NEUTRAL_DARKER_ALT = '#2a2b31',
  SYSTEM_RED = '#c11e0f',
  SYSTEM_ORANGE = '#f2921b',
  SYSTEM_BLUE = '#4a90e2',
  SYSTEM_PURPLE = '#494aa7',
  SYSTEM_GREEN = '#75b831',
}

export function applyAlpha(color: ColorPallete, alpha: number): string {
  return color + Math.round(alpha * 255).toString(16);
}

export default createGlobalStyle`
  :root {
    --color-primary-light: ${ColorPallete.PRIMARY_LIGHT};
    --color-primary-light-alt: ${ColorPallete.PRIMARY_LIGHT_ALT};
    --color-primary-dark: ${ColorPallete.PRIMARY_DARK};
    --color-primary-blank: ${ColorPallete.PRIMARY_BLANK};
    --color-neutral-dark: ${ColorPallete.NEUTRAL_DARK};
    --color-neutral-blank: ${ColorPallete.NEUTRAL_BLANK};
    --color-neutral-lighter: ${ColorPallete.NEUTRAL_LIGHTER};
    --color-neutral-lighter-alt: ${ColorPallete.NEUTRAL_LIGHTER_ALT};
    --color-neutral-darker: ${ColorPallete.NEUTRAL_DARKER};
    --color-neutral-darker-alt: ${ColorPallete.NEUTRAL_DARKER_ALT};
    --color-system-red: ${ColorPallete.SYSTEM_RED};
    --color-system-orange: ${ColorPallete.SYSTEM_ORANGE};
    --color-system-blue: ${ColorPallete.SYSTEM_BLUE};
    --color-system-purple: ${ColorPallete.SYSTEM_PURPLE};
    --color-system-green: ${ColorPallete.SYSTEM_GREEN};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--color-neutral-dark);
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    height: 100%;
  }

  body,
  input,
  button {
    font-family: 'Nunito', Arial, Helvetica, serif;
    font-size: 16px;
  }

  .no-user-select {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  ::-webkit-scrollbar{}
  ::-webkit-scrollbar-track {}
  ::-webkit-scrollbar-thumb {}
  ::-webkit-scrollbar-corner {}
`;
