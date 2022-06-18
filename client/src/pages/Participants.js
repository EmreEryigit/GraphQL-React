import React, { useEffect } from 'react'
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
const PART_SUB = gql`
    subscription created($event_id: ID){
        participantCreated(event_id: $event_id){

                user {
                    username
                }
            
  }
}
`
function Participants(props) {
    
    const [loadPart, {called, loading, data, subscribeToMore}] = useLazyQuery(GET_EVENT_PARTICIPANTS,{variables:{id: props.id}})
    useEffect(() => {
        
            subscribeToMore({
                document: PART_SUB,
                updateQuery: (prev , {subData}) => {
                  console.log(prev);
                  console.log(subData)
                }
            })
        
    }, [subscribeToMore, called, loading])
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
            {data.event.participants.map((p,i ) => <li key={i}>{p.user.username}</li>)}
        </ul>
    </div>
  )
}

export default Participants