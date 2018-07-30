import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyHeader: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(currentWindow = window, currentDocument = document) {
    const element = currentDocument.querySelector('.page-header-mast');
    let pageY = window.scrollY;
    pageY = currentWindow.scrollY;
    if (pageY !== 0 && element.getBoundingClientRect().bottom > 100) {
      this.setState({ stickyHeader: true });
    } else if (pageY === 0) {
      this.setState({ stickyHeader: false });
    }
  }
  render() {
    const headerContainerClass = this.state.stickyHeader
      ? 'sticky page-header-container'
      : 'page-header-container';

    return (
      <div className={headerContainerClass}>
        <div className="page-header-mast">
          <div className="container">
            <div className="row">
              <div className="col-xs-7">
                <h1 className="page-title text-left">{this.props.pageTitle}</h1>
              </div>
              <div className="col-xs-5">{this.props.button}</div>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

const buttonDefault = (
  <button type="button" className="primary-btn pull-right">
    Customize
  </button>
);
PageHeader.propTypes = {
  /** Button to be rendered inside the component, pass null to hide */
  button: PropTypes.node,
  /** Child to be rendered underneath the component */
  children: PropTypes.node,
  /** Text to be rendered inside the component */
  pageTitle: PropTypes.string,
};
PageHeader.defaultProps = {
  pageTitle: 'CaseName',
  button: buttonDefault,
};

export default PageHeader;
