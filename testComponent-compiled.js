"use strict";

// import React from 'react';

var TestComponent = function TestComponent() {
  return React.createElement(
    "h1",
    null,
    "This is a test component."
  );
};

/**
 * Must export by creating a global object, so we can
 * load dynamically on the page.
 */
// export default TestComponent;
window.loadInjectedComponent(TestComponent);
