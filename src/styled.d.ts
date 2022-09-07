import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
  
    colors: {
        primary:string;
        background:string;
        onPrimary:string;
        onBackground:string;
    };
  }
}