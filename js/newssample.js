  var content = document.getElementById( 'content2' );

  var onLoad = function()
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
              content.appendChild( searcher.results[ i ].html );
          }
      }
  }

  google.load( 'search', '1' );
  google.setOnLoadCallback( onLoad );
