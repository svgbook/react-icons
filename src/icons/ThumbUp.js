import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,12.7l-.71,3.53c-.2.89-.78,1.47-1.41,1.42H10.94a2.12,2.12,0,0,1-2.12-2.12V11.29a2.83,2.83,0,0,0,2.83-2.82V7.76a1.41,1.41,0,0,1,2.82,0v3.53h2.12A1.41,1.41,0,0,1,18,12.7Z"
    />
    <path
      fill="none"
      d="M8.82,11.29v5.65a.7.7,0,0,1-.7.71H6.71A.71.71,0,0,1,6,16.94V12a.71.71,0,0,1,.71-.71Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M18,12.7l-.71,3.53c-.2.89-.78,1.47-1.41,1.42H10.94a2.12,2.12,0,0,1-2.12-2.12V11.29a2.83,2.83,0,0,0,2.83-2.82V7.76a1.41,1.41,0,0,1,2.82,0v3.53h2.12A1.41,1.41,0,0,1,18,12.7Z" />
    <path
      fill="none"
      d="M8.82,11.29v5.65a.7.7,0,0,1-.7.71H6.71A.71.71,0,0,1,6,16.94V12a.71.71,0,0,1,.71-.71Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M18,12.7l-.71,3.53c-.2.89-.78,1.47-1.41,1.42H10.94a2.12,2.12,0,0,1-2.12-2.12V11.29a2.83,2.83,0,0,0,2.83-2.82V7.76a1.41,1.41,0,0,1,2.82,0v3.53h2.12A1.41,1.41,0,0,1,18,12.7Z"
    />
    <path
      fillOpacity=".2"
      d="M8.82,11.29v5.65a.7.7,0,0,1-.7.71H6.71A.71.71,0,0,1,6,16.94V12a.71.71,0,0,1,.71-.71Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M18,12.7l-.71,3.53c-.2.89-.78,1.47-1.41,1.42H10.94a2.12,2.12,0,0,1-2.12-2.12V11.29a2.83,2.83,0,0,0,2.83-2.82V7.76a1.41,1.41,0,0,1,2.82,0v3.53h2.12A1.41,1.41,0,0,1,18,12.7Z"
    />
    <path
      fill={secondaryColor}
      d="M8.82,11.29v5.65a.7.7,0,0,1-.7.71H6.71A.71.71,0,0,1,6,16.94V12a.71.71,0,0,1,.71-.71Z"
    />
  </Fragment>
);

const ThumbUp = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ThumbUp;
