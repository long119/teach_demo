import request from '@/utils/request'
export default {
  addCourseInfo(courseInfo) {
    return request({
      url: `/eduservice/course/addCourseInfo`,
      method: 'post',
      data: courseInfo
    })
  },

  //查询所有的讲师
  getListTeacher(){
    return request({
      url:'/eduservice/edu-teacher/findAll',
      method: 'get'
    })
  },

  //根据课程id查询课程基本信息
  getCourseInfo(id){
    return request({
      url:'/eduservice/course/getCourseInfo/'+id,
      method:'get'
    })
  },
  //修改课程信息
  updateCourseInfo(id){
    return request({
      url:'/eduservice/course/updateCourseInfo/',
      method:'post',
      data: courseInfo
    })
  },
  //课程确认信息
  getPublishCourseInfo(id){
    return request({
      url:`/eduservice/course/getPublishCourseInfo/${id}`,
      method:'get',
    })
  },
  publishCourse(id){
    return request({
      url:`/eduservice/course/publishCourse/${id}`,
      method:'post',
    })
  },
  getListCourse(){
    return request({
      url:`/eduservice/course`,
      method:'get',
    })
  },
}
