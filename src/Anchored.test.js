import React from 'react';
import { shallow } from 'enzyme';

import { Anchored } from './Anchored';

describe('Anchored', () => {

  const anchor = 'anchor';
  const child = <div data-test="child">child</div>;

  it('Should render children with the given hash', () => {
    const anchored = shallow(<Anchored anchor={anchor}>{child}</Anchored>);
    const anchoredContent = anchored.find('div[data-test="child"]');
    expect(anchoredContent).toHaveLength(1);
  });

});