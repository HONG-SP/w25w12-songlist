import { Link } from 'react-router-dom'
import SongCard from '../components/SongCard.jsx'

export default function SongList({ songs }) {
  return (
    <div className='p-6'>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {songs.map(song => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  )
}