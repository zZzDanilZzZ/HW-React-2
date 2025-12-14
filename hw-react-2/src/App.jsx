import { useState, useEffect } from 'react'
import GuestCard from './components/GuestCard/GuestCard'
import './App.css'

function App() {
  const [guests, setGuests] = useState([])
  const [name, setName] = useState("")

  const addGuest = () => {
    if(!name.trim()) return

    setGuests(prev => [
      ...prev,
      { id: Date.now(), name}
    ])
    setName("")
  }

const removeGuest = () => {
  setGuests(prev => prev.filter(guest => guest.id !== id))
}

useEffect(() => {
  console.log("Guest List updated:", guests)
}, [guests])

return (
    <div className='guest-list'>
      <h1 className="guest-list__title">Guest List</h1>
      <div className='guest-list__controls'>
        <input 
          className='guest-list__input'
          type="text" 
          value={name}
          placeholder='Enter Guest Name'
          onChange={(e) => setName(e.target.value)} 
        />
        <button className='guest-list__button'  onClick={addGuest}>
            Add Guest
        </button>
      </div>

      <div className='guest-list__items'>
        {guests.map(guest => (
          <GuestCard 
            key={guest.id}
            id={guest.id}
            name={guest.name}
            onDelete={removeGuest}
          />
        ))}
      </div>
    </div>
  )
}
export default App
