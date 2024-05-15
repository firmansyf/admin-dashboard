import DataTableComponent from '@/components/data-table'
import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card'
import {useState} from 'react'

export default function CheckTable() {
  const [dataCheckTable, setDataCheckTable] = useState<any[]>([])
  const [formCheckTable, setformCheckTable] = useState<any>({
    name: '',
    status: '',
    position: '',
    task: '',
  })

  return (
    <Card className='flex-1'>
      <CardHeader>
        <CardTitle>Check Table</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTableComponent title='Check Table' data={[]} columns={[]} />
      </CardContent>
    </Card>
  )
}
