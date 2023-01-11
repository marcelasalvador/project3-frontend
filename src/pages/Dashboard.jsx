import ShelbyCountyStats from "../components/ShelbyCountyStats";
import Table from "../components/Table";
import TNStats from "../components/TNStats";

function Dashboard() {
  return (
    <div className="text-center">
      <div>
        <div>
          <div className="p-5">
            <h1>901 COVID-19 Tracker</h1>
          </div>
          <div className="p-5">
            <ShelbyCountyStats />
          </div>
          <div className="p-5">
            <TNStats />
          </div>
        </div>
        <div className="pt-5 vh-50">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
