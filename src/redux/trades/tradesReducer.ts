import { TradesDataI } from "../../types";
import { tradeData } from "./data";
import {
  TradesDispatchTypes,
  SEND_MESSAGE,
  DELETE_TRADE,
  SET_MESSAGE_TO_READ,
} from "./tradesActionTypes";

interface InitialStateI {
  data: TradesDataI[];
}

const initialState: InitialStateI = {
  data: tradeData,
};

const tradesReducer = (
  state: InitialStateI = initialState,
  action: TradesDispatchTypes
): InitialStateI => {
  switch (action.type) {
    case SEND_MESSAGE:
      const {
        payload: { id, isBuyer, isSeller, date, chatMessage },
      } = action;

      return {
        ...state,
        data: state.data.map((trade) =>
          trade.id === id
            ? {
                ...trade,
                chatHistory: [
                  ...trade.chatHistory,
                  {
                    isBuyer,
                    isSeller,
                    date,
                    chatMessage,
                  },
                ],
                isNewMessage: isBuyer ? true : false,
              }
            : trade
        ),
      };
    case DELETE_TRADE:
      return {
        ...state,
        data: state.data.filter((trade) => trade.id !== action.payload),
      };

    case SET_MESSAGE_TO_READ:
      const newData = [...state.data];
      newData[action.payload].isNewMessage = false;
      return {
        ...state,
        data: newData,
      };

    default:
      return state;
  }
};

export default tradesReducer;
