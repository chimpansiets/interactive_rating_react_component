import React from "react";
import './Label.css';

interface Props {
    type: "title" | "body";
}

export class Label extends React.Component<Props> {
    render() {
        const content = this.props.children;
        switch (this.props.type) {
            case "title":
                return <h1 className="label label__title">{content}</h1>;

            case "body":
                return <p className="label label__body">{content}</p>;
        }
    }
}
