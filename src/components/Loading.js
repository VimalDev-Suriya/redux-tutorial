import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const Loading = () => {
  return (
    <ThreeCircles
      height="100"
      width="100"
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass="loading"
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  );
};

export default Loading;
