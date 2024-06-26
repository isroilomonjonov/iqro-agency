import './App.css'
import PerfomanceChart from './components/charts/perfomance'
import SessionChart from './components/charts/sessions'
import Layout from './components/layout/layout'
import DailyOverview from './components/statistics/daily-overview'
import PerfomanceStatistics from './components/statistics/perfomance-statistics'
import SessionByDevice from './components/statistics/session-by-device'
import SessionLastSection from './components/statistics/session-last-section'
function App() {

  return (
    <Layout>
      <div className='flex gap-7 w-full pr-8 flex-wrap xl:flex-nowrap'>
        <div className='perfomance w-full xl:w-[60%]'>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-[#5A5881] font-bold text-xl'>Performance</h2>
            <p className='text-[#5A5881] font-bold'>Year</p>
          </div>
          <PerfomanceChart />
          <PerfomanceStatistics />
          <DailyOverview />
        </div>
        <div className='sessions w-full xl:w-[40%]'>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-[#5A5881] font-bold text-xl'>Sessions By Device</h2>
            <p className='text-[#5A5881] font-bold'>Year</p>
          </div>
          <div className='p-10 bg-white flex items-center gap-8 w-full rounded-[10px] mb-[30px] shadow-lg flex-wrap sm:gap-20'>
            <SessionChart />
            <div className='flex flex-col gap-5'>
              <div>
                <p className='font-bold text-[#5A5881]'>Desktop</p>
                <p className='text-[18px] text-[#15134B] font-medium'>8,085 <span className='text-[13px]'>13%</span></p>
              </div>
              <div>
                <p className='font-bold text-[#5A5881]'>Mobile</p>
                <p className='text-[18px] text-[#15134B] font-medium'>8,085 <span className='text-[13px]'>30%</span></p>
              </div>
              <div>
                <p className='font-bold text-[#5A5881]'>Tablets</p>
                <p className='text-[18px] text-[#15134B] font-medium'>8,085 <span className='text-[13px]'>25%</span></p>
              </div>
            </div>
          </div>
          <SessionByDevice />
          <SessionLastSection />
        </div>
      </div>

    </Layout>
  )
}

export default App
