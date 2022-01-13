


import IntroPage from '../components/intro_page/IntroPage'
import SearchPage from '../components/intro_page/search_page/SearchPage';




import { BrowserRouter as Router, Route , Switch } from "react-router-dom";



const MainRoutes = () => {



    return (

        <>

        <Router>
            <Route exact path = '/' component={IntroPage} />
            <Route exact path = '/search' component={SearchPage} />
        </Router>

        </>
    )


}


export default MainRoutes;
