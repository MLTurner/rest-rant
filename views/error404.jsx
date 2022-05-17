const res = require('express/lib/response')
const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
                <div>
                  <img src="/images/fuzzy-404-kitten.jpg" alt="Fuzzy kitten with 404 error message"/>
                  <div>
                Photo credit <a href="https://placekitten.com/200/300"></a>
                </div>
                  </div>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }

module.exports = error404