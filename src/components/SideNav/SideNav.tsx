import React from "react";
import "./SideNav.css";
import { Button } from "antd";
import {
  HomeOutlined,
  UsergroupAddOutlined,
  CalendarOutlined,
  ShareAltOutlined,
  HeartOutlined,
  FileTextOutlined,
  LayoutOutlined,
  LeftOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function SideNav() {
  return (
    <div className="sidenav-flex">
      <div>
        <div className="side-circle" />
        <div className="sidenav-flex icon-container">
          <Button
            type="text"
            style={{ backgroundColor: "#e9efff" }}
            icon={<HomeOutlined style={{ color: "#1D4ED8" }} />}
          />
          <Button type="text" icon={<UsergroupAddOutlined />} />
          <Button type="text" icon={<CalendarOutlined />} />
          <Button type="text" icon={<ShareAltOutlined />} />
          <Button type="text" icon={<FileTextOutlined />} />
          <Button type="text" icon={<LayoutOutlined />} />
          <Button type="text" icon={<HeartOutlined />} />
          <Button type="text" icon={<LeftOutlined />} />
        </div>
      </div>

      <div className="sidenav-flex settings">
        <Button type="text" icon={<SettingOutlined />} />
        <Button
          type="text"
          shape="circle"
          style={{ backgroundColor: "#e9efff", color: "#1D4ED8" }}
        >
          as
        </Button>
      </div>
    </div>
  );
}

export default SideNav;
