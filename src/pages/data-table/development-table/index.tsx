import DataTableComponent from '@/components/data-table'
import {Button} from '@/components/ui/button'
import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card'
import {useState} from 'react'
import AddEditModal from './AddEdit'
import {PlusIcon} from '@heroicons/react/24/outline'
import ModalDelete from './delete'
import ModalDetail from './detail'

export default function DevelopmentTable() {
  const [dataDevelopmentTable, setDataDevelopmentTable] = useState<any[]>([])
  const [openModalAddEdit, setOpenModalAddEdit] = useState<boolean>(false)
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)
  const [openModalDetail, setOpenModalDetail] = useState<boolean>(false)
  const [isStatus, setStatus] = useState<any>({id: null, status: false})
  const [detail, setDetail] = useState<any>()
  const [formDevelopmentTable, setFormDevelopmentTable] = useState<any>({
    name: '',
    position: '',
    progress: '',
    task: '',
  })

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

  return (
    <>
      <Card className='flex-1'>
        <CardHeader>
          <CardTitle className='flex items-center justify-between'>
            <span>Development Table</span>
            <AddEditModal
              setStatus={setStatus}
              formData={formDevelopmentTable}
              setFormData={setFormDevelopmentTable}
              data={dataDevelopmentTable}
              setData={setDataDevelopmentTable}
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
          </CardTitle>
        </CardHeader>
        <CardContent className='p-1'>
          <DataTableComponent
            onDelete={onDelete}
            onEdit={onEdit}
            onView={onView}
            title='Development Table'
            data={dataDevelopmentTable}
            columns={['name', 'task', 'progress']}
          />
        </CardContent>
      </Card>

      <ModalDelete
        data={dataDevelopmentTable}
        detailData={detail}
        setData={setDataDevelopmentTable}
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
