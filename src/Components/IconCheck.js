import React from 'react'

export default class IconCheck extends React.Component {

  render() {
    return (
      <svg style={Styles.svg} viewBox="0 0 22 16" fill="#37A9E0" >
      <g stroke="none" strokeWidth="1" fill="#37A9E0" fillRule="evenodd">
        <g stroke="#37A9E0" strokeWidth="1">
          <rect id="Rectangle" x="0" y="0" width="16" height="16" rx="2" />
        </g>
      </g>

        <g  stroke="none" strokeWidth="1" fill="#37FDFC" fillRule="evenodd">
          <g fill="#ffffff">
            <polygon transform="scale(0.65)" points="20.6465116 4 8.7255814 15.5061728 3.35348837 10.3209877 1 12.5925926 7.54883721 18.9135802 8.7255814 20 9.90232558 18.9135802 23 6.27160494" />
          </g>
        </g>

      </svg>

    )
  }
}

const Styles = {
  svg: {
    width: '18px',
    height: '18px',
    // padding: '4px',
  //  backgroundColor: '#37A9DE'
  }
}
