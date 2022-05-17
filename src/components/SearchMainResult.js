const SearchMainResult = () => {
  return (
    <li className="search-result">
      <div className="search-result-header">
        <div className="search-result-title">
          <div className="result-repo">
            <a href="https://github.com/golang/go">
              <img
                className="repo-avatar"
                src="https://avatars.githubusercontent.com/u/4314092?s=60&amp;v=4"
                alt=""
                width="20"
                height="20"
              />
              golang/go
            </a>
          </div>
          <div className="result-file-info">
            <div className="result-file">
              <a href="https://github.com/golang/go/blob/master/src/crypto/tls/handshake_client.go">
                <span className="result-file-directory">
                  src/
                  <wbr />
                  crypto/
                  <wbr />
                  tls/
                  <wbr />
                </span>
                <span className="result-file-name">handshake_client.go</span>
              </a>
            </div>
            <div className="result-total-matches">100+ matches</div>
          </div>
        </div>
      </div>
      <div className="search-result-body">
        <div className="search-result-numbers-mask"></div>
        <div className="search-result-background"></div>
        <div className="search-result-details">
          <table className="highlight-table">
            <tbody>
              <tr data-line="28">
                <td>
                  <div className="lineno">28</div>
                </td>
                <td>
                  <div className="highlight">
                    <pre>
                      {"    "}
                      <span className="nx">ctx</span>
                      {"          "}
                      <span className="nx">context</span>
                      <span className="p">.</span>
                      <span className="nx">Context</span>
                    </pre>
                  </div>
                </td>
              </tr>
              <tr data-line="29">
                <td>
                  <div className="lineno">29</div>
                </td>
                <td>
                  <div className="highlight">
                    <pre>
                      {" "}
                      <span className="nx">
                        server<mark>Hello</mark>
                      </span>{" "}
                      <span className="o">*</span>
                      <span className="nx">
                        server<mark>Hello</mark>Msg
                      </span>
                    </pre>
                  </div>
                </td>
              </tr>
              <tr data-line="30">
                <td>
                  <div className="lineno">30</div>
                </td>
                <td>
                  <div className="highlight">
                    <pre>
                      {" "}
                      <span className="nx">
                        <mark>hello</mark>
                      </span>{" "}
                      <span className="o">*</span>
                      <span className="nx">
                        client<mark>Hello</mark>Msg
                      </span>
                    </pre>
                  </div>
                </td>
              </tr>
              <tr data-line="31">
                <td>
                  <div className="lineno">31</div>
                </td>
                <td>
                  <div className="highlight">
                    <pre>
                      {" "}
                      <span className="nx">suite</span>{" "}
                      <span className="o">*</span>
                      <span className="nx">cipherSuite</span>
                    </pre>
                    <div className="jump"></div>
                  </div>
                </td>
              </tr>
              <tr data-line="37">
                <td>
                  <div className="lineno">37</div>
                </td>
                <td>
                  <div className="highlight">
                    <pre>
                      <span className="kd">func</span>{" "}
                      <span className="p">(</span>
                      <span className="nx">c</span> <span className="o">*</span>
                      <span className="nx">Conn</span>
                      <span className="p">)</span>{" "}
                      <span className="nx">
                        makeClient<mark>Hello</mark>
                      </span>
                      <span className="p">()</span> <span className="p">(</span>
                      <span className="o">*</span>
                      <span className="nx">
                        client<mark>Hello</mark>Msg
                      </span>
                      <span className="p">,</span>{" "}
                      <span className="nx">ecdheParameters</span>
                      <span className="p">,</span>{" "}
                      <span className="kt">error</span>
                      <span className="p">)</span>{" "}
                      <span className="p">{"{"}</span>
                    </pre>
                  </div>
                </td>
              </tr>
              <tr data-line="38">
                <td>
                  <div className="lineno">38</div>
                </td>
                <td>
                  <div className="highlight">
                    <pre>
                      {" "}
                      <span className="nx">config</span>{" "}
                      <span className="o">:=</span>{" "}
                      <span className="nx">c</span>
                      <span className="p">.</span>
                      <span className="nx">config</span>
                    </pre>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </li>
  );
};

export default SearchMainResult;
