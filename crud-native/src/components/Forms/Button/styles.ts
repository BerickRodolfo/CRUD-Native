import styled from 'styled-components/native';
import { TouchableOpacity} from 'react-native';

export const Container = styled(TouchableOpacity)`
    width: 100%;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 5px;
    align-items: center;
    padding: 18px;
` 

export const Title = styled.Text` 
    font-size: 18px;
    color: ${({theme}) => theme.colors.text};
    
` 