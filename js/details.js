console.log("hello world");
var client = contentful.createClient({
    space: '688a6fjxwdtq',
    accessToken: 'cUc71Wcesc0x5FYjObcWjOQSKXaJ1EILakYwE4KNa9I',
  });

    var textInURL = window.location.search;

    var parametersInURL = new URLSearchParams(textInURL);
    
    var id = parametersInURL.get('id');


  client.getEntry(id).then(function (entry) {
    
    var contentgoesHere = document.getElementById('contentgoesHere');
    var title = document.createElement('h1');
    title.innerHTML = entry.fields.name;
    contentgoesHere.append(title);

    var mainImage = document.createElement('img');
    mainImage.classList.add('mainimage');
    if (entry.fields.mainImage) {
        mainImage.src = entry.fields.mainImage.fields.file.url;
    }
    
    contentgoesHere.append(mainImage);

    var price = document.createElement('h3');
    price.innerHTML = entry.fields.price;
    contentgoesHere.append(price);

    var rating = document.createElement('h4');
    rating.innerHTML = entry.fields.rating;
    contentgoesHere.append(rating);

    var link = document.createElement('p');
    link.innerHTML = entry.fields.link;
    contentgoesHere.append(link);

    var description = document.createElement('p');
    description.innerHTML = entry.fields.description;
    contentgoesHere.append(description);

    var detailsButton = document.createElement('a');
      detailsButton.innerHTML = "View Product";
      productdiv.appendChild(detailsButton);
      detailsButton.href = "products.html?id="+ entry.sys.id;
  });