import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {FC} from 'react'

type Props = {
  detailData: any
  openDialog: boolean
  setOpenDialog: any
}

const ModalDetail: FC<Props> = ({detailData, openDialog, setOpenDialog}) => {
  const styleCustom = {
    section: 'flex flex-col gap-1 items-center',
    label: 'text-semibold text-sm',
  }

  const colorCondition = (val: string) => {
    let color: string = ''
    if (val === 'done') return (color = 'bg-green-300')
    if (val === 'hold') return (color = 'bg-indigo-300')
    if (val === 'progress') return (color = 'bg-blue-500')

    return color
  }

  return (
    <>
      <AlertDialog open={openDialog} onOpenChange={() => setOpenDialog(false)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Detail Data</AlertDialogTitle>
            <AlertDialogDescription className='flex flex-col gap-4 py-5'>
              <div className={`${styleCustom.section}`}>
                <label className={`${styleCustom.label}`}>Name</label>
                <span className='font-bold text-black'>{detailData?.name || '-'}</span>
              </div>
              <div className={`${styleCustom.section}`}>
                <label className={`${styleCustom.label}`}>Task</label>
                <span className='font-bold text-black'>{detailData?.task || '-'}</span>
              </div>
              <div className={`${styleCustom.section}`}>
                <label className={`${styleCustom.label}`}>Position</label>
                <span className='font-bold text-black'>{detailData?.position || '-'}</span>
              </div>
              <div className={`${styleCustom.section}`}>
                <label className={`${styleCustom.label}`}>Status</label>
                <div className={`${colorCondition(detailData?.status)} p-1 w-max rounded-lg`}>
                  <span className='font-bold capitalize text-white'>
                    {detailData?.status || '-'}
                  </span>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default ModalDetail
