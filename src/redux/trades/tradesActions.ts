import {
  TradesDispatchTypes,
  SEND_MESSAGE,
  ChatMessageI,
  DELETE_TRADE,
  TradeId,
  SET_MESSAGE_TO_READ,
} from "./tradesActionTypes";

export const createChatMessage = (
  message: ChatMessageI
): TradesDispatchTypes => {
  return {
    type: SEND_MESSAGE,
    payload: message,
  };
};

export const deleteTrade = (id: TradeId): TradesDispatchTypes => {
  return {
    type: DELETE_TRADE,
    payload: id,
  };
};

export const setMessageReadStatus = (index: TradeId): TradesDispatchTypes => {
  return {
    type: SET_MESSAGE_TO_READ,
    payload: index,
  };
};
