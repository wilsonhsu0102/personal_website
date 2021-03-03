import * as React from "react";

const Wrapper = React.forwardRef(
    (props, ref) => {
      return (
          <div ref={ref}>
              {props.children}
          </div>
      );
    }
  );
  
  export default Wrapper;