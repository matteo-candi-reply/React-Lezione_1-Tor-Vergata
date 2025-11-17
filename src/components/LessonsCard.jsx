function LessonCard({subject, time, room, professor}) {
    return (
        <div className="lesson-card">
            <h3>{subject}</h3>
            <div className="lesson-details">
                {time && <p>🕰️{time}</p>}
                {room && <p>📍{room}</p>}
                {professor &&<p>👨‍🏫{professor}</p>}
            </div>
        </div>
    )
}

export default LessonCard;