const Mlogin= require('../models/Mlogin');
const Msiswa= require('../models/Msiswa');
const Mspp= require('../models/Mspp');
module.exports={
  index: function(req, res){
    var siswa;
    var admin;
    Msiswa.data(req.con, function(err, res_siswa){ siswa= res_siswa; });
    Mlogin.dataadmin(req.con, function(err, res_admin){ admin= res_admin; });
    Mlogin.getadmin(req.con, 1, function(err, result){ 
      res.render('paneladmin/template',{
        admin: result[0],
        dataadmin: admin,
        title: "Dashboard",
        content: "home",
        siswa: siswa,
        session: req.session.islogin,
      })
    });
  },
// siswa
  listsiswa: function(req, res){
    var siswa;
    Msiswa.data(req.con, function(err, res_siswa){ siswa= res_siswa; });
    Mlogin.getadmin(req.con, 1, function(err, res_admin){
      res.render('paneladmin/template',{
        admin: res_admin[0],
        title: "Data Siswa",
        content: "siswa/data",
        siswa: siswa,
      })
    });
  },
  addsiswa: function(req, res){
    Mlogin.getadmin(req.con, 1, function(err, res_admin){
      res.render('paneladmin/template',{
        admin: res_admin[0],
        title: "Tambah Siswa",
        content: "siswa/add",
      })
    })
  },
  editsiswa: function(req, res){
    const { id_siswa }= req.params;
    var siswa;
    Msiswa.getone(req.con, id_siswa, function(err, res_siswa){ siswa= res_siswa; });
    Mlogin.getadmin(req.con, 1, function(err, res_admin){
      res.render('paneladmin/template',{
        admin: res_admin[0],
        title: "Edit Siswa",
        content: "siswa/edit",
        siswa: siswa[0],
      })
    });
  },
// spp
  listspp: function(req, res){
    var spp;
    Mspp.data(req.con, function(err, res_spp){ spp= res_spp; });
    Mlogin.getadmin(req.con, 1, function(err, res_admin){
      res.render('paneladmin/template',{
        admin: res_admin[0],
        title: "Data SPP",
        content: "spp/data",
        spp: spp,
      })
    })
  },
  addspp: function(req, res){
    Msiswa.data(req.con, function(err, res_siswa){ siswa= res_siswa; });
    Mlogin.getadmin(req.con, 1, function(err, res_admin){
      res.render('paneladmin/template',{
        admin: res_admin[0],
        title: "Tambah SPP",
        content: "spp/add",
        siswa: siswa,
      })
    })
  },
  editspp: function(req, res){
    const { id_spp }= req.params;
    Mspp.getone(req.con, id_spp, function(err, res_spp){ spp= res_spp; });
    Msiswa.data(req.con, function(err, res_siswa){ siswa= res_siswa; });
    Mlogin.getadmin(req.con, 1, function(err, res_admin){
      res.render('paneladmin/template',{
        admin: res_admin[0],
        title: "Edit SPP",
        content: "spp/edit",
        siswa: siswa,
        spp: spp[0],
      })
    })
  }
}