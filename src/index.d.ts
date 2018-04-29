import * as React from 'react';

declare const scrollTo = (anchor: string) => void {} 

interface AnchoredProps {
  anchor: string;
  children: JSX.Element | React.Component | Array<JSX.Element> | string | number;
};

declare const Anchored = ({anchor, children}: AnchoredProps): JSX.Element => {};

interface ScrollToProps {
  anchor: string;
  children: JSX.Element | React.Component | Array<JSX.Element> | string | number;
};

declare const ScrollTo = ({anchor, children}: ScrollToProps): JSX.Element => {};