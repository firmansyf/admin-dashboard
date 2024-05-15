import {FC, useEffect} from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {uid} from 'uid'

type Props = {
  children: React.ReactNode
  formData: any
  setFormData: any
  data: any
  setData: any
  isStatus: any
  openModal: boolean
  setOpenModal: any
  setStatus: any
}

const AddEditModal: FC<Props> = ({
  children,
  formData,
  setFormData,
  data,
  setData,
  isStatus,
  openModal,
  setOpenModal,
  setStatus,
}) => {
  const handleOnChange = (e: any) => {
    const res = {...formData}
    res[e.target.name] = e.target.value
    setFormData(res)
  }

  const handleOnSubmit = (e: any) => {
    e.preventDefault()
    const isData: any = [...data]

    if (isStatus.status === true) {
      isData.forEach((item: any) => {
        if (item.id === isStatus.id) {
          item.name = formData.name
          item.position = formData.position
          item.task = formData.task
          item.progress = formData.progress
        }
      })
    } else {
      isData.push({
        id: uid(),
        name: formData.name,
        position: formData.position,
        task: formData.task,
        progress: formData.progress,
      })
    }
    setData(isData)
    setFormData({name: '', position: '', task: '', progress: ''})
    setStatus({id: null, status: false})
  }

  useEffect(() => {
    const res: any = [...data]
    const result = res.find((item: any) => item.id === isStatus.id)
    if (isStatus.id !== null) {
      setFormData({
        name: result?.name,
        position: result?.position,
        task: result?.task,
        progress: result?.progress,
      })
    }
  }, [data, isStatus])

  const onClose = () => {
    setFormData({name: '', position: '', task: '', progress: ''})
    setStatus({id: null, status: false})
  }

  const styleCustom = {
    section: 'flex flex-col gap-1',
    label: 'text-semibold text-sm',
    field:
      'w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-ou',
  }

  return (
    <AlertDialog open={openModal} onOpenChange={() => setOpenModal(false)}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add Data</AlertDialogTitle>
        </AlertDialogHeader>
        <form onSubmit={handleOnSubmit}>
          <section className='flex flex-col w-full gap-3'>
            <div className={`${styleCustom.section}`}>
              <label className={`${styleCustom.label}`}>Name</label>
              <input
                name='name'
                type='text'
                placeholder='Type a name'
                className={`${styleCustom.field}`}
                value={formData.name}
                onChange={handleOnChange}
              />
            </div>
            <div className={`${styleCustom.section}`}>
              <label className={`${styleCustom.label}`}>Position</label>
              <input
                name='position'
                type='text'
                placeholder='Type a position'
                className={`${styleCustom.field}`}
                value={formData.position}
                onChange={handleOnChange}
              />
            </div>
            <div className={`${styleCustom.section}`}>
              <label className={`${styleCustom.label}`}>Task</label>
              <input
                name='task'
                type='text'
                placeholder='Type a task'
                className={`${styleCustom.field}`}
                value={formData.task}
                onChange={handleOnChange}
              />
            </div>
            <div className={`${styleCustom.section}`}>
              <label className={`${styleCustom.label}`}>Progress</label>
              <input
                name='progress'
                type='number'
                placeholder='Type a progress'
                className={`${styleCustom.field}`}
                value={formData.progress}
                onChange={handleOnChange}
              />
            </div>
          </section>
          <AlertDialogFooter className='mt-8'>
            <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
            <AlertDialogAction type='submit'>Add</AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AddEditModal