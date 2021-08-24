import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M9.8,7.13l1.55-.93a1.39,1.39,0,0,1,1.34,0l4,2.38h0a1.33,1.33,0,0,1,.66,1.17V14.1a1.51,1.51,0,0,1-.08.48Z"
    />
    <path fill="none" d="M6,6,18,18" />
    <path
      fill="none"
      d="M15.81,15.81l-3.16,2a1.36,1.36,0,0,1-1.3,0l-4-2.56a1.34,1.34,0,0,1-.68-1.17V9.75a1.34,1.34,0,0,1,.68-1.17l.77-.46Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M9.8,7.13l1.55-.93a1.39,1.39,0,0,1,1.34,0l4,2.38h0a1.33,1.33,0,0,1,.66,1.17V14.1a1.51,1.51,0,0,1-.08.48Z" />
    <path fill="none" d="M6,6,18,18" />
    <path d="M15.81,15.81l-3.16,2a1.36,1.36,0,0,1-1.3,0l-4-2.56a1.34,1.34,0,0,1-.68-1.17V9.75a1.34,1.34,0,0,1,.68-1.17l.77-.46Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M9.8,7.13l1.55-.93a1.39,1.39,0,0,1,1.34,0l4,2.38h0a1.33,1.33,0,0,1,.66,1.17V14.1a1.51,1.51,0,0,1-.08.48Z"
    />
    <path fill="none" d="M6,6,18,18" />
    <path
      fillOpacity=".2"
      d="M15.81,15.81l-3.16,2a1.36,1.36,0,0,1-1.3,0l-4-2.56a1.34,1.34,0,0,1-.68-1.17V9.75a1.34,1.34,0,0,1,.68-1.17l.77-.46Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      stroke={secondaryColor}
      d="M9.8,7.13l1.55-.93a1.39,1.39,0,0,1,1.34,0l4,2.38h0a1.33,1.33,0,0,1,.66,1.17V14.1a1.51,1.51,0,0,1-.08.48Z"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M15.81,15.81l-3.16,2a1.36,1.36,0,0,1-1.3,0l-4-2.56a1.34,1.34,0,0,1-.68-1.17V9.75a1.34,1.34,0,0,1,.68-1.17l.77-.46Z"
    />
    <path fill="none" d="M6,6,18,18" />
  </Fragment>
);

const HexagonOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default HexagonOff;
