import ReactDOM from 'react-dom/client'
import App from './App'
import './ui/ui'
import { ToastProvider } from './components/toast/ToastContext'
import { BrowserRouter } from 'react-router-dom'
import SuperTokens, { SuperTokensWrapper } from 'supertokens-auth-react'
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword'
import Session from 'supertokens-auth-react/recipe/session'

SuperTokens.init({
  appInfo: {
    // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
    appName: 'shopapp',
    apiDomain: 'http://localhost:3001',
    websiteDomain: 'http://localhost:5174',
    apiBasePath: '/login',
    websiteBasePath: '/login',
  },
  recipeList: [
    EmailPassword.init({
      getRedirectionURL: async (context) => {
        if (context.action === 'SUCCESS') {
          if (context.redirectToPath !== undefined) {
            // we are navigating back to where the user was before they authenticated
            return context.redirectToPath
          }
          return '/account'
        }
        return undefined
      },
      style: `
        [data-supertokens~=container] {
            --palette-background: 51, 51, 51;
            --palette-inputBackground: 41, 41, 41;
            --palette-inputBorder: 41, 41, 41;
            --palette-textTitle: 255, 255, 255;
            --palette-textLabel: 255, 255, 255;
            --palette-textPrimary: 255, 255, 255;
            --palette-error: 173, 46, 46;
            --palette-textInput: 169, 169, 169;
            --palette-textLink: 169, 169, 169;
        }
      `,
    }),
    Session.init(),
  ],
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
