 var stap = $("#stap").html();
 var ES = $('#ES').html();
 var iPS = $('#iPS').html();
 var syuudann = $('#syuudann').html();
 var cazino = $('#cazino').html();
 var dna = $("#DNA").html();
 var D3 = $("#3D").html();
 var ip = $("#IP").html();
 var writeresult = $('#write').html();
 var wordcontent = document.getElementById("wordcontent");
 var word;
 
 
  // Search APIをロードする
  google.load( 'search', '1' );

  function doooSerch(word){
      //検索した時にすでにあるものだとその部分を表示する
  if(word == "stap" || word == "STAP" ){
    //stapの内容を見せる
     $("#searchcontrol").html(stap);
  }
  else if(word=="es" || word=="ES"){
      $("#searchcontrol").html(ES);
  }
  else if(word=="iPS" || word=="ips" || word=="iPS細胞"){
    $("#searchcontrol").html(iPS);
  }
  else if(word=="集団的自衛権"){
    $("#searchcontrol").html(syuudann);
  }
  else if(word=="カジノ"){
    $("#searchcontrol").html(cazino);
  }
  else if(word=="DNA" || word=="dna"){
    $("#searchcontrol").html(dna);
  }
  else if(word=="3Dプリンタ" || word == "3dプリンタ"){
    $("#searchcontrol").html(D3);
  }
  else if(word=="ipアドレス" || word == "IPアドレス"){
    $("#searchcontrol").html(ip);
  }
  else{
    $("#searchcontrol").html("<h3>" +word + "</h3>");
  }
     // 検索コントロールを作成する
      var searchControl = new google.search.SearchControl();

      // 検索コントロールにWeb検索のサーチャーを追加する
      searchControl.addSearcher( new google.search.WebSearch() );

      // 検索コントロールを描画する
      searchControl.draw( wordcontent );

      // 検索を実行する
      searchControl.execute( word );
    $(".gsc-resultsRoot").css("width","900px");
  }

 function dooo(){
  var word2 = document.getElementById('word'); //入力した検索語
  var word = word2.value;
  //wordに何も入力されていないとき
  if(word.length == 0){
    $("#searchcontrol").html("<p>検索したい単語を入力してから検索ボタンを押してください</p>");
    $("#wordcontent").html("<p></p>");
  }
  else{
    doooSerch(word);  
}}

 