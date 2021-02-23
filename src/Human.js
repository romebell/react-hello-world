import Player from './Player';

function Human(props) {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <p>Location: {props.location}</p>
            <Player position="Small Forward" />
        </div>
    )
}

export default Human;