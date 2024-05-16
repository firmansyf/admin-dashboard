import DataTableComponent from '@/components/data-table'
import {Button} from '@/components/ui/button'
import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card'
import {useEffect, useState} from 'react'
import AddEditModal from './AddEdit'
import {PlusIcon} from '@heroicons/react/24/outline'
import ModalDelete from './delete'
import ModalDetail from './detail'

export default function UserTable() {
  const [dataUserTable, setDataUserTable] = useState<any[]>([])
  const [openModalAddEdit, setOpenModalAddEdit] = useState<boolean>(false)
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)
  const [openModalDetail, setOpenModalDetail] = useState<boolean>(false)
  const [isStatus, setStatus] = useState<any>({id: null, status: false})
  const [detail, setDetail] = useState<any>()
  const [searchData, setSearchData] = useState<any>(null)
  const [filteredData, setFilteredData] = useState<any>(dataUserTable)
  const [formUserTable, setFormUserTable] = useState<any>({
    name: '',
    email: '',
    position: '',
    gender: '',
  })

  useEffect(() => {
    setFilteredData(dataUserTable)
  }, [dataUserTable])

  const onEdit = (isId: any) => {
    setOpenModalAddEdit(true)
    setStatus({id: isId, status: true})
  }

  const onDelete = (val: any) => {
    setDetail(val)
    setOpenModalDelete(true)
  }

  const onView = (val: any) => {
    setDetail(val)
    setOpenModalDetail(true)
  }

  const handleOnChange = (event: any) => {
    const val: any = event.target?.value
    setSearchData(val)
    if (val === '') {
      setFilteredData(dataUserTable)
    } else {
      const filtered = dataUserTable?.filter((item: any) =>
        item.name.toLowerCase().includes(val.toLowerCase())
      )
      setFilteredData(filtered)
    }
  }

  return (
    <>
      <Card className='flex-1'>
        <CardHeader>
          <CardTitle className='flex items-center justify-between'>
            <span className='text-lg'>User Table</span>
            <div className='w-1/2 flex items-center gap-1'>
              <input
                type='text'
                name='search'
                placeholder='Search data...'
                className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 text-sm outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out'
                value={searchData}
                onChange={handleOnChange}
              />
              <AddEditModal
                setStatus={setStatus}
                formData={formUserTable}
                setFormData={setFormUserTable}
                data={dataUserTable}
                setData={setDataUserTable}
                isStatus={isStatus}
                openModal={openModalAddEdit}
                setOpenModal={setOpenModalAddEdit}
              >
                <>
                  <Button size={'sm'} onClick={() => setOpenModalAddEdit(true)}>
                    <PlusIcon className='w-4' />
                  </Button>
                </>
              </AddEditModal>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className='p-1'>
          <DataTableComponent
            onDelete={onDelete}
            onEdit={onEdit}
            onView={onView}
            title='Users Table'
            data={filteredData}
            columns={['name', 'email']}
          />
        </CardContent>
      </Card>

      <ModalDelete
        data={filteredData}
        detailData={detail}
        setData={setFilteredData}
        openDialog={openModalDelete}
        setOpenDialog={setOpenModalDelete}
      />

      <ModalDetail
        detailData={detail}
        openDialog={openModalDetail}
        setOpenDialog={setOpenModalDetail}
      />
    </>
  )
}
