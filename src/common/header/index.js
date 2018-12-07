import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import  { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom'; 
import  {
     NavSearch,
      NavItem, 
      Nav,
      Logo, 
      HeaderWrapper,
      Addition,
      Button,
      SearchInfo,
      SearchInfoTitle,
      SearchInfoItem,
      SearchInfoSwitch,
      NavWrapper
     } from './style';


class Header extends Component {
    getListArea() {
        const { isFocus, list, page, totalPage, mouseIn, handleChangeItem, handleMouseEnter, handleMouseLeave} = this.props;
        const pageList = [];
        const newList = list.toJS();
        if(newList.length){
            for(let i =( page - 1) *10; i < page * 10 ; i++){
                if(newList[i]){
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    )
                }
            }
        }
        if (isFocus || mouseIn) {
        return(
                <SearchInfo 
                onMouseEnter = {handleMouseEnter}
                onMouseLeave = {handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                        onClick = {()=> handleChangeItem(page,totalPage,this.spin)}
                        >
                        <i ref={(spin)=>{this.spin = spin}} className = "iconfont spin">&#xe851;</i>                        
                        换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                     {pageList}
                    </div>  
                </SearchInfo>
        )}else{
            return null;
        }
    }
render(){
        const { isFocus, handleBlur, handleFocus, list, login, logout } = this.props;
        return(
            <div>
                <HeaderWrapper>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <Nav>
                        <NavItem className="left active" >首页</NavItem>
                        <NavItem className="left">下载APP</NavItem>
                        {
                            login ? 
							<NavItem onClick={logout} className='right'>退出</NavItem> : 
							<Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
					    }
                        <NavItem className="right">
                        <i className="iconfont">&#xe602;</i>
                        </NavItem >
                        <NavWrapper>
                            <CSSTransition
                            in={ isFocus }
                            timeout = {200}
                            classNames="slide"
                            >
                                <NavSearch className={ isFocus ? 'focus' : '' }
                                onFocus={ () => handleFocus(list) }
                                onBlur={ handleBlur }
                                ></NavSearch>
                            </CSSTransition>
                            <i className={ isFocus ? 'iconfont zoom focus' : 'iconfont zoom' }>&#xe601;</i>
                          { this.getListArea() }
                        </NavWrapper>
                        <Addition>
                            <Link to='/write'>
                                <Button className="writting">
                                <i className = "iconfont">&#xe608;</i>
                                写文章</Button>
                            </Link>
                            <Button className="reg">注册</Button>
                        </Addition>
                    </Nav>
                </HeaderWrapper>
            </div>
        )
     }
    
}
const mapStateToProps = (state) =>{
    return{
        list:state.getIn(['header','list']),
        isFocus: state.get('header').get('isFocus'),
        page: state.getIn(['header','page']),
        mouseIn:state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage']),
        login: state.getIn(['login','login'])
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        handleFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList());  
        //   const action = actionCreators.searchFocus();
            dispatch(actionCreators.searchFocus());
        },
        handleBlur() {
        //    const action = actionCreators.searchBlur();
        //    dispatch(action)
        dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());            
        },
        handleChangeItem(page,totalPage,spin) {
            let spinAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(spinAngle){
                spinAngle = parseInt(spinAngle,10);
            }else{
                spinAngle = 0
            }
            spin.style.transform = 'rotate('+ (spinAngle + 180) +'deg)'
            if(page < totalPage){
                dispatch(actionCreators.changeItem(page + 1));
            }else if(page === totalPage){
                dispatch(actionCreators.changeItem(1));
            }
        },
        logout() {
			dispatch(loginActionCreators.logout())
		}

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);