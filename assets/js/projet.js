$(function(){
  var NombreArticleSelec = 0;
  $('.article').click(function(){
    var article = $(this).attr('id');
    var imgArticle = $(this + img).attr('src');
    var descriptArticle = $(this).attr('descriptionimgArticle');
    NombreArticleSelec++;
    console.log(imgArticle);
    $('<div/>',{
      id: 'ArticlePanierNum'+NombreArticleSelec,
      class: 'panier col-lg-12',
      text: 'Article',
    }).appendTo('#panier');
  });
});
