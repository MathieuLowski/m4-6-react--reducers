import React from "react";

export const BookingContext = React.createContext();

const initialState = {
  status: "idle",
  error: null,
  selectedSeatId: null,
  price: null,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "bookingTicket":
      return {
        ...state,
        status: "seat-selected",
        selectedSeatId: action.seatId,
        price: action.price,
      };
  }
}

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const bookingTicket = (data) => {
    dispatch({
      type: "bookingTicket",
      selectedSeatId: data.seatId,
      price: data.price,
    });
  };

  return (
    <BookingContext.Provider
      value={{
        state,
        actions: {
          bookingTicket,
        },
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
