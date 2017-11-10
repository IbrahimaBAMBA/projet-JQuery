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
$(function(){
$('img').mouseover(function(){
  $(this).css('width','270px');   <!--'this' sert à repeter ce qui a été fait-->
  $(this).mouseout(function(){
  $(this).css('width', '220px');
  });
});
});
