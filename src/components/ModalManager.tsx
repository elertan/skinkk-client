import * as React from 'react';
import * as ModalComponent from 'react-modal';
import colors from '../colors';

export class Modal {
  public parentSelector?: () => HTMLElement;
  public title?: JSX.Element | string;
  public body?: JSX.Element | string;
  public footer?: JSX.Element | string;
}

interface IProps {
  modals: Modal[];
}

const styles = {
  container: {
  } as React.CSSProperties,
  overlay: {
    backgroundColor: 'rgba(20,20,20,0.75)',
  } as React.CSSProperties,
  content: {
    backgroundColor: 'rgb(1, 10, 20)',
    borderRadius: 0,
    width: '70vw',
    height: '30vh',
    margin: 'auto auto',
    border: `1px solid ${colors.leagueSuperLight}`,
    padding: 0,
    color: colors.whiteText,
  } as React.CSSProperties,
  titleContainer: {
    padding: 15,
    fontWeight: 500,
  } as React.CSSProperties,
  separator: {
    height: 1,
    width: 'calc(100% - 40px)',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#222',
  } as React.CSSProperties,
  bodyContainer: {
    padding: 25,
    paddingTop: 15,
    paddingBottom: 50,
    fontSize: 13,
  } as React.CSSProperties,
  footerContainer: {

  } as React.CSSProperties,
};

// tslint:disable-next-line:max-classes-per-file
class ModalManager extends React.Component<IProps, {}> {
  public render() {
    return (
      <div style={styles.container}>
        {this.props.modals.map((m: Modal, i: number) =>
          <ModalComponent
            style={{
              overlay: styles.overlay,
              content: styles.content,
            }}
            parentSelector={m.parentSelector || (() => document.body)}
            isOpen
            key={i}
            role="dialog"
          >
            {m.title &&
            <>
              <div style={styles.titleContainer}>{m.title}</div>
              <div style={styles.separator} />
            </>
            }
            {m.body &&
            <>
              <div style={styles.bodyContainer}>{m.body}</div>
            </>
            }
            {m.footer &&
            <>
              <div style={styles.separator} />
              <div style={styles.footerContainer}>{m.footer}</div>
            </>
            }
          </ModalComponent>,
        )}
      </div>
    );
  }
}

export default ModalManager;
