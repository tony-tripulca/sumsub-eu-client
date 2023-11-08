import { useEffect, useState } from "react";
import SumsubWebSdk from "@sumsub/websdk-react";

import { Box, Typography } from "@mui/material";

import AccessTokenService from "../../services/AccessTokenService";

import "./SumsubSdk.scss";

function SumsubSdk() {
  const [accessToken, setAccessToken] = useState(null);

  const accessTokenExpirationHandler = (accessToken) => {
    console.log(accessToken);
  };

  const messageHandler = (message) => {
    console.log(message);
  };

  const errorHandler = (error) => {
    console.error(error);
  };

  useEffect(() => {
    setTimeout(() => {
      AccessTokenService.getAccessToken({})
        .then((response) => {
          setAccessToken(response.data.token);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  }, []);

  if (accessToken) {
    return (
      <Box>
        <Typography sx={{ textAlign: "center", fontSize: "2rem" }}>
          {process.env.REACT_APP_NAME}
        </Typography>
        <SumsubWebSdk
          accessToken={accessToken}
          expirationHandler={accessTokenExpirationHandler}
          config={{ lang: "en" }}
          // options={options}
          onMessage={messageHandler}
          onError={errorHandler}
        />
      </Box>
    );
  }
}

export default SumsubSdk;
