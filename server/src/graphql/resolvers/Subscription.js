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
        subscribe: (parent, args , {pubsub}) => {
            
            return pubsub.asyncIterator("participantCreated")
        }
    }  
}
export default Subscription