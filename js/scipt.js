console.log("hello world");
var client = contentful.createClient({
    space: '688a6fjxwdtq',
    accessToken: 'cUc71Wcesc0x5FYjObcWjOQSKXaJ1EILakYwE4KNa9I',
  });


var products = document.getElementById('products-section');

client.getEntries({content_type:'a2',}).then(function (entries) {

  entries.items.forEach(function (entry) {
      console.log(entry);
      var productdiv = document.createElement('div'); 
      productdiv.classList.add('products');
      
      var mainImage = document.createElement('img');
      mainImage.classList.add('main-image');
      if (entry.fields.mainImage) {
          mainImage.src = entry.fields.mainImage.fields.file.url;
      }

      var description = document.createElement('description');
      description.classList.add('description');
      if (entry.fields.description) {
          description.innerHTML = entry.fields.description;
      }

      var name = document.createElement('name');
      name.classList.add('name');
      if (entry.fields.name) {
          name.innerHTML = entry.fields.name;
      }

      productdiv.appendChild(mainImage);
      productdiv.appendChild(name);
      productdiv.appendChild(description);
      products.appendChild(productdiv);

      var detailsButton = document.createElement('a');
      detailsButton.innerHTML = "View Product";
      productdiv.appendChild(detailsButton);
      detailsButton.href = "products.html?id="+entry.sys.id;
  });
});

var characters = document.getElementById('characters-section');

client.getEntries({content_type:'marioCharacters',}).then(function (entries) {

  entries.items.forEach(function (entry) {
      console.log(entry);
      var charactersdiv = document.createElement('div'); 
      charactersdiv.classList.add('characters');
      
      var mainImage = document.createElement('img');
      mainImage.classList.add('mainimage');
      if (entry.fields.mainImage) {
          mainImage.src = entry.fields.mainImage.fields.file.url;
      }

      var characterDescription = document.createElement('description');
      characterDescription.classList.add('characterdescription');
      if (entry.fields.characterDescription) {
        characterDescription.innerHTML = entry.fields.characterDescription;
      }

      var name = document.createElement('name');
      name.classList.add('name');
      if (entry.fields.name) {
          name.innerHTML = entry.fields.name;
      }

      charactersdiv.appendChild(mainImage);
      charactersdiv.appendChild(name);
      charactersdiv.appendChild(characterDescription);
      characters.appendChild(charactersdiv);
  });
});


