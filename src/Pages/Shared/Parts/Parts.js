import React, { useEffect, useState } from 'react';
import Part from '../Part/Part.js';
import './Parts.css'



const Parts = () => {
      const [parts, setParts] = useState([]);
      useEffect(() => {
            fetch('http://localhost:5000/parts')
                  .then(res => res.json())
                  .then(data => setParts(data))

      }, [])

      return (
            <div>
                  <h1 className='parts-section'>COMPUTER PARTS</h1>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
                        {
                              parts.slice(0, 6).map(part => <Part
                                    key={part._id}
                                    part={part}
                              ></Part>)
                        }
                  </div>
            </div>
      );
};

export default Parts;