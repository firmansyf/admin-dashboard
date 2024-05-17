import {Card, CardHeader, CardContent} from '@/components/ui/card'
import {ChartBarIcon} from '@heroicons/react/16/solid'
import {CalendarIcon} from '@heroicons/react/24/outline'
import {useMemo} from 'react'
import Chart from 'react-apexcharts'
import {ApexOptions} from 'apexcharts'

export default function ChartCard() {
  const chartState = useMemo(
    () => ({
      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'area',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z',
          ],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
      } as ApexOptions,
    }),
    []
  )

  return (
    <>
      <Card>
        <CardHeader>
          <section className='flex justify-between items-center'>
            <div className='flex gap-1 bg-gray-200 p-2 rounded-lg'>
              <CalendarIcon className='w-5' />
              <span className='text-sm'>This month</span>
            </div>

            <ChartBarIcon className='text-blue-700 w-6' />
          </section>
        </CardHeader>
        <CardContent className='flex w-full'>
          <div className='w-full'>
            <Chart
              options={chartState.options}
              series={chartState.series}
              type='area'
              height={300}
            />
          </div>
        </CardContent>
      </Card>
    </>
  )
}
