const Mutation = {
    createUser: (parent, { data }, {pubsub,db}) => {
        
        const newUser = {...data, id: Math.random()}
        db.users.push(newUser)
        pubsub.publish("userCreated", {userCreated: newUser})
        return newUser
    },
    createEvent: (parent, { data }, {pubsub,db}) => {
        const newEvent = {...data, id: Math.random()}
        db.events.shift(newEvent)
        pubsub.publish("eventCreated", {eventCreated: newEvent})
        return newEvent
    },
    createLocation: (parent, { data }, {pubsub,db}) => {
        const newLocation = {...data, id: Math.random()}
        db.locations.push(newLocation)
        return newLocation
    },
    createParticipant: (parent, { data }, {pubsub,db}) => {
    
        const newParticipant = {...data, id: Math.random()}
   
        db.participants.push(newParticipant)
        pubsub.publish("participantCreated", {participantCreated: newParticipant})
        return newParticipant
    },
    updateUser: (parent, { data }, {pubsub,db}) => {
        const index = db.users.findIndex(user => user.id == id)
        db.users[index] = {...db.users[index], ...data}
        return db.users[index]
        
    },
    updateEvent: (parent, { data }, {pubsub,db}) => {
        const index = db.events.findIndex(event => event.id == id)
        db.events[index] = {...db.events[index], ...data}
        return db.events[index]
        
    },
    updateLocation: (parent, { data }, {pubsub,db}) => {
        const index = db.locations.findIndex(location => location.id == id)
        db.locations[index] = {...db.locations[index], ...data}
        return db.locations[index]
        
    },
    deleteUser: (parent, { data }, {pubsub,db}) => {
        const index = db.users.findIndex(user => user.id == id)
        db.users.splice(index, 1)
        return db.users[index]
    },
    deleteEvent: (parent, { data }, {pubsub,db}) => {
        const index = db.events.findIndex(event => event.id == id)
        db.events.splice(index, 1)
        return db.events[index]
    },
    deleteLocation: (parent, { data }, {pubsub,db}) => {
        const index = db.locations.findIndex(location => location.id == id)
        db.locations.splice(index, 1)
        return db.locations[index]
    },
    deleteAllUser:(parent, { data }, {db}) => {
        const length = db.users.length
        db.users.splice(0,length)
        return {
            count: length
        }
    },
    deleteAllEvent: (parent, { data }, {pubsub,db}) => {
        const length = db.events.length
        db.events.splice(0,length)
        return {
            count: length
        }
    },
    deleteAllLocation:(parent, { data }, {pubsub,db}) => {
        const length = db.locations.length
        db.locations.splice(0,length)
        return {
            count: length
        }
    }

}
export default   Mutation