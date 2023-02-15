import React from "react";
import { Popup, Grid, Image } from "semantic-ui-react";
import "./style.css";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useSignOut } from "../../hooks/useSignOut";

function User() {
  const currentUser = useCurrentUser();
  const [handleSignOut] = useSignOut();
  return (
    <div className="user_wrapper">
      <Popup
        inverted
        wide
        flowing
        content={
          <Grid centered divided columns={1}>
            <Grid.Column textAlign="left">
              <div className="signout" onClick={handleSignOut}>
                sign out
              </div>
            </Grid.Column>
          </Grid>
        }
        on="click"
        position="bottom right"
        popper={{ id: "popper-container", style: { zIndex: 2000 } }}
        trigger={
          <div className="username_container">
            <div className="username">
              <div key={currentUser?.uid} className="username_text">
                {!currentUser?.displayName && currentUser?.email}
              </div>

              <div className="user_photo">
                <Image
                  src={
                    !currentUser?.photoURL &&
                    `https://react.semantic-ui.com/images/wireframe/square-image.png`
                  }
                  size="medium"
                  circular
                />
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default User;
