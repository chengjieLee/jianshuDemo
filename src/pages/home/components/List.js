import React, { Component } from 'react';
import { ListInfo, ListItem, ListWrapper } from '../style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class List extends Component {
    render() {
        return(
            <ListWrapper>
                { this.props.articleList.map((item) => {
                    return (
                        <Link key={item.get('id')} to={'/detail/' + item.get('id')}>
                            <ListItem>
                                <img className="pic" src= { item.get('imgUrl') } alt="" />
                                <ListInfo >
                                    <h3 className="title">{ item.get('title') }</h3>
                                    <p className="des">{ item.get('des') }</p>
                                </ListInfo>   
                            </ListItem>
                        </Link>
                    )
                }) }      
            </ListWrapper>
        )
    }
}
const mapState = (state) => ({
    articleList: state.get('home').get('articleList'),
})
export default connect(mapState,null)(List);