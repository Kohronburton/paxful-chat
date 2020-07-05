import React from "react";
import Trades from "../components/trades/Trades";
import { useParams } from "react-router-dom";

const TradesPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <Trades tradeId={parseInt(id)} />
    </>
  );
};

export default TradesPage;
