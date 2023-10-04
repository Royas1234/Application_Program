import React from "react";
import { Divider, Typography, Checkbox } from "antd";
import "./CandidateList.css";
import CandidateItemsMap from "./CandidateItemsMap";
import { CandidateShape } from "../CandidateData";

const { Text } = Typography;

type CandidateListProps = {
  searchData: CandidateShape[];
};

function CandidateList({ searchData }: CandidateListProps) {
  return (
    <div className="candidate-list-container">
      <div className="qualify-disqualify-container">
        <div className="checkbox-container">
          <Checkbox />
          <Text style={{ color: "#1D4ED8", fontWeight: "bold" }}>
            247 Candidates
          </Text>
        </div>
        <div className="qualified-container">
          <Text style={{ color: "#1D4ED8", fontWeight: 500 }}>Qualified</Text>
          <Divider type="vertical" />
          <div>
            <Text
              style={{
                fontWeight: 500,
              }}
            >
              Task
            </Text>
            <Text
              style={{
                backgroundColor: "#F7F8FD",
                padding: "5px",
                borderRadius: "20px",
                fontSize: "10px",
              }}
            >
              25
            </Text>
            <Divider type="vertical" />
          </div>
          <div>
            <Text
              style={{
                fontWeight: 500,
              }}
            >
              Disqualified{" "}
            </Text>
            <Text
              style={{
                backgroundColor: "#F7F8FD",
                padding: "5px",
                borderRadius: "20px",
                fontSize: "10px",
              }}
            >
              78
            </Text>
          </div>
        </div>
      </div>
      <Divider />
      <CandidateItemsMap searchData={searchData} />
    </div>
  );
}

export default CandidateList;
