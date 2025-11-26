import { EventEmitter } from "events";

export default class chatroom extends EventEmitter{
    constructor(){
        super();
        this.users=new Set();
    }

    join(user){
        this.users.add(user);
        this.emit('join',user);
    }
    sendMessage(user,message){
        if(this.existingUser(user)){
            this.emit('message',user,message);
        }

    }
    leave(user,message){
        if(this.existingUser(user)){
            this.users.delete(user);
            this.emit('leave',user);
        }
    }
    existingUser(user){
        if(this.users.has(user)){
            return 1;
        }else{
            console.log(`${user} is not in chat`)
            return 0;
        }
    }
}