import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Data type definition
interface DataPoint {
    name: string;
    value: number;
}

const data: DataPoint[] = [
    { name: 'Jan', value: 14 },
    { name: 'Feb', value: 10 },
    { name: 'Mar', value: 18 },
    { name: 'Apr', value: 14 },
    { name: 'May', value: 13 },
    { name: 'Jun', value: 16 },
    { name: 'Jul', value: 8 },
    { name: 'Aug', value: 12 },
    { name: 'Sep', value: 10 },
    { name: 'Oct', value: 17 },
    { name: 'Nov', value: 14 },
    { name: 'Dec', value: 15 },
];

// Custom Tooltip component
interface CustomTooltipProps {
    active?: boolean;
    payload?: { value: number }[];
    label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip bg-white p-3 text-center rounded-xl">
                <p className="label text-xl font-bold text-[#5A5881]">{`Users`}</p><p className="label text-xl font-bold text-[#5A5881]">{`${payload[0].value}k`}</p>
            </div>
        );
    }

    return null;
};

const PerfomanceChart: React.FC = () => {
    return (
        <div className={'bg-white p-7 rounded-[10px]  shadow-lg'}>
            <p className='text-[#5A5881] font-bold flex items-center justify-end'><span className='inline-block w-2 h-2 bg-[#563BFF] rounded-full mr-2'></span> Current Period</p>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#563BFF"
                        className=''
                        strokeWidth={3}
                        dot={{ r: 0 }}
                        activeDot={{ r: 10 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PerfomanceChart;