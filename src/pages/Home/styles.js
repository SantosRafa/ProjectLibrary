import styled  from  'styled-components';

export const Container = styled.div` 
    height:100vh;
    background-color: #FFE207;
    margin:0;
    display:flex;
    padding:0;
    overflow:hidden;
    justify-content: center;
    flex-direction:column; 
`;


export const Header = styled.header`
    background-color:blue;
    width:100%;
    height:40px;
    top:0;
    display:flex;
    position:absolute;
`;

export const MenuContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:30px;
`;

export const ContainerImageTitleAndSub = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center
    
`;
export const ContainerImage = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;


export const ContainerTitle = styled.div`
    height:50%;
    
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    padding: auto !important;
    
`;


export const ContainerTitleAndSub = styled.div`
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    
    width:50%;

    .search_box{
        position:absolute;
        top:75%;
        left:23%;
        background:#5214DE;
        border-radius:40px;
        display:flex;
        
    }

    .btn_box{
        position:absolute;
        top:75%;
        left:7%;
        background:#5214DE;
        border-radius:40px;
        display:flex;
        align-items:center;
        justify-content:center;
        width:200px;
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

    .all-books_btn{
        color:black;
        float:right;
        width:40px;
        height:40px;
        border-radius:50%;
        background:#5214DE;
        text-align:center;
        line-height:40px;
        transform: all 0.8s ease;
        margin-left:-39px;
        margin-right:10px;

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

    .btn_box:hover > .btn_txt{
    
    }

    .btn_box:hover > .all-books_btn{
        background:white;
    }

    ::placeholder{
        color:black;
    }
`;

export const Title = styled.h1`
    
    text-align:left;
    font-size:75px;
    margin-left:100px;
`;

export const ContainerTextAbout = styled.div`
    display:flex;
    padding-left:100px;
    margin-top:-35px;
    height:50%;
    width:80%;
    
`;
export const Input = styled.input`

::placeholder{
        color:black;
    }
    
`;

export const SearchBox = styled.div`
    
`;
export const BtnBox = styled.div`
cursor:pointer;

    
`;

export const SearchBtn = styled.a`
cursor: pointer;
   
`;

export const BooksBtn = styled.a`
   
`;
export const AboutText = styled.h3`
    font-weight:normal;
`;

export const Button = styled.a``;
