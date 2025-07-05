import Header from '../Header/Header.js';
import Last from '../Last.js';
function Home(){
  return (
    <>
    <Header></Header>
      <div className="container mt-5">
          <div className="jumbotron text-center">
              <h1 className="display-4">Welcome to the Hotel Management App</h1>
              <p className="lead">Manage your Hotels efficiently and effectively.</p>
              <hr className="my-4" />
              <p>Use the navigation bar to access different sections of the app.</p>
          </div>
          <div className="row">
              <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                      <div className="card-body">
                          <h5 className="card-title">View Hotels</h5>
                          <p className="card-text">Browse and search through all your Hotels.</p>
                          <a href="/Hotellist" className="btn btn-primary">Go to Hotels</a>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                      <div className="card-body">
                          <h5 className="card-title">Add Hotels</h5>
                          <p className="card-text">Add new Hotels to your inventory.</p>
                          <a href="/hotel/add" className="btn btn-primary">Add Hotels</a>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                      <div className="card-body">
                          <h5 className="card-title">Update Hotels</h5>
                          <p className="card-text">Update existing Hotels details.</p>
                          <a href="/Hotels/edit" className="btn btn-primary">Update Hotels</a>
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