  var DATABASE_URI;
  if(process.env.OPENSHIFT_MONGODB_DB_URL){
    DATABASE_URI = process.env.OPENSHIFT_MONGODB_DB_URL + "projectbot";
  }
  else{
    DATABASE_URI= "mongodb://localhost:27017/projectbot"
  }
module.exports = {
  "DATABASE_URI": DATABASE_URI,
  "SESSION_SECRET": "projectbots roll out",
  "FACEBOOK": {
    "clientID": "INSERT_FACEBOOK_CLIENTID_HERE",
    "clientSecret": "INSERT_FACEBOOK_CLIENT_SECRET_HERE",
    "callbackURL": "INSERT_FACEBOOK_CALLBACK_HERE"
  },
  "GOOGLE": {
    "clientID": "INSERT_GOOGLE_CLIENTID_HERE",
    "clientSecret": "INSERT_GOOGLE_CLIENT_SECRET_HERE",
    "callbackURL": "INSERT_GOOGLE_CALLBACK_HERE"
  }
};