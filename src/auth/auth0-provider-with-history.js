import { useHistory, useSearchParams } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

// Get access to domain and id

const domain = process.env.REACT_APP_AUTH0_DOMAIN;

const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const history = useHistory();

const Auth0ProviderWithHistory = ({ children }) => {
  return (
    <>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        {children}
      </Auth0Provider>
    </>
  );
};

export default Auth0ProviderWithHistory;
