/* ============================================
   Level 6: 回帰分析
   統計検定2級アカデミー
   ============================================ */

const LEVEL6_DATA = {
    id: 6,
    title: "回帰分析",
    icon: "📉",
    description: "回帰分析の理論と実践を図解で学ぶ",
    modules: [
        // ========================================
        // Module 601: 単回帰分析
        // ========================================
        {
            id: 601,
            title: "単回帰分析",
            duration: "25分",
            content: `
<h2>単回帰分析 ― 2変数の関係を直線で表す</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
単回帰分析は、1つの説明変数 <span class="katex-eq">x</span> から目的変数 <span class="katex-eq">y</span> を予測する手法です。統計検定2級では最も出題頻度の高い分野の一つです。
</div>

<h3>1. 散布図と回帰直線</h3>
<p>まず、2変数のデータを散布図にプロットします。そこに「データの傾向を最もよく表す直線」を引いたものが<strong>回帰直線</strong>です。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="position:relative;width:100%;max-width:480px;height:340px;margin:0 auto;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;overflow:hidden;">
  <!-- 軸 -->
  <div style="position:absolute;left:50px;top:10px;bottom:40px;width:2px;background:var(--text-secondary);"></div>
  <div style="position:absolute;left:50px;bottom:40px;right:10px;height:2px;background:var(--text-secondary);"></div>
  <div style="position:absolute;left:10px;top:10px;font-size:0.8rem;color:var(--text-secondary);font-weight:600;">y</div>
  <div style="position:absolute;right:10px;bottom:20px;font-size:0.8rem;color:var(--text-secondary);font-weight:600;">x</div>
  <!-- データ点 -->
  <div style="position:absolute;left:80px;bottom:80px;width:10px;height:10px;background:#4f8cff;border-radius:50%;"></div>
  <div style="position:absolute;left:110px;bottom:105px;width:10px;height:10px;background:#4f8cff;border-radius:50%;"></div>
  <div style="position:absolute;left:140px;bottom:95px;width:10px;height:10px;background:#4f8cff;border-radius:50%;"></div>
  <div style="position:absolute;left:170px;bottom:130px;width:10px;height:10px;background:#4f8cff;border-radius:50%;"></div>
  <div style="position:absolute;left:200px;bottom:150px;width:10px;height:10px;background:#4f8cff;border-radius:50%;"></div>
  <div style="position:absolute;left:230px;bottom:140px;width:10px;height:10px;background:#4f8cff;border-radius:50%;"></div>
  <div style="position:absolute;left:260px;bottom:175px;width:10px;height:10px;background:#4f8cff;border-radius:50%;"></div>
  <div style="position:absolute;left:290px;bottom:185px;width:10px;height:10px;background:#4f8cff;border-radius:50%;"></div>
  <div style="position:absolute;left:320px;bottom:200px;width:10px;height:10px;background:#4f8cff;border-radius:50%;"></div>
  <div style="position:absolute;left:360px;bottom:230px;width:10px;height:10px;background:#4f8cff;border-radius:50%;"></div>
  <div style="position:absolute;left:390px;bottom:250px;width:10px;height:10px;background:#4f8cff;border-radius:50%;"></div>
  <div style="position:absolute;left:420px;bottom:260px;width:10px;height:10px;background:#4f8cff;border-radius:50%;"></div>
  <!-- 回帰直線 -->
  <div style="position:absolute;left:55px;bottom:60px;width:400px;height:3px;background:#ff6b6b;transform:rotate(-28deg);transform-origin:left center;border-radius:2px;"></div>
  <!-- ラベル -->
  <div style="position:absolute;right:20px;top:30px;background:#ff6b6b;color:white;padding:3px 10px;border-radius:4px;font-size:0.75rem;font-weight:600;">回帰直線</div>
  <!-- 平均点マーカー -->
  <div style="position:absolute;left:230px;bottom:155px;width:16px;height:16px;border:3px solid #ffa500;border-radius:50%;background:transparent;"></div>
  <div style="position:absolute;left:248px;bottom:158px;font-size:0.7rem;color:#ffa500;font-weight:bold;white-space:nowrap;">(x&#772;, y&#772;)</div>
  <!-- 残差表示 -->
  <div style="position:absolute;left:174px;bottom:120px;width:2px;height:15px;background:#22c55e;"></div>
  <div style="position:absolute;left:180px;bottom:115px;font-size:0.6rem;color:#22c55e;font-weight:bold;">残差</div>
</div>
<p style="text-align:center;font-size:0.85rem;color:var(--text-secondary);margin-top:10px;">青い点=データ、赤い線=回帰直線、オレンジ丸=平均点（必ず直線上）、緑=残差</p>
</div>

<h3>2. 回帰モデル</h3>
<p>単回帰モデルは次のように表されます。</p>

<div class="info-box formula">
<div class="info-box-title">📐 回帰モデル</div>
<span class="katex-eq display">y_i = \\beta_0 + \\beta_1 x_i + \\varepsilon_i</span>
<table style="width:100%;margin-top:12px;font-size:0.9rem;">
<tr><td style="width:100px;font-weight:600;"><span class="katex-eq">y_i</span></td><td>目的変数（予測したい変数）</td></tr>
<tr><td style="font-weight:600;"><span class="katex-eq">x_i</span></td><td>説明変数（予測に使う変数）</td></tr>
<tr><td style="font-weight:600;"><span class="katex-eq">\\beta_0</span></td><td>切片（<span class="katex-eq">x=0</span> のときの <span class="katex-eq">y</span> の値）</td></tr>
<tr><td style="font-weight:600;"><span class="katex-eq">\\beta_1</span></td><td>回帰係数（<span class="katex-eq">x</span> が1増えたときの <span class="katex-eq">y</span> の変化量）</td></tr>
<tr><td style="font-weight:600;"><span class="katex-eq">\\varepsilon_i</span></td><td>誤差項（モデルで説明できないランダムな変動）</td></tr>
</table>
</div>

<h3>3. 最小二乗法（OLS）</h3>
<p>回帰直線の引き方にはルールがあります。<strong>残差（実測値と予測値のズレ）の二乗和が最小になる</strong>直線を選びます。これが最小二乗法です。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="display:flex;align-items:center;justify-content:center;gap:30px;flex-wrap:wrap;padding:16px;">
  <div style="text-align:center;">
    <div style="font-size:1.8rem;margin-bottom:6px;">📊</div>
    <div style="font-size:0.85rem;font-weight:600;">各データ点と直線の<br>縦のズレ（残差）</div>
  </div>
  <div style="font-size:1.5rem;color:var(--text-secondary);">→</div>
  <div style="text-align:center;">
    <div style="font-size:1.8rem;margin-bottom:6px;">✖️</div>
    <div style="font-size:0.85rem;font-weight:600;">それぞれを<br>二乗する</div>
  </div>
  <div style="font-size:1.5rem;color:var(--text-secondary);">→</div>
  <div style="text-align:center;">
    <div style="font-size:1.8rem;margin-bottom:6px;">➕</div>
    <div style="font-size:0.85rem;font-weight:600;">全部足し合わせる<br>（残差二乗和）</div>
  </div>
  <div style="font-size:1.5rem;color:var(--text-secondary);">→</div>
  <div style="text-align:center;background:#22c55e20;padding:10px;border-radius:8px;">
    <div style="font-size:1.8rem;margin-bottom:6px;">📉</div>
    <div style="font-size:0.85rem;font-weight:600;color:#22c55e;">これを最小にする<br>直線を選ぶ！</div>
  </div>
</div>
<span class="katex-eq display">\\text{最小化：} \\sum_{i=1}^{n}(y_i - \\hat{y}_i)^2 = \\sum_{i=1}^{n}(y_i - \\hat{\\beta}_0 - \\hat{\\beta}_1 x_i)^2</span>
</div>

<h3>4. 回帰係数の公式</h3>
<p>最小二乗法で求められる回帰係数は以下の通りです。</p>

<div class="info-box formula">
<div class="info-box-title">📐 回帰係数の公式</div>
<p><strong>傾き（回帰係数）：</strong></p>
<span class="katex-eq display">\\hat{\\beta}_1 = \\frac{S_{xy}}{S_{xx}} = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})(y_i - \\bar{y})}{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}</span>
<p><strong>切片：</strong></p>
<span class="katex-eq display">\\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1 \\bar{x}</span>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<strong>回帰係数は相関係数と関連しています。</strong>
<span class="katex-eq display">\\hat{\\beta}_1 = r \\cdot \\frac{s_y}{s_x}</span>
<p>ここで <span class="katex-eq">r</span> は相関係数、<span class="katex-eq">s_x, s_y</span> はそれぞれの標準偏差です。相関が正なら傾きも正、相関が負なら傾きも負になります。</p>
</div>

<h3>5. 回帰直線は (x&#772;, y&#772;) を必ず通る</h3>
<p>これは統計検定でよく問われる重要な性質です。</p>

<div class="info-box warning">
<div class="info-box-title">⚠️ 試験で頻出！</div>
<p>回帰直線 <span class="katex-eq">\\hat{y} = \\hat{\\beta}_0 + \\hat{\\beta}_1 x</span> に <span class="katex-eq">x = \\bar{x}</span> を代入すると：</p>
<span class="katex-eq display">\\hat{y} = \\hat{\\beta}_0 + \\hat{\\beta}_1 \\bar{x} = (\\bar{y} - \\hat{\\beta}_1 \\bar{x}) + \\hat{\\beta}_1 \\bar{x} = \\bar{y}</span>
<p>つまり、回帰直線は<strong>必ず平均点 <span class="katex-eq">(\\bar{x}, \\bar{y})</span> を通ります</strong>。これは切片の定義式から自動的に成り立ちます。</p>
</div>

<h3>6. 予測値と残差</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>予測値</strong> <span class="katex-eq">\\hat{y}_i</span>：回帰直線上の値
<span class="katex-eq display">\\hat{y}_i = \\hat{\\beta}_0 + \\hat{\\beta}_1 x_i</span>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>残差</strong> <span class="katex-eq">e_i</span>：実測値と予測値のズレ
<span class="katex-eq display">e_i = y_i - \\hat{y}_i</span>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>残差の重要な性質</strong>：
<ul>
<li>残差の合計は必ず0：<span class="katex-eq">\\sum e_i = 0</span></li>
<li>残差と説明変数は無相関：<span class="katex-eq">\\sum e_i x_i = 0</span></li>
</ul>
</div>
</div>
</div>

<h3>7. 具体例で理解する</h3>

<div class="info-box success">
<div class="info-box-title">✅ 計算例</div>
<p>勉強時間 <span class="katex-eq">x</span>（時間）とテスト得点 <span class="katex-eq">y</span>（点）のデータ：</p>
<table style="width:100%;text-align:center;border-collapse:collapse;margin:10px 0;">
<tr style="background:var(--bg-main);"><th style="padding:8px;border:1px solid var(--border);">勉強時間 x</th><td style="padding:8px;border:1px solid var(--border);">2</td><td style="padding:8px;border:1px solid var(--border);">3</td><td style="padding:8px;border:1px solid var(--border);">5</td><td style="padding:8px;border:1px solid var(--border);">7</td><td style="padding:8px;border:1px solid var(--border);">8</td></tr>
<tr><th style="padding:8px;border:1px solid var(--border);">テスト得点 y</th><td style="padding:8px;border:1px solid var(--border);">40</td><td style="padding:8px;border:1px solid var(--border);">50</td><td style="padding:8px;border:1px solid var(--border);">60</td><td style="padding:8px;border:1px solid var(--border);">75</td><td style="padding:8px;border:1px solid var(--border);">80</td></tr>
</table>
<p><span class="katex-eq">\\bar{x} = 5, \\quad \\bar{y} = 61</span></p>
<p><span class="katex-eq">S_{xy} = 110, \\quad S_{xx} = 26</span></p>
<p><span class="katex-eq">\\hat{\\beta}_1 = 110/26 \\approx 4.23</span>（勉強1時間あたり約4.23点アップ）</p>
<p><span class="katex-eq">\\hat{\\beta}_0 = 61 - 4.23 \\times 5 \\approx 39.85</span></p>
<p>回帰直線：<span class="katex-eq">\\hat{y} = 39.85 + 4.23x</span></p>
</div>
`,
            quiz: [
                {
                    id: "q601_1",
                    type: "choice",
                    question: "最小二乗法で最小にするものはどれか。",
                    options: [
                        "残差の二乗和",
                        "残差の絶対値の和",
                        "残差の和",
                        "予測値の二乗和"
                    ],
                    answer: 0,
                    explanation: "最小二乗法（OLS）は、残差（実測値と予測値の差）の二乗和を最小にする方法です。残差の和は常に0になるため基準としては使えません。絶対値の和を最小にする方法もありますが（最小絶対偏差法）、統計検定2級では最小二乗法が出題対象です。"
                },
                {
                    id: "q601_2",
                    type: "choice",
                    question: "単回帰分析の回帰直線について正しいものはどれか。",
                    options: [
                        "必ず原点 (0, 0) を通る",
                        "必ず平均点 (x̄, ȳ) を通る",
                        "必ず最大値の点を通る",
                        "必ず中央値の点を通る"
                    ],
                    answer: 1,
                    explanation: "回帰直線は必ず平均点 (x̄, ȳ) を通ります。これは切片の公式 β̂₀ = ȳ - β̂₁x̄ から自動的に導かれます。x = x̄ を回帰式に代入すると ŷ = β̂₀ + β̂₁x̄ = (ȳ - β̂₁x̄) + β̂₁x̄ = ȳ となります。原点を通るとは限りません。"
                },
                {
                    id: "q601_3",
                    type: "choice",
                    question: "回帰係数 β̂₁ = 3.5 の解釈として正しいものはどれか。",
                    options: [
                        "説明変数 x が1単位増加すると、目的変数 y は平均して3.5単位増加する",
                        "目的変数 y が1単位増加すると、説明変数 x は3.5単位増加する",
                        "x と y の相関係数が3.5である",
                        "x = 0 のとき y = 3.5 である"
                    ],
                    answer: 0,
                    explanation: "回帰係数 β̂₁ は、説明変数 x が1単位増加したとき目的変数 y が平均的にどれだけ変化するかを表します。β̂₁ = 3.5 なら、x が1増えると y は平均して3.5増えると解釈します。x = 0 のときの y の値は切片 β̂₀ です。"
                },
                {
                    id: "q601_4",
                    type: "choice",
                    question: "残差 eᵢ について正しいものはどれか。",
                    options: [
                        "残差の合計は常に正の値になる",
                        "残差の合計は常に0になる",
                        "残差が大きいほどモデルの当てはまりが良い",
                        "残差は負の値を取ることはない"
                    ],
                    answer: 1,
                    explanation: "最小二乗法で求めた回帰直線では、残差の合計 Σeᵢ = 0 が必ず成り立ちます。これは最小二乗法の正規方程式から導かれる重要な性質です。残差は正にも負にもなり得ます（予測値より上にある点は正、下にある点は負）。"
                },
                {
                    id: "q601_5",
                    type: "choice",
                    question: "相関係数 r = 0.8、y の標準偏差 sᵧ = 10、x の標準偏差 sₓ = 5 のとき、回帰係数 β̂₁ はいくらか。",
                    options: [
                        "0.4",
                        "1.0",
                        "1.6",
                        "4.0"
                    ],
                    answer: 2,
                    explanation: "回帰係数と相関係数の関係式 β̂₁ = r × (sᵧ / sₓ) を使います。β̂₁ = 0.8 × (10 / 5) = 0.8 × 2 = 1.6 です。この公式は統計検定2級で頻出なので必ず覚えましょう。"
                }
            ]
        },

        // ========================================
        // Module 602: 回帰の評価と検定
        // ========================================
        {
            id: 602,
            title: "回帰の評価と検定",
            duration: "25分",
            content: `
<h2>回帰の評価と検定 ― モデルの良し悪しを測る</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
回帰直線を引いたら、次は「この直線はどれくらい当てはまっているか？」「この関係は統計的に意味があるか？」を評価します。決定係数と検定は試験頻出です！
</div>

<h3>1. 変動の分解</h3>
<p>目的変数 <span class="katex-eq">y</span> の変動（バラツキ）は、回帰で説明できる部分と説明できない部分に分解できます。</p>

<div class="info-box formula">
<div class="info-box-title">📐 変動の分解</div>
<span class="katex-eq display">\\underbrace{\\sum(y_i - \\bar{y})^2}_{\\text{全変動 SST}} = \\underbrace{\\sum(\\hat{y}_i - \\bar{y})^2}_{\\text{回帰変動 SSR}} + \\underbrace{\\sum(y_i - \\hat{y}_i)^2}_{\\text{残差変動 SSE}}</span>
</div>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="max-width:560px;margin:0 auto;padding:20px;">
  <!-- 全変動の分解図 -->
  <div style="display:flex;align-items:stretch;gap:0;height:160px;margin-bottom:20px;">
    <!-- SST -->
    <div style="flex:1;background:linear-gradient(135deg,#4f8cff33,#4f8cff11);border:2px solid #4f8cff;border-radius:12px 0 0 12px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px;">
      <div style="font-size:1.4rem;font-weight:700;color:#4f8cff;">SST</div>
      <div style="font-size:0.8rem;margin-top:4px;text-align:center;">全変動<br><span class="katex-eq">\\sum(y_i - \\bar{y})^2</span></div>
      <div style="font-size:0.75rem;color:var(--text-secondary);margin-top:6px;">y の全バラツキ</div>
    </div>
    <!-- = -->
    <div style="display:flex;align-items:center;padding:0 10px;font-size:1.5rem;font-weight:700;">=</div>
    <!-- SSR -->
    <div style="flex:1;background:linear-gradient(135deg,#22c55e33,#22c55e11);border:2px solid #22c55e;border-radius:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px;">
      <div style="font-size:1.4rem;font-weight:700;color:#22c55e;">SSR</div>
      <div style="font-size:0.8rem;margin-top:4px;text-align:center;">回帰変動<br><span class="katex-eq">\\sum(\\hat{y}_i - \\bar{y})^2</span></div>
      <div style="font-size:0.75rem;color:var(--text-secondary);margin-top:6px;">回帰で説明できた分</div>
    </div>
    <!-- + -->
    <div style="display:flex;align-items:center;padding:0 10px;font-size:1.5rem;font-weight:700;">+</div>
    <!-- SSE -->
    <div style="flex:1;background:linear-gradient(135deg,#ff6b6b33,#ff6b6b11);border:2px solid #ff6b6b;border-radius:0 12px 12px 0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px;">
      <div style="font-size:1.4rem;font-weight:700;color:#ff6b6b;">SSE</div>
      <div style="font-size:0.8rem;margin-top:4px;text-align:center;">残差変動<br><span class="katex-eq">\\sum(y_i - \\hat{y}_i)^2</span></div>
      <div style="font-size:0.75rem;color:var(--text-secondary);margin-top:6px;">説明できなかった分</div>
    </div>
  </div>
  <!-- バー表示 -->
  <div style="background:var(--bg-main);border-radius:8px;overflow:hidden;height:32px;display:flex;border:1px solid var(--border);">
    <div style="width:75%;background:linear-gradient(90deg,#22c55e,#22c55ecc);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.8rem;">SSR（75%）</div>
    <div style="width:25%;background:linear-gradient(90deg,#ff6b6bcc,#ff6b6b);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.8rem;">SSE（25%）</div>
  </div>
  <p style="text-align:center;font-size:0.8rem;color:var(--text-secondary);margin-top:8px;">この例では R² = 0.75（変動の75%を回帰で説明）</p>
</div>
</div>

<h3>2. 決定係数 R²</h3>
<p>決定係数は「回帰モデルがデータのバラツキをどの程度説明できているか」を表す指標です。</p>

<div class="info-box formula">
<div class="info-box-title">📐 決定係数</div>
<span class="katex-eq display">R^2 = \\frac{SSR}{SST} = 1 - \\frac{SSE}{SST}</span>
<ul style="margin-top:10px;">
<li><span class="katex-eq">0 \\leq R^2 \\leq 1</span></li>
<li><span class="katex-eq">R^2 = 1</span>：完全にデータを説明（全データ点が直線上）</li>
<li><span class="katex-eq">R^2 = 0</span>：全く説明できていない</li>
</ul>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 試験で頻出！</div>
<p><strong>単回帰分析では、決定係数は相関係数の二乗に等しい：</strong></p>
<span class="katex-eq display">R^2 = r^2</span>
<p>例えば、相関係数 <span class="katex-eq">r = -0.8</span> なら <span class="katex-eq">R^2 = 0.64</span> です。符号が消えることに注意してください。</p>
</div>

<h3>3. 決定係数の直感的な意味</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;padding:16px;">
  <div style="text-align:center;padding:16px;background:var(--bg-main);border-radius:8px;border:1px solid var(--border);">
    <div style="font-size:1.6rem;font-weight:700;color:#ff6b6b;">R² ≈ 0.1</div>
    <div style="margin:10px auto;width:100px;height:80px;position:relative;border-left:2px solid var(--text-secondary);border-bottom:2px solid var(--text-secondary);">
      <div style="position:absolute;left:10px;bottom:30px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:30px;bottom:60px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:50px;bottom:15px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:70px;bottom:50px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:85px;bottom:25px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
    </div>
    <div style="font-size:0.8rem;color:var(--text-secondary);">点がバラバラ<br>説明力が低い</div>
  </div>
  <div style="text-align:center;padding:16px;background:var(--bg-main);border-radius:8px;border:1px solid var(--border);">
    <div style="font-size:1.6rem;font-weight:700;color:#ffa500;">R² ≈ 0.6</div>
    <div style="margin:10px auto;width:100px;height:80px;position:relative;border-left:2px solid var(--text-secondary);border-bottom:2px solid var(--text-secondary);">
      <div style="position:absolute;left:10px;bottom:20px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:30px;bottom:30px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:50px;bottom:45px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:70px;bottom:50px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:85px;bottom:60px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
    </div>
    <div style="font-size:0.8rem;color:var(--text-secondary);">傾向は見えるが<br>ズレも大きい</div>
  </div>
  <div style="text-align:center;padding:16px;background:var(--bg-main);border-radius:8px;border:1px solid var(--border);">
    <div style="font-size:1.6rem;font-weight:700;color:#22c55e;">R² ≈ 0.95</div>
    <div style="margin:10px auto;width:100px;height:80px;position:relative;border-left:2px solid var(--text-secondary);border-bottom:2px solid var(--text-secondary);">
      <div style="position:absolute;left:10px;bottom:15px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:30px;bottom:28px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:50px;bottom:40px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:70px;bottom:53px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:85px;bottom:63px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
    </div>
    <div style="font-size:0.8rem;color:var(--text-secondary);">ほぼ直線上<br>説明力が高い</div>
  </div>
</div>
</div>

<h3>4. 回帰係数の有意性検定（t検定）</h3>
<p>「傾きが0ではない」= 「xとyに本当に線形関係がある」かを検定します。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>帰無仮説と対立仮説</strong>
<span class="katex-eq display">H_0: \\beta_1 = 0 \\quad \\text{（xとyに線形関係なし）}</span>
<span class="katex-eq display">H_1: \\beta_1 \\neq 0 \\quad \\text{（xとyに線形関係あり）}</span>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>t検定統計量を計算</strong>
<span class="katex-eq display">t = \\frac{\\hat{\\beta}_1}{SE(\\hat{\\beta}_1)}</span>
<p>ここで <span class="katex-eq">SE(\\hat{\\beta}_1)</span> は回帰係数の標準誤差です。</p>
<span class="katex-eq display">SE(\\hat{\\beta}_1) = \\sqrt{\\frac{\\hat{\\sigma}^2}{S_{xx}}} = \\sqrt{\\frac{SSE/(n-2)}{\\sum(x_i - \\bar{x})^2}}</span>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>自由度 n-2 の t分布と比較</strong>
<p><span class="katex-eq">|t|</span> が臨界値より大きければ <span class="katex-eq">H_0</span> を棄却（xとyに有意な線形関係がある）。</p>
</div>
</div>
</div>

<h3>5. 回帰の分散分析表（ANOVA表）</h3>
<p>回帰分析の結果をまとめた表です。統計検定では表を読み取る問題がよく出ます。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin:10px 0;">
<tr style="background:var(--bg-main);font-weight:700;">
<th style="padding:10px;border:1px solid var(--border);text-align:center;">変動因</th>
<th style="padding:10px;border:1px solid var(--border);text-align:center;">平方和(SS)</th>
<th style="padding:10px;border:1px solid var(--border);text-align:center;">自由度(df)</th>
<th style="padding:10px;border:1px solid var(--border);text-align:center;">平均平方(MS)</th>
<th style="padding:10px;border:1px solid var(--border);text-align:center;">F値</th>
</tr>
<tr style="background:#22c55e11;">
<td style="padding:10px;border:1px solid var(--border);font-weight:600;color:#22c55e;">回帰 (SSR)</td>
<td style="padding:10px;border:1px solid var(--border);text-align:center;"><span class="katex-eq">SSR</span></td>
<td style="padding:10px;border:1px solid var(--border);text-align:center;">1</td>
<td style="padding:10px;border:1px solid var(--border);text-align:center;"><span class="katex-eq">MSR = \\frac{SSR}{1}</span></td>
<td style="padding:10px;border:1px solid var(--border);text-align:center;" rowspan="2"><span class="katex-eq">F = \\frac{MSR}{MSE}</span></td>
</tr>
<tr style="background:#ff6b6b11;">
<td style="padding:10px;border:1px solid var(--border);font-weight:600;color:#ff6b6b;">残差 (SSE)</td>
<td style="padding:10px;border:1px solid var(--border);text-align:center;"><span class="katex-eq">SSE</span></td>
<td style="padding:10px;border:1px solid var(--border);text-align:center;"><span class="katex-eq">n-2</span></td>
<td style="padding:10px;border:1px solid var(--border);text-align:center;"><span class="katex-eq">MSE = \\frac{SSE}{n-2}</span></td>
</tr>
<tr style="background:var(--bg-main);">
<td style="padding:10px;border:1px solid var(--border);font-weight:600;">全体 (SST)</td>
<td style="padding:10px;border:1px solid var(--border);text-align:center;"><span class="katex-eq">SST</span></td>
<td style="padding:10px;border:1px solid var(--border);text-align:center;"><span class="katex-eq">n-1</span></td>
<td style="padding:10px;border:1px solid var(--border);text-align:center;">-</td>
<td style="padding:10px;border:1px solid var(--border);text-align:center;">-</td>
</tr>
</table>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<ul>
<li>単回帰では、回帰の自由度は<strong>1</strong>（説明変数が1つだから）</li>
<li>残差の自由度は <span class="katex-eq">n - 2</span>（パラメータ <span class="katex-eq">\\beta_0, \\beta_1</span> の2つを推定するため）</li>
<li>単回帰では <span class="katex-eq">F = t^2</span> が成り立つ（F検定とt検定は同じ結論になる）</li>
<li><span class="katex-eq">MSE</span> は誤差分散 <span class="katex-eq">\\hat{\\sigma}^2</span> の推定値</li>
</ul>
</div>

<h3>6. 残差分析の基本</h3>
<p>モデルの妥当性を確認するため、残差のパターンをチェックします。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:16px;">
  <div style="text-align:center;padding:12px;border:2px solid #22c55e;border-radius:8px;">
    <div style="font-weight:700;color:#22c55e;margin-bottom:8px;">良い残差パターン</div>
    <div style="position:relative;width:120px;height:80px;margin:0 auto;border-bottom:2px dashed var(--text-secondary);">
      <div style="position:absolute;left:5px;top:20px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:20px;bottom:15px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:40px;top:25px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:55px;bottom:20px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:75px;top:15px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:90px;bottom:10px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:110px;top:30px;width:5px;height:5px;background:#4f8cff;border-radius:50%;"></div>
    </div>
    <div style="font-size:0.75rem;margin-top:8px;">ランダムに散らばる</div>
  </div>
  <div style="text-align:center;padding:12px;border:2px solid #ff6b6b;border-radius:8px;">
    <div style="font-weight:700;color:#ff6b6b;margin-bottom:8px;">悪い残差パターン</div>
    <div style="position:relative;width:120px;height:80px;margin:0 auto;border-bottom:2px dashed var(--text-secondary);">
      <div style="position:absolute;left:5px;top:15px;width:5px;height:5px;background:#ff6b6b;border-radius:50%;"></div>
      <div style="position:absolute;left:20px;top:10px;width:5px;height:5px;background:#ff6b6b;border-radius:50%;"></div>
      <div style="position:absolute;left:40px;bottom:10px;width:5px;height:5px;background:#ff6b6b;border-radius:50%;"></div>
      <div style="position:absolute;left:55px;bottom:5px;width:5px;height:5px;background:#ff6b6b;border-radius:50%;"></div>
      <div style="position:absolute;left:75px;bottom:8px;width:5px;height:5px;background:#ff6b6b;border-radius:50%;"></div>
      <div style="position:absolute;left:90px;top:10px;width:5px;height:5px;background:#ff6b6b;border-radius:50%;"></div>
      <div style="position:absolute;left:110px;top:5px;width:5px;height:5px;background:#ff6b6b;border-radius:50%;"></div>
    </div>
    <div style="font-size:0.75rem;margin-top:8px;">U字型パターン<br>（非線形の兆候）</div>
  </div>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 残差プロットのチェックポイント</div>
<ul>
<li><strong>ランダム性</strong>：残差がランダムに散らばっていればOK</li>
<li><strong>等分散性</strong>：残差の散らばりが x の値によらず一定か</li>
<li><strong>パターンの有無</strong>：U字型やV字型ならモデルが不適切（非線形を考慮すべき）</li>
<li><strong>外れ値</strong>：極端に大きい残差がないか</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q602_1",
                    type: "choice",
                    question: "決定係数 R² = 0.64 のとき、単回帰分析における相関係数 r の絶対値はいくらか。",
                    options: [
                        "0.32",
                        "0.64",
                        "0.80",
                        "0.41"
                    ],
                    answer: 2,
                    explanation: "単回帰分析では R² = r² が成り立ちます。R² = 0.64 なら r² = 0.64、よって |r| = √0.64 = 0.80 です。相関係数の符号は回帰係数の符号と一致しますが、絶対値を問われているので 0.80 が正解です。"
                },
                {
                    id: "q602_2",
                    type: "choice",
                    question: "回帰の分散分析表で SST = 200、SSE = 50 のとき、決定係数 R² はいくらか。",
                    options: [
                        "0.25",
                        "0.50",
                        "0.75",
                        "4.00"
                    ],
                    answer: 2,
                    explanation: "R² = 1 - SSE/SST = 1 - 50/200 = 1 - 0.25 = 0.75 です。別の計算方法として、SSR = SST - SSE = 200 - 50 = 150 なので R² = SSR/SST = 150/200 = 0.75 としても同じ結果です。"
                },
                {
                    id: "q602_3",
                    type: "choice",
                    question: "データ数 n = 22 の単回帰分析における残差の自由度はいくらか。",
                    options: [
                        "19",
                        "20",
                        "21",
                        "22"
                    ],
                    answer: 1,
                    explanation: "単回帰分析の残差の自由度は n - 2 です。パラメータ β₀（切片）と β₁（傾き）の2つを推定するため、自由度は 22 - 2 = 20 になります。"
                },
                {
                    id: "q602_4",
                    type: "choice",
                    question: "回帰係数の有意性検定で帰無仮説 H₀: β₁ = 0 を棄却した場合、何が言えるか。",
                    options: [
                        "x と y の間に因果関係がある",
                        "x と y の間に統計的に有意な線形関係がある",
                        "R² = 1 である",
                        "すべてのデータ点が回帰直線上にある"
                    ],
                    answer: 1,
                    explanation: "帰無仮説 β₁ = 0 の棄却は、「xとyの間に統計的に有意な線形関係がある」ことを意味します。因果関係があるかどうかは回帰分析だけでは判断できません。また、有意であっても R² は1とは限りません。"
                },
                {
                    id: "q602_5",
                    type: "choice",
                    question: "残差プロット（横軸：予測値、縦軸：残差）でU字型のパターンが見られた場合、最も適切な対応はどれか。",
                    options: [
                        "データ数を増やす",
                        "説明変数の二乗項を追加するなど、非線形関係を考慮する",
                        "外れ値を全て除去する",
                        "対応は不要で現行モデルを採用する"
                    ],
                    answer: 1,
                    explanation: "残差にU字型パターンがある場合、直線モデルでは捉えきれない非線形関係が存在する可能性があります。説明変数の二乗項（x²）を追加したり、変数変換を行うなど、非線形関係を考慮したモデルに修正する必要があります。"
                }
            ]
        },

        // ========================================
        // Module 603: 重回帰分析
        // ========================================
        {
            id: 603,
            title: "重回帰分析",
            duration: "20分",
            content: `
<h2>重回帰分析 ― 複数の説明変数でより正確に予測する</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
重回帰分析は、<strong>複数の説明変数</strong>を使って目的変数を予測する手法です。単回帰を自然に拡張したものですが、特有の注意点もあります。
</div>

<h3>1. 重回帰モデル</h3>

<div class="info-box formula">
<div class="info-box-title">📐 重回帰モデル</div>
<span class="katex-eq display">y_i = \\beta_0 + \\beta_1 x_{i1} + \\beta_2 x_{i2} + \\cdots + \\beta_p x_{ip} + \\varepsilon_i</span>
<p>説明変数が <span class="katex-eq">p</span> 個のモデルです。各 <span class="katex-eq">\\beta_j</span> を<strong>偏回帰係数</strong>と呼びます。</p>
</div>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="max-width:500px;margin:0 auto;padding:20px;">
  <div style="display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;">
    <!-- 説明変数 -->
    <div style="display:flex;flex-direction:column;gap:10px;">
      <div style="background:#4f8cff22;border:2px solid #4f8cff;border-radius:8px;padding:10px 18px;text-align:center;font-weight:600;">
        <span class="katex-eq">x_1</span><br><span style="font-size:0.75rem;color:var(--text-secondary);">勉強時間</span>
      </div>
      <div style="background:#4f8cff22;border:2px solid #4f8cff;border-radius:8px;padding:10px 18px;text-align:center;font-weight:600;">
        <span class="katex-eq">x_2</span><br><span style="font-size:0.75rem;color:var(--text-secondary);">出席率</span>
      </div>
      <div style="background:#4f8cff22;border:2px solid #4f8cff;border-radius:8px;padding:10px 18px;text-align:center;font-weight:600;">
        <span class="katex-eq">x_3</span><br><span style="font-size:0.75rem;color:var(--text-secondary);">睡眠時間</span>
      </div>
    </div>
    <!-- 矢印 -->
    <div style="display:flex;flex-direction:column;gap:10px;align-items:center;">
      <div style="font-size:0.8rem;color:var(--text-secondary);">
        <span class="katex-eq">\\beta_1</span>
      </div>
      <div style="font-size:1.5rem;color:var(--text-secondary);">→</div>
      <div style="font-size:0.8rem;color:var(--text-secondary);">
        <span class="katex-eq">\\beta_2</span>
      </div>
      <div style="font-size:1.5rem;color:var(--text-secondary);">→</div>
      <div style="font-size:0.8rem;color:var(--text-secondary);">
        <span class="katex-eq">\\beta_3</span>
      </div>
    </div>
    <!-- 目的変数 -->
    <div style="background:#22c55e22;border:2px solid #22c55e;border-radius:12px;padding:20px 24px;text-align:center;font-weight:700;font-size:1.1rem;">
      <span class="katex-eq">y</span><br><span style="font-size:0.8rem;color:var(--text-secondary);">テスト点数</span>
    </div>
  </div>
  <p style="text-align:center;font-size:0.85rem;color:var(--text-secondary);margin-top:16px;">複数の要因を同時に考慮して予測する</p>
</div>
</div>

<h3>2. 偏回帰係数の解釈</h3>

<div class="info-box warning">
<div class="info-box-title">⚠️ 重要な違い！</div>
<p>偏回帰係数 <span class="katex-eq">\\beta_j</span> は「<strong>他の説明変数を一定にしたとき</strong>、<span class="katex-eq">x_j</span> が1単位増えると <span class="katex-eq">y</span> がどれだけ変化するか」を表します。</p>
<p>単回帰の回帰係数とは意味が異なります！</p>
</div>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
<tr style="background:var(--bg-main);font-weight:700;">
<th style="padding:10px;border:1px solid var(--border);">比較項目</th>
<th style="padding:10px;border:1px solid var(--border);text-align:center;">単回帰の回帰係数</th>
<th style="padding:10px;border:1px solid var(--border);text-align:center;">重回帰の偏回帰係数</th>
</tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);font-weight:600;">意味</td>
<td style="padding:10px;border:1px solid var(--border);">x が1増えたときの y の変化量</td>
<td style="padding:10px;border:1px solid var(--border);">他の変数を固定して x_j が1増えたときの y の変化量</td>
</tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);font-weight:600;">他の変数の影響</td>
<td style="padding:10px;border:1px solid var(--border);">考慮しない</td>
<td style="padding:10px;border:1px solid var(--border);">他の変数の影響を除いた純粋な効果</td>
</tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);font-weight:600;">数値</td>
<td style="padding:10px;border:1px solid var(--border);">単回帰と重回帰で異なりうる</td>
<td style="padding:10px;border:1px solid var(--border);">投入する変数の組み合わせで変化する</td>
</tr>
</table>
</div>

