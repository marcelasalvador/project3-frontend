
import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Table  from "react-bootstrap/Table";

function TableComponent(props) {
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

  const tnTableData = data.filter((item) => item.province === "Tennessee");

  return (
    <div className="pb-5" bordered>
      <Container >
        <Row >
          <Col className=" col-md-6 offset-md-3 align-items-center">
            <h2 className="pb-5">County Data</h2>
            <div style={{height: '80vh', overflow: 'scroll'}}>
            <Table
        
        
              striped
              bordered
            >
              <thead className="sticky">
                <tr >
                  <th >County</th>
                  <th >Confirmed Cases</th>
                  {/* <th>Deaths</th> */}
                </tr>
              </thead>
              <tbody>
                {tnTableData.map((item) => (
                  <tr key={item.county}>
                    <td>{item.county}</td>
                    <td>
                      {item.stats.confirmed.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TableComponent;
