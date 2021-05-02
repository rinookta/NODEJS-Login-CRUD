exports.baseURL= ()=>{ 
  var base= "http://localhost:3000";
  return base;
}
exports.bulan= (bulan)=>{
  var namabulan;
  if(bulan=='semua'){namabulan="Semua";}
  else if(bulan==1){namabulan="Januari";}
  else if(bulan==1){namabulan="Januari";}
  else if(bulan==2){namabulan="Februari";}
  else if(bulan==3){namabulan="Maret";}
  else if(bulan==4){namabulan="April";}
  else if(bulan==5){namabulan="Mei";}
  else if(bulan==6){namabulan="Juni";}
  else if(bulan==7){namabulan="Juli";}
  else if(bulan==8){namabulan="Agustus";}
  else if(bulan==9){namabulan="September";}
  else if(bulan==10){namabulan="Oktober";}
  else if(bulan==11){namabulan="November";}
  else if(bulan==12){namabulan="Desember";}
  else{
    namabulan="-";
  }
  return namabulan;
}
exports.tahun= ()=>{
  var d = new Date();
  var n = d.getFullYear();
  return n;
}
exports.ribuan= (b)=>{
	var _minus = false;
	if (b<0) _minus = true;
	b = b.toString();
	b=b.replace(".","");
	
	c = "";
	panjang = b.length;
	j = 0;
	for (i = panjang; i > 0; i--){
		 j = j + 1;
		 if (((j % 3) == 1) && (j != 1)){
		   c = b.substr(i-1,1) + "." + c;
		 } else {
		   c = b.substr(i-1,1) + c;
		 }
	}
	if (_minus) c = "-" + c ;
	return c;
}