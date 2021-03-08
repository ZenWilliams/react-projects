import '../css/App.css';
import {useState, useEffect} from 'react';
import AddAppointments from './AddAppointments';
import ListAppointments from './ListAppointments';
import SearchAppointments from './SearchAppointments';
import {without} from 'lodash'

function App() {
const [appointments, setAppointments] = useState([])

useEffect(
  () => {
    fetch('./data.json')
    .then(response => response.json())
    .then(result => {
      const apts = result.map(item => {
        return item;
      });
      setAppointments(apts);
    });
  }, []
)

const deleteAppointment = (apt) => {
    let tempApts = appointments
    tempApts = without(tempApts, apt);

    setAppointments(tempApts);
}


  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointments/>
              <SearchAppointments/>
              <ListAppointments appointments={appointments}
                deleteAppointment={deleteAppointment}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
