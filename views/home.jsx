const React = require('react')
const Def = require('./default')

//Filling in home function
//Use Def component as a wrapper, then put stub home page code inside
function Home () {
    return (
        <Def>
            <main>
                <h1>Rest-RANT</h1>
                <h3>Places to rant or rave about</h3>
                <a href="/places">
                <button className="btn-primary">Places Page</button>
                </a>
                <div>
                    <img src="/images/colorful-food-bowl.jpg" alt="Colorful food bowl"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@pwign">Anh Nguyen</a> on <a href="https://unsplash.com/photos/kcA-c3f_3FE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Unsplash</a>
                    </div>
                </div>
                

            </main>
        </Def>
    )
}

module.exports = Home