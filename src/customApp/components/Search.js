import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // validate the user input
  const validation = (query) => {
    if (!query.match(/^[A-Z]+[0-9]+$/)) {
      setErrorMsg('Should be combination of numbers & alphabets');
    } else {
      setErrorMsg('');
    }
  };

  const onChange = (query) => {
    setText(query);
    validation(query);
    getQuery(query);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="KJSH87HGDK"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
      <p style={{ color: 'red' }}>{errorMsg}</p>
    </section>
  );
};

export default Search;
