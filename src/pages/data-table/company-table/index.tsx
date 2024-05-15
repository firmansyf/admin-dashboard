import DataTableComponent from '@/components/data-table'
import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card'
import {useState} from 'react'

export default function CompanyTable() {
  const [dataCompanyTable, setDatCompanyTable] = useState<any[]>([])
  const [formCompanyTable, setFormCompanyTable] = useState<any>({
    name: '',
    department: '',
    location: '',
    post_code: '',
  })

  return (
    <Card className='flex-1'>
      <CardHeader>
        <CardTitle>Company Table</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTableComponent title='Company Table' data={[]} columns={[]} />
      </CardContent>
    </Card>
  )
}
