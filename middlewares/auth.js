exports.cek_auth= (req, res, next)=>{
  // if(req.session.islogin!=true){
  //   req.flash('notif','Anda harus login dahulu!');
  //   return res.redirect('/');
  // }
  // else{
  //   next();
  // }
  next();
}