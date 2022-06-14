import SearchMainCode from "./SearchMainCode";

const SearchMainResult = ({ itemList, searchWord }) => {
  // console.log(itemList);
  const resultPath = itemList.path.split("/");
  const resultRepo = [resultPath[3], resultPath[4]].join("/");
  const resultRepoLink = resultPath.splice(0, 5).join("/");
  const resultFileName = resultPath.pop();
  resultPath.shift();
  resultPath.shift();
  const resultFileDir = resultPath.join("/");

  const resultCode = itemList.codeLines.split("\n");
  resultCode.pop();
  // console.log(resultCode);

  return (
    <li className="search-result">
      <div className="search-result-header">
        <div className="search-result-title">
          <div className="result-repo">
            <a href={resultRepoLink} target="_blank" rel="noreferrer">
              <img
                className="repo-avatar"
                src="https://avatars.githubusercontent.com/u/4314092?s=60&amp;v=4"
                alt=""
                width="20"
                height="20"
              />
              {resultRepo}
            </a>
          </div>
          <div className="result-file-info">
            <div className="result-file">
              <a href={itemList.path} target="_blank" rel="noreferrer">
                <span className="result-file-directory">{resultFileDir}/</span>
                <span className="result-file-name">{resultFileName}</span>
              </a>
            </div>
            {/* <div className="result-total-matches">100+ matches</div> */}
          </div>
        </div>
      </div>
      <div className="search-result-body">
        <div className="search-result-numbers-mask"></div>
        <div className="search-result-background"></div>
        <div className="search-result-details">
          <table className="highlight-table">
            <tbody>
              {resultCode.map((it, index) => (
                <SearchMainCode key={index} code={it} searchWord={searchWord} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </li>
  );
};

export default SearchMainResult;
