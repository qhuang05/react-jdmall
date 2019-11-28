import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const SvgIcon = props => {
    const { iconClass, fill, size } = props;
    return (
        <>
            <i aria-hidden="true">
                <svg className="svg-class" style={{'fontSize': size}}>
                    <use xlinkHref={"#icon-" + iconClass} fill={fill} />
                </svg>
            </i>
        </>
    );
}

SvgIcon.propTypes = {
    // svg名字
    iconClass: PropTypes.string.isRequired,
    // 填充颜色
    fill: PropTypes.string
};

SvgIcon.defaultProps = {
    fill: "currentColor"
};

export default SvgIcon;