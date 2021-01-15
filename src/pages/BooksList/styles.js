import styled  from  'styled-components';

export const Container = styled.div`
    height:100vh;
    background-color: #FFE207;
    margin:0;
    display:flex;
    padding:0;
    overflow:hidden;
    justify-content: flex-start;
    flex-direction:column;
    flex:1;
`;

export const HeaderContainer = styled.div`
    display:flex;
    border-bottom:1px solid black;
    height:40%;
    position:relative;
    top:0;
    justify-content: space-between;

    .back-button{
        text-decoration:none;
        color:#000;
    }

    .search_box{
        position:absolute;
        top:81%;
        right:10%;
        background:#5214DE;
        border-radius:40px;
        display:flex;
        
    }


    .search_btn{
        color:black;
        float:right;
        width:40px;
        height:40px;
        border-radius:50%;
        background:#5214DE;
        text-align:center;
        line-height:40px;
        transform: all 0.8s ease;
    }

    .search_txt{
        border:none;
        background:none;
        outline:none;
        float:left;
        padding:0;
        font-size:16px;
        transition:0.4s;
        line-height:40px;
        width:0;
        color:black;
    }

    .search_box:hover > .search_txt{
        width:150px;
        padding:0 6px;
    }

    .search_box:hover > .search_btn{
        background:white;
    }

    
`;

export const TitleContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;    
    position:relative;
    right:50px;
    width: 100%;
`;

export const Title = styled.h1`
    margin-bottom:10px;
    font-size:90px;
`;

export const ListBooks = styled.ul`
    display:grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 20px;
    list-style:none;
    overflow:auto;
    padding-left:2px;
    padding-bottom:0;
    margin-bottom:0;
`;


export const BackButton = styled.div`
    display:flex;
    height:40px;
    width:40px;
    align-items:center;
    margin-left: 50px;
    margin-top:30px;
    border-radius:40px;
    justify-content:space-evenly;
    background-color:#5214DE;
    cursor: pointer;
    :hover{
        background-color:white;
    }
`;

export const Input = styled.input`
::-webkit-input-placeholder{
        color:black !important;
    }
`;

export const SearchBox = styled.div`
`;


export const SearchBtn = styled.a`
    cursor: pointer;
`;

export const ContainerLoadMoreButton = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:50px;
`;

export const LoadMoreButton = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:40px;
    width:40px;
    background-color:#5214DE;
    border-radius:40px;
    
    :hover{
        background-color:#fff;
    }
`;
