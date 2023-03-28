import React from 'react';
import{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {

    const [name, setname] = useState([]);
    useEffect(() => {
        axios
        .get('https://api.thecatapi.com/v1/breeds')
        .then(function (response) {
          // handle success
          setname(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
            // always executed
          });
      }, [])
  return (
    <div>
        <ul>{name.map(Name=>(
            <tr key={Name.name}>
            <Link to={`/details/${Name.name}`}>{Name.name}</Link>
            
            </tr>))
        }   
        </ul>

    </div>
  )
}
