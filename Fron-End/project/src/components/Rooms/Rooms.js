import Header from '../Header/Header.js';
import Last from '../Last.js';
function Home(){
  return (
    
    <>
    
    <Header></Header>
      <div className="container mt-5">
          <div className="jumbotron text-center">
              <h1 className="display-4">Welcome to the Room Management App</h1>
              <p className="lead">Manage your Rooms efficiently and effectively.</p>
              <hr className="my-4" />
              <p>Use the navigation bar to access different sections of the app.</p>
          </div>
          <div className="row">
              <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                      <div className="card-body">
                          <h5 className="card-title">View Rooms</h5>
                          <p className="card-text">Browse and search through all your Rooms.</p>
                          <a href="/roomslist" className="btn btn-primary">Go to Rooms</a>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                      <div className="card-body">
                          <h5 className="card-title">Add Rooms</h5>
                          <p className="card-text">Add new Rooms to your inventory.</p>
                          <a href="/rooms/add" className="btn btn-primary">Add Rooms</a>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                      <div className="card-body">
                          <h5 className="card-title">Update Rooms</h5>
                          <p className="card-text">Update existing Rooms details.</p>
                          <a href="/rooms/edit" className="btn btn-primary">Update Rooms</a>
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