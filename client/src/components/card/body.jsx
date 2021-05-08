import React from 'react';

const Body = (props) => {
    const { styles } = props;

    return (
        <div className="card-item card-body" styles={styles}>
            {props.children}
        </div>
    );
};

export default Body;
