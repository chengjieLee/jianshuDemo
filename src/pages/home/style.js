import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    margin: 0 auto;
    overflow:hidden;
`;
export const HomeLeft = styled.div `
    float:left;
    margin-left:15px;
    padding-top:30px;
    width: 625px;
    position: relative;
`;

export const SliderWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 270px;
    font-size: 0;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 8px;
    .swiper-img {
        width: 100%;
        height: 270px;
    }
`;

export const HomeRight = styled.div `
    float:right;
    margin-right:6px;
    padding-top:30px;
    width: 280px;
`;

export const RecommendWrapper = styled.div`
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
    padding-right:8px;
    height: 270px;
    box-sizing: border-box;
`;

export const RecommendItem = styled.a`
    display: block;
    width: 280px;
    margin-bottom: 2px;
    box-sizing: border-box;
    border-radius:4px;
    .recommend-img{
        width:100%;
        height:50px;
    }     
}
`;
export const ListWrapper = styled.div`
    margin-top: 40px;
`;
export const ListItem = styled.div`
    padding: 20px 0;
    overflow: hidden;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height:27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .des {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const WriterWrapper = styled.div`
    margin-top: 60px;
    width: 280px;
    .WriterTitle{
        font-size: 14px;
        color: #969696;
        overflow: hidden;
        margin-bottom: 10px;
    }
    .left {
        float: left;
    }
    .right {
        float: right;
    }
`;

export const WriterItem = styled.div `
    position: relative;
    overflow: hidden;
    margin: 16px 0;
    .writer-img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        float: left;
        margin-right: 10px;
    }
    .name {
        padding-top: 5px;
        font-size: 14px;
        color: #333;
        margin-right: 60px;
    }
    .desc {
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
    .concern {
        position: absolute;
        right:5px;
        top:5px;
        color: #42c02e;
        float: right;
        font-size: 14px;
    }
    
`;