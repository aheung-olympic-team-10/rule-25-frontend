import { BrowserRouter, Route } from 'react-router-dom';

import { Main, SignUp, SignIn } from 'pages';
import { Layout } from 'ui';

const Router = () => (
  <Layout>
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
  </Layout>
);

export default Router;
