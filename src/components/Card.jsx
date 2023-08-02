import pointer from '../assets/images/map-pointer.svg';
import './Card.css';

export default function Card({data}) {
    const { title, location, photo, dateBegin, dateEnd, description, maps } = data;
    return (
        <article className='card'>
            <img src={photo} alt="" />
            <div className='card--info'>
                <span className='location'>
                    <img src={pointer} alt="" />
                    <p className='location--country'>{location}</p>
                    <a href={maps} target='_blank' rel='noopener noreferrer'>View on Google Maps</a>
                </span>
                <h2 className='card--title'>{title}</h2>
                <p className='card--date'>{dateBegin} - {dateEnd}</p>
                <p className='card--body'>{description}</p>
            </div>
        </article>
    )
}