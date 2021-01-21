import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './n1-main/m1-ui/App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./n1-main/m2-bll/store";

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </HashRouter>,

  document.getElementById('root')
)

serviceWorker.unregister()
