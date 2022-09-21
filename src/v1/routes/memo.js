const router = require("express").Router();

const memoController = require("../controllers/memo");
const tokenHandler = require("../handlers/tokenHandler");

//memoを作成
router.post("/", tokenHandler.verifyToken, memoController.create);

//ログインしているユーザーが投稿したメモを全て取得
router.get("/", tokenHandler.verifyToken, memoController.getAll);

//ログインしているユーザーが投稿したメモを1つ取得
router.get("/:memoId", tokenHandler.verifyToken, memoController.getOne);

//ログインしているユーザーが投稿したメモを更新
router.put("/:memoId", tokenHandler.verifyToken, memoController.update);

//ログインしているユーザーが投稿したメモを削除
router.delete("/:memoId", tokenHandler.verifyToken, memoController.delete);

module.exports = router;