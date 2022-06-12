
const Event = {
    location: (parent ,args, {db}) => db.locations.find(location => location.id == parent.location_id),
    participants: (parent ,args, {db}) => db.participants.filter(p => p.event_id == parent.id),
    user: (parent ,args, {db}) => db.users.find(user => user.id == parent.user_id)
}
export default Event