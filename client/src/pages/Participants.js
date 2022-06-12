import React from 'react'
import {gql, useLazyQuery} from "@apollo/client"
import Loading from '../components/Loading'
const GET_EVENT_PARTICIPANTS = gql`
    query getEventParticipants($id:ID!){
        event(id:$id){
            participants{
                user{
                    username
                }
            }
        }
    }
`
function Participants(props) {
    
    const [loadPart, {called, loading, data}] = useLazyQuery(GET_EVENT_PARTICIPANTS,{variables:{id: props.id}})
    console.log(data)
    if(loading && called){
        return <Loading />
    }
    if(!called){
        return <button onClick={() => loadPart()}>Load Participants</button>
    }
  return (
    <div>
         <ul>
            <li><h3>Participants</h3></li>
            {data.event.participants.map(p => <li>{p.user.username}</li>)}
        </ul>
    </div>
  )
}

export default Participants