  var content = document.getElementById( 'content2' );
  var topicsWord = 'h';

  var onLoad = function()
  {
      var restriction = { topic: topicsWord, ned:'jp' };

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
              content.appendChild( searcher.results[ i ].html );
          }
      }
  }

  google.load( 'search', '1' );
  google.setOnLoadCallback( onLoad );

function Top(){
  $("#hometitle").html("トップニュース");
  topicsWord = 'h';
  $("#content2").html("");
  onLoad();
}


function World(){
  $("#hometitle").html("国際");
  topicsWord = 'w';
  $("#content2").html("");
  onLoad();
}

function Business(){
  $("#hometitle").html("ビジネス");
  topicsWord = 'b';
  $("#content2").html("");
  onLoad();
}

function Nation(){
  $("#hometitle").html("国内");
  topicsWord = 'n';
  $("#content2").html("");
  onLoad();
}

function Politics(){
  $("#hometitle").html("政治");
  topicsWord = 'p';
  $("#content2").html("");
  onLoad();
}

function Entertainment(){
  $("#hometitle").html("エンタメ");
  topicsWord = 'e';
  $("#content2").html("");
  onLoad();
}

function Sports(){
  $("#hometitle").html("スポーツ");
  topicsWord = 's';
  $("#content2").html("");
  onLoad();
}

function Science(){
  $("#hometitle").html("テクノロジー");
  topicsWord = 't';
  $("#content2").html("");
  onLoad();
}
