// document.getElementById('test-button').addEventListener('click', function(){
// const links = document.querySelectorAll('.titles a');
// console.log('links:', links);
// });
const titleClickHandler = function(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);
    
  
  /* [DONE] remove class 'active' from all article links  */
  
  const activeLinks = document.querySelectorAll('.titles a.active');
  
  for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
  }
  
  /* [DONE] add class 'active' to the clicked link */
  
  clickedElement.classList.add('active');
  console.log('clickedElement (with plus): ' + clickedElement);
  
  /* [DONE] remove class 'active' from all articles */
  
  const activeArticles = document.querySelectorAll('.posts article.active');
  
  for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
  }
  
  /*[DONE] get 'href' attribute from the clicked link */
  
  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);
  
  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  
  const targetArticle = document.querySelector(articleSelector); 
  console.log(targetArticle);
  
  /* [DONE] add class 'active' to the correct article */
  
  targetArticle.classList.add('active');
  console.log('targetArticle (with plus): ' + targetArticle);
  }

  //const links = document.querySelectorAll('.titles a');
  //for(let link of links){
  //link.addEventListener('click', titleClickHandler);
  //}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
  optArticleTagsSelector = '.post-tags .list' 

function generateTitleLinks(customSelector = ''){

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  console.log('oto stała titleList usuwająca zawartość listy ul dzięki "titleList.innerHTML =' + titleList)

  /* for each article */

  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  console.log('oto stała articles znajdująca wsyztskie elementy .post czyli klase w elem. article dzięki document.querySelectorAll(optArticleSelector)');
  let html = '';

  for (let article of articles) {
    console.log('wywołano pętlę po artykułach ');

    /* get the article id */

    const articleId = article.getAttribute('id'); 
    console.log('oto stała articleId odczytująca id article: ' + articleId);

    /* find the title element */
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML; 
    console.log('oto stała articleTitle odnajdująca artykuł dzięki article.querySelector(optTitleSelector) i odczytująca tytuł arykułu dzięki .innerHTML czyli: article.querySelector(optTitleSelector).innerHTML: ' + articleTitle)

    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('oto stała link HTML ktra tworzy kod HTML linka przy użuciu stringa z dodaniem stałych articleId oraz articleTitle ' + linkHTML);


    /* insert link into html variable */

    html = html + linkHTML;
    console.log('oto utworzony link html: ' + html);

    //const insertLink = titleList.insertAdjacentHTML('afterend', linkHTML);
    //console.log('wywołano stałą insertlink ' + titleList + linkHTML);

  }

  titleList.innerHTML = html;
  
  const links = document.querySelectorAll('.titles a');
  console.log('!!!!links:', links);
  for (let link of links) {
    link.addEventListener('click', titleClickHandler); 
  }
}

generateTitleLinks();
console.log('wywołano fn generateTitleLinks');
