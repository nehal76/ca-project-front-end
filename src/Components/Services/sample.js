// import React, { useEffect, useState } from 'react';
// import axios from 'axios';  // If you're using Axios

// export default function Sample() {  // Notice the uppercase 'S' in 'Sample'
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     // Option 1: Using Axios
//     axios.get('http://localhost:8080/hello')
//       .then(response => {
//         setMessage(response.data);  // Store the fetched data
//       })
//       .catch(error => {
//         console.error('There was an error fetching the API!', error);
//       });
//   }, []);  // Empty array means this effect runs once on component mount

//   return (
//     <>
//       <div>Hello API</div>
//       <p>{message}</p> {/* Display the API response here */}
//     </>
//   );
// }
