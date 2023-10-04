import React, { useState } from "react";
import { Typography, Dropdown, Button, MenuProps } from "antd";
import {
  TagOutlined,
  DownOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
  UserSwitchOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "../HeadNav/ContentHeader.css";

const { Title, Text } = Typography;

const items: MenuProps["items"] = [
  {
    key: "Applied",
    label: (
      <div className="dropdown-option">
        <Text>Applied</Text>
        <Text>1745</Text>
      </div>
    ),
  },
  {
    type: "divider",
  },
  {
    key: "Shortlisted",
    label: (
      <div className="dropdown-option">
        <Text>Shortlisted</Text>
        <Text>453</Text>
      </div>
    ),
  },

  {
    type: "divider",
  },
  {
    key: "Technical Interview",
    label: (
      <div className="dropdown-option">
        <Text>Technical Interview</Text>
        <Text>123</Text>
      </div>
    ),
  },
  {
    type: "divider",
  },
  {
    key: "Opputunity Browser",
    label: (
      <div className="dropdown-option">
        <Text>Opputunity Browser</Text>
        <Text>243</Text>
      </div>
    ),
  },
  {
    type: "divider",
  },
  {
    key: "Video Interview |",
    label: (
      <div className="dropdown-option">
        <Text>Video Interview |</Text>
        <Text>25</Text>
      </div>
    ),
  },
  {
    type: "divider",
  },
  {
    key: "Video Interview ||",
    label: (
      <div className="dropdown-option">
        <Text>Video Interview ||</Text>
        <Text>25</Text>
      </div>
    ),
  },
  {
    type: "divider",
  },
  {
    key: "Video Interview |||",
    label: (
      <div className="dropdown-option">
        <Text>Video Interview |||</Text>
        <Text>25</Text>
      </div>
    ),
  },
  {
    type: "divider",
  },
  {
    key: "Offer",
    label: (
      <div className="dropdown-option">
        <Text>Offer</Text>
        <Text>25</Text>
      </div>
    ),
  },
  {
    type: "divider",
  },
  {
    key: "Withdrawn",
    label: (
      <div className="dropdown-option">
        <Text>Withdrawn</Text>
        <Text>25</Text>
      </div>
    ),
  },
];

const stepItems: MenuProps["items"] = [
  {
    key: "Applied",
    label: "Applied",
  },
  {
    type: "divider",
  },
  {
    key: "Shortlisted",
    label: "Shortlisted",
  },

  {
    type: "divider",
  },
  {
    key: "Technical Interview",
    label: "Technical Interview",
  },
  {
    type: "divider",
  },
  {
    key: "Opputunity Browser",
    label: "Opputunity Browser",
  },
  {
    type: "divider",
  },
  {
    key: "Video Interview |",
    label: "Video Interview |",
  },
  {
    type: "divider",
  },
  {
    key: "Video Interview ||",
    label: "Video Interview ||",
  },
  {
    type: "divider",
  },
  {
    key: "Video Interview |||",
    label: "Video Interview |||",
  },
  {
    type: "divider",
  },
  {
    key: "Offer",
    label: "Offer",
  },
  {
    type: "divider",
  },
  {
    key: "Withdrawn",
    label: "Withdrawn",
  },
];
function ContentHeader() {
  const [currentStep, setCurrentStep] = useState("Video Interview 1");
  const [step, setStep] = useState("Oppurtunity Browsing");

  const onMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
    setCurrentStep(e.key);
  };
  const handleClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
    setStep(e.key);
  };

  return (
    <div className="header-container">
      <div className="header-text-container">
        <Title level={4} style={{ color: "#1D4ED8" }}>
          London Internship Program
        </Title>

        <Text style={{ color: "#0B0B0B" }}>London</Text>
      </div>
      <div className="flex-container">
        <div className="drop-down">
          <Dropdown menu={{ items, onClick: handleClick }}>
            <Button
              style={{
                height: "40px",
                width: "321px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center ",
              }}
            >
              <Text>{step}</Text>
              <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <div className="icon-button"></div>

        <div className="icon-list ">
          <Button
            type="text"
            style={{ backgroundColor: "#fff" }}
            icon={<TagOutlined style={{ color: "#444" }} />}
          />
          <Button
            type="text"
            style={{ backgroundColor: "#fff" }}
            icon={<UserDeleteOutlined style={{ color: "#444" }} />}
          />
          <Button
            type="text"
            style={{ backgroundColor: "#fff" }}
            icon={<UserAddOutlined style={{ color: "#444" }} />}
          />
          <Button
            type="text"
            style={{ backgroundColor: "#fff" }}
            icon={<UserSwitchOutlined style={{ color: "#444" }} />}
          />
          <Button
            type="text"
            style={{ backgroundColor: "#fff" }}
            icon={<MailOutlined style={{ color: "#444" }} />}
          />
        </div>
        <div className="">
          <Dropdown.Button
            className="step-dropdown"
            menu={{ items: stepItems, onClick: onMenuClick }}
            icon={<DownOutlined />}
          >
            Move to {currentStep}
          </Dropdown.Button>
        </div>
      </div>
    </div>
  );
}

export default ContentHeader;
