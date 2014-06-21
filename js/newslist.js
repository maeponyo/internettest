 var stap = $("#stap").html();
 var ES = $('#ES').html();
 var iPS = $('#iPS').html();
 var syuudann = $('#syuudann').html();
 var cazino = $('#cazino').html();
 var writeresult = $('#write').html();
 var word2 = document.getElementById('word'); //入力した検索語
 var word = word2.value;
 var content3 = document.getElementById( 'content3' );
 var wordcontent = document.getElementById("content4");
 
function OnLoad()
  {
    
      // 検索コントロールを作成する
      var searchControl = new google.search.SearchControl();

      // 検索コントロールにWeb検索のサーチャーを追加する
      searchControl.addSearcher( new google.search.WebSearch() );

      // 検索コントロールを描画する
      searchControl.draw( wordcontent );

      // 検索を実行する
      searchControl.execute( word );
  }


  // Search APIをロードする
  google.load( 'search', '1' );

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
    OnLoad();
}
}

 