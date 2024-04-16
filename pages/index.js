import MeetupList from '@/components/meetups/MeetupList'
import React from 'react'

const dummyMeetup = [
    {
      id:'m1',
      title:'A First Maatup',
      image:"https://imgs.search.brave.com/Ukqx5Ce5iplGKaJvBtGJkh7nSRquKQ_dGXsI9BODPvo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTc0/Njk1MzY4L3Bob3Rv/L2JyaWdodC1jb2xv/cmVkLXBob3RvLW9m/LXBhcmtpbmctbG90/LWFuZC1vZmZpY2Ut/YnVpbGRpbmcuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVdY/eVZ5VmM5dXZaQUM2/U1hzT2ZwUl9fcnB6/QkgtOUtVdW1GN19l/YmVtLW89",
      address:'Some random street on Earth',
      description:'This is a Meetup',  
    },
    {
      id:'m2',
      title:'A Second Maatup',
      image:"https://imgs.search.brave.com/Ukqx5Ce5iplGKaJvBtGJkh7nSRquKQ_dGXsI9BODPvo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTc0/Njk1MzY4L3Bob3Rv/L2JyaWdodC1jb2xv/cmVkLXBob3RvLW9m/LXBhcmtpbmctbG90/LWFuZC1vZmZpY2Ut/YnVpbGRpbmcuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVdY/eVZ5VmM5dXZaQUM2/U1hzT2ZwUl9fcnB6/QkgtOUtVdW1GN19l/YmVtLW89",
      address:'Some random street on Earth',
      description:'This is a Meetup',  
    },
    {
      id:'m3',
      title:'A Third Maatup',
      image:"https://imgs.search.brave.com/Ukqx5Ce5iplGKaJvBtGJkh7nSRquKQ_dGXsI9BODPvo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTc0/Njk1MzY4L3Bob3Rv/L2JyaWdodC1jb2xv/cmVkLXBob3RvLW9m/LXBhcmtpbmctbG90/LWFuZC1vZmZpY2Ut/YnVpbGRpbmcuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVdY/eVZ5VmM5dXZaQUM2/U1hzT2ZwUl9fcnB6/QkgtOUtVdW1GN19l/YmVtLW89",
      address:'Some random street on Earth',
      description:'This is a Meetup',  
    },
]

function HomePage(props) {
  return (
    <MeetupList meetups = {props.meetups}/>
  )
}

// export async function getServerSideProps(context) {    // we used getServerSideProps because we dont manually have to regenerate page using Revalidate. it automaticaly gets regenereated for every request coming
//   const req = context.req
//   const res = context.res
//   return {
//     props:{
//       meetups:dummyMeetup
//     }
//   }
// }

export async function getStaticProps() {
  //fetch data with api
  return {
    props:{
      meetups:dummyMeetup
    }
  } //always return object data type
}  //reserved name in next. if next find it, it executes it during pre-rendering process

export default HomePage
