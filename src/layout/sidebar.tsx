import {Button} from '@/components/ui/button'
import {Card} from '@/components/ui/card'
import {Toggle} from '@/components/ui/toggle'
import {setOpenSidenav, useLayoutController} from '@/context'
import {SparklesIcon} from '@heroicons/react/16/solid'
import {XMarkIcon} from '@heroicons/react/24/outline'
import {NavLink as Link} from 'react-router-dom'

export default function Sidebar({routes}: any) {
  const [controller, dispatch]: any = useLayoutController()
  const {sidenavType, openSidenav} = controller

  const sidenavTypes: any = {
    dark: 'bg-gradient-to-br from-gray-800 to-gray-900',
    white: 'bg-white shadow-sm',
    transparent: 'bg-transparent',
  }

  const styleNavlink = {
    active: 'text-[#050990] font-bold',
    noActive: 'text-gray-500',
  }
  return (
    <>
      <aside
        className={`${sidenavTypes[sidenavType]} ${
          openSidenav ? 'translate-x-0' : '-translate-x-80'
        } flex justify-between flex-col fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
      >
        <section className=''>
          <div className={`relative`}>
            <section className='py-7 px-4 text-center flex gap-2 border-b-2 flex-col '>
              <h1 className='font-semibold text-xl tracking-wide'>Admin Dashboard</h1>
              <span className='font-normal text-gray-500'>First Mate</span>
            </section>

            <Toggle
              className='absolute right-1 top-2 grid rounded-xl xl:hidden'
              onClick={() => setOpenSidenav(dispatch, false)}
            >
              <XMarkIcon strokeWidth={2.5} className='h-5 w-5 text-black' />
            </Toggle>
          </div>
          <div className='my-7 mx-4'>
            {routes.map(({title, pages}: any, key: number) => (
              <ul key={key} className='mb-4 flex flex-col gap-1'>
                {title && (
                  <li className='mx-3.5 mt-4 mb-2'>
                    <span>{title}</span>
                  </li>
                )}

                {pages.map(({icon, name, path}: any) => (
                  <li key={name} className='my-1'>
                    <Link
                      to={path}
                      className={({isActive}) =>
                        isActive
                          ? `${styleNavlink.active} flex bg-[#EEE] rounded-md`
                          : `${styleNavlink.noActive}`
                      }
                    >
                      <button
                        onClick={() => setOpenSidenav(dispatch, false)}
                        className={`flex items-center gap-3 w-full p-2`}
                      >
                        {icon}
                        <span className='capitalize mx-1 tracking-wide text-sm'>{name}</span>
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        <section className='flex py-3 relative'>
          <Card className='m-1 bg-indigo-500 gap-2 text-white h-auto px-5 py-12 relative flex flex-col items-center justify-center rounded-3xl'>
            <span className=''> Upgare to PRO</span>
            <div className='flex justify-center'>
              <span className='text-sm text-center'>
                Improve your developmet process and start doing more with Admin Dashboard. <br />
                First Mate
              </span>
            </div>
            <Button className='mt-3'>Upgrade to PRO</Button>
          </Card>
          <span className='absolute p-6 border-white border-4 rounded-full top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-500'>
            <SparklesIcon className='w-7 text-white' />
          </span>
        </section>
      </aside>
    </>
  )
}
