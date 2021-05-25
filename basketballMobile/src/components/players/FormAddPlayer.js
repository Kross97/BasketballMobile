import React from "react";
import {Text} from "react-native";
import {Link} from "react-router-native";
import {routePaths} from "../../common/constants/routePaths";

export const FormAddPlayer = () => {
    return (
        <>
            <Text>FormAddPlayer</Text>
            <Link to={routePaths.main.players}>
                <Text style={{textAlign: 'center', color: '#E4163A'}}>Players</Text>
            </Link>
        </>
    );
};
