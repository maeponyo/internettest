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
          var content = document.getElementById( 'content2' );
          for( var i = 0; i < searcher.results.length; i++ )
          {
              content.appendChild( searcher.results[ i ].html );
          }
      }
  }

  google.load( 'search', '1' );
  google.setOnLoadCallback( onLoad );





 var stap = document.getElementById('stap');
 var ES = document.getElementById('ES');
 var iPS = document.getElementById('iPS');
 var syuudann = document.getElementById('syuudann');
 var cazino = document.getElementById('cazino');
 var word2 = document.getElementById('word');
 var word = word2.value;
 var writeresult = document.getElementById('write');

 function doo(){
  //検索した時にすでにあるものだとその部分を表示できるようにしたい
 }
