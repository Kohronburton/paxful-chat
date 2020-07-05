export const SEND_MESSAGE = "SEND_MESSAGE";
export const DELETE_TRADE = "DELETE_TRADE";
export const SET_MESSAGE_TO_READ = "SET_MESSAGE_TO_READ";

export interface ChatMessageI {
  id: number;
  chatMessage: string;
  isBuyer: boolean;
  isSeller: boolean;
  date: string;
}

export type TradeId = number;

export interface SendMessageI {
  type: typeof SEND_MESSAGE;
  payload: ChatMessageI;
}

export interface DeleteTradeI {
  type: typeof DELETE_TRADE;
  payload: TradeId;
}

export interface SetMessageToRead {
  type: typeof SET_MESSAGE_TO_READ;
  payload: TradeId;
}

export type TradesDispatchTypes =
  | SendMessageI
  | DeleteTradeI
  | SetMessageToRead;
