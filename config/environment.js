var config = {
  
  metrics: {
    port: 4001
  }
  , passport: {
    successRedirect: '/'
  , failureRedirect: '/login'
  , twitter: {
      consumerKey: 'XXXXXXX'
    , consumerSecret: 'XXXXXXX'
    }
  , facebook: {
      clientID: '126712024186555'
    , clientSecret: 'a73fea4902d41e2e3441b580585d13f5'
    }
  }
};

module.exports = config;
