module.exports= {
  data: function(con, callback){
    con.query(`SELECT * FROM siswa order by nama_siswa  asc `, callback);
  },
  simpan: function(con, data, callback){
    var field= {
      nama_siswa: data.nama_siswa,
      kelas_siswa: data.kelas_siswa,
    }
    con.query(`INSERT into siswa set ? `,[field], callback);
  },
  getone: function(con, id_siswa, callback){
    con.query(`SELECT * FROM siswa where id_siswa='${id_siswa}' `, callback);
  },
  edit: function(con, data, callback){
    var id_siswa= data.id_siswa;
    var field= {
      nama_siswa: data.nama_siswa,
      kelas_siswa: data.kelas_siswa,
    }
    con.query(`UPDATE siswa set ? where id_siswa='${id_siswa}' `,[field], callback);
  },
  hapus: function(con, id_siswa, callback){
    con.query(`DELETE FROM siswa where id_siswa='${id_siswa}' `, callback);
  },
}