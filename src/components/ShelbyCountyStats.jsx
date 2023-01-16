import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row, Container} from "react-bootstrap";
import InfoBox from "./InfoBox";

function ShelbyCountyStats() {
  const [confirmedShelby, setConfirmedShelby] = useState(null);
  const [deathsShelby, setDeathsShelby] = useState(null);
  const [updatedAtShelby, setupdatedAtShelby] = useState(null);

  //Shelby county stats  JHU
  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/jhucsse/counties/shelby")
      .then((res) => {
        const dataShelby = res.data;
        const shelbyCountyData = dataShelby.find(
          (item) => item.province === "Tennessee" && item.county === "Shelby"
        );

        const confirmedValueShelby = shelbyCountyData.stats.confirmed;
        const deathsValueShelby = shelbyCountyData.stats.deaths;
        const dateValueShelby = new Date(shelbyCountyData.updatedAt);

        const formattedConfirmedShelby = confirmedValueShelby.toLocaleString();
        console.log(formattedConfirmedShelby);
        setConfirmedShelby(formattedConfirmedShelby);

        const formattedDeathsShelby = deathsValueShelby.toLocaleString();
        console.log(formattedDeathsShelby);
        setDeathsShelby(formattedDeathsShelby);

        setupdatedAtShelby(
          dateValueShelby.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center tex-center mb-5">
          <Col lg={10} >
            <div>
              <h2 className="pb-3">Shelby</h2>
              <InfoBox
                className="card-text"
                title="Confirmed"
                cases={confirmedShelby}
              />
              <InfoBox
                className="card-text"
                title="Deaths"
                cases={deathsShelby}
              />
              <InfoBox
                className="card-text"
                title="Last Update"
                cases={updatedAtShelby}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ShelbyCountyStats;
