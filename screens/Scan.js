import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Permissions from 'expo-permissions';
import {BarCodeScanner}  from 'expo-barcode-scanner';

class Scan extends React.Component{
    constructor(){
      super();
      this.state = {
        hasCameraPermissions: null,
        scanned: false,
      }
    }

    getCameraPermissions = async (id) =>{
      const {status} = await Permissions.askAsync(Permissions.CAMERA);
      
      this.setState({
        hasCameraPermissions: status === "granted",
        buttonState: id,
        scanned: false,
      });
    }
    }
    

  

  
  



  