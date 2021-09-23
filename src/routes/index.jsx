import { BrowserRouter, Route } from 'react-router-dom';

import { Main } from 'pages';

const Router = () => (
  <BrowserRouter>
    <Route exact path="/">
      <Main />
    </Route>
  </BrowserRouter>
);

export default Router;
