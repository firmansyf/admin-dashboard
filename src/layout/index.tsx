import {routes} from '@/routes/routes'
import Sidebar from './sidebar'
import {Routes, Route} from 'react-router-dom'

import Footer from './footer'
import Navbar from './navbar'

export function MainLayout() {
  return (
    <div className='min-h-screen relative bg-blue-gray-50/50'>
      <Sidebar routes={routes} />
      <div className='p-4 xl:ml-80'>
        <Navbar />
        {/* <Configurator /> */}

        {/* <IconButton
            size='lg'
            color='green'
            className='fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10'
            ripple={false}
            onClick={() => toWA('https://wa.me/6285156948098')}
          >
            <PhoneIcon className='h-5 w-5' />
          </IconButton> */}

        <Routes>
          {routes.map(({pages}) =>
            pages.map(({path, element}, index) => (
              <Route key={index} path={path} element={element} />
            ))
          )}
        </Routes>
        <div className='text-blue-gray-600'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default MainLayout
