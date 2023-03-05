import ReactDOM from 'react-dom/client'
import App from './App'
import './ui/ui'
import { ToastProvider } from './components/toast/ToastContext'
import { BrowserRouter } from 'react-router-dom'
import SuperTokens, { SuperTokensWrapper } from 'supertokens-auth-react'
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword'
import Session from 'supertokens-auth-react/recipe/session'
import { apiDomain } from './api/consts'

SuperTokens.init({
  appInfo: {
    appName: 'shopapp',
    apiDomain: apiDomain,
    websiteDomain: 'http://localhost:5175',
    apiBasePath: '/auth',
    websiteBasePath: '/auth',
  },
  recipeList: [EmailPassword.init(), Session.init()],
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <SuperTokensWrapper>
    <BrowserRouter>
      <ToastProvider>
        <App />
      </ToastProvider>
    </BrowserRouter>
  </SuperTokensWrapper>,
)
/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { ToastProvider } from './components/toast/ToastContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ToastProvider>
      <App />
    </ToastProvider>
  </Provider>,
)
*/
