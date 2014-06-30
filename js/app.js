var word = document.getElementById("word");//検索したい単語
var MEMOLISTNAME = "memo-list"; // localforage で利用するキー
var timestamp = 0;
var dooo = document.getElementById("dooo");
 var stap = $("#stap").html();
 var ES = $('#ES').html();
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
      searchControl.draw( wordcontent2 );

      // 検索を実行する
      searchControl.execute( word );
    $(".gsc-resultsRoot").css("width","900px");
  }

/*
 様々な出力先
 */
var outputElements = {
  memoList: document.querySelector("#wordcontent")
};

var rirekis = [];

function rirekiDelete(){
  var i = 0;
  while(i < rirekis.length){
    if(word == rirekis[i]){
        delete rirekis[i];
    }
    i = i + 1;
  }
  if(rirekis.length > 4){
      rirekis.shift();
  }
}

function createRireki(word){
  return{
    word: word,
    timestamp: new Date()
  };
}

var createRirekiWordElement = function(memo){
  var div = document.createElement("div");
  div.textContent = memo.word;
  div.setAttribute("class", "memo-word");
  return div;
};

/*
 メモオブジェクトの日付部分を HTML にする関数
 */
var createRirekiTimestampElement = function(memo){
  var div = document.createElement("div");
  div.textContent = memo.timestamp;
  div.setAttribute("class", "memo-timestamp");
  return div;
};

function saveRirekiList(){
  localforage.setItem(MEMOLISTNAME, rirekis);
}

function reSerch(memo){
  var word=memo.word;
  doooSerch(word);
}

function createRirekiElement(memo){
    var li = document.createElement("li");
  li.appendChild(createRirekiWordElement(memo));
  li.appendChild(createRirekiTimestampElement(memo));
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
  while(i < rirekis.length){
    displayRireki(rirekis[i]);
    i = i + 1;
  }
};


/*
 メモを追加する関数。メモ入力画面のコントローラ
 */
var addRireki = function(){
  $("#wordcontent").html("");
  rirekiDelete();
  restoreRirekiList();
  var newRireki = createRireki(word.value);
  rirekis.push(newRireki);
  displayRireki(newRireki);
  saveRirekiList();
  console.log(rirekis[0]);
  
  document.location = "#write";
};




/*
 アプリの初期化を行う関数
 */
function inptApp(){
    dooo.addEventListener("click",addRireki);
  localforage.getItem(MEMOLISTNAME, restoreRirekiList);
}

inptApp();