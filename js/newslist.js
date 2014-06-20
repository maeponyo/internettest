var stap = document.getElementById('stap');
 var ES = document.getElementById('ES');
 var iPS = document.getElementById('iPS');
 var syuudann = document.getElementById('syuudann');
 var cazino = document.getElementById('cazino');
 var word2 = document.getElementById('word'); //入力した検索語
 var word = word2.value;
 var writeresult = document.getElementById('write');
 var searchcontrol = document.getElementById('searchcontrol');
 var stap2 = document.getElementById('stap22');
 var searchcontrol2 = [];
 

function onLoad()
  {
      var restriction = { topic:'h', ned:'jp' };

      var newsSearch = new google.search.NewsSearch();
      newsSearch.setSearchCompleteCallback( this, SearchComplete, [ newsSearch ] );
      newsSearch.setRestriction( google.search.Search.RESTRICT_EXTENDED_ARGS, restriction );

      newsSearch.execute( '' );
  }

  function SearchComplete( searcher )
  {
      if( searcher.results )
      {
          for( var i = 0; i < searcher.results.length; i++ )
          {
              searchcontrol2.appendChild( searcher.results[ i ].html );
          }
      }
  }

  google.load( 'search', '1' );
  google.setOnLoadCallback( onLoad );


 function dooo(){
  //検索した時にすでにあるものだとその部分を表示できるようにしたい
  if(word=="stap" && word=="STAP" ){
  	//stapの内容を見せる
  	searchcontrol.innerHTML = stap2;
  }
  else if(word=="ES細胞" && word=="ES"){
     searchcontrol.innerHTML = ES;
  }
  else{
    //searchcontrol.innerHTML = "<h3>検索結果</h3><br><p>test</p>";
    onLoad
    console.log(searchcontrol2);
    searchcontrol = searchcontrol2;
 }
}


 