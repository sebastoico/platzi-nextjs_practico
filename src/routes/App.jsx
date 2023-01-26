import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "@containers/Layout.jsx";
import Home from "@templates/Home.jsx";
import Login from "@templates/Login.jsx";
import PasswordRecovery from "@templates/PasswordRecovery.jsx";
import SendEmail from "@templates/SendEmail.jsx";
import NewPassword from "@templates/NewPassword.jsx";
import MyAccount from "@templates/MyAccount.jsx";
import CreateAccount from "@templates/CreateAccount.jsx";
import Checkout from "@templates/Checkout.jsx";
import Orders from "@templates/Orders.jsx";
import NotFound from "@templates/NotFound.jsx";
import AppContext from "@context/AppContext.js";
import useInitialState from "@hooks/useInitialState.js";
import "@styles/global.css";

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/password-recovery" component={PasswordRecovery} />
            <Route exact path="/send-email" component={SendEmail} />
            <Route exact path="/new-password" component={NewPassword} />
            <Route exact path="/account" component={MyAccount} />
            <Route exact path="/signup" component={CreateAccount} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/orders" component={Orders} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;