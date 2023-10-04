import React, { useEffect, useState } from "react";

import "./App.css";

import { Layout } from "antd";
import SideNav from "./components/SideNav/SideNav";
import ContentHeader from "./components/HeadNav/ContentHeader";
import ContentFilter from "./components/ContentFilter/ContentFilter";
import CandidateList from "./components/CandidateList/CandidateList";
import { CandidateListData, CandidateShape } from "./components/CandidateData";
const { Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
  backgroundColor: "#f9faff",
};

const siderStyle: React.CSSProperties = {
  width: "72px",

  textAlign: "center",

  color: "#fff",
  backgroundColor: "#fff",
};

function App() {
  const candidateDataArray = useState(CandidateListData);
  const candidateData = candidateDataArray[0];

  const [searchQuery, setSearchQuery] = useState<CandidateShape[]>([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const searchedResult = candidateData.filter((candidate) => {
      return (
        candidate.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        candidate.school.toLowerCase().includes(searchItem.toLowerCase()) ||
        candidate.tags.includes(searchItem.toLowerCase())
      );
    });
    setSearchQuery(searchedResult);
  }, [searchItem, searchQuery, candidateData]);

  const handleSearch = (item: string) => {
    setSearchItem(item);
  };

  return (
    <Layout className="app-container">
      <Sider style={siderStyle} width="72px">
        <SideNav />
      </Sider>
      <Content style={contentStyle}>
        <ContentHeader />
        <div className="content-container">
          <ContentFilter onSearch={handleSearch} />
          <CandidateList searchData={searchQuery} />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
