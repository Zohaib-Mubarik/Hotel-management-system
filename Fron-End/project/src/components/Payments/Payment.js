import Header from '../Header/Header.js';
import Last from '../Last.js';
function Payment(){
  return (
    <>
    <Header></Header>
      <div className="container mt-5">
          <div className="jumbotron text-center">
              <h1 className="display-4">Welcome to the Payment Management App</h1>
              <p className="lead">Manage your Payment efficiently and effectively.</p>
              <hr className="my-4" />
              <p>Use the navigation bar to access different sections of the app.</p>
          </div>
          <div className="row">
              <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                      <div className="card-body">
                          <h5 className="card-title">View Payments</h5>
                          <p className="card-text">Search through all your Payments.</p>
                          <a href="/paymentlist" className="btn btn-primary">Go to Payments</a>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                      <div className="card-body">
                          <h5 className="card-title">Add Payments</h5>
                          <p className="card-text">Add new Payments to your inventory.</p>
                          <a href="/payments/add" className="btn btn-primary">Add Payments</a>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                      <div className="card-body">
                          <h5 className="card-title">Update Payments</h5>
                          <p className="card-text">Update existing Payments details.</p>
                          <a href="/rooms/edit" className="btn btn-primary">Update Payments</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <Last></Last>
      </>
  );
}
export default Payment;