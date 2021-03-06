import React from 'react';
import { findDOMNode } from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import Container from '../src/Container';

describe('Container', () => {

  it('Should render a Container', () => {
    let title = 'Test';
    let instance = ReactTestUtils.renderIntoDocument(
      <Container>{title}</Container>
    );
    assert.equal(findDOMNode(instance).className, 'container');
    assert.equal(findDOMNode(instance).innerHTML, title);
  });

  it('Should render a Page Container', () => {
    let title = 'Test';
    let instance = ReactTestUtils.renderIntoDocument(
      <Container page>{title}</Container>
    );
    assert.equal(findDOMNode(instance).className, 'page-container');
  });


  it('Should have a custom className', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Container className="custom" />
    );
    assert.ok(findDOMNode(instance).className.match(/\bcustom\b/));
  });


  it('Should have a custom style', () => {
    const fontSize = '12px';
    let instance = ReactTestUtils.renderIntoDocument(
      <Container style={{ fontSize }} />
    );
    assert.equal(findDOMNode(instance).style.fontSize, fontSize);
  });

});
