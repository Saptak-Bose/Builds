import { Avatar, Button, IconButton } from "@mui/material";
import styled from "styled-components";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import * as EmailValidator from "email-validator";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import Chat from "./Chat";

function Sidebar() {
  const [user] = useAuthState(auth);
  const userChatRef = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(userChatRef);

  const createChat = () => {
    const input = prompt(
      "Please enter an email address for the user you wish to chat with"
    );

    if (!input) return null;

    if (
      EmailValidator.validate(input) &&
      !chatAlreadyExists(input) &&
      input !== user.email
    ) {
      db.collection("chats").add({
        users: [user.email, input],
      });
    }
  };

  const chatAlreadyExists = (recipientEmail) =>
    !!chatsSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recipientEmail)?.length > 0
    );

  return (
    <Container>
      <Header>
        <UserAvatar src={user.photoURL} onClick={() => auth.signOut()} />

        <IconsContainer>
          <IconButton>
            <AutorenewIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>

      <SearchContainer>
        <Search>
          <SearchIcon />
          <SearchInput placeholder="Search in chats" />
        </Search>
      </SearchContainer>

      <SidebarButton onClick={createChat}>New Chat</SidebarButton>

      {chatsSnapshot?.docs.map((chat) => (
        <Chat key={chat.id} id={chat.id} users={chat.data().users} />
      ))}
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  border-right: 2px solid #e9edef;
  height: 100vh;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #f0f2f5;
  margin: 10px 20px;
  color: #54656f;

  > .MuiSvgIcon-root {
    color: #54656f;
  }
`;

const SidebarButton = styled(Button)`
  width: 100%;

  &&& {
    color: black;
    border-top: 2px solid #e9edef;
    border-bottom: 2px solid #e9edef;
  }
`;

const SearchContainer = styled.div`
  background-color: white;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
  background-color: #f0f2f5;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: #f0f2f5;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 2px solid #e9edef;

  > .MuiSvgIcon-root {
    color: #54656f;
  }
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;
