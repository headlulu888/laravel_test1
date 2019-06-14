import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">React Component</div>

                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <textarea className="form-control" rows="5" placeholder="Create a new task" required/>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Create task</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;