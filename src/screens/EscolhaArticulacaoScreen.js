import React, { useState } from 'react';
import FastImage from 'react-native-fast-image';
import { View, Image, TouchableOpacity, StyleSheet, ScrollView, Text, Modal } from 'react-native';

export default function EscolhaArticulacaoScreen({ navigation }) {
  const [selectedArtId, setSelectedArtId] = useState(null); // Estado para armazenar o id
  const [isModalVisible, setModalVisible] = useState(false); // Estado do modal
  const [selectedImage, setSelectedImage] = useState(null); // Guarda a imagem/articulação selecionada

  const handleStart = () => {
    console.log('Abrindo câmera.');
  };
  const images = [
    { id: 'Ombro - ', source: require('../../assets/ombro.webp') },
    { id: 'Cotovelo - ', source: require('../../assets/flexcotovelo.gif') },
    { id: 'Punho - ', source: require('../../assets/punho.jpg') },
    { id: 'Dedos da mão - ', source: require('../../assets/dedosmao.webp') },
    { id: 'Quadril - ', source: require('../../assets/quadril.jpg') },
    { id: 'Joelho - ', source: require('../../assets/joelho.webp') },
    { id: 'Tornozelo - ', source: require('../../assets/tornozelo.jpg') },
    { id: 'Dedos do pé - ', source: require('../../assets/dedospe.jpg') },
    { id: 'Cervical - ', source: require('../../assets/cervical.webp') },
    { id: 'Tórax - ', source: require('../../assets/torax.jpg') },
    { id: 'Lombar - ', source: require('../../assets/lombar.webp') },
    { id: 'Referências bibliográficas - ', source: require('../../assets/referencias.png') },
  ];
  
  const movements = [
    {id: 1, value:'flexão'},
    {id: 2, value: 'extensão'},
    {id: 3, value: 'abdução'},
    {id: 4, value: 'adução'},
    {id: 5, value: 'rotação interna'},
    {id: 6, value: 'rotação externa'},
    {id: 7, value: 'rotação para direita'},
    {id: 8, value: 'rotação para esquerda'},
    {id: 9, value: 'inclinação para esquerda'},
    {id: 10, value: 'inclinação para a direita'},
    {id: 11, value: 'desvio medial'},
    {id: 12, value: 'desvio lateral'},
    {id: 13, value: 'pronação'},
    {id: 14, value: 'supinação'},
    {id: 15, value: 'eversão'},
    {id: 16, value: 'inversão'},
    {id: 17, value: 'plantiflexão'},
    {id: 18, value: 'dorsiflexão'},
    {id: 19, value: 'oponência'},
    {id: 20, value: 'abertura de dedos'},
    {id: 21, value: 'aproximação de dedos'},
  ];

  // Abre o modal e define a imagem selecionada
  const handlePress = (id, image) => {
    console.log('ID:', id, 'Image:', image);
    setSelectedArtId(id);
    setSelectedImage(image);
    setModalVisible(true);
  };

  // Fecha o modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
        <Text style={styles.voltarText}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Escolha a articulação</Text>
      <View style={styles.grid}>
        {images.map((item) => (
      <TouchableOpacity key={item.id} style={styles.imageContainer} onPress={() => handlePress(item.id, item.source)}>
        <Image source={item.source} style={styles.image} resizeMode="contain" />
      </TouchableOpacity>
        ))}
      <Image
        style={styles.image}
        source={{
          uri: 'https://mega.ibxk.com.br/2014/08/14/14155415311794.gif',
        }}
        resizeMode="contain"
      />
      </View>

      {/* Modal */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
            {selectedImage && <Image source={selectedImage} style={styles.modalImage} />}
            <Text style={styles.modalText}>{selectedArtId}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={handleStart}
              >
                <Text style={styles.buttonText}>Começar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
    paddingTop: 80,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '90%',
  },
  imageContainer: {
    width: '40%',
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    height: '80%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: 200,
    height: 400,
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  modalText: {
    fontSize: 20,
    marginTop: 10,
  },
    button: {
    marginTop: 20,
    backgroundColor: '#4a92fa',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  voltar: {
    position: 'absolute',
    top: 20,
    left: 10,
    padding: 10,
  },
  voltarText: {
    color: '#4a92fa',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});
