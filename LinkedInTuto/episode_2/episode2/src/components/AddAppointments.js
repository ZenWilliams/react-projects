import React from 'react';

export default function AddAppointments() {
    return (
        <div className="card textcenter mt-3">

            <div className="apt-addheading card-header bg-primary text-white">
                Add Appointment
            </div>

            <div className="card-body">

                <form id="aptForm" novalidate>
                
                    <div className="form-group form-row">
                        <label className="col-md-2 col-form-label text-md-right" for="petName">Pet Name</label>
                        <div className="col-md-10">
                        <input type="text" className="form-control" name="petName" id="petName" placeholder="Pet's Name">
                        </div> 
                    </div> 

                    <div className="form-group form-row">
                        <label className="col-md-2 col-form-label text-md-right"
                        for="ownerName">Pet Owner</label>
                        <div className="col-md-10">
                        <input type="text" className="form-control" name="ownerName"
                            id="ownerName" placeholder="Owner's Name">
                        </div>
                    </div>

                    <div className="form-group form-row">
                        <label className="col-md-2 col-form-label text-md-right" for="aptDate">Date</label>
                        <div className="col-md-4">
                            <input type="date" className="form-control" id="aptDate" name="aptDate">
                        </div> 
                        <label className="col-md-2 col-form-label text-md-right" for="aptTime">Time</label>
                        <div className="col-md-4">
                            <input type="time" className="form-control" name="aptTime" id="aptTime" >
                        </div> 
                    </div>

                    <div className="form-group form-row">
                        <label className="col-md-2 text-md-right" for="aptNotes">Apt. Notes</label>
                        <div className="col-md-10">
                        <textarea className="form-control" rows="4" cols="50"
                            name="aptNotes" id="aptNotes" placeholder="Appointment Notes"></textarea>
                        </div> 
                    </div>

                    <div className="form-group form-row mb-0">
                        <div className="offset-md-2 col-md-10">
                        <button type="submit" className="btn btn-primary d-block ml-auto"
                        >Add Appointment</button>
                        </div> 
                    </div>

                </form>
            </div>
        </div>
    )
}