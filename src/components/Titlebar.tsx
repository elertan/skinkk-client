import * as React from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: 40,
    justifyContent: "center",
    width: "100%",
  } as React.CSSProperties,
};

class Titlebar extends React.Component<{}, {}> {
  public render() {
    return (
      <div style={styles.container}>
        Test
      </div>
    );
  }
}

export default Titlebar;
