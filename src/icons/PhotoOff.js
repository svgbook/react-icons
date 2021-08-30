import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="14" y1="9.33" x2="14.01" y2="9.33" />
    <path fill="none" d="M9.33,6.67h6a2,2,0,0,1,2,2v6" />
    <path fill="none" d="M14.88,12.23a1.39,1.39,0,0,1,1.12.44L17.33,14" />
    <path
      fill="none"
      d="M16.75,16.75a2,2,0,0,1-1.42.58H8.67a2,2,0,0,1-2-2V14l2.66-2.67a1.35,1.35,0,0,1,2,0l3.34,3.34Z"
    />
    <path fill="none" d="M6.67,14V8.67a2,2,0,0,1,.59-1.42" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="14" y1="9.33" x2="14.01" y2="9.33" />
    <path fill="none" d="M9.33,6.67h6a2,2,0,0,1,2,2v6" />
    <path fill="none" d="M14.88,12.23a1.39,1.39,0,0,1,1.12.44L17.33,14" />
    <path d="M16.75,16.75a2,2,0,0,1-1.42.58H8.67a2,2,0,0,1-2-2V14l2.66-2.67a1.35,1.35,0,0,1,2,0l3.34,3.34Z" />
    <path fill="none" d="M6.67,14V8.67a2,2,0,0,1,.59-1.42" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="14" y1="9.33" x2="14.01" y2="9.33" />
    <path fill="none" d="M9.33,6.67h6a2,2,0,0,1,2,2v6" />
    <path fill="none" d="M14.88,12.23a1.39,1.39,0,0,1,1.12.44L17.33,14" />
    <path
      fillOpacity=".2"
      d="M16.75,16.75a2,2,0,0,1-1.42.58H8.67a2,2,0,0,1-2-2V14l2.66-2.67a1.35,1.35,0,0,1,2,0l3.34,3.34Z"
    />
    <path fill="none" d="M6.67,14V8.67a2,2,0,0,1,.59-1.42" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="14" y1="9.33" x2="14.01" y2="9.33" />
    <path fill="none" d="M9.33,6.67h6a2,2,0,0,1,2,2v6" />
    <path fill="none" d="M14.88,12.23a1.39,1.39,0,0,1,1.12.44L17.33,14" />
    <path
      fill={secondaryColor}
      d="M16.75,16.75a2,2,0,0,1-1.42.58H8.67a2,2,0,0,1-2-2V14l2.66-2.67a1.35,1.35,0,0,1,2,0l3.34,3.34Z"
    />
    <path fill="none" d="M6.67,14V8.67a2,2,0,0,1,.59-1.42" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

const PhotoOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default PhotoOff;
