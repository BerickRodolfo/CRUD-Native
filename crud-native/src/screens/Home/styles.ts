import styled from 'styled-components/native'


export const Container = styled.View`  
    flex: 1;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.background}

`;  

export const NameData = styled.Text`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.text};
`

export const Data = styled.Text`
    font-size: 18px;
    color: gray;
`

export const ContainerItem = styled.View`
    background-color: ${({theme}) => theme.colors.dataBackground};
    display: flex;
    margin-top: 20px;
    align-items: flex-start;
    width: 90%;
    margin-left: 20px;
    border-radius: 10px;
    padding: 20px;
`