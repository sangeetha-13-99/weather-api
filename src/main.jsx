import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store'
import { ModalContextProvider } from './store/modal-context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      
    <Provider store={store} >
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </Provider>
      
  </React.StrictMode>,
)
