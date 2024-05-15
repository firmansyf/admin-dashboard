import DataTableComponent from '@/components/data-table'
import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card'
import {useState} from 'react'

export default function UsersTable() {
  const [dataUserTable, setDataUserTable] = useState<any[]>([])
  const [formUserTable, setFormUserTable] = useState<any>({
    name: '',
    email: '',
    position: '',
    gender: '',
  })

  return (
    <Card className='flex-1'>
      <CardHeader>
        <CardTitle>Users Table</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTableComponent title='Users Table' data={[]} columns={[]} />
      </CardContent>
    </Card>
  )
}
