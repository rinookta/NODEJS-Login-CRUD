module.exports= {
  proseslogin: function(con, data, callback){
    con.query(`SELECT * from admin where username_admin='${data.username}' and password_admin='${data.password}' `, callback);
  },
  getadmin: function(con, data, callback){
    con.query(`SELECT * from admin where id_admin='${data}' `, callback);
  },
  dataadmin: function(con, callback){
    con.query("SELECT * FROM admin order by nama_admin asc ",callback);
  }
}