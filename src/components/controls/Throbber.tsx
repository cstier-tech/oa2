import React from 'react'

const displayStyles: Record<'show' | 'hide', React.CSSProperties> = {
    show: { visibility: 'visible', display: 'block', opacity: 1 },
    hide: { visibility: 'hidden', display: 'none', opacity: 0 },
}

type ThrobberProps = {
    visibility: 'show' | 'hide'
}

export default function Throbber({ visibility }: ThrobberProps) {
    return (
        <div className="throbber large global" style={displayStyles[visibility]}>
            <div className="throbber-flex"><div>
                <div className="throbber-content">Please wait...</div>
                <div className="spinner active"><svg style={{ width: '100px', height: '100px' }} viewBox="0 0 64 64"><circle className="circle" cx="32" cy="32" r="29" fill="none" strokeWidth="3"></circle></svg></div></div></div>
        </div>
    )
}
