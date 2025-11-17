import {useState} from 'react';
import LessonCard from './LessonsCard';

function TimetableGrid({data}) {

    const [selectedDay, setSelectedDay] = useState("Lunedì");

    const days = Object.keys(data);
    const lessons = data[selectedDay];

    return (
        <div className="timetable-container">
            <h2>Orario Lezioni</h2>
            <div className="day-selector">
                {days.map(day => (
                    <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={selectedDay === day ? 'active':''}
                        >
                        {day}   
                    </button>
                ))}
            </div>

            <div className='lessons-grid'>
                {lessons.length === 0
                ? 
                (<p>Nessuna lezione per questo giorno.</p>)
                :
                (lessons.map(lesson => (
                    <LessonCard
                        key={lesson.id}
                        subject={lesson.subject}
                        time={lesson.time}
                        room={lesson.room}
                        professor={lesson.professor}
                    />
                )))
            }
            </div>
        </div>
    )
}

export default TimetableGrid;