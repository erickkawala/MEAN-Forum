var modelsController = require('../controllers/models_controller.js')

module.exports = function(app){
  app.post('/topic', modelsController.newTopic);
  app.get('/topics', modelsController.getTopics);
  app.get('/topic/:id', modelsController.getTopic);
  app.get('/topic/:id', modelsController.topicDetail);
  
  app.post('/user', modelsController.newUser);
  app.get('/user/:id', modelsController.getUser);
  
  app.post('/post', modelsController.newPost);
  app.get('/posts', modelsController.getPost);
  app.post('/post/:id', modelsController.updatePost);
  // app.get('/topic/:id/posts/', modelsController.getPosts)
  
  // app.get('/topic/:id/post/:id/comments', modelsController.getComments);
  // app.get('/topic/:id/posts/:id/comment/:id', modelsController.getComment);
  
  app.get('/comment', modelsController.newComment);
  app.get('/comments', modelsController.getComments);
  app.post('/comment/:id', modelsController.updateComment);

  

  // todo: get users posts
  // todo: get users comments
  // get all topics where user has posts
}
