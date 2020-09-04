import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = () => {
  return (
    <Spinner>
      <CircularProgress />
    </Spinner>
  );
};

const Spinner = styled.div``;
export default Loading;
