import Header from '../Header/Header.js';
import Last from '../Last.js';
function Home(){
  return (
    <>
    <Header></Header>
      <div className="container mt-5">
          <div className="jumbotron text-center">
              <h1 className="display-4">Welcome to the Customer Management App</h1>
              <p className="lead">Manage your Customers efficiently and effectively.</p>
              <hr className="my-4" />
              <p>Use the navigation bar to access different sections of the app.</p>
          </div>
          <div className="row">
              <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                      <div className="card-body">
                          <h5 className="card-title">View Customers</h5>
                          <p className="card-text">Browse and search through all your Customers.</p>
                          <a href="/customerlist" className="btn btn-primary">Go to Customers</a>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                      <div className="card-body">
                          <h5 className="card-title">Add Customers</h5>
                          <p className="card-text">Add new Customers to your inventory.</p>
                          <a href="/customer/add" className="btn btn-primary">Add Customers</a>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                      <div className="card-body">
                          <h5 className="card-title">Update Customers</h5>
                          <p className="card-text">Update existing Customers details.</p>
                          <a href="/Customers/edit" className="btn btn-primary">Update Customers</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <Last></Last>
      </>
  );
}
export default Home;