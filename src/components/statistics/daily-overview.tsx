import { Button } from '../ui/button'
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
const DailyOverview = () => {
    const data1 = [{ name: 'Empty', value: 20 }, { name: 'Users', value: 80 }];
    const COLORS1 = ['#F7F8FB', '#563BFF'];
    const data2 = [{ name: 'Empty', value: 20 }, { name: 'Goals', value: 80 }];
    const COLORS2 = ['#F7F8FB', '#FF7049'];
    return (
        <div className='mt-[30px]'>
            <div className='flex justify-between items-center w-full mb-8'>
                <p className='font-bold text-[rgba(21,19,75,1)] text-xl'>Daily Overview</p>
                <Button variant={"secondary"} className='py-3 px-5 bg-white '>Export</Button>
            </div>
            <div className="flex gap-7 flex-wrap sm:flex-nowrap">
                <div className="w-full sm:w-1/2 flex items-center justify-between p-4 py-10 bg-white shadow-md rounded-lg">
                    <div className="text-center">
                        <p className="text-2xl text-[#15134B] font-bold">5,461</p>
                        <p className="text-[#5A5881] font-bold">Today</p>
                    </div>
                    <div className="flex justify-center items-center w-20 h-20 dailyOverviewShadow">
                        <PieChart width={80} height={80}>
                            <Tooltip wrapperStyle={{ zIndex: 999 }} />
                            <Pie
                                data={data1}
                                innerRadius={30}
                                outerRadius={40}
                                startAngle={90}
                                endAngle={-270}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data1.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} name={entry.name} />
                                ))}
                            </Pie>
                        </PieChart>
                        <div className="absolute text-xs font-semibold text-[#563BFF]">USERS</div>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl text-[#15134B] font-bold">8,085</p>
                        <p className="text-[#5A5881] font-bold">Expected</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 flex items-center justify-between p-4 py-10 bg-white shadow-md rounded-lg">
                    <div className="text-center">
                        <p className="text-2xl text-[#15134B] font-bold">140</p>
                        <p className="text-[#5A5881] font-bold">Today</p>
                    </div>
                    <div className="flex justify-center items-center w-20 h-20 dailyGoalsShadow">
                        <PieChart width={80} height={80}>
                            <Tooltip wrapperStyle={{ zIndex: 999 }} />
                            <Pie
                                data={data2}
                                innerRadius={30}
                                outerRadius={40}
                                startAngle={90}
                                endAngle={-270}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data2.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                        <p className="absolute z-10 text-xs font-semibold text-[#FF7049]">GOALS</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl text-[#15134B] font-bold">120</p>
                        <p className="text-[#5A5881] font-bold">Expected</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyOverview;