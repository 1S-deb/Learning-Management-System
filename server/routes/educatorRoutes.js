import express from 'express'
import { addCourse,getEnrolledStudentsData,updateRoleToEducator } from '../controllers/educatorController.js'
import { getEducatorCourses } from '../controllers/educatorController.js'
import upload from '../configs/multer.js'
import { protectEducator } from '../middlewares/authMiddleware.js'
import { educatorDashboardData } from '../controllers/educatorController.js'
const educatorRouter = express.Router()
//Add Educator Role
educatorRouter.get('/update-role',updateRoleToEducator)
educatorRouter.post('/add-course',upload.single('image'),protectEducator,addCourse)
educatorRouter.get('/courses',protectEducator,getEducatorCourses)
educatorRouter.get('/dashboard',protectEducator,educatorDashboardData)
educatorRouter.get('/enrolled-students',protectEducator,getEnrolledStudentsData)
export default educatorRouter;
