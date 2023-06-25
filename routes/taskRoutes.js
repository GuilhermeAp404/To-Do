const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.creatTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove', TaskController.removeTask)
router.get('/att/:id', TaskController.updateTask)
router.post('/att', TaskController.updateTaskPost)
router.post('/updateStatus', TaskController.toogleTaskStatus)
router.get('/', TaskController.showTask)

module.exports = router