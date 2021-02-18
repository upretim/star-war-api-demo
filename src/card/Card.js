import React  from 'react';
import { Card} from 'react-bootstrap';
export default function PlanetCard(props) { 
   console.log(props);
    return(<>
        <Card className="card">
        <Card.Body>
            <Card.Title className="card-title">{props.data.name}</Card.Title>
            <Card.Text>
             <table>
               <tr>
                 <td>Climate:</td>
                 <td>{props.data.climate}</td>
               </tr>
               <tr>
                 <td>Diameter:</td>
                 <td>{props.data.diameter}</td>
               </tr>
               <tr>
                 <td>Gravity:</td>
                 <td>{props.data.gravity}</td>
               </tr>
               <tr>
                 <td>Orbital period:</td>
                 <td>{props.data.orbital_period}</td>
               </tr>
               <tr>
                 <td>Population:</td>
                 <td>{props.data.population}</td>
               </tr>
             </table>
            </Card.Text>
        </Card.Body>
        </Card>
      </>
    );
  }