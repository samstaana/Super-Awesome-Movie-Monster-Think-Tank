export default function DisplayIdeas(props) {
    return (
        <div>
            <ul>
                { props.ideas.map((idea, i) => <li key = { i } > { idea } </li> )}
                {/* key can go on any element */}
            </ul>
        </div>
    )
}