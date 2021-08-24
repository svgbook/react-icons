import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M12,6,6,12H7.33v4.67A1.34,1.34,0,0,0,8.67,18h6.66a1.34,1.34,0,0,0,1.34-1.33V12H18Zm1.33,8.67H10.67V12h2.66Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M12,6,6,12H7.33v4.67A1.34,1.34,0,0,0,8.67,18h6.66a1.34,1.34,0,0,0,1.34-1.33V12H18Zm1.33,8.67H10.67V12h2.66Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M12,6,6,12H7.33v4.67A1.34,1.34,0,0,0,8.67,18h6.66a1.34,1.34,0,0,0,1.34-1.33V12H18Zm1.33,8.67H10.67V12h2.66Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M12,6,6,12H7.33v4.67A1.34,1.34,0,0,0,8.67,18h6.66a1.34,1.34,0,0,0,1.34-1.33V12H18Zm1.33,8.67H10.67V12h2.66Z"
    />
  </Fragment>
);

const Home2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Home2;
