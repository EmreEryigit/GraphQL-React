"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var Participant={user:function user(parent,args,_ref){var db=_ref.db;return db.users.find(function(user){return user.id==parent.user_id})},event:function event(parent,args,_ref2){var db=_ref2.db;return db.events.find(function(event){return event.id==parent.event_id})}};var _default=Participant;exports["default"]=_default;