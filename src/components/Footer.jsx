import React from 'react'
import { Link } from 'react-router-dom';

const title = "About Ephraim Ecommerce";
const desc = "Ephraim Ecommerce portal is the leading market place in the entire central region and the entire east africa at large.Feel free to order anything from us";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
    {
        iconName: 'icofont-google-map',
        text: 'Nairobi,Kenya',
    },
    {
        iconName: 'icofont-phone',
        text: '+254759297027',
    },
    {
        iconName: 'icofont-envelope',
        text: 'ephraimgethi@gmail.com',
    },
]

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]

const ItemList = [
    {
        text: 'All Products',
        link: '/shop',
    },
    {
        text: 'Shop',
        link: '/shop',
    },
    {
        text: 'Blog',
        link: '/blog',
    },
    {
        text: 'About',
        link: '/about',
    },
    {
        text: 'Policy',
        link: '#',
    },
    {
        text: 'FAQs',
        link: '/about',
    }
]

const quickList = [
    {
        text: 'Summer Sessions',
        link: '#',
    },
    {
        text: 'Events',
        link: '#',
    },
    {
        text: 'Gallery',
        link: '#',
    },
    {
        text: 'Forums',
        link: '#',
    },
    {
        text: 'Privacy Policy',
        link: '#',
    },
    {
        text: 'Terms of Use',
        link: '#',
    },
]

const tweetList = [
    {
        iconName: 'icofont-twitter',
        desc: <p>Ephraim and Ephraim <a href="#">@Eph Group Greetings!  #HTML_Template</a> Grab your item, 50% Big Sale Offer !!</p>,
    },
    {
        iconName: 'icofont-twitter',
        desc: <p>Ephraim and Ephraim <a href="#">@Eph Group Hey! #HTML_Template</a> Grab your item, 50% Big Sale Offer !!</p>,
    },
]

const footerbottomList = [
    {
        text: 'Nairobi',
        link: '#',
    },
    {
        text: 'Nyeri',
        link: '#',
    },
    {
        text: 'Karatina',
        link: '#',
    },
   
]

const Footer = () => {
    return (
        <footer className='style-2'>
            <div className="footer-top dark-view padding-tb">
                <div className="container">
                    <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2
                    row-cols-xl-4">
                        <div className="col">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{title}</h4>
                                        </div>
                                        <div className="content">
                                            <p>{desc}</p>
                                            <ul className='lab-ul office-address'>
                                                {
                                                    addressList.map((add, i) => (
                                                        <li key={i}>
                                                            <i className={add.iconName}>{add.text}</i>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            <ul className='lab-ul social-icons'>
                                                {
                                                    socialList.map((social, i) => (
                                                        <li key={i}>
                                                            <a href="#" className={social.className}><i className={social.iconName}>{social.text}</i></a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{ItemTitle}</h4>
                                        </div>
                                        <div className="content">
                                            <ul className='lab-ul office-address'>
                                                {
                                                    ItemList.map((item, i) => (
                                                        <li key={i}>
                                                            <a href="#">{item.text}</a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{quickTitle}</h4>
                                        </div>
                                        <div className="content">
                                            <ul className='lab-ul office-address'>
                                                {
                                                    quickList.map((quick, i) => (
                                                        <li key={i}>
                                                            <a href="#">{quick.text}</a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{tweetTitle}</h4>
                                        </div>
                                        <div className="content">
                                            <ul className='lab-ul office-address'>
                                                {
                                                    tweetList.map((tweets, i) => (
                                                        <li key={i}>
                                                            <i className={tweets.iconName}></i>
                                                            {tweets.desc}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="section-wrapper">
                        <p>&copy;2024 <Link to={'/'}>Eph Group</Link> Designed By <a href="/" target='_blank'>ephraimgethi@gmail.com</a></p>
                        <div className='footer-bottom-list'>
                                {
                                    footerbottomList.map((footer,i)=>(
                                        <a href="#" key={i}>{footer.text}</a>
                                    ))
                                }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer