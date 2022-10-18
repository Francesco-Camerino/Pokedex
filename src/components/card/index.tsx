import React from 'react';
import {
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface Link {
    testo: string;
    url: string;
}

interface Props {
    titolo: string;
    descrizione: string;
    immagine?: string;
    links?: Link[]; // elenco di url
}

function Card(props: Props) {
    const { titolo, descrizione, immagine, links } = props;

    return (
        <View style={styles.card}>
            <Text style={styles.titolo}>{titolo}</Text>
            {immagine && (
                <Image
                    source={{
                        uri: immagine,
                    }}
                    style={styles.immagine}
                    resizeMode="contain"
                />
            )}
            <Text style={styles.descrizione}>{descrizione}</Text>
            {links?.map((link, key) => (
                <TouchableOpacity
                    key={key}
                    style={styles.linkContainer}
                    onPress={() => Linking.openURL(link.url)}>
                    <Text style={styles.link}>🔗 {link.testo}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 20,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        borderRadius: 10,
        backgroundColor: 'white',
    },
    titolo: {
        color: 'lightcoral',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 20,
    },
    descrizione: {
        color: '#000',
        padding: 20,
        fontSize: 18,
    },
    immagine: {
        width: '100%',
        height: 200,
    },
    linkContainer: {
        borderTopWidth: 1,
        borderTopColor: "#CCCCCC",
    },
    link: {
        color: 'blue',
        textTransform: 'uppercase',
        padding: 20,
        textAlign: 'right',
    },
});

export default Card;
