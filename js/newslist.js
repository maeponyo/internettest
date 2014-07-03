 var stap = $("#stap").html();
 var ES = $('#ES').html();
 var iPS = $('#iPS').html();
 var syuudann = $('#syuudann').html();
 var cazino = $('#cazino').html();
 var dna = $("#DNA").html();
 var D3 = $("#3D").html();
 var ip = $("#IP").html();
 var writeresult = $('#write').html();
 var nonomura = $("#nonomura").html();
 var vaio = $("#vaio").html();
 var bannou = $("#bannou").html();
 var myman = $("#myman").html();
 var WorldCup = $("#WorldCup").html();
 var Moscow = $("#Moscow").html();
 var reina = $("#reina").html();
 var SFC = $("#SFC").html();
 var SuperFC = $("#SuperFC").html();
 var CDC = $("#CDC").html();
 var wordcontent = document.getElementById("wordcontent");
 var word;//検索単語
 var word2;
 var MEMOLISTNAME = "memo-list"; // localforage で利用するキー
 var dooo = document.getElementById("dooo");

  // Search APIをロードする
  google.load( 'search', '1' );

  function doooSerch(word){
      //検索した時にすでにあるものだとその部分を表示する
  if(word == "stap" || word == "STAP" || word == "stap細胞" || 
    word == "STAP細胞"){
    //stapの内容を見せる
     $("#searchcontrol").html(stap);
  }
  else if(word=="es" || word=="ES" || word=="es細胞" || word=="ES細胞"){
      $("#searchcontrol").html(ES);
  }
  else if(word=="iPS" || word=="ips" || word=="iPS細胞"　|| word=="ips細胞"){
    $("#searchcontrol").html(iPS);
  }
  else if(word=="集団的自衛権"　|| word=="集団自衛権"){
    $("#searchcontrol").html(syuudann);
  }
  else if(word=="カジノ"　|| word=="かじの"){
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
  else if(word=="野々村竜太郎" || word == "兵庫議員"){
    $("#searchcontrol").html(nonomura);
  }
  else if(word=="vaio" || word == "VAIO" || word=="バイオ"){
    $("#searchcontrol").html(vaio);
  }
  else if(word=="万能細胞"){
    $("#searchcontrol").html(bannou);
  }
  else if(word=="私の男"){
    $("#searchcontrol").html(myman);
  }
  else if(word=="ワールドカップ"){
    $("#searchcontrol").html(WorldCup);
  }
  else if(word=="モスクワ国際映画祭" || word == "モスクワ映画祭"){
    $("#searchcontrol").html(Moscow);
  }
  else if(word=="トリンドル"　||word == "トリンドル玲奈"){
    $("#searchcontrol").html(reina);
  }
  else if(word=="SFC"　|| word == "湘南藤沢キャンパス"){
    $("#searchcontrol").html(SFC);
  }
  else if(word=="スーパーファミコン" || word =="sfc" ){
    $("#searchcontrol").html(SuperFC);
  }
  else if(word=="CDC" || word == "cdc"){
    $("#searchcontrol").html(CDC);
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
    var Width = $("#content").width(); 
    $(".gsc-resultsRoot").css("width",Width);
  }

var outputElements = {　//履歴の出力先
  memoList: document.querySelector("#wordcontent2")
};

var rirekis = [];

function rirekiDelete(){
  if(rirekis.length > 9){
      rirekis.shift();
  }
}

function delete2Rireki(){
  var n = 0;
  if(rirekis.length > 0){
  while(n < rirekis.length){
    var rirekiAitem = rirekis[n];
    var targetWord = rirekiAitem.word
    if(word2 == targetWord){
      rirekis.splice(n,1);
    }
    n = n + 1;
  }}
}

function createRireki(word){
  return{
    word: word
  };
}

var createRirekiWordElement = function(memo){
  var div = document.createElement("div");
  div.textContent = memo.word;
  div.setAttribute("class", "memo-word");
  return div;
};


function saveRirekiList(){
  console.log("saveRirekiList");
  localforage.setItem(MEMOLISTNAME, rirekis, function(){
    console.log("rereki is saved");
  });
}

function reSerch(memo){
  var word=memo.word;
  doooSerch(word);
}

function createRirekiElement(memo){
    var li = document.createElement("li");
  li.appendChild(createRirekiWordElement(memo));
  li.setAttribute("class","memo");

  //押したら検索画面へ移動
  li.addEventListener("click",function(){
    reSerch(memo);
  })
  return li;
}

/*
 メモオブジェクトを HTML として表示する関数
 */
var displayRireki = function(rireki){
  outputElements.memoList.appendChild(createRirekiElement(rireki));
};

var restoreRirekiList = function(){
  var i = 0;
  if(rirekis.length >0 ){
    $("#wordcontent2").html("");
  }
  while(i < rirekis.length){
    displayRireki(rirekis[i]);
    i = i + 1;
  }
};

 function dooodo(){
  word = document.getElementById('word'); //入力した検索語
  word2 = word.value;
  //wordに何も入力されていないとき
  if(word2.length == 0){
    $("#searchcontrol").html("<p>検索したい単語を入力してから検索ボタンを押してください</p>");
    $("#wordcontent").html("<p></p>");
  }
  else{
    doooSerch(word2); 
    $("#wordcontent2").html("");
  delete2Rireki();
  rirekiDelete();
  restoreRirekiList();
  var newRireki = createRireki(word2);
  rirekis.push(newRireki);
  displayRireki(newRireki);
  saveRirekiList();
  
    document.location = "#write"; 
}}


/*
 アプリの初期化を行う関数
 */
function inptApp(){
    localforage.setDriver("localStorageWrapper");
    dooo.addEventListener("click",dooodo);
  localforage.getItem(MEMOLISTNAME, function(data){
    console.log(data);
    rirekis = data;
    restoreRirekiList();
  });
}

inptApp();

 