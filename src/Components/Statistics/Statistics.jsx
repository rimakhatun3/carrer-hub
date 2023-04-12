import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
   
    const marksArray = [
        {
          id: 1,
          name: "portfolio-resurces",
          mark: 57
        },
        {
          id: 2,
          name: "tea-house",
          mark: 58
        },
        {
          id: 3,
          name: "g3architech",
          mark: 55
        },
        {
          id: 4,
          name: "legal-house",
          mark: 59
        },
        {
          id: 5,
          name: "geometry-genius",
          mark: 54
        },
        {
          id: 6,
          name: "ai-universe",
          mark: 55
        },
        {
          id: 7,
          name: "quiz-hero",
          mark: 60
        },
        {
          id: 8,
          name: "knowledge-cafe",
          mark: 60
        }
        
      ];
    return (
        <div className='mt-20 mx-0'>
        
         <AreaChart width={700}
          height={400}
          data={marksArray}>
         <XAxis dataKey="name" />
            <YAxis  />
            <Tooltip />
            <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
         </AreaChart>
        </div>
    );
};

export default Statistics;