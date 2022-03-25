import React from 'react';
import "./styles.css";

interface Props {
    layout: "centered" | "spread";
}
export class RowAtom extends React.Component<Props>
{
    render() {
        const className = `row row__${this.props.layout}`;
        
        return <div className={className}>{
            this.props.children
        }</div>
    }
}