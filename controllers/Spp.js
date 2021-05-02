const Mspp= require('../models/Mspp');

module.exports={
  simpan: function(req, res){
    Mspp.simpan(req.con, req.body, function(err, result){
      res.redirect('/paneladmin/listspp');
    });
  },
  edit: function(req, res){
    Mspp.edit(req.con, req.body, function(err, result){
      res.redirect('/paneladmin/listspp');
    });
  },
  hapus: function(req, res){
    const { id_spp }= req.params;
    Mspp.hapus(req.con, id_spp, function(err, result){
      res.json('oke');
    })
  },
}