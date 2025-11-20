import { Routes, Route } from 'react-router-dom'
import SongList from './pages/SongList.jsx'
import SongDetail from './pages/SongDetail.jsx'

const songs = [
  {
    "id": "69149cde71914f6a424fd013",
    "title": "Blue Valentine",
    "singer": "NMIXX",
    "rating": 5,
    "lyrics": "If this love is over, 다시 뛰어들어 난\n이 사랑은 colder, I'll keep the fire lit in mine\nYou'll always be my blue, ooh-ooh-ooh-ooh valentine\nYou'll always be my blue, ooh-ooh-ooh-ooh valentine"
  },
  {
    "id": "6914a3a771914f6a424fd017",
    "title": "CRUSH ON YOU",
    "singer": "NMIXX",
    "rating": 5,
    "lyrics": "Oh I got a crush on you\n내겐 너란 favorite view\n다른 건 다 blurry 넌 only, I’m fallin’\nOh I got a crush on you\n같이 꾸고 싶은 꿈\n궁금해 your morning and evening\nCrush on, crush on, crush on you"
  },
  {
    "id": "6914a3a771914f6a424fd018",
    "title": "Phoenix",
    "singer": "NMIXX",
    "rating": 5,
    "lyrics": "한 줌 흙 속에 잠겨\n차게 식었던 heart\n거친 숨결을 깨워\n불어, 새파란 spark\nRise up and wake up from the fire\n솟아올라 on the ground\n불을 지펴 다시 타올라 ah-ah-ah-ah-ah\nBreak up all the bounds\n날갤 펼쳐 to the sky\n갇혀있던 숨이 터져 막 ah-ah-ah-ah-ah"
  },
]

function App() {
  return (
    <Routes>
      <Route path="/" element={<SongList songs={songs} />} />
      <Route path="/song/:id" element={<SongDetail songs={songs} />} />
    </Routes>
  )
}

export default App
