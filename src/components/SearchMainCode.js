const SearchMainCode = ({ code, searchWord }) => {
  if (code === "") {
    code = "\n";
  }
  let temp = code.split(searchWord);
  if (code.includes(searchWord)) {
    // temp = code.split(searchWord);
    temp.splice(1, 0, searchWord);
    // console.log(temp);
  }
  return (
    <tr data-line="">
      <td>
        <div className="lineno"></div>
      </td>
      <td>
        <div className="highlight">
          <pre>
            <span>
              {temp.map((temp, index) =>
                index === 1 ? <mark key={index}>{temp}</mark> : temp
              )}
            </span>
          </pre>
        </div>
      </td>
    </tr>
  );
};

export default SearchMainCode;
