 var content = document.getElementById( 'content3' );
 var wordcontent = document.getElementById("content4");
 var word2 = document.getElementById("word");
 var word = word2.value;


  function OnLoad()
  {
    console.log("hello");
      // 検索コントロールを作成する
      var searchControl = new google.search.SearchControl();

      // 検索コントロールにWeb検索のサーチャーを追加する
      searchControl.addSearcher( new google.search.WebSearch() );

      // 検索コントロールを描画する
      searchControl.draw( content );

      // 検索を実行する
      searchControl.execute( keyword );
  }


  // Search APIをロードする
  google.load( 'search', '1' );

  // ドキュメントがロードされた後に呼び出されるハンドラ関数を登録する
  //google.setOnLoadCallback( OnLoad );

  function dooo(){
    OnLoad();
  }
