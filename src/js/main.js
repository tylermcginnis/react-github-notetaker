var React = require('react');
var App = require('./components/App');
var Home = require('./components/Home')
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Home} />
  </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});