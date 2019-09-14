var mongoose = require('mongoose');
var Topic = mongoose.model('Topic')
var User = mongoose.model('User')
var Post = mongoose.model('Post')
var Comment = mongoose.model('Comment')

function modelsResult(res,err,result){
  if(err){
    res.json(err)
  }else{
    res.json(result);
  }
}

module.exports.newComment = function(req,res){
  Comment.create(req.body, function(err,result){
    modelsResult(res,err,result)
  })
};
module.exports.getComment = function(req,res){
  Comment.find(req.body, function(err,result){
    modelsResult(res,err,result)
  })
};
module.exports.updateComment = function (req, res) {
  Comment.update(req.body, function (err, result) {
    modelsResult(res, err, result)
  })
};
module.exports.updatePost = function (req, res) {
  if (req.body.key === "like") {
    Post.update({ _id: req.params.id }, { $inc: { like: 1 } }, function (err, result) {
      modelsResult(res, err, result)
    })
  } else {
    Post.update({ _id: req.params.id }, { $inc: { dislike: 1 } },
      function (err, result) {
        modelsResult(res, err, result)
      })
  }
};

module.exports.newTopic = function(req,res){
  Topic.create(req.body, function(err,result){
    modelsResult(res,err,result)
  })
};
module.exports.getTopic = function(req,res){
  Topic.find({ _id: req.params.id}, function(err,result){
    modelsResult(res,err,result)
  })
};
module.exports.getTopics = function(req,res){
  Topic.findAll({}, function (err, result) {
    modelsResult(res, err, result)
  })
};
module.exports.topicComments = function (req, res) {
  Topic.find({ _id: req.params.id}, function (err, result) {
    modelsResult(res, err, result)
  })
};
module.exports.topicDetail = function(req,res){
  Topic.findOne({_id: req.params.id}, function(err,result){
    modelsResult(res,err,result)
  })
};

module.exports.newUser = function(req,res){
  User.create(req.body, function(err,result){
    modelsResult(res,err,result)
  })
};
module.exports.getUser = function(req,res){
  User.findOne({_id: req.params.id}, function(err,result){
    modelsResult(res,err,result)
  })
};

module.exports.newPost = function(req,res){
  console.log(req.body)
  Post.create(req.body, function(err,result){
    modelsResult(res,err,result)
  })
};
module.exports.getPost = function(req,res){
  Post.find({}).populate('userId').populate('topicId').exec( function(err,result){
    modelsResult(res,err,result)
  })
};
module.exports.updatePost = function(req,res){
  if(req.body.key === "like"){
    Post.update({_id:req.params.id},{$inc:{like:1}}, function(err,result){
      modelsResult(res,err,result)
    })
  }else{
    Post.update({_id:req.params.id},{$inc:{dislike:1}},
    function(err,result){
      modelsResult(res,err,result)
    })
  }
};

// module.exports.updateComment = function(req,res){
//   if(req.body.key === "comment"){
//     Comment.update({_id:req.params.id},)
//   }
// }
