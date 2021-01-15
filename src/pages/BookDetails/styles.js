import styled from 'styled-components';


export const Container = styled.div` 
    height:100vh;
    background-color: #FFE207;
    margin:0;
    display:flex;
    padding:0;
    overflow:hidden;
    justify-content: center;
    flex-direction:row; 
`;


export const ContainerCover = styled.div`
    
    flex:0.5;
    display:flex;
    align-items:center;
    justify-content: center;
    border-right: 1px solid black;
    
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

export const Image = styled.img`
    height:100%;
    width:100%;
`;

export const ContainerInfo = styled.div`
    flex:0.5;
    display:flex;
    flex-direction:column;
`;


export const ContainerImage = styled.div`
    height:80%;
    width:60%;
    background-color:green;
`;

export const TitleContainer = styled.div`
    
    width:80%;
    display:flex;
    align-items:flex-start;
    justify-content:center;
    flex-direction:column;
`;

export const Title = styled.h1`
    
`;

export const AuthorName = styled.h4`
    color:#66603c;
    margin-top:-20px;
`;

export const ContainerHeader = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    width:100%;
    align-items:center;
    height: 80px;
    margin-top: 55px;

`;

export const ContainerMiddleInfo = styled.div`
    
    width:100%;
    height: 80px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    
`;

export const ContainerPriceandRating = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    padding: 0 22px;
    
`;

export const Price = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

export const ContainerSinopse = styled.div`
    background-color:white;
    width:80%;
    height:50%;
    margin:auto;
    overflow:auto;
    padding:0 10px;
    border-radius:20px;
`;

export const SinopseText = styled.p`
    align-self:center;
    font-size:25px;
`;

export const BuyButton = styled.div`
    display:flex;
    height:40px;
    width:40px;
    align-items:center;
    border-radius:40px;
    justify-content:center;
    background-color:#5214DE;
    margin-right: 365px;
    cursor: pointer;
    :hover{
        background-color:white;
    }
`;










