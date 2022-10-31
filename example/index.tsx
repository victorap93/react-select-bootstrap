import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactSelectBootstrap } from '../.';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container">
      <ReactSelectBootstrap className='mt-3'
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
          { value: "4", label: "Option 4" },
          { value: "5", label: "Option 5" }
        ]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
