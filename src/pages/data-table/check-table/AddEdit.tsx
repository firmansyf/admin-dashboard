import {FC, useEffect, useState} from 'react'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {uid} from 'uid'
import {Button} from '@/components/ui/button'

type Props = {
  children: React.ReactNode
  data: any
  setData: any
  isStatus: any
  openModal: boolean
  setOpenModal: any
  setStatus: any
  formData: any
  setFormData: any
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
  const [errors, setErrors] = useState<any>({})

  const handleOnChange = (e: any) => {
    const res = {...formData}
    res[e.target.name] = e.target.value
    setFormData(res)
  }

  const validateForm = () => {
    const newErrors: any = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.status) newErrors.status = 'Status is required'
    if (!formData.task) newErrors.task = 'Task is required'
    if (!formData.position) newErrors.position = 'Position is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleOnSubmit = (e: any) => {
    e.preventDefault()
    if (!validateForm()) return

    const isData: any = [...data]

    if (isStatus.status === true) {
      isData.forEach((item: any) => {
        if (item.id === isStatus.id) {
          item.name = formData.name
          item.status = formData.status
          item.task = formData.task
          item.position = formData.position
        }
      })
      setOpenModal(false)
    } else {
      isData.push({
        id: uid(),
        name: formData.name,
        status: formData.status,
        task: formData.task,
        position: formData.position,
      })
      setOpenModal(false)
    }
    setData(isData)
    setFormData({name: '', status: '', task: '', position: ''})
    setStatus({id: null, status: false})
  }

  useEffect(() => {
    const res: any = [...data]
    const result = res.find((item: any) => item.id === isStatus.id)
    if (isStatus.id !== null) {
      setFormData({
        name: result?.name,
        status: result?.status,
        position: result?.position,
        task: result?.task,
      })
    }
  }, [data, isStatus])

  const onClose = () => {
    setFormData({name: '', position: '', status: '', task: ''})
    setStatus({id: null, status: false})
    setErrors({})
  }

  const styleCustom = {
    section: 'flex flex-col gap-1',
    label: 'text-semibold text-sm',
    field:
      'w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-ou',
    error: 'text-red-500 text-xs italic',
  }

  return (
    <AlertDialog open={openModal} onOpenChange={() => setOpenModal(false)}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{isStatus?.id ? 'Edit' : 'Add'} Data</AlertDialogTitle>
        </AlertDialogHeader>
        <form onSubmit={handleOnSubmit}>
          <section className='flex flex-col w-full gap-3'>
            <div className={`${styleCustom.section}`}>
              <label className={`${styleCustom.label}`}>
                Name <span className='text-red-500'>&#42;</span>
              </label>
              <input
                name='name'
                type='text'
                placeholder='Type a name'
                className={`${styleCustom.field}`}
                value={formData.name}
                onChange={handleOnChange}
              />
              {errors.name && <p className={`${styleCustom.error}`}>{errors.name}</p>}
            </div>
            <div className={`${styleCustom.section}`}>
              <label className={`${styleCustom.label}`}>
                Task<span className='text-red-500'>&#42;</span>
              </label>
              <input
                name='task'
                type='type'
                placeholder='Type a task'
                className={`${styleCustom.field}`}
                value={formData.task}
                onChange={handleOnChange}
              />
              {errors.email && <p className={`${styleCustom.error}`}>{errors.email}</p>}
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
              {errors.position && <p className={`${styleCustom.error}`}>{errors.position}</p>}
            </div>
            <div className={`${styleCustom.section}`}>
              <label className={`${styleCustom.label}`}>
                Status<span className='text-red-500'>&#42;</span>
              </label>
              <select
                name='status'
                className={`${styleCustom.field} text-sm py-2`}
                value={formData.status}
                onChange={handleOnChange}
              >
                <option value=''>Status</option>
                <option value='progress'>On Progress</option>
                <option value='hold'>On Hold</option>
                <option value='done'>Done</option>
              </select>
              {errors.gender && <p className={`${styleCustom.error}`}>{errors.gender}</p>}
            </div>
          </section>
          <AlertDialogFooter className='mt-8'>
            <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
            <Button type='submit'>Add</Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AddEditModal
