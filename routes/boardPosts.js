
import { Router } from 'express'
const router = Router()
import * as boardPostsCtrl from "../controllers/boardPosts.js"

router.get('/',  boardPostsCtrl.index);
router.get('/new',isLoggedIn, boardPostsCtrl.new);

router.post('/', boardPostsCtrl.create);
router.get('/:id', isLoggedIn, boardPostsCtrl.show);

router.delete('/:id', boardPostsCtrl.delete)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

export{
router
}