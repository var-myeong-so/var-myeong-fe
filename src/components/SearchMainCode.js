const SearchMainCode = ({ code, searchWord }) => {
  if (code === "") {
    code = "\n";
  }
  let parts = code.split(new RegExp(`(${searchWord})`, "gi"));
  return (
    <tr data-line="">
      <td>
        <div className="lineno"></div>
      </td>
      <td>
        <div className="highlight">
          <pre>
            <span>
              {parts.map((part, index) =>
                part.toLowerCase() === searchWord.toLowerCase() ? (
                  <mark key={index}>{part}</mark>
                ) : (
                  part
                )
              )}
            </span>
          </pre>
        </div>
      </td>
    </tr>
  );
};

export default SearchMainCode;
