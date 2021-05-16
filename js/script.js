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
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author',
  optTagsListSelector = ".tags.list",
  optCloudClassCount = 5,
  optCloudClassPrefix = 'tag-size-',
  optAuthorsListSelector = '.authors'; 

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


function tagClickHandler(event){

  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('href of clicked tag', href);

  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log('extraxt tag: ', tag);

  /* find all tag links with class active */
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log('activeTags', activeTags);

  /* START LOOP: for each active tag link */
  for (let activeTag of activeTags){

    /* remove class active */
    activeTag.classList.remove('active');

  /* END LOOP: for each active tag link */
}

  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
  console.log('tagLinks', tagLinks);

  /* START LOOP: for each found tag link */
  for (let tagLink of tagLinks){

    /* add class active */
    tagLink.classList.add('active');
    console.log('add active class to tagLink', tagLink);

  /* END LOOP: for each found tag link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){

  /* find all links to tags */
  const links = document.querySelectorAll('a[href^="#tag-"]');
  console.log('find all links to tags: ', links);

  /* START LOOP: for each link */
  for (let link of links ){

    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', tagClickHandler);

  /* END LOOP: for each link */
  }
}

addClickListenersToTags();
function generateAuthors(){
  /* [NEW] create a new variable allAuthors with an empty object */
  let allAuthors = {};

  /* [DONE] find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log('articles', articles);

  /* [DONE] START LOOP: for every article: */
  for (let article of articles){

    /* [DONE] find authors wrapper */
    const authorsWrapper = article.querySelector(optArticleAuthorSelector);
    console.log('authorsWrapper', authorsWrapper);

    /* [DONE] make html variable with empty string */
    let html = ' ';

    /* [DONE] get authors from data-author attribute */
    const articleAuthor = article.getAttribute('data-author');
    console.log('articleAuthor', articleAuthor);

    /* [NEW] check if this link is NOT already in allAuthors */
      if(!allAuthors[articleAuthor]) {
    /* [NEW] add tag to allTags object */
      allAuthors[articleAuthor] = 1;
    } else {
      allAuthors[articleAuthor]++;
    }
    console.log('allAuthors', allAuthors);

    /* generate HTML of the link with HANDLEBARS */
    const linkHTMLData = {id: articleAuthor};
    const linkHTML = templates.articleAuthorLink(linkHTMLData);
    console.log('HTML of author link: ', linkHTML);

    /* add generated code to html variable */
    html = html + linkHTML;

    /* insert HTML of all the links into the tags wrapper */
    authorsWrapper.innerHTML = html;
    console.log('authorsWrapperr HTML: ', html)

  /* END LOOP: for every article: */
  }
  /* [NEW] [DONE] find list of authors in right column */
  const authorsList = document.querySelector(optAuthorsListSelector);
  console.log('authorsList', authorsList);

  /* Change for handlebars [NEW][DONE] create variable for all authors HTML code */
  //let allAuthorsHTML = '';
  const allAuthorsData = {authors: []};

  /* [NEW] START LOOP: for each author in allAuthors: */
  for(let author in allAuthors){
  /* change for handlebars [NEW] generate code of a link and add it to allTagsHTML */
  //allAuthorsHTML += '<li><a class="' + author + '" href="#author-' + author + '">' + author +  '(' + allAuthors[author] + ')</a></li>';

  allAuthorsData.authors.push({
    author: author,
    count: allAuthors[author],
  });
  }
/* [NEW] END LOOP: for each tag in allTags: */

/*[NEW] change for handlebars add HTML from allTagsHTML to tagList */
//authorsList.innerHTML = allAuthorsHTML;
//console.log('allAuthorsHTML are', allAuthorsHTML);
authorsList.innerHTML = templates.authorListLink(allAuthorsData);
}

generateAuthors();

function authorClickHandler(event){

  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('href of clicked author', href);

  /* make a new constant "author" and extract author from the "href" constant */
  const author = href.replace('#author-', '');
  console.log('extraxt author: ', author);

  /* find all author links with class active */
  const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');
  console.log('activeAuthors', activeAuthors);

  /* START LOOP: for each active author link */
  for (let activeAuthor of activeAuthors){

    /* remove class active */
    activeAuthor.classList.remove('active');

  /* END LOOP: for each active author link */
}

  /* find all author links with "href" attribute equal to the "href" constant */
  const authorLinks = document.querySelectorAll('a[href="' + href + '"]');
  console.log('authorLinks', authorLinks);

  /* START LOOP: for each found author link */
  for (let authorLink of authorLinks){

    /* add class active */
    authorLink.classList.add('active');
    console.log('add active class to authorLink', authorLink);

  /* END LOOP: for each found author link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + author + '"]');
}

function addClickListenersToAuthors(){

  /* find all links to authors */
  const links = document.querySelectorAll('a[href^="#author-"]');
  console.log('find all links to tags: ', links);

  /* START LOOP: for each link */
  for (let link of links ){

    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', authorClickHandler);

  /* END LOOP: for each link */
  }
}
addClickListenersToAuthors();
function calculateTagsParams(tags){
  const params = {
    max: 0,
    min: 999999
  };

  for(let tag in tags){
  console.log(tag + ' is used ' + tags[tag] + ' times');

  params.max = Math.max(tags[tag], params.max);
  params.min = Math.min(tags[tag], params.min);

  }
return params;
}

function calculateTagClass(count, params){

  const normalizedCount = count - params.min;
  const normalizedMax = params.max - params.min;
  const percentage = normalizedCount / normalizedMax;
  const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1 );

  return optCloudClassPrefix + classNumber;

}

