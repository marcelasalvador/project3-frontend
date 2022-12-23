import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Polygon, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const center = [35.860119, -86.660156];

function TNMap(props) {
  
  const { tnTableData } = props

  const [polygonsData, setpolygonsData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://services3.arcgis.com/PWXNAH2YKmZY7lBq/arcgis/rest/services/TN_counties/FeatureServer/1/query?where=1%3D1&outFields=*&geometry=&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=geojson"
      )

      // ('https://services3.arcgis.com/PWXNAH2YKmZY7lBq/arcgis/rest/services/TN_counties/FeatureServer/1/query?outFields=*&where=1%3D1&f=geojson')

      .then((res) => {
        const dataMap = res.data;
        // const polygonsData = dataMap
        setpolygonsData(dataMap);
        // console.log("this is polygon data", dataMap)
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const [mapTilerData, setMapTilerData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.maptiler.com/maps/94adda77-63ae-4df0-a5d6-6dfef4b24725/style.json?key=8apUUdkQojGs86PclFO8"
      )
      .then((res) => {
        console.log(res.data);
        setMapTilerData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // const mergedData = polygonsData.map(polygon => {
  //   // Find the corresponding entry in the other data set using the county name as the key
  //   const matchingData = tnTableData.find(data => data.county_name === polygon.county_name);
  //   // Merge the data from both data sets into a single object
  //   return {
  //     ...polygon,
  //     cases: matchingData.cases
      
  //   };
   
  // });
  // console.log("this is merged data", mergedData)

  return (
    <div>
      <div>
        {polygonsData && <p>Map data loaded</p>}
        {mapTilerData && <p>MapTiler data loaded</p>}
      </div>

      <MapContainer
        center={center}
        zoom={8}
        style={{ width: "80vw", height: "50vh" }}
      >
        <TileLayer
          url={
            "https://api.maptiler.com/maps/94adda77-63ae-4df0-a5d6-6dfef4b24725/style.json?key=8apUUdkQojGs86PclFO8"
          }
        />

        

        {polygonsData &&
          polygonsData.features.map((state) => {
            const coordinates = state.geometry.coordinates[0].map((item) => [
              item[1],
              item[0],
            ]);

            return (
              <>
              <Polygon
                pathOptions={{
                  fillColor: "#fafafa",
                  fillOpacity: 0.6,
                  weight: 1,
                  opacity: 1,
                  dashArray: "",
                  color: "white",
                }}

                positions={coordinates}

                permanent={true} 
                direction="center"

                eventHandlers={{
                  mouseover: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      dashArray: "",
                      fillColor: "#ffcccb",
                      fillOpacity: 0.7,
                      weight: 2,
                      opacity: 1,
                      color: "white",
                    });
                  },
                  mouseout: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      fillOpacity: 0.7,
                      weight: 2,
                      dashArray: "2",
                      color: "white",
                      fillColor: "#fafafa",
                    });
                  },

                  click: (e) => {
                    const layer = e.target;
                    // layer.bindPopup("hello")
                    layer
                      .bindPopup(
                        `County: ${state.properties.NAME}

                        `
                        
                      )
                      .openPopup();
                    // map.setView(props.coordinates, 10
                    // );
                  },
                }}
                
              />
    
              
                </>
            );
          
          })} 
          
      </MapContainer>
    </div>
  );
}

export default TNMap;

{
  /* <Marker position={polygonCoordinates}>
          <Popup>{name}</Popup>
        </Marker> */

        
}


{/* <br>
Confirmed cases: ${props.stats}
<br>
Deaths:${props.stats */}