<div class="info-box success">
<div class="info-box-title">✅ 具体例</div>
<p><span class="katex-eq">\\hat{y} = 30 + 5x_1 + 0.3x_2</span>（y：テスト得点、x₁：勉強時間、x₂：出席率%）</p>
<ul>
<li><span class="katex-eq">\\hat{\\beta}_1 = 5</span>：出席率を固定して勉強時間が1時間増えると、テスト得点が平均5点上がる</li>
<li><span class="katex-eq">\\hat{\\beta}_2 = 0.3</span>：勉強時間を固定して出席率が1%上がると、テスト得点が平均0.3点上がる</li>
</ul>
</div>

<h3>3. 自由度調整済み決定係数</h3>
<p>重回帰では、説明変数を増やすと R² は必ず上がります（もしくは変わらない）。これは変数が無意味でも起こる問題です。</p>

<div class="info-box formula">
<div class="info-box-title">📐 自由度調整済み決定係数</div>
<span class="katex-eq display">\\bar{R}^2 = 1 - \\frac{SSE/(n-p-1)}{SST/(n-1)} = 1 - (1 - R^2)\\frac{n-1}{n-p-1}</span>
<p>ここで <span class="katex-eq">p</span> は説明変数の数、<span class="katex-eq">n</span> はデータ数です。</p>
</div>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;padding:16px;">
  <div style="background:#4f8cff11;border:2px solid #4f8cff;border-radius:10px;padding:16px;text-align:center;">
    <div style="font-size:1.2rem;font-weight:700;color:#4f8cff;">R²（決定係数）</div>
    <div style="margin:12px 0;font-size:0.85rem;">
      <div style="margin-bottom:6px;">変数を追加 → 必ず増加 ↑</div>
      <div style="color:var(--text-secondary);">無意味な変数でも上がってしまう</div>
    </div>
    <div style="background:#ff6b6b;color:white;padding:4px 10px;border-radius:4px;display:inline-block;font-size:0.8rem;">モデル比較には不向き</div>
  </div>
  <div style="background:#22c55e11;border:2px solid #22c55e;border-radius:10px;padding:16px;text-align:center;">
    <div style="font-size:1.2rem;font-weight:700;color:#22c55e;">調整済み R²</div>
    <div style="margin:12px 0;font-size:0.85rem;">
      <div style="margin-bottom:6px;">無意味な変数追加 → 下がりうる ↓</div>
      <div style="color:var(--text-secondary);">変数の数にペナルティをかける</div>
    </div>
    <div style="background:#22c55e;color:white;padding:4px 10px;border-radius:4px;display:inline-block;font-size:0.8rem;">モデル比較に適切</div>
  </div>
