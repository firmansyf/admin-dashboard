import {FC} from 'react'
import FirstCard from './card/FirstCard'
import SecondCard from './card/SecondCard'

const Dashboard: FC = () => {
  return (
    <main className='flex flex-col gap-5'>
      <FirstCard />
      <SecondCard />
    </main>
  )
}

export {Dashboard}
