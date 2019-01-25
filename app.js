const http = new easyHTTP;

//get posts
// posts = http.get('https://jsonplaceholder.typicode.com/posts', function(err, callback){
//     if(err){
//         console.log(err);
//     }else {
//         console.log(callback);
//     }
// });

// get single post
// posts = http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, callback){
//     if(err){
//         console.log(err);
//     }else {
//         console.log(callback);
//     }
// });

//create data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
}

//create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, callback){
//         if(err){
//         console.log(err);
//     }else {
//         console.log(callback);
//     }
// })

//Update post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, callback){
//     if(err){
//         console.log(err);
//     }else {
//         console.log(callback);
//     }
// })

//Delete Post
posts = http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
        console.log(err);
    }else {
        console.log(response);
    }
});