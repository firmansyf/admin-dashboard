import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {FC} from 'react'

type Props = {
  // children: React.ReactNode
  data: any
  detailData: any
  setData: any
  openDialog: boolean
  setOpenDialog: any
}

const ModalDelete: FC<Props> = ({data, detailData, setData, openDialog, setOpenDialog}) => {
  const onDelete = () => {
    const res: any = [...data]
    const result = res?.filter((item: any) => item.id !== detailData?.id)
    setData(result)
  }

  return (
    <>
      <AlertDialog open={openDialog} onOpenChange={() => setOpenDialog(false)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure want to delete data <strong>{detailData?.name}</strong>?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onDelete} className='bg-red-600 text-white'>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default ModalDelete
