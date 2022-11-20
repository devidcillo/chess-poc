import React, { useState, useEffect } from 'react';
import { getSamples } from '../services/api';

const List = () => {
    const [posts, setPosts] = useState([]);

    const options = {
        method: 'GET'
    };

    useEffect(() => {
        fetch('https://lichess.org/api/tournament', options)
          .then((res) => res.json())
          .then((result) => {
            setPosts(result['created']);
          })
          .catch(err => console.error(err));
      }, []);
  
    return (<ul>
        {posts.map((post) => (
          <li key={post.id}>{post.fullName}</li>
        ))}
      </ul>);
}

export default List