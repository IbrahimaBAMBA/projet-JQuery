$(function(){
  var tableau = [];
  $('button[name=addPanier]').click(function(){
    var ParentOfButton = $(this).parents('.article');
    var refArticle = ParentOfButton.children('.reference').children('strong').children('.ref').text();
    var imgArticle = ParentOfButton.children('img').attr('src');
    var descripArticle = ParentOfButton.children('.description').text();
    var price = ParentOfButton.children('.price').text();
    var titleArticle = ParentOfButton.children('.titleArticle').text();
    eval('var ' + refArticle + ' ={ titre:titleArticle, img:imgArticle, desp:descripArticle, price:price};');
    tableau.push(eval(refArticle));
    console.log(tableau);
  });
});
