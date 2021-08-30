import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M15,7.5h2.25a.76.76,0,0,1,.75.75V16.5a1.5,1.5,0,0,1-3,0V6.75A.76.76,0,0,0,14.25,6H6.75A.76.76,0,0,0,6,6.75v9A2.25,2.25,0,0,0,8.25,18H16.5"
    />
    <line x1="9" y1="9" x2="12" y2="9" />
    <line x1="9" y1="12" x2="12" y2="12" />
    <line x1="9" y1="15" x2="12" y2="15" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M17.25,7H15.5V6.75A1.25,1.25,0,0,0,14.25,5.5H6.75A1.25,1.25,0,0,0,5.5,6.75v9A2.75,2.75,0,0,0,8.25,18.5H16.5a2,2,0,0,0,2-2V8.25A1.25,1.25,0,0,0,17.25,7ZM12,15.5H9a.5.5,0,0,1,0-1h3a.5.5,0,0,1,0,1Zm0-3H9a.5.5,0,0,1,0-1h3a.5.5,0,0,1,0,1Zm0-3H9a.5.5,0,0,1,0-1h3a.5.5,0,0,1,0,1Zm5.5,7a1,1,0,0,1-2,0V8h1.75a.25.25,0,0,1,.25.25Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M16.5,18H8.25A2.25,2.25,0,0,1,6,15.75v-9A.76.76,0,0,1,6.75,6h7.5a.76.76,0,0,1,.75.75V16.5A1.5,1.5,0,0,0,16.5,18Z"
    />
    <path
      fill="none"
      d="M15,7.5h2.25a.76.76,0,0,1,.75.75V16.5A1.5,1.5,0,0,1,16.5,18"
    />
    <line x1="9" y1="9" x2="12" y2="9" />
    <line x1="9" y1="12" x2="12" y2="12" />
    <line x1="9" y1="15" x2="12" y2="15" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M16.5,18H8.25A2.25,2.25,0,0,1,6,15.75v-9A.76.76,0,0,1,6.75,6h7.5a.76.76,0,0,1,.75.75V16.5A1.5,1.5,0,0,0,16.5,18Z"
    />
    <path
      fill="none"
      d="M15,7.5h2.25a.76.76,0,0,1,.75.75V16.5A1.5,1.5,0,0,1,16.5,18"
    />
    <line x1="9" y1="9" x2="12" y2="9" />
    <line x1="9" y1="12" x2="12" y2="12" />
    <line x1="9" y1="15" x2="12" y2="15" />
  </Fragment>
);

const Newspaper = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Newspaper;
