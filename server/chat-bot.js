
keyPairMessages = (msg)=>{
    var res = "";
    switch(msg){
        case "Hi": 
            res = "Hi :)";
            break;
        case "Hello":
            res = "Hello :)";
            break;
        case "How Are You ?":
            res = "I am fine dear, what about you?";
            break;
        default:
            res = "Hello, I am sourabh nihore's bot ...";

    }
    return res;
}

module.exports = {keyPairMessages};