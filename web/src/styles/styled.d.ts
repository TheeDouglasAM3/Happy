import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      backgroundStart: string,
      backgroundEnd: string,
      backgroundForm: string,
      backgroundBehindContent: string,
      button: string,
      buttonHover: string,
      secundaryButton: string,
      secundaryButtonHover: string,
      text: string
    }
  }
}