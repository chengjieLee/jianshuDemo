import { fromJS } from 'immutable';

const defaultState = fromJS({
     "sliderList": [{
         "id": 1,
         "imgUrl": "https://upload.jianshu.io/admin_banners/web_images/4576/feab4469e6317fe3627d23d80fd6d0da09b556e3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
     }, {
         "id": 2,
         "imgUrl": "https://upload.jianshu.io/admin_banners/web_images/4550/a4aba36241eb146c13892301e486417cbf16af18.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
     }, {
         "id": 3,
         "imgUrl": "https://upload.jianshu.io/admin_banners/web_images/4581/14d959ff757f21616baa933fd3bdbfcf52fd512a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
     }, {
         "id": 4,
         "imgUrl": "https://upload.jianshu.io/admin_banners/web_images/4577/353c8d29771d3c5c0bfbe92556fb65da78d3f3da.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
     }],
    recommendList:[],
    articleList:[],
    writerList:[]
})

export default (state=defaultState, action) => {
    switch(action.type){
        case 'change_home_data': {
           return state.merge({
                recommendList: fromJS(action.recommendList),
                articleList: fromJS(action.articleList),
                writerList: fromJS(action.writerList)
            })
        }
        default: 
            return state;
    }
}