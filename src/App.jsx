import { useState }  from 'react'
import './App.css'
import phrases from './db/spacePhrases.json'
import { getRandom } from './utils/random.js'
import QuoteBox from './components/QuoteBox'


const listBg = ['bg1', 'bg2', 'bg3', 'bg4']

function App() {

  const [phrase, setPhrase] = useState(getRandom(phrases))
  const [currentBg, setcurrentBg] = useState(getRandom(listBg))
  
  const handleChangePhrase = () => {
    setPhrase(getRandom(phrases))
    setcurrentBg(getRandom(listBg))
  }

  return (
    <main className={`app ${currentBg}`}>
      <QuoteBox handleChangePhrase={handleChangePhrase} phrase={phrase} />
    </main>

  )
}

export default App
