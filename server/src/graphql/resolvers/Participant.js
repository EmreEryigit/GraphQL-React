const Participant =  {
    user: (parent ,args, {db}) => db.users.find(user => user.id == parent.user_id),
    event: (parent ,args, {db}) => db.events.find(event => event.id == parent.event_id)
}
export default  Participant