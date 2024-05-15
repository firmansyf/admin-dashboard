import {FC} from 'react'
import DevelopmentTable from './development-table'
import CheckTable from './check-table'
import UsersTable from './users-table'
import CompanyTable from './company-table'

const TableModule: FC = () => {
  return (
    <>
      <main className='flex flex-col gap-3 min-h-screen w-full'>
        <section className='flex w-full gap-3'>
          <DevelopmentTable />
          <CheckTable />
        </section>
        <section className='w-full flex gap-3'>
          <UsersTable />
          <CompanyTable />
        </section>
      </main>
    </>
  )
}

export default TableModule
