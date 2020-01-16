import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import rootReducer from './ducks/index.js'
import thunk from 'redux-thunk';


const composeEnhancers = typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    // composeEnhancers,
)

console.log(store)
const app = (
    <Provider store={ store }>
            <App />
    </Provider>

)

ReactDOM.render(app, document.getElementById('root'))
