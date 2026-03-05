const LEVEL3_DATA = {
    id: 3,
    title: "確率分布",
    icon: "📈",
    description: "主要な確率分布をイメージで理解する",
    modules: [
        // ============================================================
        // Module 301: 離散型確率分布
        // ============================================================
        {
            id: 301,
            title: "離散型確率分布",
            duration: "20分",
            content: `
<h2>🎲 離散型確率分布を学ぼう</h2>

<p>離散型確率分布とは、確率変数が<strong>とびとびの値</strong>（0, 1, 2, ...）をとる場合の確率分布です。統計検定2級では、特に<strong>ベルヌーイ分布・二項分布・ポアソン分布</strong>が頻出です。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
離散型確率分布は「数えられるもの」の確率を扱います。例えば「コインの表の回数」「不良品の個数」「事故の件数」など、整数値で表せる現象が対象です。
</div>

<h3>🔵 ベルヌーイ分布</h3>

<p>最も基本的な離散型分布です。結果が<strong>「成功」か「失敗」の2通り</strong>しかない1回の試行を扱います。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<table style="width:100%; text-align:center; border-collapse:collapse;">
<tr style="background:#e3f2fd;">
<th style="padding:10px; border:1px solid #90caf9;">結果</th>
<th style="padding:10px; border:1px solid #90caf9;">値 X</th>
<th style="padding:10px; border:1px solid #90caf9;">確率</th>
</tr>
<tr>
<td style="padding:10px; border:1px solid #90caf9;">✅ 成功</td>
<td style="padding:10px; border:1px solid #90caf9;">1</td>
<td style="padding:10px; border:1px solid #90caf9;">p</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #90caf9;">❌ 失敗</td>
<td style="padding:10px; border:1px solid #90caf9;">0</td>
<td style="padding:10px; border:1px solid #90caf9;">1 − p</td>
</tr>
</table>
</div>

<div class="info-box formula">
<div class="info-box-title">📐 ベルヌーイ分布の公式</div>
<p>期待値：<span class="katex-eq">E(X) = p</span></p>
<p>分散：<span class="katex-eq">V(X) = p(1-p)</span></p>
</div>

<p>🪙 <strong>例：コインを1回投げて表が出るか？</strong><br>
表（成功）の確率 p = 0.5 のベルヌーイ試行です。</p>

<h3>🔵 二項分布 B(n, p)</h3>

<p>ベルヌーイ試行を<strong>n回繰り返した</strong>とき、成功回数 X が従う分布が<strong>二項分布</strong>です。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<p style="text-align:center; font-size:1.1em;">
🪙🪙🪙🪙🪙🪙🪙🪙🪙🪙<br>
<strong>コインを10回投げる → 表の回数は？</strong><br><br>
</p>
<div style="display:flex; justify-content:center; align-items:flex-end; gap:4px; height:150px; padding:10px;">
<div style="width:30px; background:#bbdefb; height:5%; text-align:center; font-size:0.7em; border-radius:3px 3px 0 0;">0</div>
<div style="width:30px; background:#90caf9; height:10%; text-align:center; font-size:0.7em; border-radius:3px 3px 0 0;">1</div>
<div style="width:30px; background:#64b5f6; height:22%; text-align:center; font-size:0.7em; border-radius:3px 3px 0 0;">2</div>
<div style="width:30px; background:#42a5f5; height:40%; text-align:center; font-size:0.7em; border-radius:3px 3px 0 0;">3</div>
<div style="width:30px; background:#2196f3; height:65%; text-align:center; font-size:0.7em; border-radius:3px 3px 0 0;">4</div>
<div style="width:30px; background:#1e88e5; height:100%; text-align:center; font-size:0.7em; color:white; border-radius:3px 3px 0 0;">5</div>
<div style="width:30px; background:#2196f3; height:65%; text-align:center; font-size:0.7em; border-radius:3px 3px 0 0;">6</div>
<div style="width:30px; background:#42a5f5; height:40%; text-align:center; font-size:0.7em; border-radius:3px 3px 0 0;">7</div>
<div style="width:30px; background:#64b5f6; height:22%; text-align:center; font-size:0.7em; border-radius:3px 3px 0 0;">8</div>
<div style="width:30px; background:#90caf9; height:10%; text-align:center; font-size:0.7em; border-radius:3px 3px 0 0;">9</div>
<div style="width:30px; background:#bbdefb; height:5%; text-align:center; font-size:0.7em; border-radius:3px 3px 0 0;">10</div>
</div>
<p style="text-align:center; color:#666;">B(10, 0.5) の分布イメージ（左右対称の山型）</p>
</div>

<div class="info-box formula">
<div class="info-box-title">📐 二項分布の公式</div>
<p>確率関数：<span class="katex-eq display">P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}</span></p>
<p>期待値：<span class="katex-eq">E(X) = np</span></p>
<p>分散：<span class="katex-eq">V(X) = np(1-p)</span></p>
</div>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content"><strong>条件の確認</strong>：各試行が独立で、成功確率 p が毎回同じであること</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content"><strong>n と p を特定</strong>：試行回数 n と成功確率 p を問題文から読み取る</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content"><strong>期待値・分散の計算</strong>：<span class="katex-eq">E(X) = np</span>、<span class="katex-eq">V(X) = np(1-p)</span> で求める</div>
</div>
</div>

<p>🪙 <strong>例：コインを10回投げて表が出る回数</strong><br>
n=10, p=0.5 → 期待値 = 10×0.5 = <strong>5回</strong>、分散 = 10×0.5×0.5 = <strong>2.5</strong></p>

<h3>🔵 ポアソン分布 Po(λ)</h3>

<p>ポアソン分布は<strong>「稀な事象」が一定期間に起こる回数</strong>を表す分布です。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
ポアソン分布の最大の特徴は<strong>期待値＝分散＝λ</strong>であることです！試験で頻出のポイントです。
</div>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<p style="text-align:center;">ポアソン分布のイメージ</p>
<table style="width:100%; text-align:center; border-collapse:collapse;">
<tr style="background:#fff3e0;">
<th style="padding:8px; border:1px solid #ffcc80;">具体例</th>
<th style="padding:8px; border:1px solid #ffcc80;">λの意味</th>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ffcc80;">🚗 1日の交通事故件数</td>
<td style="padding:8px; border:1px solid #ffcc80;">1日あたりの平均事故件数</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ffcc80;">📞 1時間のコールセンター着信数</td>
<td style="padding:8px; border:1px solid #ffcc80;">1時間あたりの平均着信数</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ffcc80;">🐛 1ページの誤植の数</td>
<td style="padding:8px; border:1px solid #ffcc80;">1ページあたりの平均誤植数</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ffcc80;">☎️ 1分間の放射線検出回数</td>
<td style="padding:8px; border:1px solid #ffcc80;">1分あたりの平均検出回数</td>
</tr>
</table>
</div>

<div class="info-box formula">
<div class="info-box-title">📐 ポアソン分布の公式</div>
<p>確率関数：<span class="katex-eq display">P(X=k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}</span></p>
<p>期待値：<span class="katex-eq">E(X) = \\lambda</span></p>
<p>分散：<span class="katex-eq">V(X) = \\lambda</span></p>
</div>

<h3>🔵 二項分布のポアソン近似</h3>

<p>二項分布 B(n, p) において、<strong>n が大きく p が小さい</strong>とき、ポアソン分布 Po(np) で近似できます。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; padding:15px;">
<div style="display:inline-block; background:#e3f2fd; padding:15px 25px; border-radius:10px; margin:5px;">
<strong>B(n, p)</strong><br>nが大きい、pが小さい
</div>
<div style="display:inline-block; font-size:2em; margin:0 15px;">→</div>
<div style="display:inline-block; background:#fff3e0; padding:15px 25px; border-radius:10px; margin:5px;">
<strong>Po(λ = np)</strong><br>で近似できる！
</div>
</div>
<p style="text-align:center; color:#666;">目安：n ≥ 20 かつ p ≤ 0.05 のとき</p>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
近似の条件「nが大きくpが小さい」は試験でよく問われます。λ = np として計算することを忘れないようにしましょう。
</div>

<p><strong>例：</strong>ある工場の不良品率は0.01（1%）。100個の製品を検査するとき、不良品の数は？<br>
→ B(100, 0.01) ≈ Po(100×0.01) = Po(1)</p>

<div class="info-box success">
<div class="info-box-title">✅ まとめ</div>
<table style="width:100%; text-align:center; border-collapse:collapse;">
<tr style="background:#e8f5e9;">
<th style="padding:8px; border:1px solid #a5d6a7;">分布</th>
<th style="padding:8px; border:1px solid #a5d6a7;">使う場面</th>
<th style="padding:8px; border:1px solid #a5d6a7;">期待値</th>
<th style="padding:8px; border:1px solid #a5d6a7;">分散</th>
</tr>
<tr>
<td style="padding:8px; border:1px solid #a5d6a7;">ベルヌーイ</td>
<td style="padding:8px; border:1px solid #a5d6a7;">1回の成功/失敗</td>
<td style="padding:8px; border:1px solid #a5d6a7;">p</td>
<td style="padding:8px; border:1px solid #a5d6a7;">p(1−p)</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #a5d6a7;">二項分布</td>
<td style="padding:8px; border:1px solid #a5d6a7;">n回中の成功回数</td>
<td style="padding:8px; border:1px solid #a5d6a7;">np</td>
<td style="padding:8px; border:1px solid #a5d6a7;">np(1−p)</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #a5d6a7;">ポアソン</td>
<td style="padding:8px; border:1px solid #a5d6a7;">稀な事象の回数</td>
<td style="padding:8px; border:1px solid #a5d6a7;">λ</td>
<td style="padding:8px; border:1px solid #a5d6a7;">λ</td>
</tr>
</table>
</div>
`,
            quiz: [
                {
                    id: "q301_1",
                    type: "choice",
                    question: "コインを1回投げて表が出るかどうかを考えるとき、この試行が従う分布は何か？",
                    options: ["ベルヌーイ分布", "二項分布", "ポアソン分布", "正規分布"],
                    answer: 0,
                    explanation: "結果が「表（成功）」か「裏（失敗）」の2通りしかない1回の試行は、ベルヌーイ分布に従います。二項分布はベルヌーイ試行をn回繰り返したときの成功回数の分布です。"
                },
                {
                    id: "q301_2",
                    type: "choice",
                    question: "二項分布 B(20, 0.3) に従う確率変数Xの期待値と分散の組み合わせとして正しいものはどれか？",
                    options: ["期待値 6, 分散 4.2", "期待値 6, 分散 6", "期待値 14, 分散 4.2", "期待値 0.3, 分散 0.21"],
                    answer: 0,
                    explanation: "二項分布 B(n,p) の期待値は np = 20×0.3 = 6、分散は np(1-p) = 20×0.3×0.7 = 4.2 です。"
                },
                {
                    id: "q301_3",
                    type: "choice",
                    question: "ある交差点で1日に起きる事故の件数が平均2件のポアソン分布に従うとき、この分布の分散はいくつか？",
                    options: ["1", "2", "4", "√2"],
                    answer: 1,
                    explanation: "ポアソン分布 Po(λ) の最大の特徴は、期待値＝分散＝λ です。λ=2 なので分散も2です。"
                },
                {
                    id: "q301_4",
                    type: "choice",
                    question: "二項分布をポアソン分布で近似できる条件として最も適切なものはどれか？",
                    options: ["nが小さくpが大きいとき", "nが大きくpが小さいとき", "nとpがともに大きいとき", "nとpがともに小さいとき"],
                    answer: 1,
                    explanation: "二項分布 B(n,p) のポアソン近似は、nが十分大きくpが十分小さい（稀な事象）のときに使えます。このとき λ=np としてPo(λ)で近似します。"
                },
                {
                    id: "q301_5",
                    type: "choice",
                    question: "不良品率が0.5%の工場で200個の製品を検査する。不良品の個数Xをポアソン近似するとき、λの値はいくつか？",
                    options: ["0.5", "1", "100", "200"],
                    answer: 1,
                    explanation: "ポアソン近似では λ = np = 200 × 0.005 = 1 となります。n=200（大きい）、p=0.005（小さい）なのでポアソン近似が適用できます。"
                }
            ]
        },

        // ============================================================
        // Module 302: 連続型確率分布
        // ============================================================
        {
            id: 302,
            title: "連続型確率分布",
            duration: "20分",
            content: `
<h2>🌊 連続型確率分布を学ぼう</h2>

<p>連続型確率分布とは、確率変数が<strong>連続的な値</strong>（実数値）をとる場合の確率分布です。離散型が「棒グラフ」なら、連続型は「なめらかな曲線」で表されます。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
連続型分布では、ある1点の確率は<strong>常に0</strong>です。確率は<strong>区間の面積</strong>で求めます。これが離散型との根本的な違いです。
</div>

<h3>📏 確率密度関数（PDF）の意味</h3>

<p>連続型確率変数の確率は<strong>確率密度関数 f(x)</strong> の下の面積で表されます。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; padding:15px;">
<div style="position:relative; width:300px; height:160px; margin:0 auto; border-left:2px solid #333; border-bottom:2px solid #333;">
<div style="position:absolute; bottom:0; left:20%; width:30%; height:100px; background:rgba(33,150,243,0.3); border-top:3px solid #2196f3; clip-path:polygon(0 100%, 10% 40%, 30% 10%, 50% 0%, 70% 10%, 90% 40%, 100% 100%);">
</div>
<div style="position:absolute; bottom:0; left:30%; width:20%; height:80px; background:rgba(255,152,0,0.4);">
</div>
<div style="position:absolute; bottom:-25px; left:30%; font-size:0.8em;">a</div>
<div style="position:absolute; bottom:-25px; left:48%; font-size:0.8em;">b</div>
</div>
<p style="margin-top:30px;">🟧 オレンジの部分の面積 = <span class="katex-eq">P(a \\leq X \\leq b)</span></p>
<p>曲線全体の下の面積 = 1（確率の合計）</p>
</div>
</div>

<div class="info-box formula">
<div class="info-box-title">📐 確率密度関数の性質</div>
<p>1. すべての x について <span class="katex-eq">f(x) \\geq 0</span></p>
<p>2. 全区間の面積：<span class="katex-eq display">\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1</span></p>
<p>3. 区間の確率：<span class="katex-eq display">P(a \\leq X \\leq b) = \\int_{a}^{b} f(x)\\,dx</span></p>
</div>

<h3>🔵 一様分布 U(a, b)</h3>

<p>区間 [a, b] のどの値も<strong>同じ確率密度</strong>で出現する分布です。最もシンプルな連続型分布です。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; padding:15px;">
<div style="position:relative; width:280px; height:120px; margin:0 auto;">
<div style="position:absolute; bottom:30px; left:40px; width:200px; height:60px; background:#81d4fa; border:2px solid #0288d1;"></div>
<div style="position:absolute; bottom:5px; left:40px; font-weight:bold;">a</div>
<div style="position:absolute; bottom:5px; right:40px; font-weight:bold;">b</div>
<div style="position:absolute; top:5px; right:15px; font-size:0.9em;"><span class="katex-eq">\\frac{1}{b-a}</span></div>
</div>
<p>📐 長方形の形！高さ = <span class="katex-eq">\\frac{1}{b-a}</span>、面積 = 1</p>
</div>
</div>

<div class="info-box formula">
<div class="info-box-title">📐 一様分布の公式</div>
<p>期待値：<span class="katex-eq">E(X) = \\frac{a+b}{2}</span></p>
<p>分散：<span class="katex-eq">V(X) = \\frac{(b-a)^2}{12}</span></p>
</div>

<p>🎯 <strong>例</strong>：バスが0分〜10分の間でランダムに来る場合 → U(0, 10) に従う<br>
期待値 = 5分、分散 = 100/12 ≈ 8.33</p>

<h3>🔵 正規分布 N(μ, σ²)</h3>

<p>統計学で<strong>最も重要な連続型分布</strong>です。自然界の多くの現象がこの分布に従います。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; padding:15px;">
<div style="font-size:1.2em; margin-bottom:10px;">🔔 正規分布の特徴 = ベルカーブ</div>
<div style="display:flex; justify-content:center; align-items:flex-end; gap:2px; height:120px;">
<div style="width:8px; background:#e3f2fd; height:3%;"></div>
<div style="width:8px; background:#e3f2fd; height:5%;"></div>
<div style="width:8px; background:#bbdefb; height:8%;"></div>
<div style="width:8px; background:#bbdefb; height:13%;"></div>
<div style="width:8px; background:#90caf9; height:20%;"></div>
<div style="width:8px; background:#90caf9; height:30%;"></div>
<div style="width:8px; background:#64b5f6; height:45%;"></div>
<div style="width:8px; background:#64b5f6; height:60%;"></div>
<div style="width:8px; background:#42a5f5; height:78%;"></div>
<div style="width:8px; background:#2196f3; height:90%;"></div>
<div style="width:8px; background:#1e88e5; height:98%;"></div>
<div style="width:8px; background:#1976d2; height:100%; font-weight:bold;"></div>
<div style="width:8px; background:#1e88e5; height:98%;"></div>
<div style="width:8px; background:#2196f3; height:90%;"></div>
<div style="width:8px; background:#42a5f5; height:78%;"></div>
<div style="width:8px; background:#64b5f6; height:60%;"></div>
<div style="width:8px; background:#64b5f6; height:45%;"></div>
<div style="width:8px; background:#90caf9; height:30%;"></div>
<div style="width:8px; background:#90caf9; height:20%;"></div>
<div style="width:8px; background:#bbdefb; height:13%;"></div>
<div style="width:8px; background:#bbdefb; height:8%;"></div>
<div style="width:8px; background:#e3f2fd; height:5%;"></div>
<div style="width:8px; background:#e3f2fd; height:3%;"></div>
</div>
<p>← 左右対称 → μを中心にきれいな釣鐘型</p>
</div>
</div>

<table style="width:100%; text-align:left; border-collapse:collapse; margin:15px 0;">
<tr style="background:#e3f2fd;">
<th style="padding:10px; border:1px solid #90caf9;">特徴</th>
<th style="padding:10px; border:1px solid #90caf9;">説明</th>
</tr>
<tr>
<td style="padding:10px; border:1px solid #90caf9;">🔔 形状</td>
<td style="padding:10px; border:1px solid #90caf9;">釣鐘型（ベルカーブ）</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #90caf9;">⚖️ 対称性</td>
<td style="padding:10px; border:1px solid #90caf9;">平均μを中心に左右対称</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #90caf9;">📍 頂点</td>
<td style="padding:10px; border:1px solid #90caf9;">x = μ のとき最大値</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #90caf9;">📏 広がり</td>
<td style="padding:10px; border:1px solid #90caf9;">σが大きいほど横に広がる</td>
</tr>
</table>

<h3>🔵 指数分布 Exp(λ)</h3>

<p>ある事象が次に起こるまでの<strong>待ち時間</strong>を表す分布です。ポアソン分布の「裏側」の分布とも言えます。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; padding:15px;">
<div style="display:flex; justify-content:center; align-items:flex-end; gap:2px; height:120px;">
<div style="width:12px; background:#ef5350; height:100%;"></div>
<div style="width:12px; background:#ef5350; height:82%;"></div>
<div style="width:12px; background:#e57373; height:67%;"></div>
<div style="width:12px; background:#e57373; height:55%;"></div>
<div style="width:12px; background:#ef9a9a; height:45%;"></div>
<div style="width:12px; background:#ef9a9a; height:37%;"></div>
<div style="width:12px; background:#ffcdd2; height:30%;"></div>
<div style="width:12px; background:#ffcdd2; height:25%;"></div>
<div style="width:12px; background:#ffebee; height:20%;"></div>
<div style="width:12px; background:#ffebee; height:16%;"></div>
<div style="width:12px; background:#ffebee; height:13%;"></div>
<div style="width:12px; background:#fff; height:11%; border:1px solid #eee;"></div>
<div style="width:12px; background:#fff; height:9%; border:1px solid #eee;"></div>
<div style="width:12px; background:#fff; height:7%; border:1px solid #eee;"></div>
<div style="width:12px; background:#fff; height:6%; border:1px solid #eee;"></div>
</div>
<p>⏱️ 急激に下がる形 → 短い待ち時間が多い</p>
</div>
</div>

<div class="info-box formula">
<div class="info-box-title">📐 指数分布の公式</div>
<p>確率密度関数：<span class="katex-eq">f(x) = \\lambda e^{-\\lambda x}</span>（x ≥ 0）</p>
<p>期待値：<span class="katex-eq">E(X) = \\frac{1}{\\lambda}</span></p>
<p>分散：<span class="katex-eq">V(X) = \\frac{1}{\\lambda^2}</span></p>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 無記憶性に注意！</div>
<p>指数分布の大きな特徴は<strong>無記憶性</strong>です。</p>
<p>「すでにt時間待った」という情報があっても、「さらにs時間待つ確率」は最初から待つのと同じです。</p>
<p><span class="katex-eq display">P(X > t+s \\mid X > t) = P(X > s)</span></p>
<p>🚌 例：平均10分間隔で来るバスを既に5分待っていても、あと10分以上待つ確率は最初と同じ！</p>
</div>

<h3>📊 分布の形状比較</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<table style="width:100%; text-align:center; border-collapse:collapse;">
<tr style="background:#f5f5f5;">
<th style="padding:10px; border:1px solid #ddd;">分布</th>
<th style="padding:10px; border:1px solid #ddd;">形状イメージ</th>
<th style="padding:10px; border:1px solid #ddd;">特徴</th>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd;">一様分布</td>
<td style="padding:10px; border:1px solid #ddd;">▬▬▬（長方形）</td>
<td style="padding:10px; border:1px solid #ddd;">どこも均等</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd;">正規分布</td>
<td style="padding:10px; border:1px solid #ddd;">🔔（釣鐘型）</td>
<td style="padding:10px; border:1px solid #ddd;">左右対称の山</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd;">指数分布</td>
<td style="padding:10px; border:1px solid #ddd;">📐（右下がり）</td>
<td style="padding:10px; border:1px solid #ddd;">急に下がってなだらかに</td>
</tr>
</table>
</div>

<div class="info-box success">
<div class="info-box-title">✅ まとめ</div>
<table style="width:100%; text-align:center; border-collapse:collapse;">
<tr style="background:#e8f5e9;">
<th style="padding:8px; border:1px solid #a5d6a7;">分布</th>
<th style="padding:8px; border:1px solid #a5d6a7;">用途</th>
<th style="padding:8px; border:1px solid #a5d6a7;">期待値</th>
<th style="padding:8px; border:1px solid #a5d6a7;">分散</th>
</tr>
<tr>
<td style="padding:8px; border:1px solid #a5d6a7;">U(a,b)</td>
<td style="padding:8px; border:1px solid #a5d6a7;">均等な出現</td>
<td style="padding:8px; border:1px solid #a5d6a7;">(a+b)/2</td>
<td style="padding:8px; border:1px solid #a5d6a7;">(b−a)²/12</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #a5d6a7;">N(μ,σ²)</td>
<td style="padding:8px; border:1px solid #a5d6a7;">自然現象</td>
<td style="padding:8px; border:1px solid #a5d6a7;">μ</td>
<td style="padding:8px; border:1px solid #a5d6a7;">σ²</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #a5d6a7;">Exp(λ)</td>
<td style="padding:8px; border:1px solid #a5d6a7;">待ち時間</td>
<td style="padding:8px; border:1px solid #a5d6a7;">1/λ</td>
<td style="padding:8px; border:1px solid #a5d6a7;">1/λ²</td>
</tr>
</table>
</div>
`,
            quiz: [
                {
                    id: "q302_1",
                    type: "choice",
                    question: "連続型確率変数Xが特定の1点の値をとる確率P(X=a)はいくつか？",
                    options: ["f(a)", "1/n", "0", "1"],
                    answer: 2,
                    explanation: "連続型確率変数では、特定の1点の値をとる確率は常に0です。確率は区間（面積）でしか定義されません。これは離散型との根本的な違いです。"
                },
                {
                    id: "q302_2",
                    type: "choice",
                    question: "一様分布 U(2, 8) に従う確率変数Xの期待値はいくつか？",
                    options: ["3", "4", "5", "6"],
                    answer: 2,
                    explanation: "一様分布 U(a,b) の期待値は (a+b)/2 = (2+8)/2 = 5 です。区間の中央値と一致します。"
                },
                {
                    id: "q302_3",
                    type: "choice",
                    question: "指数分布の「無記憶性」の意味として正しいものはどれか？",
                    options: [
                        "過去のデータを使わない性質",
                        "すでに待った時間に関係なく、追加で待つ時間の分布は同じ",
                        "期待値が常に0になる性質",
                        "分散が時間とともに小さくなる性質"
                    ],
                    answer: 1,
                    explanation: "無記憶性とは、すでにt時間待っていても、さらにs時間以上待つ確率が、最初からs時間以上待つ確率と等しいという性質です。P(X>t+s|X>t) = P(X>s) で表されます。"
                },
                {
                    id: "q302_4",
                    type: "choice",
                    question: "確率密度関数 f(x) の全区間にわたる積分値として正しいものはどれか？",
                    options: ["0", "0.5", "1", "∞"],
                    answer: 2,
                    explanation: "確率密度関数は全区間で積分すると必ず1になります。これは「すべての場合の確率の合計は1」という確率の基本性質に対応しています。"
                },
                {
                    id: "q302_5",
                    type: "choice",
                    question: "平均して1時間に3回電話がかかってくる。次の電話までの待ち時間Xが従う指数分布の期待値は？",
                    options: ["3時間", "1/3時間（20分）", "1時間", "√3時間"],
                    answer: 1,
                    explanation: "1時間に平均3回なので λ=3 です。指数分布 Exp(λ) の期待値は 1/λ = 1/3 時間（20分）です。ポアソン分布の「単位時間あたりの回数」の逆数が期待値になります。"
                }
            ]
        },

        // ============================================================
        // Module 303: 正規分布と標準化
        // ============================================================
        {
            id: 303,
            title: "正規分布と標準化",
            duration: "25分",
            content: `
<h2>🔔 正規分布と標準化 ― 統計の最重要トピック</h2>

<p>正規分布は統計学の<strong>土台</strong>です。推定・検定のほぼすべてが正規分布と関わりがあるため、この単元の理解が合否を分けると言っても過言ではありません。</p>

<div class="info-box warning">
<div class="info-box-title">⚠️ 超重要！</div>
このモジュールは統計検定2級の<strong>最頻出テーマ</strong>です。標準化の計算と正規分布表の読み方は必ずマスターしましょう！
</div>

<h3>🔵 正規分布 N(μ, σ²) の性質</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; padding:15px;">
<p style="font-size:1.1em; font-weight:bold;">正規分布の5つの性質</p>
<div style="display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin:15px 0;">
<div style="background:#e3f2fd; padding:12px; border-radius:8px; width:140px; text-align:center;">
<div style="font-size:1.5em;">⚖️</div>
<strong>左右対称</strong><br>
<span style="font-size:0.85em;">μを中心に対称</span>
</div>
<div style="background:#e8f5e9; padding:12px; border-radius:8px; width:140px; text-align:center;">
<div style="font-size:1.5em;">🔔</div>
<strong>釣鐘型</strong><br>
<span style="font-size:0.85em;">ベルカーブ</span>
</div>
<div style="background:#fff3e0; padding:12px; border-radius:8px; width:140px; text-align:center;">
<div style="font-size:1.5em;">📍</div>
<strong>中心=μ</strong><br>
<span style="font-size:0.85em;">平均=中央値=最頻値</span>
</div>
<div style="background:#fce4ec; padding:12px; border-radius:8px; width:140px; text-align:center;">
<div style="font-size:1.5em;">📏</div>
<strong>広がり=σ</strong><br>
<span style="font-size:0.85em;">標準偏差で幅が決まる</span>
</div>
<div style="background:#f3e5f5; padding:12px; border-radius:8px; width:140px; text-align:center;">
<div style="font-size:1.5em;">∞</div>
<strong>裾は無限</strong><br>
<span style="font-size:0.85em;">x軸に漸近</span>
</div>
</div>
</div>
</div>

<h3>🌟 68-95-99.7 ルール（エンピリカルルール）</h3>

<p>正規分布で最も重要な数値です。<strong>必ず暗記</strong>してください！</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; padding:20px;">
<div style="position:relative; max-width:400px; margin:0 auto;">
<div style="background:rgba(183,28,28,0.1); border:2px solid #b71c1c; border-radius:15px; padding:10px; margin-bottom:5px;">
<div style="background:rgba(230,81,0,0.1); border:2px solid #e65100; border-radius:12px; padding:10px; margin-bottom:5px;">
<div style="background:rgba(25,118,210,0.15); border:2px solid #1976d2; border-radius:10px; padding:15px;">
<div style="font-size:1.3em; font-weight:bold;">μ ± 1σ</div>
<div style="font-size:1.5em; color:#1976d2; font-weight:bold;">68.3%</div>
</div>
<div style="margin-top:5px; font-size:1.1em; font-weight:bold;">μ ± 2σ → <span style="color:#e65100;">95.4%</span></div>
</div>
<div style="margin-top:5px; font-size:1.1em; font-weight:bold;">μ ± 3σ → <span style="color:#b71c1c;">99.7%</span></div>
</div>
</div>
<p style="margin-top:10px; color:#666;">入れ子構造で確率が大きくなる</p>
</div>
</div>

<div class="info-box formula">
<div class="info-box-title">📐 68-95-99.7 ルール</div>
<table style="width:100%; text-align:center; border-collapse:collapse;">
<tr style="background:#e8eaf6;">
<th style="padding:8px; border:1px solid #9fa8da;">範囲</th>
<th style="padding:8px; border:1px solid #9fa8da;">含まれる確率</th>
<th style="padding:8px; border:1px solid #9fa8da;">覚え方</th>
</tr>
<tr>
<td style="padding:8px; border:1px solid #9fa8da;"><span class="katex-eq">\\mu \\pm 1\\sigma</span></td>
<td style="padding:8px; border:1px solid #9fa8da;"><strong>約68%</strong></td>
<td style="padding:8px; border:1px solid #9fa8da;">約2/3</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #9fa8da;"><span class="katex-eq">\\mu \\pm 2\\sigma</span></td>
<td style="padding:8px; border:1px solid #9fa8da;"><strong>約95%</strong></td>
<td style="padding:8px; border:1px solid #9fa8da;">ほとんど全部</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #9fa8da;"><span class="katex-eq">\\mu \\pm 3\\sigma</span></td>
<td style="padding:8px; border:1px solid #9fa8da;"><strong>約99.7%</strong></td>
<td style="padding:8px; border:1px solid #9fa8da;">ほぼ全部</td>
</tr>
</table>
</div>

<p>📝 <strong>例</strong>：テストの点数が N(60, 10²) に従うとき<br>
→ 68%の人は 50〜70点の範囲<br>
→ 95%の人は 40〜80点の範囲<br>
→ 99.7%の人は 30〜90点の範囲</p>

<h3>🔵 標準化：Z変換</h3>

<p>どんな正規分布も<strong>標準正規分布 N(0, 1)</strong> に変換できます。これを<strong>標準化</strong>と呼びます。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; padding:15px;">
<div style="display:flex; justify-content:center; align-items:center; flex-wrap:wrap; gap:20px;">
<div style="background:#e3f2fd; padding:20px; border-radius:10px; min-width:150px;">
<div style="font-size:1.2em; font-weight:bold;">元の分布</div>
<div style="font-size:1em;">N(μ, σ²)</div>
<div style="font-size:0.9em; color:#666;">バラバラのμとσ</div>
</div>
<div style="font-size:2.5em;">→</div>
<div style="background:#c8e6c9; padding:15px; border-radius:10px; min-width:100px;">
<div style="font-size:1.5em; font-weight:bold;">Z = <span class="katex-eq">\\frac{X - \\mu}{\\sigma}</span></div>
</div>
<div style="font-size:2.5em;">→</div>
<div style="background:#fff9c4; padding:20px; border-radius:10px; min-width:150px;">
<div style="font-size:1.2em; font-weight:bold;">標準正規分布</div>
<div style="font-size:1em;">N(0, 1)</div>
<div style="font-size:0.9em; color:#666;">表で確率を読める！</div>
</div>
</div>
</div>
</div>

<div class="info-box formula">
<div class="info-box-title">📐 標準化の公式</div>
<p><span class="katex-eq display">Z = \\frac{X - \\mu}{\\sigma}</span></p>
<p>Xが <span class="katex-eq">N(\\mu, \\sigma^2)</span> に従うとき、Zは <span class="katex-eq">N(0, 1)</span> に従う</p>
</div>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content"><strong>μとσを確認</strong>：問題文からN(μ, σ²)のμとσを読み取る</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content"><strong>Z値を計算</strong>：<span class="katex-eq">Z = \\frac{X - \\mu}{\\sigma}</span> に代入する</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content"><strong>正規分布表を参照</strong>：Zの値に対応する確率を表から読み取る</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content"><strong>求める確率に変換</strong>：「以上」「以下」「間」に応じて計算する</div>
</div>
</div>

<h3>📋 標準正規分布表の使い方</h3>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>標準正規分布表は <span class="katex-eq">P(0 \\leq Z \\leq z)</span> の値を示すものが多いです。対称性を活用して様々な確率を求めましょう。</p>
</div>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="padding:15px;">
<p style="text-align:center; font-weight:bold; margin-bottom:10px;">よく使うZ値と確率</p>
<table style="width:100%; text-align:center; border-collapse:collapse;">
<tr style="background:#fff3e0;">
<th style="padding:8px; border:1px solid #ffcc80;">Z値</th>
<th style="padding:8px; border:1px solid #ffcc80;">P(0≤Z≤z)</th>
<th style="padding:8px; border:1px solid #ffcc80;">P(Z≤z)</th>
<th style="padding:8px; border:1px solid #ffcc80;">出題での意味</th>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ffcc80;"><strong>1.645</strong></td>
<td style="padding:8px; border:1px solid #ffcc80;">0.4500</td>
<td style="padding:8px; border:1px solid #ffcc80;">0.9500</td>
<td style="padding:8px; border:1px solid #ffcc80;">片側5%点</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ffcc80;"><strong>1.96</strong></td>
<td style="padding:8px; border:1px solid #ffcc80;">0.4750</td>
<td style="padding:8px; border:1px solid #ffcc80;">0.9750</td>
<td style="padding:8px; border:1px solid #ffcc80;">両側5%点</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ffcc80;"><strong>2.326</strong></td>
<td style="padding:8px; border:1px solid #ffcc80;">0.4900</td>
<td style="padding:8px; border:1px solid #ffcc80;">0.9900</td>
<td style="padding:8px; border:1px solid #ffcc80;">片側1%点</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ffcc80;"><strong>2.576</strong></td>
<td style="padding:8px; border:1px solid #ffcc80;">0.4950</td>
<td style="padding:8px; border:1px solid #ffcc80;">0.9950</td>
<td style="padding:8px; border:1px solid #ffcc80;">両側1%点</td>
</tr>
</table>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 必ず暗記！</div>
<p><strong>Z = 1.96</strong>（両側5%点）と <strong>Z = 1.645</strong>（片側5%点）は試験で最も頻出する値です。推定・検定の問題で必ず使います！</p>
</div>

<h4>📝 計算例</h4>

<p>ある製品の重量がN(500, 20²)に従う。520g以上の確率は？</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">μ = 500, σ = 20 を確認</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content"><span class="katex-eq">Z = \\frac{520 - 500}{20} = 1.0</span></div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">表から P(0≤Z≤1.0) = 0.3413</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">P(X≥520) = P(Z≥1.0) = 0.5 − 0.3413 = <strong>0.1587</strong></div>
</div>
</div>

<h3>🔵 正規分布の再生性</h3>

<p>正規分布には<strong>再生性</strong>という重要な性質があります。</p>

<div class="info-box formula">
<div class="info-box-title">📐 正規分布の再生性</div>
<p>独立な確率変数 <span class="katex-eq">X \\sim N(\\mu_1, \\sigma_1^2)</span> と <span class="katex-eq">Y \\sim N(\\mu_2, \\sigma_2^2)</span> に対して：</p>
<p><span class="katex-eq display">X + Y \\sim N(\\mu_1 + \\mu_2,\\; \\sigma_1^2 + \\sigma_2^2)</span></p>
<p><span class="katex-eq display">X - Y \\sim N(\\mu_1 - \\mu_2,\\; \\sigma_1^2 + \\sigma_2^2)</span></p>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ よくある間違い</div>
<p>X − Y の分散は <span class="katex-eq">\\sigma_1^2 + \\sigma_2^2</span> です。<strong>引き算でも分散は足し算</strong>になります！マイナスにはなりません。</p>
</div>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; padding:15px;">
<div style="display:flex; justify-content:center; align-items:center; flex-wrap:wrap; gap:10px;">
<div style="background:#e3f2fd; padding:15px; border-radius:10px;">
<strong>X</strong><br>N(μ₁, σ₁²)
</div>
<div style="font-size:2em;">+</div>
<div style="background:#e8f5e9; padding:15px; border-radius:10px;">
<strong>Y</strong><br>N(μ₂, σ₂²)
</div>
<div style="font-size:2em;">=</div>
<div style="background:#fff9c4; padding:15px; border-radius:10px;">
<strong>X + Y</strong><br>N(μ₁+μ₂, σ₁²+σ₂²)
</div>
</div>
<p style="margin-top:10px; color:#666;">正規分布同士の和（差）は再び正規分布になる</p>
</div>
</div>

<p><strong>例</strong>：Xの身長 N(170, 5²)、Yの身長 N(160, 4²) が独立のとき<br>
→ X−Y は N(10, 25+16) = N(10, 41) に従う</p>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールの最重要ポイント</div>
<ol>
<li>正規分布は μ（位置）と σ（広がり）で形が決まる</li>
<li>68-95-99.7ルールを暗記する</li>
<li>標準化公式：<span class="katex-eq">Z = \\frac{X-\\mu}{\\sigma}</span></li>
<li>Z = 1.96（両側5%）、Z = 1.645（片側5%）を暗記</li>
<li>再生性：和の分散 = 分散の和（引き算でも足す！）</li>
</ol>
</div>
`,
            quiz: [
                {
                    id: "q303_1",
                    type: "choice",
                    question: "正規分布N(μ, σ²)において、μ ± 2σ の範囲に含まれるデータの割合は約何%か？",
                    options: ["約68%", "約90%", "約95%", "約99.7%"],
                    answer: 2,
                    explanation: "68-95-99.7ルールにより、μ ± 1σ に約68%、μ ± 2σ に約95%、μ ± 3σ に約99.7%のデータが含まれます。"
                },
                {
                    id: "q303_2",
                    type: "choice",
                    question: "X ~ N(80, 16) のとき、X=84 を標準化したZ値はいくつか？（σ²=16 であることに注意）",
                    options: ["0.25", "0.5", "1", "4"],
                    answer: 2,
                    explanation: "σ² = 16 なので σ = 4 です。Z = (X-μ)/σ = (84-80)/4 = 1 となります。σ²（分散）とσ（標準偏差）を混同しないよう注意しましょう。"
                },
                {
                    id: "q303_3",
                    type: "choice",
                    question: "標準正規分布の上側5%点（片側）に対応するZ値として最も近いものはどれか？",
                    options: ["1.28", "1.645", "1.96", "2.576"],
                    answer: 1,
                    explanation: "片側5%点は Z = 1.645 です。Z = 1.96 は両側5%点（片側2.5%点）です。この2つの値は統計検定で非常に重要なので必ず暗記しましょう。"
                },
                {
                    id: "q303_4",
                    type: "choice",
                    question: "X ~ N(50, 9) と Y ~ N(30, 16) が独立のとき、X - Y の分布はどれか？",
                    options: ["N(20, 7)", "N(20, -7)", "N(20, 25)", "N(80, 25)"],
                    answer: 2,
                    explanation: "再生性より、X-Yの期待値 = 50-30 = 20、分散 = 9+16 = 25 です。引き算でも分散は足し算になることが重要なポイントです。"
                },
                {
                    id: "q303_5",
                    type: "choice",
                    question: "ある試験の得点がN(60, 10²)に従う。得点が80点以上である確率を求めるためのZ値はいくつか？",
                    options: ["0.5", "1.0", "2.0", "8.0"],
                    answer: 2,
                    explanation: "Z = (80-60)/10 = 2.0 です。この場合、P(X≥80) = P(Z≥2.0) = 0.5 - 0.4772 ≈ 0.0228 となり、約2.3%の人しか80点以上を取れないことがわかります。"
                }
            ]
        },

        // ============================================================
        // Module 304: カイ二乗分布・t分布・F分布
        // ============================================================
        {
            id: 304,
            title: "カイ二乗分布・t分布・F分布",
            duration: "25分",
            content: `
<h2>📊 カイ二乗分布・t分布・F分布</h2>

<p>これら3つの分布は、正規分布から<strong>派生した分布</strong>です。推定や検定で使う非常に重要な分布で、それぞれの<strong>成り立ち</strong>と<strong>形状の特徴</strong>を理解することが大切です。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
3つの分布はすべて正規分布がベースです。「正規分布をどう加工したか」を理解すれば、混乱しにくくなります。
</div>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; padding:20px;">
<div style="background:#e3f2fd; padding:15px; border-radius:10px; display:inline-block; margin-bottom:15px;">
<strong style="font-size:1.2em;">🔔 正規分布 N(0,1)</strong><br>すべての土台
</div>
<div style="display:flex; justify-content:center; gap:15px; flex-wrap:wrap; margin-top:10px;">
<div style="text-align:center;">
<div style="font-size:1.5em;">↓ 二乗して足す</div>
<div style="background:#fff3e0; padding:15px; border-radius:10px; margin-top:5px;">
<strong>χ²分布</strong><br>
<span class="katex-eq">Z_1^2 + Z_2^2 + \\cdots</span>
</div>
</div>
<div style="text-align:center;">
<div style="font-size:1.5em;">↓ 割り算</div>
<div style="background:#e8f5e9; padding:15px; border-radius:10px; margin-top:5px;">
<strong>t分布</strong><br>
<span class="katex-eq">\\frac{Z}{\\sqrt{\\chi^2/n}}</span>
</div>
</div>
<div style="text-align:center;">
<div style="font-size:1.5em;">↓ 比をとる</div>
<div style="background:#fce4ec; padding:15px; border-radius:10px; margin-top:5px;">
<strong>F分布</strong><br>
<span class="katex-eq">\\frac{\\chi_1^2/n_1}{\\chi_2^2/n_2}</span>
</div>
</div>
</div>
</div>
</div>

<h3>🔵 カイ二乗分布 χ²(k)</h3>

<p>標準正規分布に従う独立な確率変数を<strong>二乗して足し合わせた</strong>ものが従う分布です。</p>

<div class="info-box formula">
<div class="info-box-title">📐 カイ二乗分布の定義</div>
<p><span class="katex-eq">Z_1, Z_2, \\ldots, Z_k</span> が独立に N(0,1) に従うとき：</p>
<p><span class="katex-eq display">\\chi^2 = Z_1^2 + Z_2^2 + \\cdots + Z_k^2 \\sim \\chi^2(k)</span></p>
<p>kは<strong>自由度</strong>（足し合わせる個数）</p>
<p>期待値：<span class="katex-eq">E(\\chi^2) = k</span></p>
<p>分散：<span class="katex-eq">V(\\chi^2) = 2k</span></p>
</div>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="padding:15px;">
<p style="text-align:center; font-weight:bold;">χ²分布の形状（自由度による変化）</p>
<div style="display:flex; justify-content:center; align-items:flex-end; gap:3px; height:120px; margin:15px 0;">
<!-- k=2: 急な右下がり -->
<div style="width:15px; background:#ef5350; height:100%; border-radius:2px 2px 0 0;" title="k=2"></div>
<div style="width:15px; background:#ef5350; height:55%;"></div>
<div style="width:15px; background:#ef5350; height:30%;"></div>
<div style="width:15px; background:#ef5350; height:17%;"></div>
<div style="width:15px; background:#ef5350; height:9%;"></div>
<div style="width:15px; background:#ef5350; height:5%;"></div>
<div style="width:15px; background:transparent; height:2%;"></div>
<div style="width:15px; background:transparent; height:2%;"></div>
<div style="width:15px; background:transparent; height:2%;"></div>
<div style="width:15px; background:transparent; height:2%;"></div>
<div style="width:15px; background:transparent; height:2%;"></div>
<div style="width:15px; background:transparent; height:2%;"></div>
<div style="width:15px; background:transparent; height:2%;"></div>
<div style="width:15px; background:transparent; height:2%;"></div>
</div>
<p style="text-align:center; color:#ef5350;">自由度 k=2：急に下がる形</p>

<div style="display:flex; justify-content:center; align-items:flex-end; gap:3px; height:120px; margin:15px 0;">
<!-- k=5: 少し右寄りの山 -->
<div style="width:15px; background:#42a5f5; height:15%;"></div>
<div style="width:15px; background:#42a5f5; height:55%;"></div>
<div style="width:15px; background:#42a5f5; height:85%;"></div>
<div style="width:15px; background:#42a5f5; height:100%; border-radius:2px 2px 0 0;"></div>
<div style="width:15px; background:#42a5f5; height:90%;"></div>
<div style="width:15px; background:#42a5f5; height:70%;"></div>
<div style="width:15px; background:#42a5f5; height:50%;"></div>
<div style="width:15px; background:#42a5f5; height:33%;"></div>
<div style="width:15px; background:#42a5f5; height:20%;"></div>
<div style="width:15px; background:#42a5f5; height:12%;"></div>
<div style="width:15px; background:#42a5f5; height:7%;"></div>
<div style="width:15px; background:#42a5f5; height:4%;"></div>
<div style="width:15px; background:#42a5f5; height:2%;"></div>
<div style="width:15px; background:#42a5f5; height:1%;"></div>
</div>
<p style="text-align:center; color:#42a5f5;">自由度 k=5：右に裾を引く山型</p>

<div style="display:flex; justify-content:center; align-items:flex-end; gap:3px; height:120px; margin:15px 0;">
<!-- k=10: もう少し対称に近づく -->
<div style="width:15px; background:#66bb6a; height:5%;"></div>
<div style="width:15px; background:#66bb6a; height:15%;"></div>
<div style="width:15px; background:#66bb6a; height:35%;"></div>
<div style="width:15px; background:#66bb6a; height:60%;"></div>
<div style="width:15px; background:#66bb6a; height:82%;"></div>
<div style="width:15px; background:#66bb6a; height:95%;"></div>
<div style="width:15px; background:#66bb6a; height:100%; border-radius:2px 2px 0 0;"></div>
<div style="width:15px; background:#66bb6a; height:92%;"></div>
<div style="width:15px; background:#66bb6a; height:78%;"></div>
<div style="width:15px; background:#66bb6a; height:60%;"></div>
<div style="width:15px; background:#66bb6a; height:42%;"></div>
<div style="width:15px; background:#66bb6a; height:28%;"></div>
<div style="width:15px; background:#66bb6a; height:16%;"></div>
<div style="width:15px; background:#66bb6a; height:8%;"></div>
</div>
<p style="text-align:center; color:#66bb6a;">自由度 k=10：正規分布に近づく</p>
</div>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>χ²分布の重要な特徴：</p>
<ul>
<li>値は<strong>常に0以上</strong>（二乗の和だから）</li>
<li>自由度が小さいと<strong>右に歪んだ形</strong></li>
<li>自由度が大きくなると<strong>正規分布に近づく</strong></li>
<li>χ²検定（適合度検定・独立性の検定）で使用</li>
</ul>
</div>

<h3>🔵 t分布 t(n)</h3>

<p>標準正規変数をカイ二乗変数の平方根で割ったものが従う分布です。<strong>母分散が未知のとき</strong>に正規分布の代わりに使います。</p>

<div class="info-box formula">
<div class="info-box-title">📐 t分布の定義</div>
<p>Z ~ N(0,1)、V ~ χ²(n) が独立のとき：</p>
<p><span class="katex-eq display">T = \\frac{Z}{\\sqrt{V/n}} \\sim t(n)</span></p>
<p>nは<strong>自由度</strong></p>
<p>期待値：<span class="katex-eq">E(T) = 0</span>（n > 1 のとき）</p>
<p>分散：<span class="katex-eq">V(T) = \\frac{n}{n-2}</span>（n > 2 のとき）</p>
</div>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; padding:15px;">
<p style="font-weight:bold;">t分布 vs 正規分布</p>
<div style="display:flex; justify-content:center; align-items:flex-end; gap:2px; height:130px; margin:15px 0;">
<!-- t分布（裾が厚い） -->
<div style="width:8px; background:rgba(244,67,54,0.3); height:8%;"></div>
<div style="width:8px; background:rgba(244,67,54,0.3); height:11%;"></div>
<div style="width:8px; background:rgba(244,67,54,0.4); height:16%;"></div>
<div style="width:8px; background:rgba(244,67,54,0.4); height:24%;"></div>
<div style="width:8px; background:rgba(244,67,54,0.5); height:35%;"></div>
<div style="width:8px; background:rgba(244,67,54,0.5); height:50%;"></div>
<div style="width:8px; background:rgba(244,67,54,0.6); height:68%;"></div>
<div style="width:8px; background:rgba(244,67,54,0.7); height:82%;"></div>
<div style="width:8px; background:rgba(244,67,54,0.8); height:92%;"></div>
<div style="width:8px; background:rgba(244,67,54,0.9); height:98%;"></div>
<div style="width:8px; background:rgba(244,67,54,1); height:100%;"></div>
<div style="width:8px; background:rgba(244,67,54,0.9); height:98%;"></div>
<div style="width:8px; background:rgba(244,67,54,0.8); height:92%;"></div>
<div style="width:8px; background:rgba(244,67,54,0.7); height:82%;"></div>
<div style="width:8px; background:rgba(244,67,54,0.6); height:68%;"></div>
<div style="width:8px; background:rgba(244,67,54,0.5); height:50%;"></div>
<div style="width:8px; background:rgba(244,67,54,0.5); height:35%;"></div>
<div style="width:8px; background:rgba(244,67,54,0.4); height:24%;"></div>
<div style="width:8px; background:rgba(244,67,54,0.4); height:16%;"></div>
<div style="width:8px; background:rgba(244,67,54,0.3); height:11%;"></div>
<div style="width:8px; background:rgba(244,67,54,0.3); height:8%;"></div>
</div>
<p>🔴 t分布：正規分布より<strong>裾が厚い</strong>（ピークが低く、裾が広がる）</p>
<p style="color:#666;">自由度が大きくなる → 正規分布に近づく（目安：n ≥ 30）</p>
</div>
</div>

<table style="width:100%; text-align:center; border-collapse:collapse; margin:15px 0;">
<tr style="background:#ffebee;">
<th style="padding:8px; border:1px solid #ef9a9a;">特徴</th>
<th style="padding:8px; border:1px solid #ef9a9a;">t分布</th>
<th style="padding:8px; border:1px solid #ef9a9a;">正規分布</th>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ef9a9a;">形状</td>
<td style="padding:8px; border:1px solid #ef9a9a;">釣鐘型（やや平たい）</td>
<td style="padding:8px; border:1px solid #ef9a9a;">釣鐘型</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ef9a9a;">対称性</td>
<td style="padding:8px; border:1px solid #ef9a9a;">0を中心に左右対称</td>
<td style="padding:8px; border:1px solid #ef9a9a;">μを中心に左右対称</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ef9a9a;">裾の厚さ</td>
<td style="padding:8px; border:1px solid #ef9a9a;">正規分布より厚い</td>
<td style="padding:8px; border:1px solid #ef9a9a;">基準</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ef9a9a;">使う場面</td>
<td style="padding:8px; border:1px solid #ef9a9a;">母分散<strong>未知</strong></td>
<td style="padding:8px; border:1px solid #ef9a9a;">母分散<strong>既知</strong></td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ef9a9a;">n→∞のとき</td>
<td style="padding:8px; border:1px solid #ef9a9a;">→ N(0,1)に収束</td>
<td style="padding:8px; border:1px solid #ef9a9a;">-</td>
</tr>
</table>

<div class="info-box warning">
<div class="info-box-title">⚠️ 重要！</div>
<p>t分布を使う最も典型的な場面：<strong>「母分散が未知で、標本分散で代用するとき」</strong>です。母平均の検定・推定で頻出します。</p>
</div>

<h3>🔵 F分布 F(m, n)</h3>

<p>2つの独立なカイ二乗変数の比が従う分布です。<strong>2つの分散の比較</strong>に使います。</p>

<div class="info-box formula">
<div class="info-box-title">📐 F分布の定義</div>
<p><span class="katex-eq">U \\sim \\chi^2(m)</span>、<span class="katex-eq">V \\sim \\chi^2(n)</span> が独立のとき：</p>
<p><span class="katex-eq display">F = \\frac{U/m}{V/n} \\sim F(m, n)</span></p>
<p>m, nは第1自由度、第2自由度</p>
<p>期待値：<span class="katex-eq">E(F) = \\frac{n}{n-2}</span>（n > 2 のとき）</p>
</div>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="padding:15px;">
<p style="text-align:center; font-weight:bold;">F分布の形状</p>
<div style="display:flex; justify-content:center; align-items:flex-end; gap:3px; height:100px; margin:15px 0;">
<div style="width:15px; background:#ab47bc; height:40%;"></div>
<div style="width:15px; background:#ab47bc; height:85%;"></div>
<div style="width:15px; background:#ab47bc; height:100%; border-radius:2px 2px 0 0;"></div>
<div style="width:15px; background:#ab47bc; height:85%;"></div>
<div style="width:15px; background:#ce93d8; height:65%;"></div>
<div style="width:15px; background:#ce93d8; height:48%;"></div>
<div style="width:15px; background:#e1bee7; height:35%;"></div>
<div style="width:15px; background:#e1bee7; height:25%;"></div>
<div style="width:15px; background:#f3e5f5; height:18%;"></div>
<div style="width:15px; background:#f3e5f5; height:12%;"></div>
<div style="width:15px; background:#f3e5f5; height:8%;"></div>
<div style="width:15px; background:#fce4ec; height:5%;"></div>
<div style="width:15px; background:#fce4ec; height:3%;"></div>
</div>
<p style="text-align:center; color:#ab47bc;">F分布：右に裾を引く非対称な形（値は0以上）</p>
</div>
</div>

<table style="width:100%; text-align:center; border-collapse:collapse; margin:15px 0;">
<tr style="background:#f3e5f5;">
<th style="padding:8px; border:1px solid #ce93d8;">特徴</th>
<th style="padding:8px; border:1px solid #ce93d8;">説明</th>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ce93d8;">値の範囲</td>
<td style="padding:8px; border:1px solid #ce93d8;">0以上（比なので非負）</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ce93d8;">形状</td>
<td style="padding:8px; border:1px solid #ce93d8;">右に裾を引く非対称</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ce93d8;">自由度</td>
<td style="padding:8px; border:1px solid #ce93d8;">2つ必要（分子m、分母n）</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ce93d8;">主な用途</td>
<td style="padding:8px; border:1px solid #ce93d8;">等分散性の検定、分散分析</td>
</tr>
</table>

<h3>📊 3つの分布の関係まとめ</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<table style="width:100%; text-align:center; border-collapse:collapse;">
<tr style="background:#f5f5f5;">
<th style="padding:10px; border:1px solid #ddd;"></th>
<th style="padding:10px; border:1px solid #ddd;">χ²分布</th>
<th style="padding:10px; border:1px solid #ddd;">t分布</th>
<th style="padding:10px; border:1px solid #ddd;">F分布</th>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd; font-weight:bold;">成り立ち</td>
<td style="padding:10px; border:1px solid #ddd;">正規の二乗和</td>
<td style="padding:10px; border:1px solid #ddd;">正規÷√(χ²/n)</td>
<td style="padding:10px; border:1px solid #ddd;">χ²の比</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd; font-weight:bold;">自由度</td>
<td style="padding:10px; border:1px solid #ddd;">1つ (k)</td>
<td style="padding:10px; border:1px solid #ddd;">1つ (n)</td>
<td style="padding:10px; border:1px solid #ddd;">2つ (m, n)</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd; font-weight:bold;">値の範囲</td>
<td style="padding:10px; border:1px solid #ddd;">0以上</td>
<td style="padding:10px; border:1px solid #ddd;">全実数</td>
<td style="padding:10px; border:1px solid #ddd;">0以上</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd; font-weight:bold;">対称性</td>
<td style="padding:10px; border:1px solid #ddd;">非対称（右裾）</td>
<td style="padding:10px; border:1px solid #ddd;">0中心に対称</td>
<td style="padding:10px; border:1px solid #ddd;">非対称（右裾）</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd; font-weight:bold;">主な用途</td>
<td style="padding:10px; border:1px solid #ddd;">適合度検定<br>独立性の検定</td>
<td style="padding:10px; border:1px solid #ddd;">母平均の検定<br>（母分散未知）</td>
<td style="padding:10px; border:1px solid #ddd;">等分散の検定<br>分散分析</td>
</tr>
</table>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>t分布の二乗はF分布になります：<span class="katex-eq">T^2 \\sim F(1, n)</span></p>
<p>この関係も覚えておくと便利です。</p>
</div>

<div class="info-box success">
<div class="info-box-title">✅ 試験対策の暗記ポイント</div>
<ol>
<li><strong>χ²分布</strong>：正規の二乗和、値≥0、右裾、期待値=自由度</li>
<li><strong>t分布</strong>：正規に似ているが裾が厚い、n→∞で正規に収束</li>
<li><strong>F分布</strong>：2つのχ²の比、自由度2つ必要、値≥0</li>
<li>母分散未知 → t分布、分散の比較 → F分布</li>
</ol>
</div>
`,
            quiz: [
                {
                    id: "q304_1",
                    type: "choice",
                    question: "カイ二乗分布χ²(k)の期待値として正しいものはどれか？",
                    options: ["0", "1", "k（自由度）", "2k"],
                    answer: 2,
                    explanation: "カイ二乗分布χ²(k)の期待値はk（自由度）です。分散は2kです。標準正規変数の二乗の期待値が1で、それをk個足すので期待値はkになります。"
                },
                {
                    id: "q304_2",
                    type: "choice",
                    question: "t分布と標準正規分布を比較したとき、t分布の特徴として正しいものはどれか？",
                    options: [
                        "t分布の方が裾が薄い",
                        "t分布の方が裾が厚い（ピークが低い）",
                        "t分布は左右非対称である",
                        "t分布の期待値は1である"
                    ],
                    answer: 1,
                    explanation: "t分布は標準正規分布と同じく0を中心に左右対称ですが、裾が厚く（ピークが低い）なっています。自由度が大きくなると標準正規分布に近づきます。"
                },
                {
                    id: "q304_3",
                    type: "choice",
                    question: "母分散が未知のとき、母平均の検定で使う分布はどれか？",
                    options: ["標準正規分布", "t分布", "F分布", "カイ二乗分布"],
                    answer: 1,
                    explanation: "母分散が未知で標本分散で代用する場合、検定統計量はt分布に従います。これは統計検定2級で最も頻出のパターンです。"
                },
                {
                    id: "q304_4",
                    type: "choice",
                    question: "F分布はどのように構成されるか？",
                    options: [
                        "正規分布を二乗したもの",
                        "t分布を2つ足したもの",
                        "2つの独立なカイ二乗変数をそれぞれの自由度で割った比",
                        "カイ二乗変数と正規変数の積"
                    ],
                    answer: 2,
                    explanation: "F分布は、2つの独立なカイ二乗変数をそれぞれの自由度で割った比（(χ²₁/m)/(χ²₂/n)）として定義されます。分散の比較や分散分析で使います。"
                },
                {
                    id: "q304_5",
                    type: "choice",
                    question: "t分布の自由度を大きくしていくと、どの分布に近づくか？",
                    options: ["一様分布", "指数分布", "標準正規分布 N(0,1)", "カイ二乗分布"],
                    answer: 2,
                    explanation: "t分布は自由度が大きくなると標準正規分布N(0,1)に近づきます。実務では自由度30以上で正規分布に十分近いとみなされることが多いです。"
                }
            ]
        },

        // ============================================================
        // Module 305: 中心極限定理と標本分布
        // ============================================================
        {
            id: 305,
            title: "中心極限定理と標本分布",
            duration: "20分",
            content: `
<h2>🎯 中心極限定理と標本分布</h2>

<p>中心極限定理は統計学で<strong>最も偉大な定理</strong>と言われます。「なぜ正規分布がそこまで重要なのか」の答えがここにあります。</p>

<h3>🔵 母集団と標本</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; padding:20px;">
<div style="display:flex; justify-content:center; align-items:center; gap:30px; flex-wrap:wrap;">
<div style="background:#e3f2fd; padding:25px; border-radius:50%; width:180px; height:180px; display:flex; flex-direction:column; justify-content:center; align-items:center;">
<div style="font-size:2em;">🌍</div>
<strong style="font-size:1.1em;">母集団</strong><br>
<span style="font-size:0.85em;">知りたい全体<br>母平均μ、母分散σ²</span>
</div>
<div style="font-size:2em;">→ 抽出</div>
<div style="background:#fff3e0; padding:20px; border-radius:10px; width:160px; text-align:center;">
<div style="font-size:1.5em;">📋</div>
<strong>標本</strong><br>
<span style="font-size:0.85em;">実際に調べた一部<br>n個のデータ<br>X₁, X₂, ..., Xₙ</span>
</div>
</div>
<p style="margin-top:15px;">標本から母集団の性質を<strong>推測</strong>する = 統計的推測</p>
</div>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<ul>
<li><strong>母集団</strong>：調べたい対象全体（例：日本国民全員の身長）</li>
<li><strong>標本</strong>：母集団から無作為に選んだ一部（例：1000人の身長）</li>
<li><strong>標本統計量</strong>：標本から計算した値（例：標本平均 <span class="katex-eq">\\bar{X}</span>）</li>
</ul>
</div>

<h3>🔵 標本平均の分布</h3>

<p>母集団から標本を何度も取ると、<strong>標本平均の値は毎回変わります</strong>。この標本平均自体も確率変数として分布を持ちます。</p>

<div class="info-box formula">
<div class="info-box-title">📐 標本平均の期待値と分散</div>
<p>母集団の平均μ、分散σ²からサイズnの標本を取るとき：</p>
<p>標本平均：<span class="katex-eq display">\\bar{X} = \\frac{1}{n}\\sum_{i=1}^{n} X_i</span></p>
<p>期待値：<span class="katex-eq display">E(\\bar{X}) = \\mu</span></p>
<p>分散：<span class="katex-eq display">V(\\bar{X}) = \\frac{\\sigma^2}{n}</span></p>
<p>標準偏差（標準誤差）：<span class="katex-eq display">\\text{SE} = \\frac{\\sigma}{\\sqrt{n}}</span></p>
</div>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; padding:15px;">
<p style="font-weight:bold; font-size:1.1em;">標本サイズnが大きくなるとどうなる？</p>
<div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap; margin:15px 0;">
<div style="text-align:center; padding:10px;">
<p><strong>n = 1</strong></p>
<div style="display:flex; justify-content:center; align-items:flex-end; gap:1px; height:80px;">
<div style="width:6px; background:#ef9a9a; height:20%;"></div>
<div style="width:6px; background:#ef9a9a; height:35%;"></div>
<div style="width:6px; background:#ef5350; height:55%;"></div>
<div style="width:6px; background:#e53935; height:75%;"></div>
<div style="width:6px; background:#e53935; height:90%;"></div>
<div style="width:6px; background:#c62828; height:100%;"></div>
<div style="width:6px; background:#e53935; height:90%;"></div>
<div style="width:6px; background:#e53935; height:75%;"></div>
<div style="width:6px; background:#ef5350; height:55%;"></div>
<div style="width:6px; background:#ef9a9a; height:35%;"></div>
<div style="width:6px; background:#ef9a9a; height:20%;"></div>
</div>
<p style="font-size:0.8em;">散らばりが大きい</p>
</div>
<div style="text-align:center; padding:10px;">
<p><strong>n = 10</strong></p>
<div style="display:flex; justify-content:center; align-items:flex-end; gap:1px; height:80px;">
<div style="width:6px; background:#a5d6a7; height:8%;"></div>
<div style="width:6px; background:#a5d6a7; height:20%;"></div>
<div style="width:6px; background:#66bb6a; height:45%;"></div>
<div style="width:6px; background:#43a047; height:75%;"></div>
<div style="width:6px; background:#2e7d32; height:95%;"></div>
<div style="width:6px; background:#1b5e20; height:100%;"></div>
<div style="width:6px; background:#2e7d32; height:95%;"></div>
<div style="width:6px; background:#43a047; height:75%;"></div>
<div style="width:6px; background:#66bb6a; height:45%;"></div>
<div style="width:6px; background:#a5d6a7; height:20%;"></div>
<div style="width:6px; background:#a5d6a7; height:8%;"></div>
</div>
<p style="font-size:0.8em;">少し狭くなる</p>
</div>
<div style="text-align:center; padding:10px;">
<p><strong>n = 100</strong></p>
<div style="display:flex; justify-content:center; align-items:flex-end; gap:1px; height:80px;">
<div style="width:6px; background:#90caf9; height:3%;"></div>
<div style="width:6px; background:#90caf9; height:10%;"></div>
<div style="width:6px; background:#42a5f5; height:35%;"></div>
<div style="width:6px; background:#1e88e5; height:72%;"></div>
<div style="width:6px; background:#1565c0; height:95%;"></div>
<div style="width:6px; background:#0d47a1; height:100%;"></div>
<div style="width:6px; background:#1565c0; height:95%;"></div>
<div style="width:6px; background:#1e88e5; height:72%;"></div>
<div style="width:6px; background:#42a5f5; height:35%;"></div>
<div style="width:6px; background:#90caf9; height:10%;"></div>
<div style="width:6px; background:#90caf9; height:3%;"></div>
</div>
<p style="font-size:0.8em;">かなり狭い！</p>
</div>
</div>
<p style="color:#666;">nが大きいほど <span class="katex-eq">\\bar{X}</span> はμの周りに集中する（分散 = σ²/n が小さくなる）</p>
</div>
</div>

<h3>🌟 中心極限定理（CLT）</h3>

<p>これが統計学で最も重要な定理です。</p>

<div class="info-box formula">
<div class="info-box-title">📐 中心極限定理</div>
<p>母集団の分布が<strong>何であっても</strong>（正規分布でなくても）、標本サイズnが十分大きいとき：</p>
<p><span class="katex-eq display">\\bar{X} \\approx N\\left(\\mu,\\; \\frac{\\sigma^2}{n}\\right)</span></p>
<p>標準化すると：</p>
<p><span class="katex-eq display">\\frac{\\bar{X} - \\mu}{\\sigma / \\sqrt{n}} \\approx N(0, 1)</span></p>
<p>「十分大きい」の目安：<strong>n ≥ 30</strong></p>
</div>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; padding:20px;">
<p style="font-weight:bold; font-size:1.2em; margin-bottom:15px;">中心極限定理の魔法</p>
<div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap; margin-bottom:15px;">
<div style="background:#ffcdd2; padding:12px; border-radius:8px; width:120px;">
<div style="font-size:1.5em;">📊</div>
<strong>一様分布</strong><br>
<span style="font-size:0.8em;">（平らな形）</span>
</div>
<div style="background:#fff9c4; padding:12px; border-radius:8px; width:120px;">
<div style="font-size:1.5em;">📈</div>
<strong>指数分布</strong><br>
<span style="font-size:0.8em;">（右下がり）</span>
</div>
<div style="background:#c8e6c9; padding:12px; border-radius:8px; width:120px;">
<div style="font-size:1.5em;">📉</div>
<strong>二項分布</strong><br>
<span style="font-size:0.8em;">（離散型）</span>
</div>
<div style="background:#d1c4e9; padding:12px; border-radius:8px; width:120px;">
<div style="font-size:1.5em;">❓</div>
<strong>その他</strong><br>
<span style="font-size:0.8em;">（何でもOK）</span>
</div>
</div>
<div style="font-size:2em; margin:10px 0;">↓ <span style="font-size:0.6em;">標本平均を求めると（n≥30）</span></div>
<div style="background:#e3f2fd; padding:20px; border-radius:15px; display:inline-block;">
<div style="font-size:2em;">🔔</div>
<strong style="font-size:1.3em;">すべて正規分布に近づく！</strong>
</div>
</div>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 なぜ中心極限定理が重要？</div>
<ol>
<li><strong>正規分布の万能性</strong>：どんな母集団でも標本平均は正規分布で扱える</li>
<li><strong>推定・検定の基礎</strong>：区間推定や仮説検定がすべてこの定理に基づく</li>
<li><strong>実用性</strong>：母集団の分布を知らなくても統計的推測ができる</li>
</ol>
</div>

<h3>🔵 大数の法則との違い</h3>

<p>中心極限定理と大数の法則は混同されやすいですが、<strong>主張が異なります</strong>。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<table style="width:100%; text-align:center; border-collapse:collapse;">
<tr style="background:#e8eaf6;">
<th style="padding:10px; border:1px solid #9fa8da;"></th>
<th style="padding:10px; border:1px solid #9fa8da;">大数の法則</th>
<th style="padding:10px; border:1px solid #9fa8da;">中心極限定理</th>
</tr>
<tr>
<td style="padding:10px; border:1px solid #9fa8da; font-weight:bold;">主張</td>
<td style="padding:10px; border:1px solid #9fa8da;"><span class="katex-eq">\\bar{X}</span> は μ に<strong>収束</strong>する</td>
<td style="padding:10px; border:1px solid #9fa8da;"><span class="katex-eq">\\bar{X}</span> は<strong>正規分布に従う</strong></td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #9fa8da; font-weight:bold;">何を言っている？</td>
<td style="padding:10px; border:1px solid #9fa8da;">「どこに集まるか」<br>（行き先）</td>
<td style="padding:10px; border:1px solid #9fa8da;">「どう散らばるか」<br>（分布の形）</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #9fa8da; font-weight:bold;">イメージ</td>
<td style="padding:10px; border:1px solid #9fa8da;">🎯 的の中心に当たる</td>
<td style="padding:10px; border:1px solid #9fa8da;">🔔 ベルカーブ状に散らばる</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #9fa8da; font-weight:bold;">例</td>
<td style="padding:10px; border:1px solid #9fa8da;">サイコロを何万回も振ると<br>平均は3.5に近づく</td>
<td style="padding:10px; border:1px solid #9fa8da;">サイコロ30回の平均を何度も求めると<br>その分布は正規分布になる</td>
</tr>
</table>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 試験での注意点</div>
<p>「中心極限定理により<span class="katex-eq">\\bar{X}</span>はμに収束する」は<strong>誤り</strong>です。これは大数の法則の主張です。中心極限定理は<strong>分布の形が正規分布に近づく</strong>ことを述べています。</p>
</div>

<h3>📝 計算例</h3>

<p>ある母集団の平均μ=100、分散σ²=400 から、n=64 の標本を取るとき、標本平均 <span class="katex-eq">\\bar{X}</span> が 95 以上 105 以下になる確率は？</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content"><strong>標本平均の分布を求める</strong>：中心極限定理より <span class="katex-eq">\\bar{X} \\sim N(100, 400/64) = N(100, 6.25)</span></div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content"><strong>標準誤差を計算</strong>：<span class="katex-eq">\\text{SE} = \\sqrt{6.25} = 2.5</span></div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content"><strong>Z値を計算</strong>：<span class="katex-eq">Z_1 = \\frac{95-100}{2.5} = -2.0</span>、<span class="katex-eq">Z_2 = \\frac{105-100}{2.5} = 2.0</span></div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content"><strong>確率を求める</strong>：<span class="katex-eq">P(-2.0 \\leq Z \\leq 2.0) \\approx 0.9544</span> → <strong>約95.4%</strong></div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールの最重要ポイント</div>
<ol>
<li><strong>標本平均の期待値</strong>：<span class="katex-eq">E(\\bar{X}) = \\mu</span>（不偏性）</li>
<li><strong>標本平均の分散</strong>：<span class="katex-eq">V(\\bar{X}) = \\sigma^2/n</span>（nが大きいほど精度UP）</li>
<li><strong>中心極限定理</strong>：どんな母集団でも、nが大きければ <span class="katex-eq">\\bar{X}</span> は正規分布に近づく</li>
<li><strong>大数の法則</strong>との区別：大数の法則は「収束先」、CLTは「分布の形」</li>
<li>標準誤差 SE = σ/√n は推定精度の指標</li>
</ol>
</div>
`,
            quiz: [
                {
                    id: "q305_1",
                    type: "choice",
                    question: "母平均μ、母分散σ²の母集団からサイズnの無作為標本を取るとき、標本平均の分散はどれか？",
                    options: ["σ²", "σ²/n", "σ²×n", "σ/n"],
                    answer: 1,
                    explanation: "標本平均の分散は V(X̄) = σ²/n です。標本サイズnが大きいほど分散は小さくなり、標本平均の精度が上がります。"
                },
                {
                    id: "q305_2",
                    type: "choice",
                    question: "中心極限定理の主張として正しいものはどれか？",
                    options: [
                        "標本サイズが大きいとき、標本平均はμに収束する",
                        "標本サイズが大きいとき、母集団は正規分布になる",
                        "標本サイズが大きいとき、標本平均の分布は正規分布に近づく",
                        "標本サイズが大きいとき、すべてのデータは正規分布に従う"
                    ],
                    answer: 2,
                    explanation: "中心極限定理は「母集団の分布がどんなものでも、標本サイズnが十分大きければ、標本平均の分布は正規分布に近づく」という定理です。「μに収束する」のは大数の法則の主張です。"
                },
                {
                    id: "q305_3",
                    type: "choice",
                    question: "大数の法則と中心極限定理の違いについて正しい記述はどれか？",
                    options: [
                        "どちらも標本平均が正規分布に従うことを述べている",
                        "大数の法則は収束先、中心極限定理は分布の形を述べている",
                        "大数の法則は連続型のみ、中心極限定理は離散型のみに適用される",
                        "どちらも全く同じことを別の言い方で述べている"
                    ],
                    answer: 1,
                    explanation: "大数の法則は「標本平均がμに収束する（どこに集まるか）」、中心極限定理は「標本平均の分布が正規分布に近づく（どう散らばるか）」を述べており、主張の内容が異なります。"
                },
                {
                    id: "q305_4",
                    type: "choice",
                    question: "母分散σ²=100の母集団から標本サイズn=25の標本を取るとき、標本平均の標準誤差（SE）はいくつか？",
                    options: ["2", "4", "5", "20"],
                    answer: 0,
                    explanation: "標準誤差 SE = σ/√n = √100/√25 = 10/5 = 2 です。標準誤差は標本平均のばらつきの大きさを表し、nが大きいほど小さくなります。"
                },
                {
                    id: "q305_5",
                    type: "choice",
                    question: "中心極限定理が「十分に成り立つ」とされる標本サイズの一般的な目安はどれか？",
                    options: ["n ≥ 5", "n ≥ 10", "n ≥ 30", "n ≥ 100"],
                    answer: 2,
                    explanation: "一般的に n ≥ 30 が目安とされます。ただし母集団の分布が正規分布に近い場合はより小さいnでも適用でき、極端に歪んだ分布の場合はもっと大きなnが必要になることもあります。"
                }
            ]
        }
    ]
};
