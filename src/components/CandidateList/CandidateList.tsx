import React from "react";
import { Input, Tooltip, Divider, Card, Typography, Checkbox } from "antd";
import "./CandidateList.css";

const { Text } = Typography;

function CandidateList() {
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
          <Text style={{ color: "#1D4ED8", fontWeight: 400 }}>Qualified</Text>
          <Divider type="vertical" />
          <div>
            <Text>Task </Text>
            <Text style={{ backgroundColor: "F7F8FD" }}>25</Text>
            <Divider type="vertical" />
          </div>
          <div>
            <Text>Disqualified </Text>
            <Text>78</Text>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default CandidateList;
