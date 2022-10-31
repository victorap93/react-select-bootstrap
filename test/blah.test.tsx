import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as ReactSelectBootstrap } from "../stories/ReactSelectBootstrap.stories";

describe('TableLoading', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReactSelectBootstrap className='mt-3'
    options={[
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
      { value: "4", label: "Option 4" },
      { value: "5", label: "Option 5" }
    ]}
  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
