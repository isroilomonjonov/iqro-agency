import "./session.by.device.css"
const data = [
    { channel: 'Direct', traffic: 68.28, value: 23.28, color: 'blue' },
    { channel: 'Direct', traffic: 86.28, value: 23.28, color: 'orange' },
    { channel: 'Direct', traffic: 55.28, value: 23.28, color: 'green' },
];
function SessionByDevice() {
    const getBackgroundStyle = (color: string, value: number) => {
        return {
            background: `linear-gradient(to right, ${color} ${value}%, #ddd ${value}%)`
        };
    };
    return (
        <div className="flex justify-center items-center w-full mb-[30px]">
            <div className="w-full bg-white shadow-lg rounded-lg p-6 ">
                <h2 className="text-2xl font-semibold mb-4">Sessions By Device</h2>
                <div className="space-y-4">
                    <div className="flex items-center justify-between gap-6">
                        <p className="w-1/3 text-[#15134B] font-bold">Channel</p>
                        <p className="w-1/3 text-[#15134B] font-bold">Traffic (%)</p>
                        <p className=" w-1/3 text-[#15134B] font-bold">Value</p>
                    </div>
                    <p className="bg-[#F6F8FA] h-[1px] w-full"></p>
                    {data.map((item, index) => (
                        <div key={index} className="flex items-center justify-between gap-6">
                            <span className="w-1/3">{item.channel}</span>
                            <div className="w-1/3 flex items-center">
                                <input
                                    type="range"
                                    className="range"
                                    value={item.traffic}
                                    readOnly
                                    min="0"
                                    max="100"
                                    style={getBackgroundStyle(item.color, item.traffic)}
                                />
                            </div>
                            <span className="w-1/3 text-start">{item.value}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SessionByDevice;