import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
    line:PropTypes.any,
    padding:PropTypes.string,
  };

  static defaultProps = {
    line:1,
    padding:'0'
  };
  /*===properties end===*/

  render(){
    const {line,padding,className,children,...props} = this.props;
    return (
      <div {...props} style={{padding}} className={classNames('react-text-ellipsis',className)}>
        <div className="line-clamp bd" style={{WebkitLineClamp:line}}>{children}</div>
      </div>
    );
  }
}
