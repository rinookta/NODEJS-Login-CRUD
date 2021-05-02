const Mlogin= require('../models/Mlogin');
module.exports= {
  index: function(req, res){
    if(req.session.islogin) {
      return res.redirect('/paneladmin');
    }
    res.render('login',{
      notif: req.flash('notif'),
    });
  },
  proseslogin: function(req, res){
    Mlogin.proseslogin(req.con, req.body, function(err, result){
      if(result.length > 0){
        req.session.islogin= true;
        res.redirect('/paneladmin');
      }
      else{
        req.flash('notif','Username atau password salah!');
        res.redirect('/');
      }
    })
  },
  logout: function(req, res){
    req.session.destroy();
    res.redirect('/');
  }
}