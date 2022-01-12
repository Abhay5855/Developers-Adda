


import IntroPage from '../components/intro_page/IntroPage'




import { BrowserRouter as Router, Route , Switch } from "react-router-dom";



const MainRoutes = () => {



    return (

        <>

        <Router>
            <Route exact path = '/' component={IntroPage} />
        </Router>

        </>
    )


}


export default MainRoutes;
