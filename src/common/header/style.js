import styled from 'styled-components';

export const HeaderWrapper = styled.div `
    height:56px;
    border-bottom:1px solid #f0f0f0;
    line-height:56px;
    position:relative;
`;
export const Logo = styled.div `
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background: url('https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png');
    background-size:cover;
    @media (max-width:1100px){
        display:none;
    }
`;
export const Nav = styled.div `
    width:960px;
    margin:0 auto;
    height:100%;
    box-sizing:border-box;
    padding-right:50px;
`;
export const NavItem = styled.div `
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    cursor:pointer;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696
    }
    &.active{
        color:#ea6f5a;
    }
`;
export const NavWrapper = styled.div `
    float:left;
    position:relative;
    .slide-enter{
        transition:all .2s ease-out;
    }
    .slide-enter-active{
        width:240px
    }
    .slide-exit{
        transition: all .2s ease-out;
    }
    .slide-exit-active{
        width:160px;
    }
    .zoom {
        position:absolute;
        display:inline-block;
        right:5px;
        top:14px;
        width:30px;
        height:30px;
        border-radius:15px;     
        line-height:30px;
        text-align:center;
        cursor:pointer;
        &.focus{
            background: #ccc;
        }
    }
    .spin {
        display:inline-block;
        font-size:12px;
        margin-right:2px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width:160px;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    margin-top:9px;
    margin-left:20px;
    padding:0 40px 0 20px;
    box-sizing:border-box;
    font-size:14px;
    &::placeholder{
        color:#999;
    }
    &.focus{
        width:220px;
    }
`;
export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: #fff;
`;
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:15px;
    font-size:13px;
    color:#969696;
`;

export const SearchInfoItem = styled.a `
    display:block;
    float:left;
    line-height:20px;
    padding:0 5px;
    margin-right:10px;
    margin-bottom:15px;
    font-size:12px;
    border:1px solid #ddd;
    color:#333;
    border-radius:3px;
    cursor:pointer;
`;
export const SearchInfoSwitch = styled.div `
    font-size:13px;
    float:right;
    cursor: pointer;
`;

export const Addition = styled.div `
    position:absolute;
    right:0;
    top:0;
    height:56px
`;
export const Button = styled.div `
    float: right;
    margin-top: 9px;
    line-height: 38px;
    border-radius:19px;
    margin-right:20px;
    padding:0 20px;
    border:1px solid #ec6149;
    font-size:14px;
    cursor:pointer;
    &.reg {
        color:#ec6149;
    }
    &.writting {
        background:#ec6149;
        color:#fff;
    }
    @media (max-width:1260px) {
        display: none;
    }
`