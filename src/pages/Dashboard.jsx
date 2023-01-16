import ShelbyCountyStats from "../components/ShelbyCountyStats";
import Table from "../components/Table";
import TNStats from "../components/TNStats";
import { Col, Row, Container } from "react-bootstrap";

function Dashboard() {
  return (

    <div className="d-flex flex-row text-center mt-5 vh-100">
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-start">
        <h1 className="text-center pt-5">901 COVID-19 Tracker</h1>
          <Col className="mt-5" md={8} lg={6} xs={12}>
            
            <div className="d-flex flex-column mb-5">
              <ShelbyCountyStats />
            
              <TNStats />
            </div>
          </Col>
          <Col className="mt-5">
          <div>
              <Table />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
