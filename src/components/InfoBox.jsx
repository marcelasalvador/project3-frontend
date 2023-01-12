import React from "react";
import Card from "react-bootstrap/Card";


const InfoBox = ({ title, cases, total}) => {
    return (

<div>
      <Card >
        <Card.Body>               
          <Card.Title >{cases}</Card.Title>
          <Card.Text>
            {title}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>   
    )     
}      

export default InfoBox