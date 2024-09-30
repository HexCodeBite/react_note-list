import React, { Fragment } from 'react'

export const About = props => {
    return (
        <div className="p-5 mb-4 bg-info rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Note React App</h1>
                <p className="col-md-8 fs-4">Verison <strong>1.0.01</strong></p>
                <button className="btn btn-light btn-lg" type="button">Hi!</button>
            </div>
        </div>
    )
}