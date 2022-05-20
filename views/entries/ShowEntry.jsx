const React = require('react');
const Layout = require('../Layout');

module.exports = function Entries({ entry }) {
  return (
    <Layout>
      <h1>Entry Details</h1>

      <main className="content-wrapper" role="main">
        <p>{entry.singer} signed up to sing {entry.songTitle}.</p>

        <p>
          Entry submitted on {entry.createdAt}.

          {entry.createdAt === entry.updatedAt && (
            <span>
              Entry updated on {entry.updatedAt}.
            </span>
          )}
        </p>

      </main>

    </Layout>
  );
};
