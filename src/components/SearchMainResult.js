import SearchMainCode from "./SearchMainCode";

const SearchMainResult = ({ itemList, searchWord }) => {
  const resultPath = itemList.path.split("/");
  const resultRepo = [resultPath[3], resultPath[4]].join("/");
  const resultRepoLink = resultPath.splice(0, 5).join("/");
  const resultFileName = resultPath.pop();
  resultPath.shift();
  resultPath.shift();
  const resultFileDir = resultPath.join("/");
  const resultCode = itemList.codeLines.split("\n");
  resultCode.pop();
  //"https://avatars.githubusercontent.com/u/4314092?s=60&amp;v=4"
  return (
    <li className="search-result">
      <div className="search-result-header">
        <div className="search-result-title">
          <div className="result-repo">
            <a href={resultRepoLink} target="_blank" rel="noreferrer">
              <img
                className="repo-avatar"
                src="https://i.pinimg.com/280x280_RS/95/f7/e8/95f7e8cc49bdfc8ef7f39e4b280017f8.jpg"
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
