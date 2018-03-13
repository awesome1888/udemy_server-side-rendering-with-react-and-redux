import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Link to="/hi">Say hi!</Link>
                <div className="">
                    I am VERY BEST home component
                </div>
                <button onClick={() => console.log('hi there!')}>Press me</button>
            </div>
        );
    }
}
