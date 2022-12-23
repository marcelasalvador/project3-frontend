import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

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

    
    <div className="container-fluid h-50">
    <h2>County Data</h2>
    <div className="row h-100 align-items-center">
      <div className="col-md-6 offset-md-3">

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>County</th>
            <th>Confirmed Cases</th>
            {/* <th>Deaths</th> */}
          </tr>
        </thead>
        <tbody>
          {tnTableData.map((item) => (
            <tr key={item.county}>
              <td>{item.county}</td>
              <td>
                <strong>{item.stats.confirmed}</strong>
              </td>
              {/* <td>{item.stats.deaths}</td> */}
              {/* <td>
                {item.coordinates.latitude}, {item.coordinates.longitude}
            </td> */}
            
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
  </div>
</div>
  );
}

export default TableComponent;
