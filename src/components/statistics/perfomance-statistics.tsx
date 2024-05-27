import PerfomanceStatisticsDurationIcon from '@/assets/perfomance-statistics-duration-icon'
import PerfomanceStatisticsRateIcon from '@/assets/perfomance-statistics-rate-icon'
import PerfomanceStatisticsSessionsIcon from '@/assets/perfomance-statistics-sessions-icon'
import PerfomanceStatisticsUsersIcon from '@/assets/perfomance-statistics-users-icon'
const PerfomanceStatistics = () => {
    return (
        <div className='mt-[30px] flex flex-wrap lg:flex-nowrap w-full gap-[30px] justify-between'>
            <div style={{ boxShadow: "0px 20px 45px 0px rgba(240, 237, 246, 1)" }} className='w-1/4 min-w-[130px] bg-white shadow-md p-5 rounded-[10px] flex flex-col items-start'>
                <div className='bg-[rgba(53,117,255,.10)] rounded-[10px] p-5 mb-7'>
                    <PerfomanceStatisticsUsersIcon />
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <p className='font-bold text-[#5A5881]'>Users</p>
                    <p className='font-medium text-[#15134B] text-2xl'>72.6k</p>
                    <p className='font-medium text-[#5A5881]'>+25%</p>
                </div>
            </div>
            <div style={{ boxShadow: "0px 20px 45px 0px rgba(240, 237, 246, 1)" }} className='w-1/4 min-w-[130px] bg-white shadow-md p-5 rounded-[10px] flex flex-col items-start'>
                <div className='bg-[rgba(243,102,67,.10)] rounded-[10px] p-5 mb-7'>
                    <PerfomanceStatisticsSessionsIcon />
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <p className='font-bold text-[#5A5881]'>Sessions</p>
                    <p className='font-medium text-[#15134B] text-2xl'>87.2k</p>
                    <p className='font-medium text-[#5A5881]'>+47%</p>
                </div>
            </div>
            <div style={{ boxShadow: "0px 20px 45px 0px rgba(240, 237, 246, 1)" }} className='w-1/4 min-w-[130px] bg-white shadow-md p-5 rounded-[10px] flex flex-col items-start'>
                <div className='bg-[rgba(69,36,248,.10)] rounded-[10px] p-5 mb-7'>
                    <PerfomanceStatisticsRateIcon />
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <p className='font-bold text-[#5A5881]'>Bounce Rate</p>
                    <p className='font-medium text-[#15134B] text-2xl'>26.3%</p>
                    <p className='font-medium text-[#5A5881]'>-28%</p>
                </div>
            </div>
            <div style={{ boxShadow: "0px 20px 45px 0px rgba(240, 237, 246, 1)" }} className='w-1/4 min-w-[130px] bg-white shadow-md p-5 rounded-[10px] flex flex-col items-start'>
                <div className='bg-[rgba(36,214,165,.10)] rounded-[10px] p-5 mb-7'>
                    <PerfomanceStatisticsDurationIcon />
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <p className='font-bold text-[#5A5881]'>Session Duration</p>
                    <p className='font-medium text-[#15134B] text-2xl'>2m 18s</p>
                    <p className='font-medium text-[#5A5881]'>+13%</p>
                </div>
            </div>

        </div>
    )
}

export default PerfomanceStatistics