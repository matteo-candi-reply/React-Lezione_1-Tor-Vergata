import CommunicationList from '../../components/CommunicationList';
import Header from '../../components/Header';
import TimetableGrid from '../../components/TimetableGrid';

import CommunicationData from '../../mock/communications.json';
import TimetableData from '../../mock/timetable.json';

function Home() {

    return (
        <>  
            <Header
                title={"Sistema Universitario"}
                subtitle={"Portale Studenti"}
            />

            <CommunicationList
                communications={CommunicationData}
            />

            <TimetableGrid
                data={TimetableData}
            />




        </>
    )

}

export default Home;