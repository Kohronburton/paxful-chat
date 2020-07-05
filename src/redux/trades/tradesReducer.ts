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
      const newData = [...state.data];
      const {
        payload: { index, isBuyer, isSeller, date, chatMessage },
      } = action;
      newData[index].chatHistory.push({
        isBuyer: isBuyer,
        isSeller: isSeller,
        chatMessage: chatMessage,
        date: date,
      });
      isBuyer
        ? (newData[index].isNewMessage = true)
        : (newData[index].isNewMessage = false);
      return {
        ...state,
        data: newData,
      };
    case DELETE_TRADE:
      return {
        ...state,
        data: state.data.filter((trade) => trade.id !== action.payload),
      };

    case SET_MESSAGE_TO_READ:
      const editData = [...state.data];
      editData[action.payload].isNewMessage = false;
      return {
        ...state,
        data: editData,
      };

    default:
      return state;
  }
};

export default tradesReducer;
