var word = document.getElementById("word");//検索したい単語
var rirekicontent = document.getElementById("rireki");//サイドバー用のid
var MEMOLISTNAME = "memo-list"; // localforage で利用するキー
var timestamp = 0;
var dooo = document.getElementById("dooo");

/*
 様々な出力先
 */
var outputElements = {
  memoList: document.querySelector("#wordcontent")
};

var rirekis = [];

function rirekiDelete(){
  if(rirekis.length > 5){
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

function createRirekiElement(memo){
    console.log(word);
    var li = document.createElement("li");
  li.appendChild(createRirekiWordElement(memo));
  li.appendChild(createRirekiTimestampElement(memo));
  li.setAttribute("class","memo");
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
  restoreRirekiList();
  rirekiDelete();
  var newRireki = createRireki(word.value);
  rirekis.push(newRireki);
  displayRireki(newRireki);
  saveRirekiList();
  console.log(rirekis);
  
  document.location = "#write";
};




/*
 アプリの初期化を行う関数
 */
function inptApp(){
    dooo.addEventListener("click",addRireki);
  //localforage.getItem(MEMOLISTNAME, restoreRirekiList);
}

inptApp();