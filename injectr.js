var Injectr = (function() {
  var componentId = 0;
  var injectedComponents = [];
  var that = {};

  /**
   * Check that we have React and ReactDOM
   */
  var checkDependencies = function() {
    var error = false;

    if (window.React === undefined) {
      console.error('Missing dependency React');
      error = true;
    }

    if (window.ReactDOM === undefined) {
      console.error('Missing dependency ReactDOM');
      error = true;
    }

    if (error) {
      throw new Error('Missing one or more dependencies');
    }
  };
  checkDependencies();

  /**
   * This function is called by the injected component to mount itself,
   * so it must be mounted globally.
   */
  window.loadInjectedComponent = function(component) {
    injectedComponents.push(component);
  };

  /**
   * Called to load a component into the page and prepare it to
   * be mounted.
   */
  that.loadComponent = function(componentPath) {
    return new Promise(function(resolve, reject) {
      var id = componentId++;

      var script = document.createElement('script');
      script.src = componentPath;
      script.type = 'text/javascript';
      script.id = 'injected-component-' + id;

      // Resolve promise when script has loaded
      script.onload = function() { 
        resolve(id);
      };

      document.body.appendChild(script);
    });
  };

  /**
   * Render the specified component where we want to.
   */
  that.mountComponent = function(componentId, mountPoint, props) {
    ReactDOM.render(
      React.createElement(injectedComponents[componentId], props),
      mountPoint
    );
  };

  return that;
})();