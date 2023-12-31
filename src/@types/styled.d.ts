import "styled-components";
import { defaultThemes } from "../styles/themes/default";

type ThemeType = typeof defaultThemes;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}

// yarn add styled-components  na raiz do projeto
// yarn add @types/styled-components -D
