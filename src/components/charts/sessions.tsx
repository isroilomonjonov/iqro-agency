import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface DataPoint {
    name: string;
    value: number;
    fill: string;
}

const data1: DataPoint[] = [
    { name: 'Mobile', value: 80, fill: '#563BFF' }, // Purple
    { name: 'Other', value: 20, fill: '#f0f0f0' }, // Background
];

const data2: DataPoint[] = [
    { name: 'Tablets', value: 50, fill: '#FF7049' }, // Orange
    { name: 'Other', value: 50, fill: '#f0f0f0' }, // Background
];

const data3: DataPoint[] = [
    { name: 'Desktop', value: 20, fill: '#20C997' }, // Green
    { name: 'other', value: 80, fill: '#f0f0f0' }, // Background
];
const SessionChart: React.FC = () => {
    return (
        <div style={{ width: '60%', height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Tooltip />
                    <Pie
                        data={data1}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={100}
                        outerRadius={120}
                        startAngle={90}
                        endAngle={-270}
                        paddingAngle={5}
                    >
                        {data1.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                    <Pie
                        data={data2}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={90}
                        startAngle={90}
                        endAngle={-270}
                        paddingAngle={5}
                    >
                        {data2.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                    <Pie
                        data={data3}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={60}
                        startAngle={90}
                        endAngle={-270}
                        paddingAngle={5}
                    >
                        {data3.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div >
    );
};

export default SessionChart;
