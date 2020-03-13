import React from "react";
import "./Profile.scss";
import { UserConsumer } from '../../context';
import { Button } from "reactstrap";
import { Link} from "react-router-dom"


function Profile(props) {
    return (
        <UserConsumer>
        {({ data, logout }) => (
        <div className="profileBox">
            {(data.loggedIn)? (
                <div>
                    <h1> Ahh yes, welcome back {data.user.firstname}! </h1>
                    <Button onClick={logout}>Logout</Button>
                </div>
            ): (
                <div>
                    <h1> Sorry, you have to log in to view this page! </h1>
                    <Link to="/login"><Button> Care to Login? </Button></Link>
                    
                </div>
            )}
        </div>
      )}
      </UserConsumer>
    )
    
}

export default Profile;