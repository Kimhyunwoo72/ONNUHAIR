/*eslint-disable*/

import { Routes, Route } from 'react-router-dom';
import Main from '../main/Main';
import About from '../sub/About';
import Shops from '../sub/Shops';
import BoardView from '../boards/BoardView';
import BoardCon from '../boards/BoardCon';
import Location from '../sub/Location';

function Url() {
    return (
        <Routes>
            <Route path='/ONNUHAIR' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/shops' element={<Shops />} />
            <Route path='/boardcon' element={<BoardCon />} />
            <Route path='/boardview/news/:page' element={<BoardView />} />
            <Route path='/boardview/notice/:page' element={<BoardView />} />
            <Route path='/boardcon/news' element={<BoardCon />} />
            <Route path='/boardcon/notice' element={<BoardCon />} />
            <Route path='/location' element={<Location />} />
        </Routes>
    );
}

export default Url;
