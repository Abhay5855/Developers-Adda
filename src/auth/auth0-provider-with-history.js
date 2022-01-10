
import { Auth0Provider } from "@auth0/auth0-react";
import { useHistory} from "react-router-dom";




const Auth0ProviderWithHistory = ({ children }) => {


    // Get access to domain and id

const domain = process.env.REACT_APP_AUTH0_DOMAIN;

const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

let history = useHistory();


// Return to the appState or return to the location
const onRedirectCallback = (appState) => {
       history.push(appState?.returnTo || window.location.pathname);
}
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
