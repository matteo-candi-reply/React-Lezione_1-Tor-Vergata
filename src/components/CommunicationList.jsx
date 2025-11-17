import CommunicationItem from "./CommunicationItem";

function CommunicationList({communications}) {
    return (
        <div className="communication-list">
            <h2>Comunicazioni</h2>
            {communications.length === 0 ? (
                <p>Nessuna comunicazione disponibile.</p>) : (
                communications.map(comm => (
                    <CommunicationItem
                        key={comm.id}
                        date={comm.date}
                        text={comm.text}
                    />
                )))
            }
        </div>
    )
}

export default CommunicationList;