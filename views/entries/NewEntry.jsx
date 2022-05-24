/* eslint-disable react/no-array-index-key */
const React = require('react');
const Layout = require('../Layout');

module.exports = function NewEntry({ errors }) {
  return (
    <Layout>
      <h1>Sign Up to Karaoke</h1>

      <main className="form-wrapper" role="main">

        {errors && (
          <div className="errors-wrapper">
            <span>Your entry could not be saved:</span>
            <ul className="errors">
              {errors.map((error, index) => (
                <li className="error" key={index}>{error.message}</li>
              ))}
            </ul>
          </div>
        )}

        <form method="post" action="create-new-post">
          <label htmlFor="singer_name_input">Singer name:</label>
          <input id="singer_name_input" name="entry[singer]" type="text" value="entry[singer]" />

          <label htmlFor="songTitle_input">Song title:</label>
          <input id="songTitle_input" name="entry[songTitle]" type="text" value="entry[songTitle]" />

          <input type="submit" value="Put me on the List!" className="button" />
        </form>
      </main>

    </Layout>
  );
};
