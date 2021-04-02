import request from '@/utils/request'

export default {
  getAllChapterVideo(courseId) {
    return request({
      url: `/eduservice/edu-chapter/getChapterVideo/${courseId}`,
      method: 'get',
    })
  },
  //添加章节
  addChapter(chapter) {
    return request({
      url: `/eduservice/edu-chapter/addChapter`,
      method: 'post',
      data: chapter
    })
  },
  //by id
  getChapter(chapterId) {
    return request({
      url: `/eduservice/edu-chapter/getChapterInfo/${chapterId}`,
      method: 'get',
    })
  },
  //修改章节
  updateChapter(chapter) {
    return request({
      url: `/eduservice/edu-chapter/updateChapter`,
      method: 'post',
      data: chapter
    })
  },
//delete chapter
  deleteChapter(chapterId) {
    return request({
      url: `/eduservice/edu-chapter/${chapterId}`,
      method: 'delete'
    })
  },
}
