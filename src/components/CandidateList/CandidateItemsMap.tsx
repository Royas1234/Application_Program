import React from "react";
import CandidateListItems from "./CandidateListItems";
import { CandidateShape } from "../CandidateData";

type CandidateItemsMapProps = {
  searchData: CandidateShape[];
};

function CandidateItemsMap({ searchData }: CandidateItemsMapProps) {
  return (
    <div>
      {searchData.map((candidate: any) => {
        return (
          <CandidateListItems
            key={candidate.id}
            name={candidate.name}
            country={candidate.country}
            degree={candidate.degree}
            school={candidate.school}
            tags={candidate.tags.map((tag: any, index: number) => (
              <div key={index}>{tag}</div>
            ))}
            items={candidate.items.map((item: any, index: number) => (
              <div key={index}>{item}</div>
            ))}
          />
        );
      })}
    </div>
  );
}

export default CandidateItemsMap;
