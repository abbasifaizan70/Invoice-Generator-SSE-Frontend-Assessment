// src/types/assets.d.ts
declare module '*.png' {
    const value: any;
    export = value;
  }
  declare module '*.jpg' {
    const value: any;
    export = value;
  }
  declare module '*.jpeg' {
    const value: any;
    export = value;
  }
  declare module '*.gif' {
    const value: any;
    export = value;
  }
  declare module '*.svg' {
    const content: string;
    export default content;
  }
  