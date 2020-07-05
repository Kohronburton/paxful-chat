import React from "react";
import { Button } from "reactstrap";
import { FaTrashAlt } from "react-icons/fa";

interface Props {
  paymentMethod: string;
  postiveRating: number;
  negativeRating: number;
  buyerName: string;
  openModal: () => void;
}

const ChartHeader: React.FC<Props> = ({
  paymentMethod,
  buyerName,
  negativeRating,
  postiveRating,
  openModal,
}) => {
  return (
    <div className="mt-3">
      <div className="d-flex">
        <div style={{ marginRight: "30%", marginLeft: "10px" }}>
          <Button color="danger" className="btn-circle" onClick={openModal}>
            <FaTrashAlt />
          </Button>
        </div>

        <div className="text-center ">
          <h6>{paymentMethod}</h6>
          <span className="selected">
            {buyerName} <span className="rating-postive">+{postiveRating}</span>{" "}
            / <span className="rating-neg">{negativeRating}</span>{" "}
          </span>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default ChartHeader;
