import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,12H16.67v4.67A1.34,1.34,0,0,1,15.33,18H14V14a1.34,1.34,0,0,0-1.33-1.33H11.33A1.34,1.34,0,0,0,10,14v4H8.67a1.34,1.34,0,0,1-1.34-1.33V12H6l6-6Z"
    />
    <line x1="14" y1="18" x2="10" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M18,12H16.67v4.67A1.34,1.34,0,0,1,15.33,18H14V14a1.34,1.34,0,0,0-1.33-1.33H11.33A1.34,1.34,0,0,0,10,14v4H8.67a1.34,1.34,0,0,1-1.34-1.33V12H6l6-6Z" />
    <line x1="14" y1="18" x2="10" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M18,12H16.67v4.67A1.34,1.34,0,0,1,15.33,18H14V14a1.34,1.34,0,0,0-1.33-1.33H11.33A1.34,1.34,0,0,0,10,14v4H8.67a1.34,1.34,0,0,1-1.34-1.33V12H6l6-6Z"
    />
    <line x1="14" y1="18" x2="10" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M18,12H16.67v4.67A1.34,1.34,0,0,1,15.33,18H14V14a1.34,1.34,0,0,0-1.33-1.33H11.33A1.34,1.34,0,0,0,10,14v4H8.67a1.34,1.34,0,0,1-1.34-1.33V12H6l6-6Z"
    />
    <line x1="14" y1="18" x2="10" y2="18" />
  </Fragment>
);

const Home = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Home;
