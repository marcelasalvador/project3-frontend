import axios from 'axios';
import { useEffect, useState } from 'react'



function Table(props) {

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
  
    const tnTableData = data.filter(item => item.province === 'Tennessee');
  
    return (
   <div className="container-xs d-flex align-items-center overflow-auto w-25 h-50">

   
    <table className="table table-sm table-striped">
      <thead>
        <tr>
          <th>County</th>
          <th>Confirmed Cases</th>
          {/* <th>Deaths</th> */}
        </tr>
      </thead>
      <tbody>
        {tnTableData.map(item => (
            <tr key={item.county}>
            <td>{item.county}</td>
            <td><strong>{item.stats.confirmed}</strong></td>
            {/* <td>{item.stats.deaths}</td> */}
            {/* <td>
                {item.coordinates.latitude}, {item.coordinates.longitude}
            </td> */}
            </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table