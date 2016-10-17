// import React from 'react';

const TestComponent = () => (<h1>This is a test component.</h1>);

/**
 * Must export by creating a global object, so we can
 * load dynamically on the page.
 */ 
// export default TestComponent;
window.loadInjectedComponent(TestComponent);