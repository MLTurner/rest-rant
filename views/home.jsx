const React = require('react')
const Def = require('./default')

//Filling in home function
//Use Def component as a wrapper, then put stub home page code inside
function Home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <a href="/places">
                <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = Home