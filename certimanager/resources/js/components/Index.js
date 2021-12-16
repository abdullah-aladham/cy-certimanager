import React from 'react';
import ReactDOM from 'react-dom';
import Topbar from './topbar/topbar';

function Index() {
    return (
        <div className="container">
            <Topbar/>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
if (document.getElementById('Index')) {
    ReactDOM.render(<Index/ >, document.getElementById('Index'));
   // ReactDOM.render(<Topbar/>);
}

