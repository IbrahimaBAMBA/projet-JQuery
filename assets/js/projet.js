$(function(){
  var NombreArticleSelec = 0;
  $('.article').click(function(){
    var article = $(this).attr('id');
    var imgArticle = $(this).children('img').attr('src');
    var descripArticle = $(this).children('.description').text();
    NombreArticleSelec++;
    $('<div/>',{
      id: 'ArticlePanierNum'+NombreArticleSelec,
      class: 'articleDansPanier',
    }).appendTo('#panier');
    $('<img/>',{
      src: imgArticle,
      class: 'imageDansPanier'
    }).appendTo('#ArticlePanierNum'+NombreArticleSelec);
    $('<p/>',{
      text: descripArticle,
      class:'descriptionDansPanier'
    }).appendTo('#ArticlePanierNum'+NombreArticleSelec);

  });
});
