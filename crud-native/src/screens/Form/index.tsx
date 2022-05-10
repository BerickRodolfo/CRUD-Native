import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Container, Fields, FormArea } from './styles';
import { Input } from '../../components/Forms/Input/'
import { Button } from '../../components/Forms/Button';
import { View } from 'react-native';

export function Form( { route, navigation } ){
    
    const id = route.params; 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const idUser = id.params.id    

    useEffect(() =>{
        if(idUser !== undefined){
            Axios.get(`http://10.0.2.2:3001/api/get/${idUser}`)
            .then((response)=>{
            setName(response.data.name);
            setEmail(response.data.email);
            setTel(response.data.tel);
            })
        }

    }, []);

    const submitData = () => {
        Axios.post("http://10.0.2.2:3001/api/insert", { 
          name: name, 
          email: email,
          tel : tel
        }).then((response) => {
            alert('Cadastrado com Sucesso');
            navigation.goBack();
          });
    }

      
  const updateData = (id : number) =>{
    Axios.put("http://10.0.2.2:3001/api/update", {
      id : idUser,
      name : name,  
      email: email,
      tel : tel
    })
    .then((response) => {
      alert('Alterado com Sucesso');
      navigation.goBack();
    });
  }

      const deleteData = (id: number) =>{
        Axios.delete(`http://10.0.2.2:3001/api/delete/${id}`);
        alert("Registro deletado com sucesso");
        navigation.goBack();
    }
   
    return(
        <Container>
            <FormArea>
                <Fields>
                    <Input 
                        placeholder='Nome'
                        placeholderTextColor={'#e2dede'}
                        onChangeText={(newText) => setName(newText)}
                        clearButtonMode='always'
                        value={name}
                    />
                    <Input 
                        placeholder='E-mail'
                        placeholderTextColor={'#e2dede'}
                        keyboardType='email-address'
                        onChangeText={(newText) => setEmail(newText)}
                        clearButtonMode='always'
                        value={email}
                    />
                    <Input 
                        placeholder='Telefone'
                        placeholderTextColor={'#e2dede'}
                        keyboardType='phone-pad'
                        onChangeText={(newText) => setTel(newText)}
                        clearButtonMode='always'
                        value={tel}
                    />
                    
                </Fields>

                {idUser ? (
                    <Button 
                    style={{backgroundColor: '#ff3232'}}
                    title="Excluir"
                    onPress={() => {deleteData(idUser)}}
                    />
                ) : 
                    <View>

                    </View>
                }

                <Button 
                    title="Salvar"
                    onPress={() => id.params.id ? updateData(id) : submitData()}
                />

            </FormArea>
        </Container>
    )
}