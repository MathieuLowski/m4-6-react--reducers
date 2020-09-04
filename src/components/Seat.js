import React, { useContext } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { SeatContext } from "./SeatContext";
import { getSeatNum } from "../helpers";
import styled from "styled-components";
import { BookingContext } from "./BookingContext";
import seatimage from "../assets/seat-available.svg";

const Seat = ({ isBooked, rowName, seatIndex, seatId, seatFilter }) => {
  const { state } = useContext(SeatContext);

  const {
    actions: { bookingTicket },
  } = useContext(BookingContext);

  const seats = state.seats;

  return (
    <Tippy
      content={
        "Row " +
        rowName +
        ", Seat " +
        getSeatNum(seatIndex) +
        " - $" +
        seats[seatId].price
      }
    >
      <Button
        onClick={() => {
          bookingTicket({ price: seats[seatId].price, seatId: seatId });
        }}
        disabled={isBooked}
      >
        <Img style={{ filter: seatFilter }} src={seatimage}></Img>
      </Button>
    </Tippy>
  );
};

export default Seat;

const Img = styled.img``;

const Button = styled.button`
  :hover {
    background-color: #80848a33;
  }
`;
