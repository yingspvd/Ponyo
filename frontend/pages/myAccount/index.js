import React, { useState, useEffect } from "react";
import { Avatar, Modal, Form, Input } from "antd";
import Button from "../components/Button";
import RestList from "./components/RestList";
import { PROFILE, FAVOURITE, INTEREST } from "./constant";
import EditProfile from "./components/EditProfile";
import {
  ProfileContainer,
  ProfilePicture,
  ListContainer,
  TabContainer,
  Menu,
  List,
  Popup,
} from "./styled";

const myAccount = () => {
  const [selectedTab, setSelectedTab] = useState(FAVOURITE);
  const [popupVisible, setPopupVisible] = useState(false);
  const [profile, setProfile] = useState(PROFILE);

  useEffect(() => {
    // state change from child
    console.log("EDIT_PROFILE", profile);
  }, [profile]);

  return (
    <ProfileContainer>
      <ProfilePicture>
        <Avatar size={100} src={profile.profilePic} />
        <h3>{profile.name}</h3>
      </ProfilePicture>
      <Button variant="transparent" onClick={() => setPopupVisible(true)}>
        Edit Profile
      </Button>
      <Popup
        title="Edit Profile"
        visible={popupVisible}
        onCancel={() => setPopupVisible(false)}
        footer={null}
        destroyOnClose={true}
      >
        <EditProfile
          info={profile}
          setNewProfile={setProfile}
          popupVisible={setPopupVisible}
        />
      </Popup>

      <ListContainer>
        <TabContainer>
          <Menu
            onClick={() => setSelectedTab(FAVOURITE)}
            isSelected={selectedTab == FAVOURITE}
          >
            My Favourite
          </Menu>
          <Menu
            onClick={() => setSelectedTab(INTEREST)}
            isSelected={selectedTab == INTEREST}
          >
            My Interests
          </Menu>
        </TabContainer>
        <List>
          {selectedTab == FAVOURITE ? (
            <RestList type={FAVOURITE} />
          ) : (
            <RestList type={INTEREST} />
          )}
        </List>
      </ListContainer>
    </ProfileContainer>
  );
};

export default myAccount;
