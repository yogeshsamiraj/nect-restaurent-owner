import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import TopCards from "../components/dashboard/TopCards";
import AddWidget from "./addWidget";
import { useEffect, useState } from "react";
import dataToload from '../utils/dataToload.json'
import { calcualteData } from "../utils/calculateData";

const Dashboard = () => {
    const [savedData, setSavedData] = useState([])

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("widgetData"))
    
        if (storedData && storedData.length > 0) {
          setSavedData(storedData)
        } else {
          setSavedData(dataToload.map(item => item))
          localStorage.setItem("widgetData", JSON.stringify(dataToload))
        }
      }, []);

  return (
    <div>
      <div className="d-flex justify-content-end">
        <AddWidget savedData = {savedData} setSavedData = {setSavedData} />
      </div>
      <Row>
        {calcualteData(savedData).filter(item => item.type === 'Indicators').map((item, index) => (
             <Col sm="6" lg="3" key = {index}>
             <TopCards
               bg="bg-light-success text-success"
               title={item.key}
               value={item.value}
             />
           </Col>
        ))}
      </Row>
      <Row>
        {
            savedData.filter(item => item.type === 'Charts').map((item, index) => (
                <Col sm="6" lg="6" xl="7" xxl="8">
                <SalesChart />
              </Col>
            ))
        }
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row>
      <Row>
      {
  savedData
    .filter(item => item.type === 'List')
    .map((item, index) => {
      
      const colSize = item.column.length + 1 || (index % 2 === 0 ? "6" : "8");

      return (
        <Col sm={colSize} lg={colSize} xl={colSize + 1} xxl={colSize + 2} key={index}>
          <ProjectTables item={item} />
        </Col>
      );
    })
}
      </Row>
    </div>
  );
};

export default Dashboard