</div>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<ul>
<li>R² は変数を追加すれば必ず増加するため、変数の数が異なるモデルの比較には<strong>調整済み R²</strong> を使う</li>
<li>調整済み R² は負の値を取ることもある（モデルが非常に悪い場合）</li>
<li>統計検定では「R² と調整済み R² の違い」がよく問われる</li>
</ul>
</div>

<h3>4. 多重共線性</h3>
<p>説明変数同士が強く相関している場合に生じる問題を<strong>多重共線性（マルチコリニアリティ）</strong>と呼びます。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="max-width:450px;margin:0 auto;padding:20px;">
  <div style="display:flex;align-items:center;justify-content:center;gap:30px;">
    <div style="background:#ff6b6b22;border:2px solid #ff6b6b;border-radius:50%;width:100px;height:100px;display:flex;align-items:center;justify-content:center;font-weight:600;text-align:center;font-size:0.85rem;">
      <span class="katex-eq">x_1</span><br>身長
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;">
      <div style="font-size:1.5rem;">↔</div>
      <div style="font-size:0.8rem;color:#ff6b6b;font-weight:700;">r = 0.95</div>
      <div style="font-size:0.75rem;color:var(--text-secondary);">強い相関！</div>
    </div>
    <div style="background:#ff6b6b22;border:2px solid #ff6b6b;border-radius:50%;width:100px;height:100px;display:flex;align-items:center;justify-content:center;font-weight:600;text-align:center;font-size:0.85rem;">
      <span class="katex-eq">x_2</span><br>体重
    </div>
  </div>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 多重共線性の問題点</div>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin-top:10px;">
