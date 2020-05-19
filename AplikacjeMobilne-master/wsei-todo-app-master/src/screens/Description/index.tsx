import * as React from 'react';
import {FC} from 'react';
import {Text, Image, View, ScrollView} from 'react-native';
import { Style } from '../../constans/Style';



const Description: FC = () => {
    return(
        <ScrollView style = { Style.background }>
            <View style = { Style.container }>
            <Image style = { Style.Image1 }source = { require('../../assets/cherryTree1.jpg') }/>
            <Text style = { [ Style.fontColor1] }>
               Lorem ipsum dolor{"\n"}sit amet consectetur{"\n"}adipisicing elit.Nulla{"\n"}fugiat inventore explic-{"\n"}abo voluptatem
                ut et{"\n"} non velit vitae, conse-{"\n"}ctetur,magnam exercit-{"\n"}ationem!Totam cum{"\n"} mollitia maxime sint{"\n"} earum
                 praesentium, repellat voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ex voluptatum dolor
                  alias. Voluptas assumenda eligendi nihil accusantium consectetur. Cupiditate molestias quam non a saepe et ratione dolorem
                  , rem omnis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis consequatur obcaecati sequi temporibus
                  , repellat fugiat explicabo iusto, officia eos, cupiditate at! Tenetur reprehenderit itaque, voluptatum autem eius.
                   
             </Text> 
            
            
            </View>
            <View style ={Style.container2}>
                <Text style={[Style.title]}>Lorem ipsum dolor sit amet.</Text>
            <Image style = { Style.Image2 }source = { require('../../assets/cherryTree2.jpg') }/>
            <Text style={[Style.fontColor2]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reiciendis vitae ipsa. Tempore dolore ut perspiciatis unde 
                perferendis quod pariatur debitis et, voluptas est cum error maxime hic dicta necessitatibus!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam fugiat quo culpa voluptas maiores, quaerat voluptatibus
                 harum labore aut illum est dolor necessitatibus itaque! Inventore nobis totam tenetur ducimus dolores.
            </Text>
            </View>
            <Image style={[Style.Image3]} source={require('../../assets/cherryTree3.jpg')}></Image>
        </ScrollView>
    )
}

export default Description;