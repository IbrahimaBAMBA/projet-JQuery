$(function(){
  var tableau = [];
  $('button[name=addPanier]').click(function(){
    var ParentOfButton = $(this).parents('.article');
    var refArticle = ParentOfButton.children('.reference').children('strong').children('.ref').text().toString();
    var imgArticle = ParentOfButton.children('img').attr('src').toString();
    var descripArticle = ParentOfButton.children('.description').text();
    var price = ParentOfButton.children('.price').text();
    var titleArticle = ParentOfButton.children('.titleArticle').text().toString();
    eval('var ' + refArticle + ' ={ titre:titleArticle, img:imgArticle, desp:descripArticle, price:price};');
    tableau.push(eval(refArticle));
  });

});
