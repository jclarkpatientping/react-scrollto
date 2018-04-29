import * as React from 'react';

declare const scrollTo = (anchor: string) => void {} 

interface AnchoredProps {
  anchored: string;
  children: JSX.Element | React.Component | Array<JSX.Element> | string | number;
};

declare const Anchored = ({anchored, children}: AnchoredProps): JSX.Element => {};

interface ScrollToProps {
  anchored: string;
  children: JSX.Element | React.Component | Array<JSX.Element> | string | number;
};

declare const ScrollTo = ({anchored, children}: ScrollToProps): JSX.Element => {};