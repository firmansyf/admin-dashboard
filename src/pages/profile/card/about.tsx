import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card'

export default function AboutCard() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>About me</CardTitle>
        </CardHeader>
        <CardContent className='flex'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto et ipsam, est sunt
          accusantium itaque corporis nihil provident obcaecati odio odit sequi ducimus non libero
          officia debitis, dolorum eaque hic.
        </CardContent>
      </Card>
    </>
  )
}
