import { useEffect, useState } from 'react';
import { jumbotron } from 'bootstrap-css'
import { timeSince } from '../utils/DataFormat'
import { NavLink } from 'react-router-dom'
function News() {

    const [news, setNews] = useState([])
    const [perPage, setPerPage] = useState(10)
    const [loading, setLoading] = useState(false)

    // Get news from vnExpress
    useEffect(() => {
        setLoading(true)
        const getNews = async () => {
            await fetch('https://gw.vnexpress.net/ar/get_rule_2?category_id=1001005&limit=120&page=1&data_select=article_id,article_type,privacy,title,lead,share_url,thumbnail_url,new_privacy,publish_time,original_cate,off_thumb,iscomment&exclude_id=4332910')
                .then(res => res.json())
                .then(data => {
                    const keyId = Object.keys(data.data)[0]
                    setNews(data.data[keyId].data)
                    setLoading(false)
                })
        }
        getNews()
    }, [])

    return (
        <div className='container'>
            <div className="news-sidebar" style={{ marginTop: '65px', }}>
                <ul className='list-news'>
                    {news.slice(0, perPage).map((item, index) => (
                        <a style={{ color: 'black' }} key={index} href={item?.share_url}>
                            <div className="card mb-3" style={{ border: '0' }} >
                                <div className="row no-gutters">
                                    <div className="col-md-3 news-img">
                                        <img src={item?.thumbnail_url} alt="news" />
                                    </div>
                                    <div className="col-md-9 news-content it">
                                        <div className="card-body">
                                            <h5 className="card-title">{item?.title}</h5>
                                            <h6 className="card-text">{item?.lead}</h6>
                                        </div>
                                        <div className="card-fotterr">
                                            <p className='time-news ml-3'> {timeSince(item?.publish_time)}  trước</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </ul>
                <button
                    style={{ width: '100%', backgroundColor: '#E5E7EB', border: 0, outline: '0', borderRadius: '12px', fontSize: '17px', padding: '16px 20px' }}
                    onClick={() => setPerPage(perPage + 10)}
                >
                    Xem thêm
                </button>
            </div>
        </div>
    )
}

export default News