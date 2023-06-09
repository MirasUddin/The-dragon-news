import moment from 'moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaRegBookmark, FaRegEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    // console.log(news);
    const { _id, title, details, image_url, author, total_view, rating } = news;
    console.log(author);
    return (
        <Card className=" mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} rounded />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small> {moment(author?.published_date).format('YYYY-MM-D')}</small></p>
                </div>
                <div>
                    <FaRegBookmark /> <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}..... <Link to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        readonly
                        placeholderRating={rating?.number}
                        emptySymbol={<FaRegStar className='text-warning' />}
                        placeholderSymbol={<FaStar  className='text-warning'/>}
                        fullSymbol={<FaStar />}
                    />
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaRegEye /> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;