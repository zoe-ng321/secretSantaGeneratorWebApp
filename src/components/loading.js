import React from 'react';
import {Spinner} from 'react-rainbow-components';

const Loading = (props) => {

  return (
    <div className="rainbow-position_relative rainbow-p-vertical_xx-large">
      <Spinner size="large" type="arc" variant="brand" />
    </div>
  );
}

export default Loading;
