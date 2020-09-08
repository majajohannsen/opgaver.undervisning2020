"use strict";

const url = "http://wordpress.majajohannsen.dk/wp-json/wp/v2/posts";
// const url = "https://api.cederdorff.com/wp-json/wp/v2/posts?_embed";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    console.log(posts);
    appendPosts(posts);
  });

// append wp posts to the DOM
function appendPosts(posts) {
let template ="";

for (const post of posts) {
  template += /*html*/ `
      <article>
            <img src="${post.acf.image.url}">
            <h2>${post.title.rendered}</h2>
            <a href="mailto:${post.acf.mail}">${post.acf.mail}</a>
            <p>${post.acf.age} years old</p>
  </article>
  `; 
} 
 document.getElementById("content").innerHTML = template;
 }

// get the featured image url
function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}