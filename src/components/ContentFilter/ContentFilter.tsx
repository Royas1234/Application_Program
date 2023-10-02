import React from "react";
import { Input, Tooltip, Divider, Card, Typography } from "antd";
import {
  SearchOutlined,
  InfoCircleOutlined,
  FileTextOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "./ContentFilter.css";

const { Text } = Typography;
function ContentFilter() {
  return (
    <div className="search-container">
      <Input
        size="large"
        placeholder="Search by name, edu, exp or #tag"
        prefix={<SearchOutlined />}
        suffix={
          <Tooltip title="Extra information">
            <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
          </Tooltip>
        }
      />

      <div className="filter-container">
        <Card
          title="Filter"
          extra="0 Selected"
          style={{ width: 385 }}
          className="filter-card"
        >
          <div className="filter-items-container personal-info">
            <div>
              <FileTextOutlined />
              <Text style={{ paddingLeft: "8px" }}>Personal Information</Text>
            </div>
            <div>
              <DownOutlined style={{ color: "#1D4ED8" }} />
            </div>
          </div>
          <Divider />
          <div className="filter-items-container">
            <div>
              <FileTextOutlined />
              <Text style={{ paddingLeft: "8px" }}>Education</Text>
            </div>
            <div>
              <DownOutlined style={{ color: "#1D4ED8" }} />
            </div>
          </div>
          <Divider />
          <div className="filter-items-container">
            <div>
              <FileTextOutlined />
              <Text style={{ paddingLeft: "8px" }}>Work Experience</Text>
            </div>
            <div>
              <DownOutlined style={{ color: "#1D4ED8" }} />
            </div>
          </div>
          <Divider />
          <div className="filter-items-container">
            <div>
              <FileTextOutlined />
              <Text style={{ paddingLeft: "8px" }}>Activity Filter</Text>
            </div>
            <div>
              <DownOutlined style={{ color: "#1D4ED8" }} />
            </div>
          </div>
          <Divider />
          <div className="filter-items-container advance-filter">
            <div>
              <FileTextOutlined />
              <Text style={{ paddingLeft: "8px" }}>Advanced Filter</Text>
            </div>
            <div>
              <DownOutlined style={{ color: "#1D4ED8" }} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ContentFilter;
