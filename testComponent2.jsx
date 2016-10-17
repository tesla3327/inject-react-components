const TestComponent2 = () => {
  return (
    <div style={{ background: 'green', color: 'white', width: 400, height: 400 }}>
      { 'TEST COMPONENT 2' }
    </div>
  );
};

window.loadInjectedComponent(TestComponent2);
