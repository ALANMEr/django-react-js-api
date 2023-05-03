import { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';

/**
 * This is a React component that fetches data from a specified URL and displays it as a line graph
 * using the Ant Design library.
 * @returns A Line chart component with data fetched from a specified URL and configured with various
 * properties such as xField, yField, seriesField, color, and lineStyle.
 */
export const Grafica = () => {

    const [data, setData] = useState([]);


    const url = "http://127.0.0.1:8000/crea/api/v1/crea/?format=json"
  
    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };





    const config = {
        data,
        xField: 'date',
        yField: 'price',
        yAxis: {
            label: {
        
                formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
            },
        },
        seriesField: 'type',
        color: ({ type }) => {
            return type === 'date' ? '#F4664A' : type === 'price' ? '#30BF78' : '#FAAD14';
        },
        lineStyle: ({ type }) => {
            if (type === 'date') {
                return {
                    lineDash: [4, 4],
                    opacity: 1,
                };
            }

            return {
                opacity: 0.5,
            };
        },
    };

    return <Line {...config} />;
};

