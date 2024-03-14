import React, { useState } from 'react';

function UserFetch=({ id }) {
  const [list, setList] = useState();

  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(json => setList(json))
    .catch(err => console.log(err));

  return (
    <div>
      {list && list.title}
    </div>
  );
}

export default UserFetch;
