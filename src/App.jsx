/*eslint-disable*/

import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Url from './components/common/url';
import ScrollTop from './components/common/scrollTop';
import './resource/css/reset.css';
import './resource/css/style.css';
import './resource/css/sub.css';

function App() {
    return (
        <div className='App'>
            <ScrollTop />
            <Header></Header>
            <Url></Url>
            <Footer></Footer>
        </div>
    );
}

export default App;
