
import ShelbyCountyStats from './ShelbyCountyStats';
import TableComponent from './Table';
import TNStats from '../components/TNStats';
// import TNMap from "./TNMap"
import FlourishMap from '../components/Flourish';



function LocationStats(props) {
// loading message
const { tnTableData } = props;



  return (
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
        <TableComponent/>
  </div>
  )
}

export default LocationStats