import React from 'react';
import styles from './Collapsible.module.scss';

interface CollapsibleProps {
    header: string;
    startOpen: boolean;
    children: React.ReactNode;
}

class Collapsible extends React.Component<CollapsibleProps, { open: boolean }> {
    public static defaultProps = {
        header: "not set yet",
        startOpen: false,
    }

    constructor(props: CollapsibleProps) {
        super(props);

        this.state = { open: props.startOpen };

        this.toggle = this.toggle.bind(this);
        this.render = this.render.bind(this);
    }

    toggle() {
        this.setState({
            open: !this.state.open
        });
    }

    render(): React.ReactNode {
        return (
            <article className={ styles.panel }>
                <div className={ styles.panel_header} onClick={ this.toggle }>
                    { this.props.header }
                </div>
                <div className={ styles.panel_container } >
                    <div className={ styles.panel_content +' '+ (this.state.open ? styles.open : '' )} >
                        { this.props.children }
                    </div>
                </div>
            </article>
        )
    }
}

export default Collapsible;