import {withFilter} from "graphql-yoga"
const Subscription = {
    userCreated: {
        subscribe: (parent, args , {pubsub}) => {
            
            return pubsub.asyncIterator("userCreated")
        }
    },
    eventCreated: {
        subscribe: (parent, args , {pubsub}) => {
            
            return pubsub.asyncIterator("eventCreated")
        }
    },
    participantCreated: {
        subscribe: withFilter(
            (parent, args , {pubsub}) =>  pubsub.asyncIterator("participantCreated"),
            (payload,variables) => {
               return payload.participantCreated.event_id == variables.event_id
            }
        )
    }  
}
export default Subscription