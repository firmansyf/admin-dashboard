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
    if (!formData.name) newErrors.name = 'Company name is required'
    if (!formData.department) newErrors.department = 'Department is required'
    if (!formData.post_code) newErrors.post_code = 'Post Code is required'
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
          item.department = formData.department
          item.location = formData.location
          item.post_code = formData.post_code
        }
      })
      setOpenModal(false)
    } else {
      isData.push({
        id: uid(),
        name: formData.name,
        department: formData.department,
        location: formData.location,
        post_code: formData.post_code,
      })
      setOpenModal(false)
    }
    setData(isData)
    setFormData({name: '', department: '', location: '', post_code: ''})
    setStatus({id: null, status: false})
  }

  useEffect(() => {
    const res: any = [...data]
    const result = res.find((item: any) => item.id === isStatus.id)
    if (isStatus.id !== null) {
      setFormData({
        name: result?.name,
        department: result?.department,
        location: result?.location,
        post_code: result?.post_code,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isStatus])

  const onClose = () => {
    setFormData({name: '', department: '', location: '', post_code: ''})
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
                placeholder='Type a company name'
                className={`${styleCustom.field}`}
                value={formData.name}
                onChange={handleOnChange}
              />
              {errors.name && <p className={`${styleCustom.error}`}>{errors.name}</p>}
            </div>

            <div className={`${styleCustom.section}`}>
              <label className={`${styleCustom.label}`}>
                Department<span className='text-red-500'>&#42;</span>
              </label>
              <input
                name='department'
                type='text'
                placeholder='Type a department'
                className={`${styleCustom.field}`}
                value={formData.department}
                onChange={handleOnChange}
              />
              {errors.department && <p className={`${styleCustom.error}`}>{errors.department}</p>}
            </div>

            <div className={`${styleCustom.section}`}>
              <label className={`${styleCustom.label}`}>Location</label>
              <input
                name='location'
                type='text'
                placeholder='Type a location'
                className={`${styleCustom.field}`}
                value={formData.location}
                onChange={handleOnChange}
              />
            </div>

            <div className={`${styleCustom.section}`}>
              <label className={`${styleCustom.label}`}>
                Post Code<span className='text-red-500'>&#42;</span>
              </label>
              <input
                name='post_code'
                type='number'
                placeholder='Type a post code'
                className={`${styleCustom.field}`}
                value={formData.post_code}
                onChange={handleOnChange}
              />
              {errors.post_code && <p className={`${styleCustom.error}`}>{errors.post_code}</p>}
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
