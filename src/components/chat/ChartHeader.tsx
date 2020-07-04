import React from "react";
import { Button } from "reactstrap";
import { FaTrashAlt } from "react-icons/fa";

const ChartHeader: React.FC = () => {
  return (
    <div className="mt-3">
      <div className="d-flex">
        <div style={{ marginRight: "30%", marginLeft: "10px" }}>
          <Button color="danger" className="btn-circle">
            <FaTrashAlt />
          </Button>
        </div>

        <div className="text-center selected">
          Amazon Gift Card <br></br>{" "}
          <span>
            Chanaar <span className="rating-postive">+37</span> /{" "}
            <span className="rating-neg">-1</span>{" "}
          </span>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default ChartHeader;
