import * as React from 'react';

import { ipcRenderer } from 'electron';
import { IPCEvents } from '../../ipc';
import { ModalCreatorFunc } from "../../store/actionCreators/modal";
import { Modal } from "../ModalManager";
import Button from '../UI/Button';

const styles = {
  title: {
    fontFamily: 'LeagueFont',
    fontSize: 21,
    textAlign: 'center',
  } as React.CSSProperties,
  footerContainer: {
    display: 'flex',
    justifyContent: 'center',
  } as React.CSSProperties,
  buttonText: {
    fontSize: 14,
    fontFamily: 'LeagueFont',
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
  } as React.CSSProperties,
};

const welcomeModalCreator: ModalCreatorFunc = (close) => ({
  title: <p style={styles.title}>Welcome to SkinKK</p>,
  body:
  <div>
    <p style={{marginBottom: 10}}>
      Because this is your first launch, we will ask you to accept the firewall prompt that windows might give you.
    </p>
    <p style={{marginBottom: 10}}>
      If you decline this prompt,
      SkinKK will be unable to share information locally with League of Legends rendering this app useless.
    </p>
    <p style={{marginBottom: 10}}>Enjoy using SkinKK!</p>
  </div>,
  footer:
  <div style={styles.footerContainer}>
    <Button onClick={() => {
      ipcRenderer.send(IPCEvents.App_startLocalServer);
      close();
    }}>
      <p style={styles.buttonText}>I UNDERSTAND</p>
    </Button>
  </div>,
} as Modal);

export default welcomeModalCreator;
