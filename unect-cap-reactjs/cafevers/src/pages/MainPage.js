import React from 'react';

import Banner from '../components/Banner';
import Header from '../components/Header';
import Login from '../components/Login';

class MainPage extends React.Component{



    //Render do JSX
    render(){
        return (
            <section>
                <Header />
                <Banner />
                <Login />
            </section>
        );
    }
}

export default MainPage;