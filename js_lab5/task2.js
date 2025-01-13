// 2 - Use fetch method with url https://jsonplaceholder.typicode.com/users
// To get data asynchronously from the API and display the Result on HTML
// table
// - Display the following Coulmns in table
//     - UserName
//     - email
//     - Company Name
//     - Address geo (address GeoLocation)
//     - show users posts’ titles as ul list in this column
//         and show how many comments are made by each post. /posts /comments

async function getData() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
      (data) => data.json()
    );
    const posts = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then((data) => data.json());
    const comments = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((data) => data.json());
    console.log(data);
    console.log(posts);
    console.log(comments);
    const container = document.querySelector(".container");
    for (let i = 0; i < data.length; i++) {
      const row = document.createElement("tr");
      const child1 = document.createElement("td");
      const child2 = document.createElement("td");
      const child3 = document.createElement("td");
      const child4 = document.createElement("td");
      const child5 = document.createElement("td");
      child1.textContent = data[i].username;
      child2.textContent = data[i].email;
      child3.textContent = data[i].company.name;
      child4.textContent =
        data[i].address.geo.lat + " , " + data[i].address.geo.lng;
      const list = document.createElement("ul");
      posts
        .filter((post) => {
          return post.userId === data[i].id;
        })
        .map((post) => {
          const el = document.createElement("li");
          const commentsNumber = comments.filter((comment) => {
            return comment.postId === post.id;
          });
          el.textContent =
            post.title + " ( " + commentsNumber.length + " )" + " comments";
          list.appendChild(el);
        });
      child5.appendChild(list);
      row.appendChild(child1);
      row.appendChild(child2);
      row.appendChild(child3);
      row.appendChild(child4);
      row.appendChild(child5);
      container.appendChild(row);
    }
  } catch (error) {
    console.log(error);
  }
}

getData();
