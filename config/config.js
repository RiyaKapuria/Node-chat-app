var env = process.env.NODE_ENV || 'development';

if(env === 'development' || env === 'test') {
  var config = require('./config.json');
  var evnConfig = config[env];

  Object.keys(evnConfig).forEach((key) => {
    process.env[key] = evnConfig[key];
  });
}