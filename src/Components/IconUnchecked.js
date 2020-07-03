import React from 'react'

export default class IconUnchecked extends React.Component {

  render() {
    return (
      <svg style={Styles.svg} viewBox="0 0 24 24">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g stroke="#D8D8D8" strokeWidth="3">
            <rect id="Rectangle" x="0" y="0"  width="16" height="16" rx="2" />
          </g>
        </g>
      </svg>
    )
  }
}

const Styles = {
  svg: {
    width: '18px',
    height: '18px'
  }
}
