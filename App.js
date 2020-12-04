import React from "react";
import {View, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';



class App extends React.Component {

  constructor( props ){
    super( props );
    this.state = {}
  }

  componentDidMount(){
  console.log( {RNCamera} );
  }

  render(){
    return(
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Kamera izni gerekiyor',
            message: 'Kamera ile manzara fotoğrafı çekmek için izin vermeniz gerekiyor.',
            buttonPositive: 'Tamam',
            buttonNegative: 'İptal'
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Mikrofon izni gerekiyor',
            message: 'Mikrofon ile ses kaydı yapmak için için izin vermeniz gerekiyor.',
            buttonPositive: 'Tamam',
            buttonNegative: 'İptal'
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.log(barcodes);
            alert( barcodes );
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
  },
  buttonContainer: {
    width:'100%',
    position: 'absolute',
    bottom:50,
    right: 0,
    left:0,
    alignItems:'center'
  },
  imageBackground: {
    width:'100%',
     height: '100%'
  },
  okButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
});


export default App;