import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M14.67,6.67V8H9.33V6.67A.67.67,0,0,1,10,6h4A.67.67,0,0,1,14.67,6.67Z"
    />
    <path
      fill="none"
      d="M16,11.29v5.38A1.34,1.34,0,0,1,14.67,18H9.33A1.34,1.34,0,0,1,8,16.67V11.29a4.07,4.07,0,0,1,.6-2.12L9.33,8h5.34l.73,1.17A4.07,4.07,0,0,1,16,11.29Z"
    />
    <circle fill="none" cx="12" cy="14.67" r="1.33" />
    <path fill="none" d="M10.67,10.67h2.66" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M15.82,8.91l-.65-1V6.67A1.17,1.17,0,0,0,14,5.5H10A1.17,1.17,0,0,0,8.83,6.67v1.2l-.65,1a4.42,4.42,0,0,0-.68,2.38v5.38A1.83,1.83,0,0,0,9.33,18.5h5.34a1.83,1.83,0,0,0,1.83-1.83V11.29A4.47,4.47,0,0,0,15.82,8.91ZM12,16.5a1.84,1.84,0,1,1,1.83-1.83A1.83,1.83,0,0,1,12,16.5Zm1.33-5.33H10.67a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h2.66a.5.5,0,0,1,.5.5A.5.5,0,0,1,13.33,11.17Z"
    />
    <path
      stroke="none"
      d="M12.83,14.67a.83.83,0,1,1-1.66,0,.83.83,0,1,1,1.66,0Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M14.67,6.67V8H9.33V6.67A.67.67,0,0,1,10,6h4A.67.67,0,0,1,14.67,6.67Z"
    />
    <path
      fillOpacity=".2"
      d="M16,11.29v5.38A1.34,1.34,0,0,1,14.67,18H9.33A1.34,1.34,0,0,1,8,16.67V11.29a4.07,4.07,0,0,1,.6-2.12L9.33,8h5.34l.73,1.17A4.07,4.07,0,0,1,16,11.29Z"
    />
    <circle fill="none" cx="12" cy="14.67" r="1.33" />
    <path fill="none" d="M10.67,10.67h2.66" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M14.67,6.67V8H9.33V6.67A.67.67,0,0,1,10,6h4A.67.67,0,0,1,14.67,6.67Z"
    />
    <path
      fill={secondaryColor}
      d="M16,11.29v5.38A1.34,1.34,0,0,1,14.67,18H9.33A1.34,1.34,0,0,1,8,16.67V11.29a4.07,4.07,0,0,1,.6-2.12L9.33,8h5.34l.73,1.17A4.07,4.07,0,0,1,16,11.29Z"
    />
    <circle fill="none" cx="12" cy="14.67" r="1.33" />
    <path fill="none" d="M10.67,10.67h2.66" />
  </Fragment>
);

const MilkBottle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default MilkBottle;
