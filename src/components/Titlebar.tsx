import { ipcRenderer } from 'electron';
import * as React from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: 40,
    justifyContent: "center",
    width: "100%",
  } as React.CSSProperties,
  logoContainer: {
    paddingLeft: 15,
    paddingRight: 25,
  } as React.CSSProperties,
  logo: {
    marginTop: 15,
    fontSize: 18,
    fontFamily: 'LeagueFont',
  } as React.CSSProperties,
  titlebarActionsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 15,
  } as React.CSSProperties,
};

class Titlebar extends React.Component<{}, {}> {
  public render() {
    return (
      <div style={styles.container}>
        {/* Logo */}
        <div className="drag-region" style={styles.logoContainer}>
          <p style={styles.logo}>SkinKK</p>
        </div>
        {/* NavBar */}
        <div>
          NavBar
        </div>
        {/* Empty Drag Space */}
        <div className="drag-region" style={{flex: 1}} />
        {/* Titlebar Actions */}
        <div style={styles.titlebarActionsContainer}>
            <i
              className="fas fa-minus minimize-button"
              style={{ marginRight: 15, position: 'relative', top: 3 }}
              onClick={() => ipcRenderer.send('Titlebar_minimize')}
            />
            <i
              className="fas fa-window-close close-button"
              onClick={() => ipcRenderer.send('Titlebar_close')}
            />
        </div>
      </div>
    );
  }
}

export default Titlebar;
