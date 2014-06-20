 var stap = $("#stap").html();
 var ES = $('#ES').html();
 var iPS = $('#iPS').html();
 var syuudann = $('#syuudann').html();
 var cazino = $('#cazino').html();
 var word2 = document.getElementById('word'); //入力した検索語
 var word = word2.value;
 var writeresult = $('#write').html();
 


 function dooo(){
  //検索した時にすでにあるものだとその部分を表示できるようにしたい
  if(word=="stap" && word=="STAP" ){
  	//stapの内容を見せる
  	 $("#searchcontrol").html(stap);
  }
  else if(word=="ES細胞" && word=="ES"){
      $("#searchcontrol").html(ES);
  }
  else{
    $("#searchcontrol").html(iPS);
 }
}


 