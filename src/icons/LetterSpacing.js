import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6.75,12V7.88a1.88,1.88,0,1,1,3.75,0V12m0-3H6.75" />
    <path fill="none" d="M12.75,6,15,12l2.25-6" />
    <path fill="none" d="M6.75,16.5h10.5" />
    <path fill="none" d="M15.75,18l1.5-1.5L15.75,15" />
    <path fill="none" d="M8.25,15l-1.5,1.5L8.25,18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6.75,12V7.88a1.88,1.88,0,1,1,3.75,0V12m0-3H6.75" />
    <path fill="none" d="M12.75,6,15,12l2.25-6" />
    <path fill="none" d="M6.75,16.5h10.5" />
    <path fill="none" d="M15.75,18l1.5-1.5L15.75,15" />
    <path fill="none" d="M8.25,15l-1.5,1.5L8.25,18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M6.75,12V7.88a1.88,1.88,0,1,1,3.75,0V12m0-3H6.75" />
    <path fill="none" d="M12.75,6,15,12l2.25-6" />
    <path fill="none" strokeOpacity=".2" d="M6.75,16.5h10.5" />
    <path fill="none" d="M15.75,18l1.5-1.5L15.75,15" />
    <path fill="none" d="M8.25,15l-1.5,1.5L8.25,18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M6.75,12V7.88a1.88,1.88,0,1,1,3.75,0V12m0-3H6.75" />
    <path fill="none" d="M12.75,6,15,12l2.25-6" />
    <path fill="none" stroke={secondaryColor} d="M6.75,16.5h10.5" />
    <path fill="none" d="M15.75,18l1.5-1.5L15.75,15" />
    <path fill="none" d="M8.25,15l-1.5,1.5L8.25,18" />
  </Fragment>
);

const LetterSpacing = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default LetterSpacing;