<tr style="background:var(--bg-main);font-weight:700;">
<th style="padding:8px;border:1px solid var(--border);">影響</th>
<th style="padding:8px;border:1px solid var(--border);">具体的な症状</th>
</tr>
<tr>
<td style="padding:8px;border:1px solid var(--border);">推定値が不安定</td>
<td style="padding:8px;border:1px solid var(--border);">偏回帰係数の符号が直感と逆になることがある</td>
</tr>
<tr>
<td style="padding:8px;border:1px solid var(--border);">標準誤差が増大</td>
<td style="padding:8px;border:1px solid var(--border);">t値が小さくなり、有意にならない</td>
</tr>
<tr>
<td style="padding:8px;border:1px solid var(--border);">解釈が困難</td>
<td style="padding:8px;border:1px solid var(--border);">「他の変数を固定」が現実的に不可能になる</td>
</tr>
</table>
<p style="margin-top:10px;"><strong>対処法：</strong>相関の高い変数の一方を除外する、主成分分析を利用する、VIF（分散拡大要因）で診断する</p>
</div>

<h3>5. 変数選択の基本</h3>
<p>どの説明変数をモデルに含めるかを決めるプロセスです。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>変数増加法（フォワード法）</strong><br>変数なしの状態から、最も有意な変数を1つずつ追加していく。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>変数減少法（バックワード法）</strong><br>全変数を入れた状態から、最も不要な変数を1つずつ除いていく。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>ステップワイズ法</strong><br>追加と除去を交互に行い、最適なモデルを探索する。
</div>
</div>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>変数選択の基準としては以下がよく使われます。</p>
<ul>
<li><strong>AIC（赤池情報量規準）</strong>：小さいほど良いモデル。尤度と変数の数のバランスを取る</li>
<li><strong>調整済み R²</strong>：大きいほど良いモデル</li>
<li><strong>各変数のt検定のp値</strong>：有意でない変数を除外</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q603_1",
                    type: "choice",
                    question: "重回帰分析の偏回帰係数 β̂₁ の解釈として正しいものはどれか。",
                    options: [
                        "x₁ が1増えたときの y の変化量",
                        "他の説明変数を一定にして x₁ が1増えたときの y の変化量",
                        "x₁ と y の相関係数",
                        "x₁ の標準偏差"
                    ],
                    answer: 1,
                    explanation: "重回帰分析の偏回帰係数は「他の全ての説明変数を一定に保ったとき、該当する説明変数が1単位増加した場合の目的変数の平均的な変化量」です。単回帰との違いに注意が必要です。"
                },
                {
                    id: "q603_2",
                    type: "choice",
                    question: "説明変数の数が異なる2つの重回帰モデルを比較する場合、最も適切な指標はどれか。",
                    options: [
                        "決定係数 R²",
                        "相関係数 r",
                        "自由度調整済み決定係数",
                        "残差の平均"
                    ],
                    answer: 2,
                    explanation: "通常の R² は変数を追加すると必ず増加（または同じ）になるため、変数の数が異なるモデルの比較には不適切です。自由度調整済み決定係数は変数の数にペナルティをかけるため、変数数が異なるモデルの比較に適しています。"
                },
                {
                    id: "q603_3",
                    type: "choice",
                    question: "多重共線性が生じている場合の典型的な症状として正しくないものはどれか。",
                    options: [
                        "偏回帰係数の符号が直感と逆になる",
                        "偏回帰係数の標準誤差が大きくなる",
                        "決定係数 R² が必ず0になる",
                        "個々の変数のt検定で有意にならないのにF検定は有意になる"
                    ],
                    answer: 2,
                    explanation: "多重共線性があっても R² は高い値を示すことがあります。典型的な症状は、偏回帰係数が不安定（符号が逆転）、標準誤差が増大、個々のt検定では有意でないのにF検定（モデル全体）は有意、という矛盾した結果が出ることです。"
                },
                {
                    id: "q603_4",
                    type: "choice",
                    question: "重回帰モデル ŷ = 10 + 2x₁ - 3x₂ において、x₁ = 5, x₂ = 4 のときの予測値はいくらか。",
                    options: [
                        "8",
                        "12",
                        "18",
                        "32"
                    ],
                    answer: 0,
                    explanation: "回帰式に代入します。ŷ = 10 + 2(5) + (-3)(4) = 10 + 10 - 12 = 8 です。偏回帰係数が負の値を取ることもある点に注意しましょう。x₂ が1増えると y は平均3だけ減少する関係を表しています。"
                },
                {
                    id: "q603_5",
                    type: "choice",
                    question: "説明変数が3つの重回帰分析で、データ数 n = 30 のとき、残差の自由度はいくらか。",
                    options: [
                        "26",
                        "27",
                        "28",
                        "29"
                    ],
                    answer: 0,
                    explanation: "重回帰分析の残差の自由度は n - p - 1 です（p は説明変数の数）。切片を含むパラメータ数は p + 1 = 4 なので、自由度は 30 - 3 - 1 = 26 です。単回帰（p = 1）の自由度 n - 2 の一般化と考えると覚えやすいでしょう。"
                }
            ]
        },

        // ========================================
        // Module 604: 回帰分析の実践ポイント
        // ========================================
        {
            id: 604,
            title: "回帰分析の実践ポイント",
            duration: "15分",
            content: `
<h2>回帰分析の実践ポイント ― 試験対策の総仕上げ</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
このモジュールでは、回帰分析を正しく使うための前提条件、ダミー変数、外れ値の扱い、そして統計検定2級での頻出パターンをまとめます。
</div>

<h3>1. 回帰分析の前提条件</h3>
<p>最小二乗法の推定が正しく機能するための条件（ガウス＝マルコフの定理の条件）を理解しましょう。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;padding:16px;">
  <div style="background:var(--bg-main);border:2px solid #4f8cff;border-radius:10px;padding:16px;text-align:center;">
    <div style="font-size:2rem;margin-bottom:8px;">📊</div>
    <div style="font-weight:700;color:#4f8cff;margin-bottom:6px;">線形性</div>
    <div style="font-size:0.8rem;color:var(--text-secondary);">y と x の関係が線形<br>（直線的な関係）</div>
  </div>
  <div style="background:var(--bg-main);border:2px solid #22c55e;border-radius:10px;padding:16px;text-align:center;">
    <div style="font-size:2rem;margin-bottom:8px;">🔔</div>
    <div style="font-weight:700;color:#22c55e;margin-bottom:6px;">正規性</div>
    <div style="font-size:0.8rem;color:var(--text-secondary);">誤差が正規分布に従う<br><span class="katex-eq">\\varepsilon \\sim N(0, \\sigma^2)</span></div>
  </div>
  <div style="background:var(--bg-main);border:2px solid #ffa500;border-radius:10px;padding:16px;text-align:center;">
    <div style="font-size:2rem;margin-bottom:8px;">📏</div>
    <div style="font-weight:700;color:#ffa500;margin-bottom:6px;">等分散性</div>
    <div style="font-size:0.8rem;color:var(--text-secondary);">誤差の分散が一定<br>（x の値によらず同じ散らばり）</div>
  </div>
  <div style="background:var(--bg-main);border:2px solid #a855f7;border-radius:10px;padding:16px;text-align:center;">
    <div style="font-size:2rem;margin-bottom:8px;">🔗</div>
    <div style="font-weight:700;color:#a855f7;margin-bottom:6px;">独立性</div>
    <div style="font-size:0.8rem;color:var(--text-secondary);">誤差同士が独立<br>（前のデータが次に影響しない）</div>
  </div>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 前提条件の確認方法</div>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin-top:10px;">
<tr style="background:var(--bg-main);font-weight:700;">
<th style="padding:10px;border:1px solid var(--border);">前提条件</th>
<th style="padding:10px;border:1px solid var(--border);">確認方法</th>
<th style="padding:10px;border:1px solid var(--border);">違反時の対処</th>
</tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);">線形性</td>
<td style="padding:10px;border:1px solid var(--border);">散布図、残差プロット</td>
<td style="padding:10px;border:1px solid var(--border);">変数変換、多項式回帰</td>
</tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);">正規性</td>
<td style="padding:10px;border:1px solid var(--border);">残差のヒストグラム、Q-Qプロット</td>
<td style="padding:10px;border:1px solid var(--border);">変数変換（対数変換など）</td>
</tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);">等分散性</td>
<td style="padding:10px;border:1px solid var(--border);">残差 vs 予測値プロット</td>
<td style="padding:10px;border:1px solid var(--border);">重み付き最小二乗法、変数変換</td>
</tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);">独立性</td>
<td style="padding:10px;border:1px solid var(--border);">ダービン＝ワトソン検定</td>
<td style="padding:10px;border:1px solid var(--border);">時系列モデルの使用</td>
</tr>
</table>
</div>

<h3>2. ダミー変数</h3>
<p>カテゴリ変数（質的変数）を回帰分析に取り入れるための手法です。</p>

<div class="info-box formula">
<div class="info-box-title">📐 ダミー変数の設定</div>
<p>例：性別（男/女）を回帰モデルに含める場合</p>
<span class="katex-eq display">D = \\begin{cases} 1 & \\text{（男性の場合）} \\\\ 0 & \\text{（女性の場合）} \\end{cases}</span>
<p>回帰モデル：<span class="katex-eq display">\\hat{y} = \\beta_0 + \\beta_1 x + \\beta_2 D</span></p>
</div>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="position:relative;width:100%;max-width:400px;height:220px;margin:0 auto;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;overflow:hidden;">
  <!-- 軸 -->
  <div style="position:absolute;left:50px;top:10px;bottom:40px;width:2px;background:var(--text-secondary);"></div>
  <div style="position:absolute;left:50px;bottom:40px;right:10px;height:2px;background:var(--text-secondary);"></div>
  <div style="position:absolute;left:15px;top:10px;font-size:0.75rem;color:var(--text-secondary);font-weight:600;">y（得点）</div>
  <div style="position:absolute;right:15px;bottom:22px;font-size:0.75rem;color:var(--text-secondary);font-weight:600;">x（時間）</div>
  <!-- 女性の回帰直線 (D=0, 下側) -->
  <div style="position:absolute;left:60px;bottom:55px;width:300px;height:2px;background:#ff6b9d;transform:rotate(-20deg);transform-origin:left center;border-radius:2px;"></div>
  <!-- 男性の回帰直線 (D=1, 上側) -->
  <div style="position:absolute;left:60px;bottom:85px;width:300px;height:2px;background:#4f8cff;transform:rotate(-20deg);transform-origin:left center;border-radius:2px;"></div>
  <!-- ラベル -->
  <div style="position:absolute;right:15px;top:40px;font-size:0.75rem;font-weight:700;color:#4f8cff;">D=1（男性）</div>
  <div style="position:absolute;right:15px;top:58px;font-size:0.75rem;font-weight:700;color:#ff6b9d;">D=0（女性）</div>
  <!-- β₂の差 -->
  <div style="position:absolute;left:160px;bottom:88px;width:2px;height:30px;border-left:2px dashed #ffa500;"></div>
  <div style="position:absolute;left:166px;bottom:96px;font-size:0.7rem;color:#ffa500;font-weight:700;"><span class="katex-eq">\\beta_2</span></div>
</div>
<p style="text-align:center;font-size:0.8rem;color:var(--text-secondary);margin-top:10px;">ダミー変数により「切片が異なる平行な2直線」が得られる<br><span class="katex-eq">\\beta_2</span> はグループ間の切片の差を表す</p>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<ul>
<li>カテゴリが <span class="katex-eq">k</span> 個なら、ダミー変数は <span class="katex-eq">k - 1</span> 個必要（基準カテゴリを1つ決める）</li>
<li>例：春夏秋冬（4カテゴリ）→ ダミー変数3個</li>
<li><span class="katex-eq">k</span> 個全部のダミー変数を入れると完全多重共線性が発生する（<strong>ダミー変数の罠</strong>）</li>
</ul>
</div>

<h3>3. 外れ値と影響点</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;padding:16px;">
  <div style="text-align:center;padding:16px;border:2px solid #ffa500;border-radius:10px;">
    <div style="font-weight:700;color:#ffa500;font-size:1rem;margin-bottom:10px;">外れ値</div>
    <div style="position:relative;width:120px;height:80px;margin:0 auto;border-left:2px solid var(--text-secondary);border-bottom:2px solid var(--text-secondary);">
      <div style="position:absolute;left:10px;bottom:15px;width:6px;height:6px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:30px;bottom:25px;width:6px;height:6px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:50px;bottom:35px;width:6px;height:6px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:70px;bottom:45px;width:6px;height:6px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:90px;bottom:55px;width:6px;height:6px;background:#4f8cff;border-radius:50%;"></div>
      <!-- 外れ値 -->
      <div style="position:absolute;left:55px;top:2px;width:8px;height:8px;background:#ff6b6b;border-radius:50%;border:2px solid #ff0000;"></div>
    </div>
    <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:8px;">y方向に大きくズレたデータ<br>残差が異常に大きい</div>
  </div>
  <div style="text-align:center;padding:16px;border:2px solid #ff6b6b;border-radius:10px;">
    <div style="font-weight:700;color:#ff6b6b;font-size:1rem;margin-bottom:10px;">影響点（てこ比の高い点）</div>
    <div style="position:relative;width:120px;height:80px;margin:0 auto;border-left:2px solid var(--text-secondary);border-bottom:2px solid var(--text-secondary);">
      <div style="position:absolute;left:10px;bottom:15px;width:6px;height:6px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:25px;bottom:22px;width:6px;height:6px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:40px;bottom:30px;width:6px;height:6px;background:#4f8cff;border-radius:50%;"></div>
      <div style="position:absolute;left:55px;bottom:38px;width:6px;height:6px;background:#4f8cff;border-radius:50%;"></div>
      <!-- 影響点 -->
      <div style="position:absolute;right:2px;top:5px;width:8px;height:8px;background:#ff6b6b;border-radius:50%;border:2px solid #ff0000;"></div>
    </div>
    <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:8px;">x方向に離れたデータ<br>回帰直線を大きく引っ張る</div>
  </div>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 影響点に注意！</div>
<ul>
<li><strong>影響点</strong>は回帰直線の傾きに大きな影響を与えるため、特に注意が必要</li>
<li>クックの距離（Cook's Distance）で影響度を定量的に評価できる</li>
<li>外れ値・影響点は「安易に除去しない」のが原則。データの背景を確認することが大切</li>
<li>統計検定では「影響点を除いた場合に回帰直線がどう変化するか」が問われることがある</li>
</ul>
</div>

<h3>4. 統計検定2級 頻出パターンまとめ</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="padding:16px;">
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
<tr style="background:var(--bg-main);font-weight:700;">
<th style="padding:10px;border:1px solid var(--border);width:30%;">出題パターン</th>
<th style="padding:10px;border:1px solid var(--border);">対策ポイント</th>
</tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);font-weight:600;color:#4f8cff;">回帰係数の計算</td>
<td style="padding:10px;border:1px solid var(--border);"><span class="katex-eq">\\hat{\\beta}_1 = S_{xy}/S_{xx}</span> と <span class="katex-eq">\\hat{\\beta}_1 = r \\cdot s_y / s_x</span> の両方を使えるように</td>
</tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);font-weight:600;color:#22c55e;">R² の読み取り</td>
<td style="padding:10px;border:1px solid var(--border);">分散分析表から SSR, SSE, SST を読み取り、<span class="katex-eq">R^2 = SSR/SST</span> を計算。<span class="katex-eq">R^2 = r^2</span> も活用</td>
</tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);font-weight:600;color:#ffa500;">予測値の計算</td>
<td style="padding:10px;border:1px solid var(--border);">回帰式に x を代入して ŷ を求める。回帰直線が (x̄, ȳ) を通ることの利用</td>
</tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);font-weight:600;color:#a855f7;">偏回帰係数の解釈</td>
<td style="padding:10px;border:1px solid var(--border);">「他の変数を一定にして」の条件を忘れないこと</td>
</tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);font-weight:600;color:#ff6b6b;">残差・前提条件</td>
<td style="padding:10px;border:1px solid var(--border);">残差プロットの読み取り、前提条件違反時の対策</td>
</tr>
</table>
</div>
</div>

<h3>5. 検定問題の解き方のコツ</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>分散分析表の穴埋め問題</strong><br>
SST = SSR + SSE の関係を使って埋める。自由度も df(全体) = df(回帰) + df(残差) で確認。MS = SS / df でF値まで計算する流れを押さえる。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>回帰係数の検定問題</strong><br>
出力結果（推定値・標準誤差・t値・p値）が与えられる。t値 = 推定値 / 標準誤差。p値が有意水準（通常5%）より小さければ有意。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>R² と相関係数の関係問題</strong><br>
単回帰なら <span class="katex-eq">R^2 = r^2</span>。相関係数の符号は回帰係数の符号で判断。「相関係数 r = -0.7 のとき R² はいくらか？」→ 0.49。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>ダミー変数の解釈問題</strong><br>
「D = 1 のグループと D = 0 のグループでは、ŷ が β̂₂ だけ異なる」という解釈。β̂₂ の符号で「どちらが高いか」が分かる。
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<strong>注意事項の理解問題</strong><br>
「回帰分析で因果関係は証明できない」「外挿（データ範囲外の予測）は信頼性が低い」「多重共線性があると推定が不安定になる」など、知識問題が出る。
</div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">✅ 最終チェックリスト</div>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
<tr><td style="padding:6px;border-bottom:1px solid var(--border);">☐ 回帰係数の2つの公式を暗記</td></tr>
<tr><td style="padding:6px;border-bottom:1px solid var(--border);">☐ 切片の公式 <span class="katex-eq">\\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1 \\bar{x}</span> を暗記</td></tr>
<tr><td style="padding:6px;border-bottom:1px solid var(--border);">☐ R² の計算方法（2通り）を理解</td></tr>
<tr><td style="padding:6px;border-bottom:1px solid var(--border);">☐ R² = r²（単回帰の場合）を暗記</td></tr>
<tr><td style="padding:6px;border-bottom:1px solid var(--border);">☐ 分散分析表の構造と各セルの意味を理解</td></tr>
<tr><td style="padding:6px;border-bottom:1px solid var(--border);">☐ 残差の自由度（単回帰: n-2、重回帰: n-p-1）を暗記</td></tr>
<tr><td style="padding:6px;border-bottom:1px solid var(--border);">☐ 偏回帰係数の「他の変数を一定にして」の解釈</td></tr>
<tr><td style="padding:6px;border-bottom:1px solid var(--border);">☐ 調整済み R² と R² の違い</td></tr>
<tr><td style="padding:6px;border-bottom:1px solid var(--border);">☐ ダミー変数の個数（k カテゴリ → k-1 個）</td></tr>
<tr><td style="padding:6px;">☐ 回帰分析の4つの前提条件</td></tr>
</table>
</div>
`,
            quiz: [
                {
                    id: "q604_1",
                    type: "choice",
                    question: "回帰分析の誤差項に関する前提条件として正しくないものはどれか。",
                    options: [
                        "誤差は正規分布に従う",
                        "誤差の分散は一定（等分散性）",
                        "誤差同士は互いに独立",
                        "誤差の平均は必ず正の値である"
                    ],
                    answer: 3,
                    explanation: "回帰分析の前提条件では、誤差の期待値は0（E[ε] = 0）です。正の値ではありません。正しい前提条件は、(1) 線形性、(2) 正規性（誤差が正規分布に従う）、(3) 等分散性（誤差の分散が一定）、(4) 独立性（誤差同士が独立）です。"
                },
                {
                    id: "q604_2",
                    type: "choice",
                    question: "4つのカテゴリを持つ質的変数を回帰分析に含める場合、必要なダミー変数の数はいくつか。",
                    options: [
                        "2個",
                        "3個",
                        "4個",
                        "5個"
                    ],
                    answer: 1,
                    explanation: "カテゴリ数が k の場合、ダミー変数は k - 1 個必要です。4カテゴリなら 4 - 1 = 3 個です。1つのカテゴリを基準（ベースライン）として D = 0 とし、残りの3カテゴリにそれぞれダミー変数を割り当てます。k 個すべてにダミー変数を作ると完全多重共線性が発生します。"
                },
                {
                    id: "q604_3",
                    type: "choice",
                    question: "回帰分析について正しい記述はどれか。",
                    options: [
                        "有意な回帰関係があれば、因果関係があると言える",
                        "データの範囲外の予測（外挿）でも精度は同じである",
                        "回帰分析で示されるのは相関関係であり、因果関係とは限らない",
                        "決定係数が高ければ、モデルの前提条件は確認不要である"
                    ],
                    answer: 2,
                    explanation: "回帰分析で示されるのはあくまで「相関関係（統計的な関連）」であり、因果関係の証明にはなりません。また、外挿はデータ範囲外への予測なので信頼性が低く、R² が高くても前提条件（残差の正規性・等分散性・独立性）の確認は必要です。"
                },
                {
                    id: "q604_4",
                    type: "choice",
                    question: "ŷ = 50 + 8x₁ + 12D（D: ダミー変数、D=1:グループA、D=0:グループB）について正しいものはどれか。",
                    options: [
                        "グループAはグループBよりŷが平均8高い",
                        "グループAはグループBよりŷが平均12高い",
                        "グループBはグループAよりŷが平均12高い",
                        "ダミー変数はxの傾きを変化させる"
                    ],
                    answer: 1,
                    explanation: "ダミー変数 D の係数 12 は、D = 1（グループA）と D = 0（グループB）の切片の差を表します。D = 1 のとき ŷ = 50 + 8x₁ + 12 = 62 + 8x₁、D = 0 のとき ŷ = 50 + 8x₁ なので、グループAはグループBより y が平均12高いことを意味します。傾き（8）は両グループで同じです。"
                },
                {
                    id: "q604_5",
                    type: "choice",
                    question: "分散分析表で SSR = 120, SSE = 80, 回帰の自由度 = 2, 残差の自由度 = 17 のとき、F値はいくらか。",
                    options: [
                        "1.50",
                        "6.38",
                        "12.75",
                        "25.50"
                    ],
                    answer: 2,
                    explanation: "F値 = MSR / MSE で求めます。MSR = SSR / df(回帰) = 120 / 2 = 60、MSE = SSE / df(残差) = 80 / 17 ≈ 4.706 です。F = 60 / 4.706 ≈ 12.75 となります。分散分析表の問題では、MS（平均平方）を求めてからF値を計算する手順を確実にしましょう。"
                }
            ]
        }
    ]
};
