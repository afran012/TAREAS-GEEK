import React from 'react';

export const DetalleTarea = () => {
    return <div>
        <div className="container row row-cols-1 row-cols-md-5 g-4 py-5 text-center">


            <div className="card text-white bg-dark ms-3 py-3"  >
                <div className="">
                    <img src={url} className="img-fluid rounded-start" alt="..." width="200px" />
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card-body">
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-title">{descripcion}</p>

                        </div>
                    </div>
                </div>

                <button
                    className="btn btn-warning btm-sm float-end mx-2"

                >
                    Atras
                </button>
            </div>

        </div>
    </div>;
};
