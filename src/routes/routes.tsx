import {Dashboard} from '@/pages/dashboard'
import TableModule from '@/pages/data-table/dataTable'
import ProfileModule from '@/pages/profile/profile'

import {SquaresPlusIcon, Square3Stack3DIcon, UserIcon} from '@heroicons/react/24/outline'

const icon = {
  className: 'w-5 h-5 text-inherit',
}
export const routes = [
  {
    pages: [
      {
        icon: <SquaresPlusIcon {...icon} />,
        name: 'main dashboard',
        path: '/',
        element: <Dashboard />,
      },
      {
        icon: <Square3Stack3DIcon {...icon} />,
        name: 'data tables',
        path: '/tables',
        element: <TableModule />,
      },
      {
        icon: <UserIcon {...icon} />,
        name: 'profile',
        path: '/profile',
        element: <ProfileModule />,
      },
      // {
      //   icon: <CalendarDaysIcon {...icon} />,
      //   name: 'kalender Islam',
      //   path: '/kalender-islam',
      //   element: <KalenderIslamModule />,
      // },
    ],
  },
]
