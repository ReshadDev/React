import './Card.css'

function Card(props){

    const classes = 'card ' + props.className

    // Buradaki children propsu, Card komponentini isleden zaman komponentin acilidigi yerden baslayir ve baglandigi yere qeder olan butun datalari ozunde saxlayir ve bize istifade etmeye serait yaradir

return <div className={classes}>{props.children}</div>
}

export default Card