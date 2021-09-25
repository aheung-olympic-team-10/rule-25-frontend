import { BrowserRouter, Route } from 'react-router-dom';

import {
  Main,
  MyPortfolio,
  Friends,
  AddAsset,
  AddAccountBook,
  SignUp,
  SignIn,
} from 'pages';
import { Layout, LayoutTopOnly } from 'ui';

const Router = () => (
  <BrowserRouter>
    <Route exact path="/">
      <Layout>
        <Main />
      </Layout>
    </Route>
    <Route exact path="/my-portfolio">
      <Layout>
        <MyPortfolio />
      </Layout>
    </Route>
    <Route exact path="/friends">
      <Layout>
        <Friends />
      </Layout>
    </Route>
    <Route exact path="/add-asset">
      <Layout>
        <AddAsset />
      </Layout>
    </Route>
    <Route exact path="/add-account-book">
      <Layout>
        <AddAccountBook />
      </Layout>
    </Route>
    <Route exact path="/sign-up">
      <LayoutTopOnly>
        <SignUp />
      </LayoutTopOnly>
    </Route>
    <Route exact path="/sign-in">
      <LayoutTopOnly>
        <SignIn />
      </LayoutTopOnly>
    </Route>
  </BrowserRouter>
);

export default Router;
