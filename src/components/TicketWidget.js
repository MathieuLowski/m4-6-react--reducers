import React, { useContext } from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import seatimage from "../assets/seat-available.svg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { getRowName, getSeatNum } from "../helpers";
import { range } from "../utils";
import { SeatContext } from "./SeatContext";
import Seat from "./Seat";

const TicketWidget = () => {
  const { state } = useContext(SeatContext);

  const numOfRows = state.numOfRows;
  const seatsPerRow = state.seatsPerRow;
  const bookedSeats = state.bookedSeats;

  if (state.hasloaded === false) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      {range(numOfRows).map((rowIndex) => {
        const rowName = getRowName(rowIndex);

        return (
          <Div key={rowIndex}>
            <Row>Row {rowName}</Row>
            {range(seatsPerRow).map((seatIndex) => {
              const seatId = `${rowName}-${getSeatNum(seatIndex)}`;

              let isBooked = false;
              let seatFilter = "none";
              if (bookedSeats[seatId]) {
                seatFilter = "grayscale(100%)";
                isBooked = true;
              }

              return (
                <SeatWrapper key={seatId}>
                  <Seat
                    isBooked={isBooked}
                    rowName={rowName}
                    seatIndex={seatIndex}
                    seatId={seatId}
                    seatFilter={seatFilter}
                  ></Seat>
                </SeatWrapper>
              );
            })}
          </Div>
        );
      })}
    </Wrapper>
  );
};

export default TicketWidget;

const Spinner = styled(CircularProgress)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  background: #dce0e3;
  padding: 20px;
`;

const Div = styled.div`
  display: flex;
`;
const Row = styled.div`
  color: black;
`;

const SeatWrapper = styled.div`
  padding: 7px;
`;
