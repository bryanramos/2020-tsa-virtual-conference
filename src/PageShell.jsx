import * as React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const PageShell = (Page) => {
    return (props) =>
        <div className="page">
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName={
                    props.match.path === '/' ? 'SlideIn' : 'SlideOut' ||
                    props.match.path === '/schedule' ? 'SlideIn' : 'SlideOut' ||
                    props.match.path === '/officer-elections' ? 'SlideIn' : 'SlideOut' ||
                    props.match.path === '/disclaimer' ? 'SlideIn' : 'SlideOut' 
            }>
                <Page {...props} />
            </ReactCSSTransitionGroup>
        </div>
    ;
}