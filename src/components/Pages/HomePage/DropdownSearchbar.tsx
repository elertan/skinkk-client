import * as React from 'react';
import colors from '../../../colors';

const styles = {
  container: {
    border: `1px solid ${colors.leagueSuperLight}`,
    borderRadius: 3,
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    background: '#222',
    maxWidth: 500,
    width: '100%',
    display: 'flex',
  } as React.CSSProperties,
  searchIcon: {
    marginTop: 2,
  } as React.CSSProperties,
  input: {
    background: 'none',
    border: 'none',
    outline: 'none',
    fontSize: 15,
    color: colors.leagueSuperLight,
    fontWeight: 500,
    width: '100%',
    flex: 1,
    marginLeft: 10,
  } as React.CSSProperties,
};

class DropdownSearchbar extends React.Component<{}, {}> {
  public render() {
    return (
      <div style={styles.container}>
        <i
          style={styles.searchIcon}
          className="fas fa-search"
        />
        <input
          style={styles.input}
          placeholder="Type to search for a champion or skin..."
        />
      </div>
    );
  }
}

export default DropdownSearchbar;
