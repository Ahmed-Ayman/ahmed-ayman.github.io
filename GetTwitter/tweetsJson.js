    var express = require('express');
    var Twitter = require('twitter');
    var app = express();

    var client = new Twitter({
      consumer_key: 'UqdmI7Pa5X28YLIaogx9NdwxN',
      consumer_secret: 'Lg1ryTa0E7hjZETJMhx0hd89xYcz9lgA3eLxXOQXU0gIiOo2Hp',
      access_token_key: '3429429593-4IHkCMF9Fvh197IRls0jreBOD4atxTYZVptDlHq',
      access_token_secret: 'sLqYjk8OUGmTFWBxCbYzuxLbZRgJuLLVMJjO4pvcWRVpW'
    });

  app.get('/twitter/:user_id', function(req, res, next) {
      var params = {user_id: req.params.user_id,count:5};
      client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
          return res.status(200).json({tweets});
        }
        return res.status(500).json({error});
      });
  })
  var server = app.listen(9999, () => {
      console.log('Server running at port 9999')
  })
