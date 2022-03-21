const SearchMainResult = () => {
  return (
    <li class="search-result">
      <div class="search-result-header">
        <div class="search-result-title">
          <div class="result-repo">
            <a href="https://github.com/golang/go">
              <img
                class="repo-avatar"
                src="https://avatars.githubusercontent.com/u/4314092?s=60&amp;v=4"
                alt=""
                width="20"
                height="20"
              />
              golang/go
            </a>
          </div>
          <div class="result-file-info">
            <div class="result-file">
              <a href="https://github.com/golang/go/blob/master/src/crypto/tls/handshake_client.go">
                <span class="result-file-directory">
                  src/
                  <wbr />
                  crypto/
                  <wbr />
                  tls/
                  <wbr />
                </span>
                <span class="result-file-name">handshake_client.go</span>
              </a>
            </div>
            <div class="result-total-matches">100+ matches</div>
          </div>
        </div>
      </div>
      <div class="search-result-body">
        <div class="search-result-numbers-mask"></div>
        <div class="search-result-background"></div>
        <div class="search-result-details">
          <table class="highlight-table">
            <tbody>
              <tr data-line="28">
                <td>
                  <div class="lineno">28</div>
                </td>
                <td>
                  <div class="highlight">
                    <pre>
                      {"    "}
                      <span class="nx">ctx</span>
                      {"          "}
                      <span class="nx">context</span>
                      <span class="p">.</span>
                      <span class="nx">Context</span>
                    </pre>
                  </div>
                </td>
              </tr>
              <tr data-line="29">
                <td>
                  <div class="lineno">29</div>
                </td>
                <td>
                  <div class="highlight">
                    <pre>
                      {" "}
                      <span class="nx">
                        server<mark>Hello</mark>
                      </span>{" "}
                      <span class="o">*</span>
                      <span class="nx">
                        server<mark>Hello</mark>Msg
                      </span>
                    </pre>
                  </div>
                </td>
              </tr>
              <tr data-line="30">
                <td>
                  <div class="lineno">30</div>
                </td>
                <td>
                  <div class="highlight">
                    <pre>
                      {" "}
                      <span class="nx">
                        <mark>hello</mark>
                      </span>{" "}
                      <span class="o">*</span>
                      <span class="nx">
                        client<mark>Hello</mark>Msg
                      </span>
                    </pre>
                  </div>
                </td>
              </tr>
              <tr data-line="31">
                <td>
                  <div class="lineno">31</div>
                </td>
                <td>
                  <div class="highlight">
                    <pre>
                      {" "}
                      <span class="nx">suite</span> <span class="o">*</span>
                      <span class="nx">cipherSuite</span>
                    </pre>
                    <div class="jump"></div>
                  </div>
                </td>
              </tr>
              <tr data-line="37">
                <td>
                  <div class="lineno">37</div>
                </td>
                <td>
                  <div class="highlight">
                    <pre>
                      <span class="kd">func</span> <span class="p">(</span>
                      <span class="nx">c</span> <span class="o">*</span>
                      <span class="nx">Conn</span>
                      <span class="p">)</span>{" "}
                      <span class="nx">
                        makeClient<mark>Hello</mark>
                      </span>
                      <span class="p">()</span> <span class="p">(</span>
                      <span class="o">*</span>
                      <span class="nx">
                        client<mark>Hello</mark>Msg
                      </span>
                      <span class="p">,</span>{" "}
                      <span class="nx">ecdheParameters</span>
                      <span class="p">,</span> <span class="kt">error</span>
                      <span class="p">)</span> <span class="p">{"{"}</span>
                    </pre>
                  </div>
                </td>
              </tr>
              <tr data-line="38">
                <td>
                  <div class="lineno">38</div>
                </td>
                <td>
                  <div class="highlight">
                    <pre>
                      {" "}
                      <span class="nx">config</span> <span class="o">:=</span>{" "}
                      <span class="nx">c</span>
                      <span class="p">.</span>
                      <span class="nx">config</span>
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
