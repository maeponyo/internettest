var stap = document.getElementById('stap');
 var ES = document.getElementById('ES');
 var iPS = document.getElementById('iPS');
 var syuudann = document.getElementById('syuudann');
 var cazino = document.getElementById('cazino');
 var word2 = document.getElementById('word'); //入力した検索語
 var word = word2.value;
 var writeresult = document.getElementById('write');
 google.load("search", "1");

 function dooo(){
  //検索した時にすでにあるものだとその部分を表示できるようにしたい
  if(word="stap" && word="STAP" ){
  	//stapの内容を見せる
  	alert("stap");
  }
  else if(word="ES細胞" && word="ES"){
     alert("ES")
  }
  else{
      // Call this function when the page has been loaded
        var searchControl = new google.search.SearchControl(word);
        searchControl.addSearcher(new google.search.WebSearch(word));
        searchControl.addSearcher(new google.search.NewsSearch(word));
        searchControl.draw(document.getElementById("searchcontrol"));
  		}
 }
