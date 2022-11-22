import React, { useState, useEffect } from 'react';
import API from '../services/api';

const List = () => {
    const [openings, setOpenings] = useState([]);

    useEffect(() => {
        API.getAllOpenings()
          .then((result) => {
            setOpenings(result);
          })
          .catch(err => console.error(err));
      }, []);
  
    return (<ul>
        {openings.map((opening) => (
          <li key={opening.id}>{opening.name}</li>
        ))}
      </ul>);
}

export default List