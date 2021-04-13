import request from '@/utils/request'
const api_name = '/eduservice/video'
export default {

  addVideo(video) {
    return request({
      url: `${api_name}/addVideo`,
      method: 'post',
      data: video
    })
  },

  // updateVideoInfoById(videoInfo) {
  //   return request({
  //     url: `${api_name}/update-video-info/${videoInfo.id}`,
  //     method: 'put',
  //     data: videoInfo
  //   })
  // },

  deleteVideo(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  },

  deleteAliyunVideo(id) {
    return request({
      url: `/eduvod/video/removeAliyunVideo/${id}`,
      method: 'delete'
    })
  }
}
