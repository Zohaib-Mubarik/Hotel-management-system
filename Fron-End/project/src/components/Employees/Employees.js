import Header from '../Header/Header.js';
import Last from '../Last.js';
function Home(){
  return (
    <>
    <Header></Header>
      <div className="container mt-5">
          <div className="jumbotron text-center">
              <h1 className="display-4">Welcome to the Employee Management App</h1>
              <p className="lead">Manage your Employees efficiently and effectively.</p>
              <hr className="my-4" />
              <p>Use the navigation bar to access different sections of the app.</p>
          </div>
          <div className="row">
              <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                      <div className="card-body">
                          <h5 className="card-title">View Employees</h5>
                          <p className="card-text">Browse and search through all your Employees.</p>
                          <a href="/employeelist" className="btn btn-primary">Go to Employees</a>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                      <div className="card-body">
                          <h5 className="card-title">Add Employees</h5>
                          <p className="card-text">Add new Employees to your inventory.</p>
                          <a href="/Employee/add" className="btn btn-primary">Add Employees</a>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                      <div className="card-body">
                          <h5 className="card-title">Update Employees</h5>
                          <p className="card-text">Update existing Employees details.</p>
                          <a href="/Employees/edit" className="btn btn-primary">Update Employees</a>
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