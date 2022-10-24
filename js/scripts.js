window.addEventListener("load", function () {

  // Create the elements 
  const body = document.querySelector("body");
  let h1Element1 = document.querySelector("h1");
  let pElement1 = document.createElement("p");
  let imgElement1 = document.createElement("img");
  let h1Element2 = document.createElement("h1");
  let ulElement1 = document.createElement("ul");
  let liElement1 = document.createElement("li");
  let liElement2 = document.createElement("li");
  let h2Element1 = document.createElement("h2");
  let aElement1 = document.createElement("a");

  // Input the text for each element 
  // h1Element1.append("this");
  body.append(pElement1);
  pElement1.append("The HTML of this webpage was created with JavaScript.");
  body.append(imgElement1);
  imgElement1.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  imgElement1.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");66
  imgElement1.setAttribute( "style", "width:50%");

  body.append(h1Element2);
  h1Element2.append("Facts about the Multicolored Tanager");

  body.append(ulElement1);
  ulElement1.append(liElement1);
  liElement1.append("It is endemic to the mountains of Colombia.");

  ulElement1.append(liElement2);
  liElement2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  body.append(h2Element1);
  h2Element1.append("Source");
  
  body.append(aElement1);
  aElement1.setAttribute("href","https://en.wikipedia.org/wiki/Multicoloured_tanager");
  aElement1.append("Wikipedia");

});

