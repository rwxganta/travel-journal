import pointer from '../assets/images/map-pointer.svg';
import './Card.css';

export default function Card() {
    return (
        <article className='card'>
            <img src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg1NzY3Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="" />
            <div className='card--info'>
                <span className='location'>
                    <img src={pointer} alt="" />
                    <p className='location--country'>Japan</p>
                    <a href="#">View on Google Maps</a>
                </span>
                <h2 className='card--title'>Mount Fuji</h2>
                <date className='card--date'>12 Jan, 2021 - 24 Jan, 2021</date>
                <p className='card--body'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </article>
    )
}