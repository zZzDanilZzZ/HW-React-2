import "./GuestCard.css"

export default function GuestCard({id, name, onDelete}) {
    return (
        <div className='guest-card'>
            <span className='guest-card__span'>{name}</span>
            <button
                className='guest-card__delete'
                onClick={() => onDelete(id)}
            >
                X
            </button>

        </div>
    )
}
