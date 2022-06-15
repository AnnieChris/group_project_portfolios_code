import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from './store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
	
);

