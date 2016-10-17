'use strict';

var TestComponent2 = function TestComponent2() {
  return React.createElement(
    'div',
    { style: { background: 'green', color: 'white', width: 400, height: 400 } },
    'TEST COMPONENT 2'
  );
};

window.loadInjectedComponent(TestComponent2);
