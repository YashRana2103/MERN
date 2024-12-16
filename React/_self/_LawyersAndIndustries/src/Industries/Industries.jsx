import React, { useEffect, useState } from "react";
import IndustryCard from "./IndustryCard";
import { useIndustries } from "../contexts/IndustriesContext";
function Industries() {
  const { industries } = useIndustries();

  console.log(industries);
  const industriesElement = industries.map((industry) => (
    <IndustryCard
      key={industry.i_id}
      i_name={industry.i_name}
      i_desc={industry.i_desc}
    />
  ));
ptheme
  return (
    <div>
      {industriesElement[0]}
      {industriesElement[1]}
    </div>
  );
}
export default Industries;
