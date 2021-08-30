function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
loadPost