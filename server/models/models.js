var mongoose = require('mongoose');
var topicSchema = mongoose.Schema({
  topic:String,
  description:String,
  category:String,
  user:String,
  userId:String
},{timestamps:true});
mongoose.model('Topic',topicSchema)

var userSchema = mongoose.Schema({
  user:String,
}, {timestamps:true});
mongoose.model('User',userSchema)

var postSchema = mongoose.Schema({
  post: String,
  userId:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
  topicId:{type:mongoose.Schema.Types.ObjectId, ref:'Topic'},
  like: Number,
  dislike: Number,
}, {timestamps:true});

mongoose.model('Post',postSchema)

var commentSchema = mongoose.Schema({
  comment: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  topicId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
}, {timestamps:true});

mongoose.model('Comment',commentSchema)