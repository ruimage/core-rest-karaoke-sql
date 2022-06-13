const React = require('react');
const Layout = require('../Layout');

module.exports = function Entries({ entries }) {
  return (
    <Layout>
      <h1>Upcoming Karaoke Artists</h1>

      <main role="main">
        <ul className="entries">
          {entries.map((entry) => (
            <li className="entry" key={entry.id}>
              <span className="singer">{entry.singer}</span>
              <span className="song-title">{entry.songTitle}</span>
              <ul className="entry-links">
                <li className="entry-link"><a href={`entries/${entry.id}`}>details</a></li>
                <li className="entry-link"><a href={`entries/${entry.id}/edit`}>edit</a></li>
                <li className="entry-link"><a href={`delete-entry/${entry.id}`}>delete</a></li>
              </ul>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};
