const React = require('react')
const Def = require('./default')

//Filling in home function
//Use Def component as a wrapper, then put stub home page code inside
function Home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/colorful-food-bowl.jpg" alt="Colorful food bowl"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@pwign">Anh Nguyen</a> on <a href="https://unsplash.com/photos/kcA-c3f_3FE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = Home