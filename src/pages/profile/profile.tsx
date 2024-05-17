import {FC} from 'react'
import FictureCard from './card/ficture'
import AboutCard from './card/about'
import ChartCard from './card/chart'

const ProfileModule: FC = () => {
  return (
    <>
      <main className='flex flex-col w-full'>
        <section className='flex gap-3'>
          <div className='w-1/3'>
            <FictureCard />
          </div>
          <div className='flex-1 flex gap-3 flex-col'>
            <AboutCard />
            <ChartCard />
          </div>
        </section>
        <section></section>
      </main>
    </>
  )
}

export default ProfileModule
