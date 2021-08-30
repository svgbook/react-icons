import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M7.33,18V7.33A1.34,1.34,0,0,1,8.67,6h6.66a1.34,1.34,0,0,1,1.34,1.33V18l-2-1.33L13.33,18,12,16.67,10.67,18,9.33,16.67,7.33,18"
    />
    <path fill="none" d="M10,8.67h4m-4,2.66h4M12.67,14H14" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M15.33,5.5H8.67A1.84,1.84,0,0,0,6.83,7.33V18a.5.5,0,0,0,.27.44.49.49,0,0,0,.51,0l1.66-1.11,1,1a.5.5,0,0,0,.71,0l1-1,1,1a.5.5,0,0,0,.71,0l1-1,1.66,1.11a.54.54,0,0,0,.28.08.46.46,0,0,0,.23-.06.5.5,0,0,0,.27-.44V7.33A1.84,1.84,0,0,0,15.33,5.5ZM14,14.5H12.67a.5.5,0,0,1,0-1H14a.5.5,0,0,1,0,1Zm0-2.67H10a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h4a.5.5,0,0,1,.5.5A.5.5,0,0,1,14,11.83Zm0-2.66H10a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h4a.5.5,0,0,1,.5.5A.5.5,0,0,1,14,9.17Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M7.33,18V7.33A1.34,1.34,0,0,1,8.67,6h6.66a1.34,1.34,0,0,1,1.34,1.33V18l-2-1.33L13.33,18,12,16.67,10.67,18,9.33,16.67,7.33,18"
    />
    <path fill="none" d="M10,8.67h4m-4,2.66h4M12.67,14H14" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M7.33,18V7.33A1.34,1.34,0,0,1,8.67,6h6.66a1.34,1.34,0,0,1,1.34,1.33V18l-2-1.33L13.33,18,12,16.67,10.67,18,9.33,16.67,7.33,18"
    />
    <path fill="none" d="M10,8.67h4m-4,2.66h4M12.67,14H14" />
  </Fragment>
);

const Receipt2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Receipt2;
