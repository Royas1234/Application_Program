import React from "react";
import { Divider, Typography, Checkbox } from "antd";
import "./CandidateList.css";

const { Text } = Typography;

function CandidateListItems(props: any) {
  return (
    <>
      <div className="candidate-item-container">
        <div>
          <Checkbox />
        </div>

        <div className="initial-container">
          <Text>AS</Text>
        </div>
        <div className="candidate-info-container">
          <div>
            <Text style={{ fontSize: "17px", fontWeight: "bold" }}>
              {props.name}
            </Text>
          </div>
          <div>
            <Text style={{ fontWeight: 600 }}>{props.country}</Text>
          </div>

          <div className="degree">
            <Text>{props.degree}</Text>

            <Text>{props.school}</Text>
          </div>
          <div className="tags-container">{props.tags}</div>
          <div className="items-container">{props.items}</div>
        </div>
      </div>
      <Divider />
    </>
  );
}

export default CandidateListItems;
