import  Axios  from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, NameData, Data , ContainerItem } from './styles';
import { useIsFocused } from '@react-navigation/native';
import { FlatList, TouchableOpacity } from 'react-native';
import { Button } from '../../components/Forms/Button/index';

type item = {
    id : number,
    name : string,
    email : string,
    tel : string
}
 
export function Home({ navigation }){

    const [DataList, setDataList] = useState<item[]>([]);
    const isFocused = useIsFocused();
    
        useEffect(() => {
            if(isFocused){
                Axios.get<item[]>('http://10.0.2.2:3001/api/get').then((response)=>{
                setDataList(response.data);
            })}
        }, [isFocused]);

    return(
        <Container>
            <FlatList 
            data={DataList}
            keyExtractor={item => item.id}
            renderItem={({item }) => (
                <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Form', {
                    screen: 'Form',
                    params: {id : item.id},
                })}
                >
                    <ContainerItem>
                        <NameData>{item.id}</NameData>
                        <Data>Nome : {item.name}</Data>
                        <Data>Email :{item.email}</Data>
                        <Data>Telefone : {item.tel}</Data>
                    </ContainerItem>
                </TouchableOpacity>
            )}
            > 
            </FlatList>   
            
                <Button 
                onPress={() => navigation.navigate('Form', {
                    screen: 'Form',
                    params: {id : undefined}
                })} 
                title="Inserir novo Registro"
                
                />   
        </Container>
    )
}