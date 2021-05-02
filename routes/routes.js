const router= require('express').Router();
const Login_Con= require('../controllers/Login');
const Paneladmin_Con= require('../controllers/Paneladmin');
const Siswa_Con= require('../controllers/Siswa');
const Spp_Con= require('../controllers/Spp');
const Auth_midd= require('../middlewares/auth');
// initial
router.get('/',Login_Con.index);
router.post('/proseslogin',Login_Con.proseslogin);
router.get('/paneladmin',Auth_midd.cek_auth,Paneladmin_Con.index);
router.get('/logout',Login_Con.logout);
// siswa
router.get('/paneladmin/addsiswa',Auth_midd.cek_auth,Paneladmin_Con.addsiswa);
router.get('/paneladmin/listsiswa',Auth_midd.cek_auth,Paneladmin_Con.listsiswa);
router.get('/paneladmin/editsiswa/:id_siswa',Auth_midd.cek_auth,Paneladmin_Con.editsiswa);
router.post('/siswa/simpan',Siswa_Con.simpan);
router.post('/siswa/edit',Siswa_Con.edit);
router.get('/siswa/hapus/:id_siswa',Siswa_Con.hapus);
// spp
router.get('/paneladmin/listspp',Auth_midd.cek_auth,Paneladmin_Con.listspp);
router.get('/paneladmin/addspp',Auth_midd.cek_auth,Paneladmin_Con.addspp);
router.get('/paneladmin/editspp/:id_spp',Auth_midd.cek_auth,Paneladmin_Con.editspp);
router.post('/spp/simpan',Spp_Con.simpan);
router.post('/spp/edit',Spp_Con.edit);
router.get('/spp/hapus/:id_spp',Spp_Con.hapus);
module.exports= router;