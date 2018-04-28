import React from 'react';
import { shallow } from 'enzyme';

import { ScrollTo, scrollToAnchor } from './ScrollTo';

describe('ScrollTo', () => {

  beforeEach(() => {
    global.location.hash = '';
  })

  const anchor = '#anchor';
  const children = <div>children</div>;

  it(`scrollToAnchor should change the location hash to ${anchor}`, () => {
    scrollToAnchor(anchor);
    expect(global.location.hash).toEqual(anchor);
  });

  const wrapper = shallow(<ScrollTo anchor={anchor}>{children}</ScrollTo>);
  const div = wrapper.find('div[data-test="ScrollToRoot"]');

  it('should render ScrollTo component', () => {
    expect(div).toHaveLength(1);
  });

  it('should change location hash on click', () => {
    div.simulate('click');
    expect(global.location.hash).toEqual(anchor);
  });

});