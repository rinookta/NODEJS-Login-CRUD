const Msiswa= require('../models/Msiswa');
module.exports= {
  simpan: function(req, res){
    const data= req.body;
    Msiswa.simpan(req.con, data, function(err, result){
      res.redirect('/paneladmin/listsiswa');
    })
  },
  edit: function(req, res){
    const data= req.body;
    Msiswa.edit(req.con, data, function(err, result){
      res.redirect('/paneladmin/listsiswa');
    })
  },
  hapus: function(req, res){
    const { id_siswa }= req.params;
    Msiswa.hapus(req.con, id_siswa, function(err, result){
      res.json('oke');
    })
  },
}