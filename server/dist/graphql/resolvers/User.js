"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var User={events:function events(parent,args,_ref){var db=_ref.db;return db.events.filter(function(event){return event.user_id==parent.id})},participant:function participant(parent,args,_ref2){var db=_ref2.db;return db.participants.find(function(p){return p.user_id==parent.id})}};var _default=User;exports["default"]=_default;