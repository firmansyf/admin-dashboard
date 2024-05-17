import {Card} from '@/components/ui/card'
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  ScaleIcon,
  CheckCircleIcon,
  FolderOpenIcon,
} from '@heroicons/react/16/solid'

export default function FirstCard() {
  const dataDummy1 = [
    {name: 'Earnings', count: 350.4, icon: <ChartBarIcon className='w-8 text-blue-700' />},
    {
      name: 'Spend this month',
      count: 642.39,
      icon: <CurrencyDollarIcon className='w-8 text-blue-800' />,
    },
    {name: 'Sales', count: 574.34},
  ]

  const dataDummy2 = [
    {name: 'Your Belance', count: 1002.0, icon: <ScaleIcon className='w-8 text-blue-700' />},
    {name: 'New Tasks', count: 100, icon: <CheckCircleIcon className='w-8 text-blue-700' />},
    {name: 'Total Projects', count: 790, icon: <FolderOpenIcon className='w-8 text-blue-700' />},
  ]

  return (
    <section className='flex flex-col gap-6'>
      <div className='flex items-center gap-4 max-sm:flex-col max-lg:flex-row w-full'>
        {dataDummy1.map((item: any, i: number) => (
          <Card className='flex-1 w-full flex gap-3 p-6 rounded-xl bg-[#eeefff]' key={i}>
            {item.icon && (
              <span className='p-1 w-12 h-12 flex item-center justify-center bg-blue-200 rounded-full'>
                {item.icon}
              </span>
            )}
            <div className='flex flex-col'>
              <span className='text-sm text-gray-400'>{item.name}</span>
              <span>${item.count}</span>
            </div>
          </Card>
        ))}
      </div>

      <div className='flex items-center gap-4'>
        {dataDummy2.map((item: any, i: number) => (
          <Card
            className='flex-1 flex  gap-3 p-6 rounded-xl  max-sm:flex-col max-lg:flex-row bg-[#eeefff]'
            key={i}
          >
            {item.icon && (
              <span className='p-1  w-12 h-12 flex item-center justify-center bg-blue-200 rounded-full'>
                {item.icon}
              </span>
            )}
            <div className='flex flex-col'>
              <span className='text-sm text-gray-400'>{item.name}</span>
              <span>${item.count}</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
