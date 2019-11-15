/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react';
import {View, Text} from 'react-native'
import MasonryList from 'react-native-masonry-list';
import MesonryLayout from 'react-native-masonry-layout';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          uri:
            "https://stimg.cardekho.com/images/carexteriorimages/360x240/Ferrari/Ferrari-Portofino/047.jpg",  dimensions: { width: 1080, height: 1920 },  },
       {
          uri: "https://rollr.io/wp-content/uploads/2017/02/mini-home-car.jpg"
        },
       {
          uri:
            "https://www.bmw-speedmotorwagen.in/sites/default/files/styles/nostyle/public/slider_banner_image/2018-02/M4Coupe-Header_Banner_17.jpg?itok=zmJWURhi"
        },
       {
          url:
            "https://img.etimg.com/thumb/msid-67103187,width-1200,height-900,resizemode-4,imgsize-96644/car-getty.jpg"
        },
        {
          uri:
            "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/vdat/submodels/dodge_challenger_dodge-challenger_2019-1545059179866.jpg"
        },]   
       };
  }

  
 
  render() {
    const {data} = this.state;
    return (
      <View style={{flex:1}}>
      {/* <MesonryLayout 
          ref="data"
          header={
            <View>
                <Text>Header text</Text>
            </View>
          }
          footer ={
            <View>
                <Text>Footer text</Text>
            </View>
          }
          
          // columns={3} 
          renderItem={(item)=>
            <View>
                
            </View>
          }
      /> */}
           <MasonryList
                  renderIndividualFooter={
                  <View>
                    <Text>Footer text</Text>
                </View>
                  }
                  

                  images={data}
              />
      </View>
      
    );
  }
}


