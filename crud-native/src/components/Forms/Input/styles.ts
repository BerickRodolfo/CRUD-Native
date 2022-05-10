import styled from 'styled-components/native';
import {TextInput} from 'react-native';

export const Container = styled(TextInput)` 
    padding: 16px;
    font-size: 18px;
    margin-top: 30px;
    background-color: ${({theme}) => theme.colors.inputBackground};
    border-radius: 5px;
    color: ${({theme}) => theme.colors.text};
`  