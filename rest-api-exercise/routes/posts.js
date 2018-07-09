const store = require('../store/store.js')

module.exports = {
    getPosts(req, res) {
        res.status(200).send(store.posts)
    },
    addPost(req, res) {
        let newPost = req.body
        newPost.comments = []
        let postId = store.posts.length
        store.posts.push(newPost)
        res.status(201).send({
            postId: postId
        })
    },
    updatePost(req, res) {
        store.posts[req.params.postId] = Object.assign(store.posts[req.params.postId], req.body)
        res.status(200).send(req.store.posts[req.params.postId])
    },
    removePost(req, res) {
        store.posts.splice(req.params.postId, 1)
        res.status(204).send()
    }
}