import { BrowserRouter, Route } from 'react-router-dom';

import { Main, SignUp, SignIn } from 'pages';

const Router = () => (
  <BrowserRouter>
    <Route exact path="/">
      <Main />
    </Route>
    <Route exact path="/sign-up">
      <SignUp />
    </Route>
    <Route exact path="/sign-in">
      <SignIn />
    </Route>
  </BrowserRouter>
);

export default Router;
