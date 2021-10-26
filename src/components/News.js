import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "Ara Wagoner",
            "title": "HP Chromebook X2 11 review: Plays hard, but can't work hard",
            "description": "HP did a great job here with everything but the price and marketing.\n\n\n\nHP turned a number of heads when it first announced the HP Chromebook X2 11. This was our first premium Chrome tablet since the Google Pixel Slate back in 2018, and it looked much more po…",
            "url": "https://www.androidcentral.com/hp-chromebook-x2-11-review",
            "urlToImage": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/10/hp-chromebook-x2-11-laptop-mode-twitter-green.jpg",
            "publishedAt": "2021-10-16T12:00:02Z",
            "content": "Source: Ara Wagoner / Android Central\r\nHP turned a number of heads when it first announced the HP Chromebook X2 11. This was our first premium Chrome tablet since the Google Pixel Slate back in 2018,… [+12714 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Ian Sherr",
            "title": "How to watch Apple's October event live without leaving your couch - CNET",
            "description": "We're expecting to see new Mac computers powered by Apple silicon, as well as potentially some new AirPods.",
            "url": "https://www.cnet.com/tech/computing/how-to-watch-apple-october-event-live-without-leaving-your-couch/",
            "urlToImage": "https://www.cnet.com/a/img/TOJr5BdHkSQM-QrQcfLdnMsoClc=/0x45:1424x845/1200x630/2021/10/12/8bb72e3c-5a14-4411-a560-1b422bc164cb/cl-d-en-hero.jpg",
            "publishedAt": "2021-10-16T10:00:02Z",
            "content": "Apple\r\nApple's Macs are about to get an upgrade. On Oct. 18, Apple is expected to announce its next generation of computers, powered by its rumored M1X Apple silicon chips. The new devices follow las… [+1893 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Karisa Langlo",
            "title": "Google Pixel 6 rumors, leaks and guesses before Tuesday's big event - CNET",
            "description": "The Pixel 6 is scheduled to launch on Oct. 19. Here's all the buzz we've heard about its release date, price, camera upgrade, Tensor chip and more.",
            "url": "https://www.cnet.com/tech/mobile/google-pixel-6-rumors-leaks-and-guesses-before-tuesday-big-event/",
            "urlToImage": "https://www.cnet.com/a/img/cFREOBSvvPgExiOFQlJyRKOxW6I=/1200x630/2021/10/07/61ef3d00-6456-449b-8f74-eedccea958e8/screen-shot-2021-10-07-at-11-06-20-am.png",
            "publishedAt": "2021-10-16T07:00:03Z",
            "content": "Google's Pixel 6 phones.\r\nGoogle\r\nGoogle's new phones, the Pixel 6 and Pixel 6 Pro, are set to launch on Oct. 19, and although we got a glimpse at the new Pixel right before the Pixel 5A launched, no… [+16434 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "aharoun@businessinsider.com (Azmi Haroun)",
            "title": "China removed one of the most popular Quran apps that had at least one million Chinese users, according to a report",
            "description": "Although China's ruling party recognizes Islam as a religion, its treatment of Muslim minorities in Xinjiang has been condemned by the US and others.",
            "url": "https://www.businessinsider.com/china-removed-popular-quran-apps-with-one-million-chinese-users-bbc-2021-10",
            "urlToImage": "https://i.insider.com/616a1f1538c1960018303a4b?width=1200&format=jpeg",
            "publishedAt": "2021-10-16T03:41:00Z",
            "content": "Quran Majeed, a Quran app used by one million in China and millions elsewhere, was taken off of the Apple App Store after a request from Chinese authorities, according to BBC.\r\nAccording to the repor… [+1512 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fast Company"
            },
            "author": "Glenn Fleishman",
            "title": "This new novel is a love letter to a whole era of Apple nerdery",
            "description": "Tamara Shopsin’s ‘LaserWriter II’ captures the feel of Tekserve, the best-loved Apple repair shop in the Tri-State region—and maybe the world.\nPerhaps it was inevitable, growing up in a family restaurant that had a menu legendary for its unbelievable length, …",
            "url": "https://www.fastcompany.com/90684195/tamara-shopsin-laserwriter-ii?partner=feedburner&utm_source=feedburner&utm_medium=feed&utm_campaign=feedburner+fastcompany&utm_content=feedburner",
            "urlToImage": "https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2021/10/p-1-tekserve.jpg",
            "publishedAt": "2021-10-16T07:00:23Z",
            "content": "Perhaps it was inevitable, growing up in a family restaurant that had a menu legendary for its unbelievable length, that Tamara Shopsin would find herself drawn to endless printed pages. Her new nove… [+9236 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Yúbal Fernández",
            "title": "Atajos de iOS 15: 27 atajos para simplificar acciones con estos automatismos para tu iPhone",
            "description": "Te traemos una pequeña colección con 27 atajos para iOS 15, unas automatizaciones que te van a ayudar a simplificar algunos tipos de acciones. Los atajos de iOS pueden ser muy útiles para hacer en una sola pulsación tareas que requieren realizar varias o usar…",
            "url": "https://www.xataka.com/basics/atajos-ios-15-27-atajos-para-simplificar-acciones-estos-automatismos-para-tu-iphone",
            "urlToImage": "https://i.blogs.es/937b55/atajos/840_560.jpg",
            "publishedAt": "2021-10-16T10:01:48Z",
            "content": "Te traemos una pequeña colección con 27 atajos para iOS 15, unas automatizaciones que te van a ayudar a simplificar algunos tipos de acciones. Los atajos de iOS pueden ser muy útiles para hacer en un… [+14436 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Atlantic"
            },
            "author": "Spencer Kornhaber",
            "title": "How the Velvet Underground Redefined Counterculture",
            "description": "Todd Haynes’s documentary about the classic band spotlights how sound can challenge—and change—society.",
            "url": "https://www.theatlantic.com/culture/archive/2021/10/velvet-underground-todd-haynes-documentary/620408/?utm_source=feed",
            "urlToImage": null,
            "publishedAt": "2021-10-16T12:00:00Z",
            "content": "Part of the backlash now facing Baby Boomers—seen in all those memes and essays blaming grandma for the state of capitalism—may simply stem from overexposure. The flower children’s children grew up i… [+7817 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Bradley Chambers",
            "title": "Apple @ Work: The top new features in macOS Monterey for enterprise users",
            "description": "Apple @ Work is brought to you by Kandji, a modern, cloud-based platform to manage and secure your Mac, iPhone, iPad, and Apple TV devices. Kandji saves IT teams hours of manual work with features like one-click compliance templates and 150+ pre-built automat…",
            "url": "https://9to5mac.com/2021/10/16/the-top-new-features-in-macos-monterey-for-enterprise-users/",
            "urlToImage": "https://i1.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/07/Monterey-iMac.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2021-10-16T12:15:00Z",
            "content": "Apple @ Work is brought to you by Kandji, a modern, cloud-based platform to manage and secure your Mac, iPhone, iPad, and Apple TV devices. Kandji saves IT teams hours of manual work with features li… [+4591 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "José Adorno",
            "title": "Roundup: AirPods 3 could launch on Monday’s event; here’s what we know so far",
            "description": "After a year of potential release dates, it seems that AirPods 3 could finally be announced this Monday during the “Unleashed” Apple event. Here’s what we know so far.\n more…\nThe post Roundup: AirPods 3 could launch on Monday’s event; here’s what we know so f…",
            "url": "https://9to5mac.com/2021/10/16/roundup-airpods-3-what-we-know/",
            "urlToImage": "https://i2.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/05/airpods-3-dummy-2.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2021-10-16T10:55:42Z",
            "content": "After a year of potential release dates, it seems that AirPods 3 could finally be announced this Monday during the “Unleashed” Apple event. Here’s what we know so far.\r\nDesign\r\nAs multiple leakers, r… [+3326 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "José Adorno",
            "title": "WhatsApp for iOS continues work on new message reaction feature",
            "description": "WhatsApp has been working on new reaction features for at least a few months. Now, there’s more pieces of evidence regarding the development of this function.\n more…\nThe post WhatsApp for iOS continues work on new message reaction feature appeared first on 9t…",
            "url": "https://9to5mac.com/2021/10/16/whatsapp-for-ios-continues-work-on-new-message-reaction-feature/",
            "urlToImage": "https://i1.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/10/whatsapp-reactions-9to5mac.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2021-10-16T12:08:16Z",
            "content": "WhatsApp has been working on new reaction features for at least a few months. Now, there’s more pieces of evidence regarding the development of this function.\r\nAs spotted by always-reliable WABetaInf… [+1644 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.jp"
            },
            "author": "的野裕子",
            "title": "新しいApple Watchにデータを移行させる方法",
            "description": "iPhoneとApple Watchが近くにある場合は、データは自動的にiPhoneにバックアップされ、保存されます。その後、iPhoneのデータをパソコンやiCloudにバックアップすると、Apple Watchのデータも自動的にそのバックアップに含まれます。",
            "url": "https://www.lifehacker.jp/2021/10/how-to-back-up-and-restore-the-data-on-your-apple-wa.html",
            "urlToImage": "https://assets.media-platform.com/lifehacker/dist/images/2021/10/11/211011_AppleWatch_01-w960.jpg",
            "publishedAt": "2021-10-16T07:00:00Z",
            "content": "AppleApple Watch\r\nApple Watch\r\nApple WatchApple \r\nApple Watch\r\niPhoneApple WatchiPhone\r\niPhoneiCloudApple Watch\r\nApple WatchiPhoneApple WatchiPhone\r\nApple WatchiPhone\r\nApple WatchDock\r\nApple WatchApp… [+483 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.jp"
            },
            "author": "春野ユリ",
            "title": "iPhoneとiPadは早急にアップデートしたほうがいい",
            "description": "Appleは10月11日月曜日に、対応するiPhoneとiPadにiOS15.0.2とiPadOS15.0.2をリリースしました。Appleはその後、この新しいアップデートがその名前から想像されるよりもはるかに重要だということを伝えています。",
            "url": "https://www.lifehacker.jp/2021/10/download-your-iphones-latest-security-update-asap.html",
            "urlToImage": "https://assets.media-platform.com/lifehacker/dist/images/2021/10/14/10e1a87a87d6d21619d7d5f240a1ef09-w960.jpg",
            "publishedAt": "2021-10-16T01:00:00Z",
            "content": "Apple1011iPhoneiPadiOS15.0.2iPadOS15.0.2\r\n0.2\r\nApple\r\n15.0.2iPhoneiPad\r\niOSiPadOS 15.0.1\r\nAppleiOSiPadOS\r\niPhoneiPad\r\nApple\r\n15.0.2iPhoneiPad\r\niOS 15iPadOS 15iPhoneiPad15.0.2\r\niPhone 6iPad ProiPad Ai… [+182 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Brian Bennett",
            "title": "Google Pixel 6 vs. Pixel 5: How we think the newer phone will stack up - CNET",
            "description": "Google's Pixel 6 will be unveiled next week. In the meantime, here's what we've heard about what's changing from last year.",
            "url": "https://www.cnet.com/tech/mobile/google-pixel-6-vs-pixel-5-how-we-think-the-newer-phone-will-stack-up/",
            "urlToImage": "https://www.cnet.com/a/img/dD1fRCQJf-Q-NNdpGA6nkk6k9ms=/1200x630/2021/08/02/4ed1c034-3f95-4536-b8aa-386430ca9809/pixel-6-group-image-teal-orange.jpg",
            "publishedAt": "2021-10-16T11:00:19Z",
            "content": "The Pixel 6 phones are coming. How will they measure up to the Pixel 5?\r\nGoogle\r\nWith the Pixel 6 and Pixel 6 Pro just about to arrive, getting a new Pixel 5 right now is bound to result in instant b… [+5447 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Ty Pendlebury",
            "title": "Sonos Beam Gen 2 review: Atmos, Alexa and the best music streaming get even better - CNET",
            "description": "Excellent features and sound quality make this compact soundbar worth the money.",
            "url": "https://www.cnet.com/tech/home-entertainment/sonos-beam-gen-2-review-atmos-alexa-and-the-best-music-streaming-get-even-better/",
            "urlToImage": "https://www.cnet.com/a/img/YINRlyeFbPxGGxjgI9N5TjF8Zxw=/1200x630/2021/10/11/5a55c563-eea5-461f-9d37-3c6833de64d5/sonos-beam-gen-2-1.jpg",
            "publishedAt": "2021-10-16T11:00:15Z",
            "content": "Ty Pendlebury/CNET\r\nWith the right movie or TV show, a soundbar with Dolby Atmos onboard can help transport you out of your living room and into another world -- from the nuclear wastelands of the Ou… [+8031 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Joshua Goldman",
            "title": "Best Nintendo Switch accessories for 2021 - CNET",
            "description": "From controllers to charging to protection, here are our recommendations to keep you playing at your best.",
            "url": "https://www.cnet.com/tech/gaming/best-nintendo-switch-accessories/",
            "urlToImage": "https://www.cnet.com/a/img/fCwDFclCtvxyN2uF4er3V6XTSJs=/1200x630/2019/09/19/c08ea3ba-d393-4e19-a230-9e9a8f0017c9/100-nintendo-switch-accessories-listicle-2019.jpg",
            "publishedAt": "2021-10-16T11:00:09Z",
            "content": "This list rounds up some of the best Nintendo Switch accessories to take your Switch game to the next level. The Switch is a great plug-and-play gaming console, but with the right Nintendo Switch acc… [+11477 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Miguel López",
            "title": "One more thing... privacidad en nuestros iPhone, ordenadores cuánticos y las ganas de ver cambios en el MacBook Pro",
            "description": "Estamos a dos días de una nueva keynote de Apple, pero si echamos un vistazo a lo que comentan los medios nos damos cuenta que aún se habla de las novedades del evento del mes pasado. Repasemos lo que han estado haciendo otros medios especializados en nuestro…",
            "url": "https://www.applesfera.com/general/one-more-thing-privacidad-nuestros-iphone-ordenadores-cuanticos-ganas-ver-cambios-macbook-pro",
            "urlToImage": "https://i.blogs.es/15d6bc/1366_2000/840_560.jpeg",
            "publishedAt": "2021-10-16T10:08:43Z",
            "content": "Estamos a dos días de una nueva keynote de Apple, pero si echamos un vistazo a lo que comentan los medios nos damos cuenta que aún se habla de las novedades del evento del mes pasado. Repasemos lo qu… [+1002 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "Romain Vitt",
            "title": "Test Bose QC45 : et je coupe le son",
            "description": "Cinq ans après l’excellent QC35 II, Bose lance le QC45. Que vaut le nouveau casque à réduction de bruit de l’américain ? Réponse dans notre test complet.",
            "url": "https://www.presse-citron.net/?p=460723",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2021/10/test-bose-qc-45-avis.jpg",
            "publishedAt": "2021-10-16T09:00:38Z",
            "content": "Selon les chiffres du cabinet GfK datant de début 2020, le marché des casques et écouteurs audio se porte très bien. Les ventes ont progressé de 7% entre 2019 et 2020, le chiffre daffaires, lui, a au… [+8925 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "XDA Developers"
            },
            "author": "Mahmoud Itani",
            "title": "Apple’s software feature exclusivity on the Watch 7 is disappointing, especially after the scrapped redesign",
            "description": "Apple revealed the all-new Apple Watch Series 7 along with the iPhone 13 lineup and new iPad models in mid-September. The announcement was made during its California Streaming virtual event. Apart from not releasing the rumored AirPods 3rd Gen, I was disappoi…",
            "url": "https://www.xda-developers.com/apple-watch-7-disappointing-software-exclusivity/",
            "urlToImage": "https://www.xda-developers.com/files/2021/09/Apple-Watch-Series-7.jpg",
            "publishedAt": "2021-10-16T12:00:54Z",
            "content": "Apple revealed the \r\nall-new\r\nApple Watch Series 7 along with the iPhone 13 lineup and new iPad models in mid-September. The announcement was made during its California Streaming virtual event. Apart… [+9045 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Authority"
            },
            "author": "Dhruv Bhutani",
            "title": "Amazfit GTR 3 Pro review: On the right track, but not quite there yet",
            "description": "Is improved fitness tracking enough to stand out amidst premium competition? Find out more in this Amazfit GTR 3 Pro review.",
            "url": "https://www.androidauthority.com/amazfit-gtr-3-pro-review-3038980/",
            "urlToImage": "https://cdn57.androidauthority.net/wp-content/uploads/2021/10/Amazfit-GTR-3-Pro-Review-showing-watchface.jpg",
            "publishedAt": "2021-10-16T08:00:04Z",
            "content": "Huamis Amazfit fitness wearables have been making inroads on the back of their value-oriented positioning. The company introduced the GTR 2 earlier this year with a significantly improved feature set… [+17896 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "Presse-citron",
            "title": "Vente flash : Intego offre un antivirus Mac à prix inédit (ultra fiable)",
            "description": "Intego offre une remise généreuse sur son excellent antivirus pour Mac.",
            "url": "https://www.presse-citron.net/vente-flash-intego-offre-un-antivirus-mac-a-prix-inedit-ultra-fiable/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2020/03/cybersecurity.jpg",
            "publishedAt": "2021-10-16T09:15:46Z",
            "content": "Pendant longtemps, la rumeur circulait que les Mac n’avaient aucun problème avec les virus. La réalité, c’est qu’ils sont eux aussi à risque – et Apple le reconnait très volontiers. Le danger vient d… [+2409 chars]"
        }
    ]
    constructor() {
        super();
        console.log("I am constructor from News.js")
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h2>News Overload Top headlines</h2>
                <div className="row">
                    <div className="col-md-3">
                       <NewsItem title="latest cricket news" description="This news contains latest newas about cricket worls" imageUrl="data:image/jpeg;base64,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"
                        newsUrl="TODO"/>    
                    </div>
                    <div className="col-md-3">
                       <NewsItem title="Gadget" description="Samsung launches its latest smartphone which is set to compete with iphone" />
                    </div>
                    <div className="col-md-3">
                       <NewsItem title="Gadget" description="Samsung launches its latest smartphone which is set to compete with iphone" />
                    </div>
                    <div className="col-md-3">
                       <NewsItem title="Gadget" description="Samsung launches its latest smartphone which is set to compete with iphone" />
                    </div>
                    <div className="col-md-3">
                       <NewsItem title="Gadget" description="Samsung launches its latest smartphone which is set to compete with iphone" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
