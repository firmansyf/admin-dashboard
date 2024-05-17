import {useState} from 'react'
import Chart from 'react-apexcharts'
import {Card, CardContent, CardHeader} from '@/components/ui/card'

export default function SecondCard() {
  const [chartState, setChartState] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  })

  return (
    <section className='flex items-center gap-4 w-full max-sm:flex-col max-lg:flex-row'>
      <Card className='flex-1 p-0 rounded-md w-full'>
        <CardHeader className='bg-[#eeefff] p-3'>
          <span className='text-blue-700 font-semibold'>Data Pie Chart 1</span>
        </CardHeader>
        <CardContent>
          <Chart options={chartState.options} series={chartState.series} type='pie' height={220} />
        </CardContent>
      </Card>

      <Card className='flex-1 p-0 rounded-md w-full'>
        <CardHeader className='bg-[#eeefff] p-3'>
          <span className='text-blue-700 font-semibold'>Data Pie Chart 2</span>
        </CardHeader>
        <CardContent>
          <Chart options={chartState.options} series={chartState.series} type='pie' height={220} />
        </CardContent>
      </Card>
    </section>
  )
}
