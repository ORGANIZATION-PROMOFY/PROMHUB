import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFonts, Kanit_600SemiBold } from '@expo-google-fonts/kanit';
import { OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import data from './data';

const HomeScreen = () => {
    const [fontsLoaded] = useFonts({
        Kanit_600SemiBold: Kanit_600SemiBold,
        OpenSans_400Regular: OpenSans_400Regular
    });

    // Basic reusable components

    const Avatar = (props) => (
        <Image
            style={styles.avatar}
            source={{ uri: props.url }}
        />
    );

    const Heading = (props) => (
        <Text style={styles.heading}>
            {props.children}
        </Text>
    );

    const Title = (props) => (
        <Text style={styles.title}>
            {props.children}
        </Text>
    );

    const styles = StyleSheet.create({
        avatar: {
            width: 64,
            height: 64,
            borderRadius: '50%',
        },

        heading: {
            fontFamily: 'Kanit_600SemiBold',
            fontSize: 20,
            paddingTop: 20,
            paddingBottom: 8,
            color: '#08060B',
        },

        title: {
            fontFamily: 'Kanit_600SemiBold',
            fontSize: 12,
            fontWeight: 600,
            color: '#280D5F',
            textTransform: 'uppercase',
        }
    });

    // App-specific components

    const WoofCard = ({ name, avatar}) => (
        <View style={woofCardStyles.card}>
            <Avatar url={avatar}/>
            <View style={woofCardStyles.title}>
            <Title>{name}</Title>
            </View>
        </View>
    );

    const woofCardStyles = StyleSheet.create({
        card: {
            width: 88,
            padding: 12,
            margin: 12,
            marginRight: 16,
            marginLeft: 0,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            
            borderRadius: 12,
            borderWidth: 1,
            borderColor: '#E7E3EB',

            shadowColor: '#E7E3EB',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 1,
        },
        title: {
            paddingTop: 12,
        },
    });

    const WoofPost = ({ image, title, description }) => (
        <View style={woofPostStyles.layout}>
            <Image source={{ uri: image }} style={woofPostStyles.image}/>
            <View style={woofPostStyles.content}>
            <Title style={woofPostStyles.title}>{title}</Title>
            <Text numberOfLines={2} style={woofPostStyles.description}>{description}</Text>
            </View>
        </View>
    );

    const woofPostStyles = StyleSheet.create({
        layout: {
            flexDirection: 'row',
            height: 70,
            marginTop: 12,
        },
        image: {
            flex: 1,
            marginRight: 12,
            resizeMode: 'cover',
            borderRadius: 12,
        },
        content: {
            flex: 2,
            justifyContent: 'space-evenly',
        },
        title: {},
        description: {
            color: '#280D5F',
            fontFamily: 'OpenSans_400Regular',
        },
    });

    // The screen rendering everything
    return (
        <ScrollView style={{paddingHorizontal: 24}}>
            <Heading>Trending Woofs</Heading>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data.woofs.map(woofs => (
                    <WoofCard key={woofs.id} name={woofs.name} avatar={woofs.avatar} />
                ))}
            </ScrollView>
            <Heading>New woof posts</Heading>
            <ScrollView>
                {data.posts.map(post => (
                    <WoofPost image={post.image} title={post.title} description={post.description}/>
                ))}
            </ScrollView>
        </ScrollView>
    );
}

export default HomeScreen;

