import {useEffect, useState} from 'react'
import {Progress} from '../ui/progress'

export default function ProgressLoad(props: any) {
  const [progress, setProgress] = useState<number>(20)

  useEffect(() => {
    const increment = 1
    const intervalTime = props.delay / 80
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          return 100
        }
        return prevProgress + increment
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [props.delay])

  return (
    <main className='min-h-screen flex flex-col gap-3 justify-center items-center'>
      <span>Please wait...</span>
      <Progress value={progress} className='w-[20%]' />
    </main>
  )
}
