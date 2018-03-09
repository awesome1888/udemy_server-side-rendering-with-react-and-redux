import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="">
                    I am VERY BEST home component
                </div>
                <button onClick={() => console.log('hi there!')}>Press me</button>
            </div>
        );
    }
}
