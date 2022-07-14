import React from 'react';

const ParentComponent = (props) => {
    return (
        <div>
            <ChildComponent firstName={"Madi"} lastName={"Greeley"} />
        </div>
    );
}

const ChildComponent = (props) => {
    return (
        <p>
            Hello! My name is { props.firstName } { props.lastName }
        </p>
    )
}