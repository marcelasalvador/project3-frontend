import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import InfoBox from "./InfoBox";

function TNStats(props) {
  // TN county total stats JHU
  const [dataTN, setDataTN] = useState([]);
  const [totalConfirmedTN, setTotalConfirmedTN] = useState(0);
  const [totalDeathsTN, setTotalDeathsTN] = useState(0);
  const [updatedDateTN, setUpdatedDateTN] = useState(null);
  const [coordinatesCounty, setCoordinatesCounty] = useState(0);

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/jhucsse/counties/")
      .then((res) => {
        setDataTN(res.data);
        console.log(res.data);

        const tnStateData = res.data.find(
          (item) => item.province === "Tennessee" && item.county === "Shelby"
        );

        const totalConfirmedTN = res.data.reduce((acc, cur) => {
          if (cur.province === "Tennessee") {
            return acc + cur.stats.confirmed;
          }
          return acc;
        }, 0);
        const formattedConfirmedTN = totalConfirmedTN.toLocaleString();
        console.log(formattedConfirmedTN);
        setTotalConfirmedTN(formattedConfirmedTN);

        const totalDeathsTN = res.data.reduce((acc, cur) => {
          if (cur.province === "Tennessee") {
            return acc + cur.stats.deaths;
          }
          return acc;
        }, 0);
        const formattedTotalDeathsTN = totalDeathsTN.toLocaleString();
        console.log(formattedTotalDeathsTN);
        setTotalDeathsTN(formattedTotalDeathsTN);

        const dateValueTN = new Date(tnStateData.updatedAt);
        setUpdatedDateTN(
          dateValueTN.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })
        );

        const coordinatesCounty = tnStateData.coordinates;
        setCoordinatesCounty(coordinatesCounty);
        console.log(coordinatesCounty);
      });
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://disease.sh/v3/covid-19/jhucsse/counties/"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center tex-center">
          <Col lg={10}>
            <div>
              <h2 className="pb-3">Tennessee</h2>
              <InfoBox
                className="card-text"
                title="Confirmed"
                cases={totalConfirmedTN}
              />
              <InfoBox
                className="card-text"
                title="Deaths"
                cases={totalDeathsTN}
              />
              <InfoBox
                className="card-text"
                title="Last Update"
                cases={updatedDateTN}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TNStats;
