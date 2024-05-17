import {useState, useEffect} from 'react'
import './App.css'
import MainLayout from './layout'
import ProgressLoad from './components/progressCondition'

function App() {
  const [loading, setLoading] = useState<boolean>(false)
  const delay = 1000

  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), delay)
  }, [])

  return <>{loading ? <ProgressLoad delay={delay} /> : <MainLayout />}</>
}

export default App
