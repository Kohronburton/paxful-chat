export interface ChatHistoryI {
  isBuyer: boolean;
  isSeller: boolean;
  chatMessage: string;
  date: string;
}

export interface TradesDataI {
  id: number;
  buyerName: string;
  paymentMethod: string;
  tradingStatus: string;
  postiveRating: number;
  negativeRating: number;
  numberOfTrades: number;
  tradeHash: string;
  AmtUSD: number;
  AmtBTC: number;
  image: string;
  isNewMessage: boolean;
  startedTrading: string;
  chatHistory: ChatHistoryI[];
}
