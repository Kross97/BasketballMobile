import React from "react";
import {Text} from "react-native";
import {routePaths} from "../../common/constants/routePaths";
import {Link} from "react-router-native";

export const FormAddTeam = () => {
  return (
      <>
          <Text>FORMADD</Text>
          <Link to={routePaths.main.teams}>
              <Text style={{textAlign: 'center', color: '#E4163A'}}>Teams</Text>
          </Link>
      </>
  );
};
