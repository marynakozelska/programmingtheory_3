import React from "react"
import "./styles/news.css"
import NewsPost from "./news_post";

const News = () => {
    return (
        <>
            <section className='main-news'>

                <NewsPost
                    h={'See who won at the American Music Awards'}
                    text={'The night belonged to Taylor Swift, however, who won in all six categories for which she was\n' +
                        'nominated, including artist of the year, the night’s top honor. The wins cemented Swift as\n' +
                        'the most decorated artist in AMAs history, with 40 career wins.\n' +
                        'Performers who took the AMA stage included Pink, who opened the show, as well as Dove\n' +
                        'Cameron, Lil Baby, Bebe Rexha, Carrie Underwood, Imagine Dragons and others.'}
                    image_src={'https://www.billboard.com/wp-content/uploads/2022/11/02-taylor-swift-American-music-awards-AMAs-show-2022-billboard-1548.jpg'}>
                </NewsPost>

                <NewsPost
                    h={'Jonas Brothers rock Thanksgiving halftime performance'}
                    text={'Viewers tuning in to the Giants-Cowboys Thanksgiving Dday game at AT&T Stadium were taken\n' +
                        'back to the late 2000s with a popular boy band making a reappearance in the halftime show.\n' +
                        'The Jonas Brothers took to the field in Arlington not long after wrapping up their second\n' +
                        'residency in Las Vegas as they prepare for the release of a sixth studio album in 2023.'}
                    image_src={'https://headtopics.com/images/2022/11/25/dallasnews/jonas-brothers-rock-thanksgiving-halftime-performa-jonas-brothers-rock-thanksgiving-halftime-performa-1595931522783006720.webp'}>
                </NewsPost>

                <NewsPost
                    h={'Pretty Reckless, Suzi Quatro, “Wakanda” top this week’s new music releases'}
                    text={'Some new music release weeks are dominated by one title, but there’s not a Taylor Swift every\n' +
                        'Friday. This week brings a diverse collection of titles, with a little fun from the Pretty\n' +
                        'Reckless and Suzi Quatro to a solo albums from one of the Roots and an Avett brother, a big\n' +
                        'soundtrack and a bunch of big-name archival sets (all subject to change).\n' +
                        'Album of the Week: As odds ‘n’ sods collections go, the Pretty Reckless’ new “Other Worlds”\n' +
                        '(Fearless) is more intriguing than most.'}
                    image_src={'https://i0.wp.com/www.sonicperspectives.com/wp-content/uploads/2022/08/The-Pretty-Reckless-Featured.jpg?fit=1800%2C1200&ssl=1'}>
                </NewsPost>

            </section>
        </>
    )
}

export default News