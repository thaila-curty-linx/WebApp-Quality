import React from "react";
import Button from "../../Components/Button";
import { useAuth } from "../../Context/Auth";
import { MailOutline } from "@material-ui/icons";

import {
  Container,
  PageNameContainer,
  Info,
  InfoContainer,
  TextH1,
} from "./styles";

function Profile() {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <PageNameContainer />
      <InfoContainer>
        <TextH1>{user.name}</TextH1>
        <Info>
          <MailOutline />
          {user.email}
        </Info>
        <Info>
          <div style={{ width: "100%" }}>
            <Button
              onClick={() => {
                signOut();
              }}
            >
              Sair
            </Button>
          </div>
        </Info>
      </InfoContainer>
    </Container>
  );
}

export default Profile;
