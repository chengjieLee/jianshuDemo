import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SliderWrapper }  from '../style'

class Slider extends Component {
render() {
        const bannerImg = this.props.bannerImg;
        return (
        <SliderWrapper className="swiper-container">
            <div className="swiper-wrapper">
                { bannerImg.map((item)=>(
                    <div key={ item.get('id') } className="swiper-slide">
                        <img className="swiper-img" src={ item.get('imgUrl') } alt="" />
                    </div>
                ))}
            </div>
            <div className='swiper-pagination'></div>
            <div className='swiper-button-warp'>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </SliderWrapper>
       )
    }
componentDidMount() {
    new Swiper('.swiper-container', {
            loop: true,     //循环
            autoplay: { //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
               delay: 3000,
               disableOnInteraction: false,    //户操作swiper之后，是否禁止autoplay。默认为true：停止。
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,    
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    };
};

const mapState = (state) => ({
    bannerImg: state.getIn(['home','sliderList'])
});

export default connect(mapState, null)(Slider);