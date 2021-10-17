const Home = (props: {name: string}) => {

    return (
        <div>
            hi {props.name ? `Hi ${props.name}` : 'You are not logged in'}
        </div>
    )
}

export default Home
