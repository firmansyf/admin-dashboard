import Chart from 'react-apexcharts'
import {Card, CardContent, CardHeader} from '@/components/ui/card'
import {useMemo} from 'react'
import {ApexOptions} from 'apexcharts'

export default function SecondCard() {
  const chartState = useMemo(
    () => ({
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          width: 380,
          type: 'pie' as const, // Pastikan tipe di sini adalah salah satu dari tipe yang diizinkan
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
      } as ApexOptions, // Pastikan ini sesuai dengan tipe ApexOptions
    }),
    []
  )

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
