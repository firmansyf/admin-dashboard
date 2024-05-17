import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {Progress} from '@/components/ui/progress'

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

  return (
    <>
      <AlertDialog open={openDialog} onOpenChange={() => setOpenDialog(false)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Detail Data</AlertDialogTitle>
            <AlertDialogDescription className='flex flex-col gap-4 py-5'>
              <div className={`${styleCustom.section}`}>
                <label className={`${styleCustom.label}`}>Name</label>
                <span className='font-bold text-black'>{detailData?.name}</span>
              </div>
              <div className={`${styleCustom.section}`}>
                <label className={`${styleCustom.label}`}>Position</label>
                <span className='font-bold text-black'>{detailData?.position}</span>
              </div>
              <div className={`${styleCustom.section}`}>
                <label className={`${styleCustom.label}`}>Task Name</label>
                <span className='font-bold text-black'>{detailData?.task}</span>
              </div>
              <div className={`${styleCustom.section}`}>
                <label className={`${styleCustom.label}`}>Progress</label>
                <Progress value={detailData?.progress} className='w-[60%]' />
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
