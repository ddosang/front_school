var express = require('express');
var router = express.Router();

const postModel = require("../model/post");

router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const post = new postModel({
    title: title,
    content: content,
  });

  try {
    // 응답을 하는 시점은 동기적이어야한다.
    const result = await post.save();
    res.status(200).json({
      message: "upload success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

// 게시물 제목으로 조회
router.get('/', async (req, res) => {
  try {
    const result = await postModel.find({ title: "first" });
    res.status(200).json({
      message: "read success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

// 게시물 id로 조회
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await postModel.findById(id);
    res.status(200).json({
      message: "detail success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const result = await postModel.findByIdAndUpdate(id, {
      title: title,
      content: content,
    }, {
      // 업데이트 후에 업데이트 된 게시물을 반환할지. 없으면 업데이트 전 게시물을 반환함.
      new: true,
    });
    res.status(200).json({
      message: "update success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await postModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "delete success",
    });
  } catch(error) {
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;
