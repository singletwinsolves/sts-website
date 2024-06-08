import { Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home}>
      <Route path="/about" component={About} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/quickfix" component={QuickFix} />
      <Route path="/solutions" component={Solutions} />
    </BrowserRouter>
  );
}