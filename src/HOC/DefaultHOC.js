import React from "react";
import { useParams } from "react-router-dom";
import DefaultLayout from "../Layout/DefaultLayout";
function DefaultHOC(props) {
  const InnerComponent = props.element;
  let params = useParams();
  return (
    <>
      <DefaultLayout {...props}>
        <InnerComponent path={params.id} />
      </DefaultLayout>
    </>
  );
}
export default DefaultHOC;