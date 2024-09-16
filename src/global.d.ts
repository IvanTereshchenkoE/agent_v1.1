declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

  const src: string;
  export default src;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.webp" {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare namespace Foo {
  export default window;
}



declare module 'react-helmet';
declare module 'odometer';

declare module '*.gif' {
  const content: string;
  export default content;
}