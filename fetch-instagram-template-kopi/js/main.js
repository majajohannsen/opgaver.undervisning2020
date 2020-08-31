"use strict"; // to enable strict mode and modern JavaScript functionality

function fetchInstagramPosts(userName) {
  let url = `https://instagram.com/${userName}/?__a=1`;
  console.log(url);
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let posts = data.graphql.user.edge_owner_to_timeline_media.edges;
      console.log(posts);
      appendPosts(posts);
    });
}

function appendPosts(posts) {
  // TODO: Append posts using a loop

  let htmlTemplate = "";

  for (const post of posts) {
console.log(posts);
let imageUrl = post.node.thumbnail_src;
let likes = post.node.edge_liked_by.count;
let caption = post.node.edge_media_to_caption.edges[0].node.text;

htmlTemplate += /*html*/`
<article>
<img src="${imageUrl}">
<p>Likes: ${likes}</p>
<p>${caption}</p>
  </article>
`;
  }
  document.querySelector("#instagram-posts").innerHTML = htmlTemplate;
}

function appendProfileInfo() {
  // TODO Append IG profile info like username, full name, mail, biography, profile picture, etc. 
}

fetchInstagramPosts("erhvervsakademiaarhus");