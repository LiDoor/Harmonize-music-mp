const baseUrl="http://localhost:8095"

export const  get =(url:string) => {
 wx.showLoading({
   title:'加载中'
 })

 return new Promise((reslove,reject)=>{
  wx.request({
    url:baseUrl+ url,
    method:'GET',
    success:(res)=>{
      reslove(res.data)
    },
    fail:reject,
    complete:()=>{
      wx.hideLoading()
    }

  })

 })

}

// const handleHttpError = (response,reject) => {
  // if (response.statusCode !== 200)
// {
// reject("请求异常")
// }
