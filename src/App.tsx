import React from "react";

import "./App.css";

import { Layout } from "antd";
import SideNav from "./components/SideNav/SideNav";
import ContentHeader from "./components/HeadNav/ContentHeader";
import ContentFilter from "./components/ContentFilter/ContentFilter";
import CandidateList from "./components/CandidateList/CandidateList";

const { Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
  // flex: 1,
  // padding: "32px",
  // overflowY: "auto",
  backgroundColor: "#e9efff",
};

const siderStyle: React.CSSProperties = {
  width: "72px",

  textAlign: "center",

  color: "#fff",
  backgroundColor: "#fff",
};

function App() {
  return (
    <Layout className="app-container">
      <Sider style={siderStyle} width="72px">
        <SideNav />
      </Sider>
      <Content style={contentStyle}>
        <ContentHeader />
        <div className="content-container">
          <ContentFilter />
          <CandidateList />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
