
import ShelbyCountyStats from '../components/ShelbyCountyStats';
import Table from "../components/Table"
import TNStats from '../components/TNStats';
// import TNMap from "./TNMap"
import FlourishMap from '../components/Flourish';

function Dashboard() {
  return (
    <div>
      
      <div className="app">
        <div className="app__left">
          <div className="app__header">
            <h1>901 COVID-19 Tracker</h1>
          </div>
          <div>
            <ShelbyCountyStats />
            <TNStats />
          </div>
          <div>
            <FlourishMap />
          </div>

          {/* <TNMap tnTableData={tnTableData}/> */}
        </div>
        <Table />
      </div>
    </div>
  );
}

export default Dashboard;
