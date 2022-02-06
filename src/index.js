import React from 'react';
import ReactDom from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context'
import App from './App';
import './index.css';

ReactDom.render(
    <SpeechProvider appId="90ee310b-946a-4b5b-8343-802445060d97" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);