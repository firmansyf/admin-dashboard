import {FC} from 'react'
import {
  Table,
  TableCaption,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  TableHeader,
} from '../ui/table'
import {TrashIcon, PencilIcon} from '@heroicons/react/24/outline'
import {InboxIcon} from '@heroicons/react/16/solid'

type Props = {
  data: any
  columns: any
  title: string
  onEdit: (id: number) => void
  onDelete: (val: any) => void
  onView: (val: any) => void
}

const DataTableComponent: FC<Props> = ({data, columns, title, onEdit, onDelete, onView}) => {
  return (
    <Table>
      <TableCaption>A list of your recent {title}.</TableCaption>
      <TableHeader>
        <TableRow>
          {columns?.map((d: any, i: number) => (
            <TableHead key={i} className=''>
              {d}
            </TableHead>
          ))}
          <TableHead className='w-20 text-center'>action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className='overflow-x-auto w-full relative'>
        {data?.length > 0 ? (
          data.map((d: any, i: number) => (
            <TableRow key={i}>
              {columns.map((column: any, index: number) => (
                <TableCell
                  key={index}
                  className='text-[13px] cursor-pointer'
                  onClick={() => onView(d)}
                >
                  {d[column] || '-'}
                </TableCell>
              ))}
              <TableCell className='text-[13px] flex justify-center gap-2 items-center cursor-pointer'>
                <span
                  className='bg-yellow-500 p-2 rounded-full hover:bg-yellow-600'
                  onClick={() => onEdit(d?.id)}
                >
                  <PencilIcon className='w-4 text-white' />
                </span>
                <span
                  className='bg-red-500 p-2 rounded-full hover:bg-red-600'
                  onClick={() => onDelete(d)}
                >
                  <TrashIcon className='w-4 text-white' />
                </span>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={4}>
              <div className='w-full h-24 flex justify-center items-center gap-3'>
                <InboxIcon className='w-7' />
                <span className='text-gray-400'>No Data!</span>
              </div>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default DataTableComponent
