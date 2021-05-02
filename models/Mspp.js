module.exports={
  data: function(con, callback){
    con.query(`SELECT * from spp left join siswa on(siswa.id_siswa=spp.id_siswa_spp) order by id_spp desc `, callback);
  },
  simpan: function(con, data, callback){
    var field={
      id_siswa_spp: data.id_siswa_spp,
      bulan_spp: data.bulan_spp,
      tahun_spp: data.tahun_spp,
      nominal_spp: data.nominal_spp,
    }
    con.query(`INSERT INTO spp set ? `, [field], callback);
  },
  getone: function(con, id_spp, callback){
    con.query(`SELECT * FROM spp where id_spp='${id_spp}' `, callback);
  },
  edit: function(con, data, callback){
    var id_spp= data.id_spp;
    var field={
      id_siswa_spp: data.id_siswa_spp,
      bulan_spp: data.bulan_spp,
      tahun_spp: data.tahun_spp,
      nominal_spp: data.nominal_spp,
    }
    con.query(`UPDATE spp set ? where id_spp='${id_spp}' `, [field], callback);
  },
  hapus: function(con, id_spp, callback){
    con.query(`DELETE FROM spp where id_spp='${id_spp}' `, callback);
  },
}