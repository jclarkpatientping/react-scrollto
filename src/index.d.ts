import * as React from 'react';

declare function scrollTo(anchor: string): void;

interface AnchoredProps {
  anchor: string;
  children: JSX.Element | React.Component | Array<JSX.Element> | string | number;
}

declare function Anchored({anchor, children}: AnchoredProps): JSX.Element;

interface ScrollToProps {
  anchor: string;
  children: JSX.Element | React.Component | Array<JSX.Element> | string | number;
}

declare function ScrollTo({anchor, children}: ScrollToProps): JSX.Element;