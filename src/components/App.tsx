import React, { FC } from 'react';

export const App: FC = () => {
    return (
        <div className="container">
            <h1>Learning Webpack</h1>
            <hr />
            <div className="logo"></div>
            <hr />
            <pre></pre>
            <hr />
            <div className="box">
                <h2>LESS</h2>
            </div>
            <hr />
            <div className="card">
                <h2>SCSS</h2>
            </div>
        </div>
    );
}