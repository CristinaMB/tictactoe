import React from 'react';
import ReactDOM from 'react-dom';
import Game from './App';
import registerServiceWorker from './registerServiceWorker';
import Game from './Game';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
