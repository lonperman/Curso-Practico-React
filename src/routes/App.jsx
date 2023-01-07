import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '@pages/Home.jsx';
import Login from '@pages/Login';
import PasswordRecovery from '@pages/PasswordRecovery';
import SendEmail from '@pages/SendEmail';
import NotFound from '@pages/NotFound';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import Orders from '@pages/Orders';
import Layout from '@containers/Layout';
import AppContext from '../context/AppContext.js';
import useInitialState from '../hooks/useInitialState';
import '@styles/global.css';




const App = () => {
  const InitialState = useInitialState();
  return (
    <AppContext.Provider value={InitialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/recovery-password' element={<PasswordRecovery />} />
            <Route exact path='/send-email' element={<SendEmail />} />
            <Route exact path='/new-password' element={<NewPassword />} />
            <Route exact path='/account' element={<MyAccount />} />
            <Route exact path='/signup' element={<CreateAccount />} />
            <Route exact path='/orders' element={<Orders />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;