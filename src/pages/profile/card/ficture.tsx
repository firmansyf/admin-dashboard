import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card'
import {createElement} from 'react'
import Profile from '@/assets/profile.png'

export default function FictureCard() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className='text-center'>Yusuf Firmansyah</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-4 justify-center items-center'>
          {createElement('img', {
            src: Profile,
            className: 'w-4/5',
            alt: 'image-profile',
          })}

          <div className='flex p-2 bg-blue-200 rounded-full shadow-md'>
            <span className='text-sm font-semibold text-blue-700'>CEO / Software Engineer</span>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
