import NewMeetupForm from '@/components/meetups/NewMeetupForm'
import React from 'react'

function NewMeetUpPage() {

    const addMeetUp = (data) =>{
        console.log("Meetup details added",data)
    }
  return (
    <NewMeetupForm onAddMeetup={addMeetUp}/>
  )
}

export default NewMeetUpPage 
