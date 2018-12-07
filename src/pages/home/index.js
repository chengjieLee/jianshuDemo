import React, { Component } from 'react';
import Writer from './components/Writer';
import List from './components/List';
import Slider from './components/Slider';
import Recommend from './components/Recommend';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import axios from 'axios';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return(
            <HomeWrapper>
                <HomeLeft>
                    <Slider />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount () {
        axios.get('/api/homeData.json').then( (res) => {
            const result = res.data.data;
            const action = {
                type:"change_home_data",
                recommendList: result.recommendList,
                articleList: result.articleList,
                writerList: result.writerList
            }
            this.props.getHomeData(action);
        } ).catch(()=>{console.log("error")})
    }
}
const mapDispatch = (dispatch) => ({
    getHomeData(action) {
        dispatch(action);
    }
})

export default connect(null, mapDispatch)(Home);