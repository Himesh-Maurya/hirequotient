import React, { useState, useEffect } from 'react';
import ListItem from './component/ListItem';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://canopy-frontend-task.now.sh/api/holdings');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        console.log("json",jsonData)
        const assetGroups = {};
        jsonData.payload.forEach(item => {
          const assetClass = item.asset_class;
          if (!assetGroups[assetClass]) {
            assetGroups[assetClass] = [];
          }
          assetGroups[assetClass].push(item);
        });
        setData(assetGroups);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{minHeight:'98vh', padding: '5px', backgroundColor: 'lightblue' }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        Object.keys(data).map(assetClass => (
          <div key={assetClass}>
              <ListItem
                assetClass={assetClass}
                items={data[assetClass]}
              />
              <hr />
            </div>
        ))
      )}
    </div>
  );
};

export default App;


// import React from 'react';
// import ListItem from './component/ListItem';
// import { data } from './data';
// import  { useState, useEffect } from 'react';
// const App = () => {

//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.example.com/data');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const jsonData = await response.json();
//         const assetGroups = {};
//         jsonData.forEach(item => {
//           const assetClass = item.asset_class;
//           if (!assetGroups[assetClass]) {
//             assetGroups[assetClass] = [];
//           }
//           assetGroups[assetClass].push(item);
//         });
//         setData(assetGroups);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);
//   // const assetGroups = {};
//   // data.forEach(item => {
//   //   const assetClass = item.asset_class;
//   //   if (!assetGroups[assetClass]) {
//   //     assetGroups[assetClass] = [];
//   //   }
//   //   assetGroups[assetClass].push(item);
//   // });
//  // console.log("assetGroups",assetGroups)
//   return (
//     <div style={{padding: '5px', backgroundColor: 'lightblue' }}>
//       {Object.keys(data).map(assetClass => (
//         <ListItem
//           key={assetClass}
//           assetClass={assetClass}
//           items={assetGroups[assetClass]}
//         />
//       ))}
   
//     </div>
//   );
// };

// export default App;
