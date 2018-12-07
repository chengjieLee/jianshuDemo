import React, { Component } from 'react';
import { WriterWrapper, WriterItem } from '../style'; 
import { connect } from 'react-redux';

class Writer extends Component {
    render() {
        const writerList = this.props.writerList;
        return(
            <WriterWrapper>
                <div className= "WriterTitle" >
                    <span className="left">推荐作者</span>
                    <span className="right">
                    <i className = "iconfont spin">&#xe851;</i>换一批</span>    
                </div>
                { writerList.map((item)=>{
                    return (
                        <WriterItem key={ item.get('id') }>
                            <img className="writer-img" src={ item.get('imgUrl') } alt=""/>
                            <div>
                                <p className="name" >{item.get('name')}</p>
                                <p className="desc" >{item.get('desc')}</p>
                            </div>
                            <div className="concern">+关注</div>
                        </WriterItem>
                    )
                }) }
               
            </WriterWrapper>
        )
    }
}
const mapState = (state) => ({
    writerList: state.getIn(['home','writerList'])
})
export default connect(mapState,null)(Writer);