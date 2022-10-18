import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Dettaglio from "../../pages/dettaglio";
import Elenco from "../../pages/elenco";
import { IPokemon } from "../../types/pokemon";

export type StackParamList = {
    Elenco: undefined;
    Dettaglio: {
        pokemonParam: IPokemon;
    };
};

const Stack = createNativeStackNavigator<StackParamList>();
function ElencoTab() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Elenco" component={Elenco} />
            <Stack.Screen name="Dettaglio" component={Dettaglio} />
        </Stack.Navigator>
    );
}
export default ElencoTab;