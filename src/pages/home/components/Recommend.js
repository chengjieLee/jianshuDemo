import React, { Component } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';
import { connect } from 'react-redux';

class Recommend extends Component {
    render() {
        return(
            <RecommendWrapper>
                { this.props.recommendList.map((item) => {
                    return (
                    <RecommendItem key={ item.get('id') }>
                        <img className="recommend-img" src = { item.get('imgUrl') } alt="" />
                    </RecommendItem>
                    )
                }) } 
            </RecommendWrapper>
        )
    }
}
const mapState = (state) => ({
    recommendList: state.getIn(['home','recommendList'])
})

export default connect(mapState, null)(Recommend);