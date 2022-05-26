import React from 'react';
import {StyleSheet,View,Image,Text,Alert,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import foto from './assets/foto.jpeg';
import Card from './components/Card/index';

const App = () => {
  
  function handleRedeSocial(rede_social) {

      switch (rede_social){

        case 'linkedin':
          Alert.alert('Meu Linkedin','https://www.linkedin.com/in/andrey-mafra-aa4478214/')
        break
        
        case 'instagram':
          Alert.alert("Meu Instagram",'https://www.instagram.com/andrey_mafra5/')
        break
        
        case 'github':
          Alert.alert('Meu GitHub','https://github.com/andreymafra55')
        break
      }

  }

  return(
    <>
      <View style={styles.page}>
          <View style={styles.container_cabeçalho}>
              <Image source={foto} style={styles.foto}/>
              <Text style={styles.nome}>ANDREY MAFRA</Text>
              <Text style={styles.funcao}>Estudante De T.I</Text>
              <View style={styles.rede_sociais}>
                    <TouchableOpacity onPress={()=> handleRedeSocial('github')}>
                        <Icon name="github" size={30} style={styles.texto} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> handleRedeSocial('instagram')}>
                        <Icon name="instagram" size={30} style={styles.texto} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> handleRedeSocial('linkedin')}>
                        <Icon name="linkedin" size={30} style={styles.texto} />
                    </TouchableOpacity>
              </View>
          </View>
          
          <Card titulo="Formação Academica">
              <Text style={styles.card_content_text}>Estudante do 2° Periodo TSI-IFPE</Text>
              <Text style={styles.card_content_text}>Estudante do 2° Periodo TSI-IFPE</Text>
          </Card>
          <Card titulo="Experiência Profissional"> 
              <Text style={styles.card_content_text}>Sem experiência</Text>
              <Text style={styles.card_content_text}>Sem experiência</Text>
          </Card>
          
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    page:{
      flex:1,
      backgroundColor:'#E7E7E7',
    },
    container_cabeçalho: {
      marginTop:50,
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    foto: {
      width:250,
      height:250,
      borderRadius:125,
    },
    nome: {
      color:'black',
      fontSize:26,
      fontWeight:'bold',
      marginTop:10,
    },
    funcao: {
      color: 'grey',
      fontWeight:'bold',
      marginBottom:10,
    },
    rede_sociais:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width:'60%',
      marginBottom:20,

    },
    card_content_text:{
      color: 'grey',
      fontWeight:'bold',
      marginBottom:10,
    },
    texto: {
      color: 'black',
      fontWeight:'bold',
      
    }

});

export default App;