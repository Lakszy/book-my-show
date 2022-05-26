// Transforms components into another component
// Adding additional functionalities to the exsisting component

import React from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../Layout/DefaultLayout";
function DefaultHOC(props) {
  const InnerComponent = props.element;
  const pathProp = props.path;
  return (
    <>
      <DefaultLayout {...props}>
        <InnerComponent />
      </DefaultLayout>
    </>
  );
}
export default DefaultHOC;

// Transforms components into another component
// Adding additional functionalities to the exsisting component

// import React, { Component } from "react";
// import { Routes, Route } from "react-router-dom";
// import DefaultLayout from "../Layout/DefaultLayout";
// function DefaultHOC({ component: Component, ...rest }) {
//     return (
//         <>
//             <Route>
//                 {...rest}
//                 component={(props) => (
//                     <DefaultLayout>
//                         <Component {...props} />
//                     </DefaultLayout>
//                 )}
//             </Route>
//         </>
//     );
// };
// export default DefaultHOC;