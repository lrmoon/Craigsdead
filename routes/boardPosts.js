
import { Router } from 'express'
const router = Router()
import * as boardPostsCtrl from "../controllers/boardPosts.js"

router.get('/', boardPostsCtrl.index);
router.get('/new', boardPostsCtrl.new);

router.post('/', boardPostsCtrl.create);
router.get('/:id', boardPostsCtrl.show);

export{
router
}