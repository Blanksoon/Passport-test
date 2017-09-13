exports.render = function(req,res) {
  res.render('index', {
    title: 'Hello world',
    username: req.user ? req.user.username : ''
  });
};