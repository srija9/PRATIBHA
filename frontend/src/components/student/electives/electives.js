import React, { useState } from "react";
import Navbar from "../../global_ui/navbar/navbar";
import Select from "react-select";
import "./electives.css";
import Button from "../../global_ui/buttons/button";

export default function Electives() {
  const [pElective, setpElective] = useState();
  const [oElective, setoElective] = useState();
  const [button, setButton] = useState(true);

  const pes = [
    { value: "Machine Learning", label: "Machine Learning" },
    { value: "Data Analytics", label: "Data Analytics" },
  ];
  const oes = [
    { value: "Disaster Management", label: "Disaster Management" },
    {
      value: "Environment",
      label: "Environement",
    },
  ];

  return (
    <div>
      <Navbar title={"Electives"} />
      <div className="electives-dropdown">
        <p>Professional Elective</p>
        <Select className="select" placeholder="" options={pes} onChange={(selectedpe)=>{setpElective(selectedpe)}}/>

        <p>Open Elective</p>
        <Select className="select" placeholder="" options={oes} disabled={!pElective} onChange={(selectedoe)=>{setoElective(selectedoe);setButton(false)}}/>
     <Button className='electives-button normal' disabled={button} children="Enroll"/>

  
     
      </div>
    </div>
  );
}
