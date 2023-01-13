import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";


function TableTest() {
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
        <div>
          <ReactTable
            data={tnTableData}
            columns={[
              {
                Header: "County Data",
                columns: [
                  {
                    Header: "County",
                    accessor: "county"
                  },
                  {
                    Header: "Confirmed Cases",
                    
                    accessor: "confirmed"
                  },
                 
                ]
              },
             
            ]}
            defaultPageSize={20}
            style={{
              height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
            }}
            className="-striped -highlight"
          />
          <br />
          <Tips />
          <Logo />
        </div>
      );
    }
  
export default TableTest