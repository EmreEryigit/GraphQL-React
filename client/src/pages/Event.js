import React from 'react'
import {useParams} from "react-router-dom"
import {gql, useQuery} from "@apollo/client"
import Participants from './Participants'
import Loading from '../components/Loading'
const GET_EVENT = gql`
    query getEvent($id:ID!){
        event(id:$id){
            title
            desc
            date
            to
            from
            user{
                username
            }
            
        }
    }
`


function Event(props) {
    
    const params = useParams()
    
    const  {loading, error, data} = useQuery(GET_EVENT,{variables:{id: params.id}})
    
    
    if(loading) {
        return <Loading />
    }
    if(error){
        return <div>Error</div>
    }
  return (
    <>
    <div><h2>Organizator: {data.event.user.username}</h2></div>

    <div>
        <h1>{data.event.title}</h1>
        <p>{data.event.desc}</p>
        <p>Date: {data.event.date}</p>
        <p>
            <span>Time: {data.event.from}-</span>
            <span>{data.event.to}</span>
        </p>
        
        <hr />
        
       <Participants id={params.id}/>
    </div>
    </>
  )
}

export default Event