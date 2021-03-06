const http = new easyHTTP();

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// Get single Post 
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, posts) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// Create Data
const data = {
    title: "Custom post",
    body: 'this is a custom post'
};

// Create Post 
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// PUT POST 
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
});

// DELETE POST 
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});