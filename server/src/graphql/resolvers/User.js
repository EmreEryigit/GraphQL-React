const User = {
    events: (parent ,args, {db}) => db.events.filter(event => event.user_id == parent.id),
    participant: (parent ,args, {db}) => db.participants.find(p => p.user_id == parent.id),
    
}
export default  User