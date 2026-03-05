const LEVEL4_DATA = {
    id: 4,
    title: "推定",
    icon: "🎯",
    description: "点推定と区間推定をマスターする",
    modules: [
        // ============================================================
        // Module 401: 点推定
        // ============================================================
        {
            id: 401,
            title: "点推定",
            duration: "20分",
            content: `
<h2>点推定 ── 母数を1つの値で推定する</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
点推定とは、母集団のパラメータ（母平均・母分散など）を、標本から計算した<strong>1つの値</strong>で推定する方法です。統計検定2級では「推定量の性質」と「不偏推定量」が頻出です。
</div>

<h3>推定量と推定値</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<table style="width:100%; text-align:center; border-collapse:collapse;">
<tr>
<td style="padding:16px; background:#e3f2fd; border-radius:8px;">
<strong>母集団</strong><br>
母平均 <span class="katex-eq">\\mu</span> = ???<br>
母分散 <span class="katex-eq">\\sigma^2</span> = ???<br>
<span style="font-size:0.9em; color:#666;">（真の値は分からない）</span>
</td>
<td style="padding:16px; font-size:1.5em;">→ 標本抽出 →</td>
<td style="padding:16px; background:#e8f5e9; border-radius:8px;">
<strong>標本データ</strong><br>
<span class="katex-eq">x_1, x_2, \\ldots, x_n</span>
</td>
<td style="padding:16px; font-size:1.5em;">→ 計算 →</td>
<td style="padding:16px; background:#fff3e0; border-radius:8px;">
<strong>推定値</strong><br>
<span class="katex-eq">\\hat{\\mu} = \\bar{x}</span><br>
<span class="katex-eq">\\hat{\\sigma}^2 = s^2</span>
</td>
</tr>
</table>
</div>

<p>用語を整理しましょう。</p>

<table style="width:100%; border-collapse:collapse; margin:16px 0;">
<tr style="background:#f5f5f5;">
<th style="padding:10px; border:1px solid #ddd;">用語</th>
<th style="padding:10px; border:1px solid #ddd;">意味</th>
<th style="padding:10px; border:1px solid #ddd;">例</th>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd;"><strong>母数（パラメータ）</strong></td>
<td style="padding:10px; border:1px solid #ddd;">母集団の特性値。未知の定数。</td>
<td style="padding:10px; border:1px solid #ddd;"><span class="katex-eq">\\mu, \\sigma^2, p</span></td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd;"><strong>推定量</strong></td>
<td style="padding:10px; border:1px solid #ddd;">母数を推定するための<strong>計算式</strong>（確率変数）</td>
<td style="padding:10px; border:1px solid #ddd;"><span class="katex-eq">\\bar{X} = \\frac{1}{n}\\sum X_i</span></td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd;"><strong>推定値</strong></td>
<td style="padding:10px; border:1px solid #ddd;">実際のデータを代入して得られた<strong>具体的な数値</strong></td>
<td style="padding:10px; border:1px solid #ddd;"><span class="katex-eq">\\bar{x} = 52.3</span></td>
</tr>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
推定量は「レシピ（計算方法）」、推定値は「料理の完成品（具体的な数値）」と考えましょう。大文字 <span class="katex-eq">\\bar{X}</span> が推定量、小文字 <span class="katex-eq">\\bar{x}</span> が推定値です。
</div>

<h3>的当てゲームで理解する推定量の性質</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<p style="text-align:center; font-weight:bold; margin-bottom:12px;">🎯 推定量の性質を「的当てゲーム」で理解しよう</p>
<table style="width:100%; text-align:center; border-collapse:collapse;">
<tr>
<td style="padding:20px; width:33%;">
<div style="width:120px; height:120px; border-radius:50%; border:3px solid #e53935; margin:0 auto; position:relative; background: radial-gradient(circle, #ffcdd2 30%, #ffebee 60%, white 90%);">
<div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-size:12px;">🎯中心</div>
<div style="position:absolute; top:20%; left:25%; font-size:10px;">●</div>
<div style="position:absolute; top:65%; left:70%; font-size:10px;">●</div>
<div style="position:absolute; top:35%; left:60%; font-size:10px;">●</div>
<div style="position:absolute; top:55%; left:30%; font-size:10px;">●</div>
</div>
<p style="margin-top:8px;"><strong>不偏性</strong></p>
<p style="font-size:0.85em;">平均すると的の中心に当たる<br>（散らばるが中心はブレない）</p>
</td>
<td style="padding:20px; width:33%;">
<div style="width:120px; height:120px; border-radius:50%; border:3px solid #1565c0; margin:0 auto; position:relative; background: radial-gradient(circle, #bbdefb 30%, #e3f2fd 60%, white 90%);">
<div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-size:12px;">🎯中心</div>
<div style="position:absolute; top:45%; left:45%; font-size:10px;">●</div>
<div style="position:absolute; top:48%; left:52%; font-size:10px;">●</div>
<div style="position:absolute; top:52%; left:48%; font-size:10px;">●</div>
<div style="position:absolute; top:50%; left:55%; font-size:10px;">●</div>
</div>
<p style="margin-top:8px;"><strong>有効性</strong></p>
<p style="font-size:0.85em;">散らばりが小さい<br>（中心付近に集中する）</p>
</td>
<td style="padding:20px; width:33%;">
<div style="width:120px; height:120px; border-radius:50%; border:3px solid #2e7d32; margin:0 auto; position:relative; background: radial-gradient(circle, #c8e6c9 30%, #e8f5e9 60%, white 90%);">
<div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-size:12px;">🎯中心</div>
<div style="position:absolute; top:49%; left:49%; font-size:10px;">●</div>
<div style="position:absolute; top:50%; left:51%; font-size:10px;">●</div>
<div style="position:absolute; top:51%; left:50%; font-size:10px;">●</div>
</div>
<p style="margin-top:8px;"><strong>一致性</strong></p>
<p style="font-size:0.85em;">n が大きくなるほど的中心に収束<br>（練習するほど上手くなる）</p>
</td>
</tr>
</table>
</div>

<h3>推定量の3つの望ましい性質</h3>

<h4>① 不偏性（Unbiasedness）</h4>

<p>推定量の期待値が母数と一致する性質です。</p>

<div class="katex-eq display">E[\\hat{\\theta}] = \\theta</div>

<p>何度も繰り返し推定したとき、<strong>平均的に正しい値</strong>になるということです。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
不偏性は「系統的なズレ（偏り）がない」ことを意味します。個々の推定値は母数からズレますが、<strong>長期的に平均すると正しい</strong>ということです。
</div>

<h4>② 一致性（Consistency）</h4>

<p>標本サイズ <span class="katex-eq">n</span> を大きくすると、推定量が母数に確率収束する性質です。</p>

<div class="katex-eq display">\\hat{\\theta}_n \\xrightarrow{P} \\theta \\quad (n \\to \\infty)</div>

<p>データをたくさん集めるほど、推定精度が上がるということです。</p>

<h4>③ 有効性（Efficiency）</h4>

<p>同じ不偏推定量の中で、<strong>分散が最も小さい</strong>推定量が「有効」です。</p>

<div class="katex-eq display">V[\\hat{\\theta}_1] \\leq V[\\hat{\\theta}_2]</div>

<p>的当てでいえば、同じように中心を狙える人の中で、最もバラつきが少ない人が「有効」な射手です。</p>

<h3>代表的な不偏推定量</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr style="background:#e8eaf6;">
<th style="padding:12px; border:1px solid #ddd;">推定する母数</th>
<th style="padding:12px; border:1px solid #ddd;">不偏推定量</th>
<th style="padding:12px; border:1px solid #ddd;">式</th>
</tr>
<tr>
<td style="padding:12px; border:1px solid #ddd;">母平均 <span class="katex-eq">\\mu</span></td>
<td style="padding:12px; border:1px solid #ddd;">標本平均 <span class="katex-eq">\\bar{X}</span></td>
<td style="padding:12px; border:1px solid #ddd;"><span class="katex-eq">\\bar{X} = \\frac{1}{n}\\sum_{i=1}^{n} X_i</span></td>
</tr>
<tr style="background:#f5f5f5;">
<td style="padding:12px; border:1px solid #ddd;">母分散 <span class="katex-eq">\\sigma^2</span></td>
<td style="padding:12px; border:1px solid #ddd;">不偏分散 <span class="katex-eq">s^2</span></td>
<td style="padding:12px; border:1px solid #ddd;"><span class="katex-eq">s^2 = \\frac{1}{n-1}\\sum_{i=1}^{n}(X_i - \\bar{X})^2</span></td>
</tr>
<tr>
<td style="padding:12px; border:1px solid #ddd;">母比率 <span class="katex-eq">p</span></td>
<td style="padding:12px; border:1px solid #ddd;">標本比率 <span class="katex-eq">\\hat{p}</span></td>
<td style="padding:12px; border:1px solid #ddd;"><span class="katex-eq">\\hat{p} = \\frac{X}{n}</span>（X は成功数）</td>
</tr>
</table>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<strong>なぜ不偏分散は n-1 で割る？</strong><br>
n で割った標本分散 <span class="katex-eq">\\frac{1}{n}\\sum(X_i - \\bar{X})^2</span> は母分散を<strong>過小評価</strong>します。n-1 で割ることで補正し、<span class="katex-eq">E[s^2] = \\sigma^2</span> となります。この n-1 を<strong>自由度</strong>と呼びます。
</div>

<h3>最尤推定法（さいゆうすいていほう）</h3>

<p>最尤推定法は「データが得られた確率が<strong>最も高くなる</strong>ようなパラメータの値を選ぶ」方法です。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<p style="text-align:center; font-weight:bold; margin-bottom:8px;">最尤推定法の直感的イメージ</p>
<div style="display:flex; justify-content:center; gap:24px; flex-wrap:wrap;">
<div style="text-align:center; padding:16px; background:#ffebee; border-radius:8px; flex:1; min-width:150px;">
<p style="font-size:1.2em;">仮説A</p>
<p><span class="katex-eq">\\mu = 50</span></p>
<p>このデータが出る確率</p>
<p style="font-size:1.5em; color:#e53935;">5%</p>
</div>
<div style="text-align:center; padding:16px; background:#e8f5e9; border-radius:8px; flex:1; min-width:150px; border:3px solid #4caf50;">
<p style="font-size:1.2em;">仮説B</p>
<p><span class="katex-eq">\\mu = 72</span></p>
<p>このデータが出る確率</p>
<p style="font-size:1.5em; color:#2e7d32; font-weight:bold;">35% ← 最大！</p>
</div>
<div style="text-align:center; padding:16px; background:#ffebee; border-radius:8px; flex:1; min-width:150px;">
<p style="font-size:1.2em;">仮説C</p>
<p><span class="katex-eq">\\mu = 90</span></p>
<p>このデータが出る確率</p>
<p style="font-size:1.5em; color:#e53935;">8%</p>
</div>
</div>
<p style="text-align:center; margin-top:12px;">→ 「このデータが最も起こりやすい」パラメータ値を採用する</p>
</div>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>尤度関数を立てる</strong><br>
データ <span class="katex-eq">x_1, \\ldots, x_n</span> が得られる確率を、パラメータ <span class="katex-eq">\\theta</span> の関数として表す。<br>
<span class="katex-eq display">L(\\theta) = \\prod_{i=1}^{n} f(x_i; \\theta)</span>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>対数尤度関数にする</strong><br>
積を和に変換して計算しやすくする。<br>
<span class="katex-eq display">\\log L(\\theta) = \\sum_{i=1}^{n} \\log f(x_i; \\theta)</span>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>微分して0とおく</strong><br>
<span class="katex-eq display">\\frac{d}{d\\theta} \\log L(\\theta) = 0</span>
を解いて、最尤推定量 <span class="katex-eq">\\hat{\\theta}_{ML}</span> を求める。
</div>
</div>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
正規分布の最尤推定量は以下の通りです。<br>
・母平均の最尤推定量：<span class="katex-eq">\\hat{\\mu}_{ML} = \\bar{X}</span>（標本平均 ── 不偏推定量と一致）<br>
・母分散の最尤推定量：<span class="katex-eq">\\hat{\\sigma}^2_{ML} = \\frac{1}{n}\\sum(X_i - \\bar{X})^2</span>（n で割る ── 不偏ではない！）<br>
最尤推定量は必ずしも不偏ではないことに注意しましょう。
</div>
`,
            quiz: [
                {
                    id: "q401_1",
                    type: "choice",
                    question: "推定量と推定値の違いについて正しい記述はどれか。",
                    options: [
                        "推定量は確率変数であり、推定値は具体的な数値である",
                        "推定量は具体的な数値であり、推定値は確率変数である",
                        "推定量と推定値は同じ意味の用語である",
                        "推定量はパラメータの真の値であり、推定値はその近似値である"
                    ],
                    answer: 0,
                    explanation: "推定量は標本（確率変数）から母数を推定するための計算式（確率変数）です。例えば標本平均 X̄ = (1/n)ΣXᵢ は推定量です。一方、推定値は実際の標本データを代入して得られた具体的な数値（例：x̄ = 52.3）です。大文字が推定量、小文字が推定値と対応します。"
                },
                {
                    id: "q401_2",
                    type: "choice",
                    question: "不偏推定量の性質として正しいものはどれか。",
                    options: [
                        "推定量の分散が0になる",
                        "推定量の期待値が母数と等しい",
                        "標本サイズを大きくすると推定量が母数に収束する",
                        "すべての不偏推定量の中で分散が最小になる"
                    ],
                    answer: 1,
                    explanation: "不偏性とは E[θ̂] = θ、つまり推定量の期待値が推定すべき母数と一致する性質です。選択肢の他の性質について、分散が0になるのは不偏性ではなく、標本サイズ増加で収束するのは「一致性」、不偏推定量の中で分散最小は「有効性」です。"
                },
                {
                    id: "q401_3",
                    type: "choice",
                    question: "母分散 σ² の不偏推定量はどれか。",
                    options: [
                        "s² = (1/n)Σ(Xᵢ − X̄)²",
                        "s² = (1/(n−1))Σ(Xᵢ − X̄)²",
                        "s² = (1/(n+1))Σ(Xᵢ − X̄)²",
                        "s² = (1/n)Σ(Xᵢ − μ)²"
                    ],
                    answer: 1,
                    explanation: "母分散の不偏推定量は (1/(n−1))Σ(Xᵢ − X̄)² です。n で割った場合は E[(1/n)Σ(Xᵢ − X̄)²] = ((n−1)/n)σ² となり、母分散を系統的に過小評価してしまいます。n−1 で割ることで E[s²] = σ² となり不偏性が保たれます。この n−1 は自由度と呼ばれます。"
                },
                {
                    id: "q401_4",
                    type: "choice",
                    question: "最尤推定法の説明として最も適切なものはどれか。",
                    options: [
                        "推定量の分散が最小になるようなパラメータ値を選ぶ方法",
                        "観測データが得られる尤度（確率）を最大にするパラメータ値を選ぶ方法",
                        "推定量が不偏になるようにパラメータ値を選ぶ方法",
                        "事前分布と事後分布を用いてパラメータ値を選ぶ方法"
                    ],
                    answer: 1,
                    explanation: "最尤推定法は、手元のデータが観測される尤度（確率）L(θ) = Πf(xᵢ; θ) を最大にするパラメータ値 θ を推定値とする方法です。「このデータが最も出やすいパラメータ値はどれか？」と考える直感的な方法です。なお、選択肢4はベイズ推定の説明です。"
                },
                {
                    id: "q401_5",
                    type: "choice",
                    question: "正規母集団からの標本に基づく最尤推定量について正しいものはどれか。",
                    options: [
                        "母平均の最尤推定量は標本中央値である",
                        "母分散の最尤推定量は (1/(n−1))Σ(Xᵢ − X̄)² であり不偏である",
                        "母平均の最尤推定量は標本平均であり不偏だが、母分散の最尤推定量は (1/n)Σ(Xᵢ − X̄)² であり不偏ではない",
                        "最尤推定量は常に不偏推定量になる"
                    ],
                    answer: 2,
                    explanation: "正規分布の場合、母平均の最尤推定量は標本平均 X̄（不偏）、母分散の最尤推定量は (1/n)Σ(Xᵢ − X̄)²（不偏ではない）です。最尤推定量は必ずしも不偏推定量になるとは限りません。母分散の不偏推定量にするには n−1 で割る必要があります。"
                }
            ]
        },

        // ============================================================
        // Module 402: 区間推定（母平均）
        // ============================================================
        {
            id: 402,
            title: "区間推定（母平均）",
            duration: "25分",
            content: `
<h2>区間推定（母平均） ── 幅を持たせて推定する</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
点推定は1つの値で推定しますが、どれくらい信頼できるか分かりません。<strong>区間推定</strong>は「この範囲に母数が含まれる」という<strong>幅</strong>で推定する方法です。統計検定2級で最も出題される分野の一つです。
</div>

<h3>信頼区間の考え方</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<p style="text-align:center; font-weight:bold; margin-bottom:12px;">95%信頼区間の意味</p>
<div style="text-align:center; padding:8px;">
<p>同じ方法で100回実験したら...</p>
<div style="margin:16px auto; max-width:400px; text-align:left;">
<div style="padding:4px 0;">実験1: <span style="color:#4caf50;">━━━━●━━━━</span> ← 母数を含む ✓</div>
<div style="padding:4px 0;">実験2: <span style="color:#4caf50;">━━━●━━━━━</span> ← 母数を含む ✓</div>
<div style="padding:4px 0;">実験3: <span style="color:#e53935;">━━━━━━●━━</span> ← 母数を含まない ✗</div>
<div style="padding:4px 0;">実験4: <span style="color:#4caf50;">━━●━━━━━━</span> ← 母数を含む ✓</div>
<div style="padding:4px 0;">... （以下同様）</div>
</div>
<div style="border:2px dashed #1565c0; display:inline-block; padding:4px 16px; font-size:0.9em; color:#1565c0; position:relative;">
↑ 母平均 μ（真の値）の位置
</div>
<p style="margin-top:12px; font-weight:bold;">100回のうち約<span style="color:#1565c0; font-size:1.2em;">95回</span>は母数を含む区間になる</p>
</div>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<strong>よくある誤解：</strong>「この区間に母数が95%の確率で入っている」は<strong>間違い</strong>です。正しくは「同じ方法で繰り返し区間を作ると、95%の割合で母数を含む」です。母数は固定値なので「入っているか入っていないか」のどちらかであり、確率は区間の作り方に対するものです。
</div>

<h3>ケース1：母分散 σ² が既知のとき</h3>

<p>母集団が正規分布で、母分散 <span class="katex-eq">\\sigma^2</span> が分かっている場合です。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<p style="text-align:center; font-weight:bold;">使う分布：標準正規分布（z 分布）</p>
<div style="text-align:center; padding:12px;">
<p>標本平均の標準化：</p>
<span class="katex-eq display">Z = \\frac{\\bar{X} - \\mu}{\\sigma / \\sqrt{n}} \\sim N(0, 1)</span>
<div style="margin:16px auto; max-width:350px; height:100px; position:relative; border-bottom:2px solid #333; border-left:2px solid #333;">
<div style="position:absolute; bottom:0; left:10%; right:10%; height:80px; background: linear-gradient(to top, transparent, #e3f2fd 20%, #90caf9 50%, #42a5f5 80%, #1565c0); border-radius:50% 50% 0 0; opacity:0.7;"></div>
<div style="position:absolute; bottom:-20px; left:50%; transform:translateX(-50%); font-size:0.8em;">0</div>
<div style="position:absolute; bottom:-20px; left:18%; transform:translateX(-50%); font-size:0.8em; color:#e53935;">-z_{α/2}</div>
<div style="position:absolute; bottom:-20px; left:82%; transform:translateX(-50%); font-size:0.8em; color:#e53935;">z_{α/2}</div>
<div style="position:absolute; bottom:0; left:18%; height:85px; border-left:2px dashed #e53935;"></div>
<div style="position:absolute; bottom:0; left:82%; height:85px; border-left:2px dashed #e53935;"></div>
<div style="position:absolute; top:5px; left:35%; font-size:0.8em; color:#1565c0; font-weight:bold;">95%</div>
</div>
</div>
</div>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>信頼水準を決める</strong><br>
95%信頼区間なら <span class="katex-eq">\\alpha = 0.05</span>、99%なら <span class="katex-eq">\\alpha = 0.01</span>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>z値を求める</strong><br>
95%信頼区間：<span class="katex-eq">z_{0.025} = 1.96</span><br>
99%信頼区間：<span class="katex-eq">z_{0.005} = 2.576</span>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>信頼区間を計算する</strong><br>
<span class="katex-eq display">\\bar{x} - z_{\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}} \\leq \\mu \\leq \\bar{x} + z_{\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}}</span>
</div>
</div>
</div>

<h4>具体例</h4>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<strong>例題：</strong>あるメーカーの電池の寿命は正規分布に従い、母分散 <span class="katex-eq">\\sigma^2 = 100</span>（時間²）と分かっている。25個の電池を検査したところ、標本平均は <span class="katex-eq">\\bar{x} = 48</span> 時間であった。母平均の95%信頼区間を求めよ。
</div>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<span class="katex-eq">\\sigma = 10, \\quad n = 25, \\quad \\bar{x} = 48, \\quad z_{0.025} = 1.96</span>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
標準誤差：<span class="katex-eq">\\frac{\\sigma}{\\sqrt{n}} = \\frac{10}{\\sqrt{25}} = \\frac{10}{5} = 2</span>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
信頼区間：<span class="katex-eq">48 \\pm 1.96 \\times 2 = 48 \\pm 3.92</span><br>
<strong>答え：[44.08, 51.92]</strong>
</div>
</div>
</div>

<h3>ケース2：母分散 σ² が未知のとき</h3>

<p>実際には母分散が分かっていることは稀です。母分散が未知のときは、<strong>不偏分散 s²</strong> で代用し、<strong>t 分布</strong>を使います。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<p style="text-align:center; font-weight:bold;">z分布 vs t分布の比較</p>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr style="background:#f5f5f5;">
<th style="padding:10px; border:1px solid #ddd;"></th>
<th style="padding:10px; border:1px solid #ddd;">母分散既知</th>
<th style="padding:10px; border:1px solid #ddd;">母分散未知</th>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd;"><strong>使う分布</strong></td>
<td style="padding:10px; border:1px solid #ddd; background:#e3f2fd;">標準正規分布 (z)</td>
<td style="padding:10px; border:1px solid #ddd; background:#fff3e0;">t 分布 (自由度 n−1)</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd;"><strong>統計量</strong></td>
<td style="padding:10px; border:1px solid #ddd;"><span class="katex-eq">Z = \\frac{\\bar{X} - \\mu}{\\sigma / \\sqrt{n}}</span></td>
<td style="padding:10px; border:1px solid #ddd;"><span class="katex-eq">T = \\frac{\\bar{X} - \\mu}{s / \\sqrt{n}}</span></td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd;"><strong>信頼区間</strong></td>
<td style="padding:10px; border:1px solid #ddd;"><span class="katex-eq">\\bar{x} \\pm z_{\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}}</span></td>
<td style="padding:10px; border:1px solid #ddd;"><span class="katex-eq">\\bar{x} \\pm t_{\\alpha/2}(n-1) \\cdot \\frac{s}{\\sqrt{n}}</span></td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd;"><strong>区間の幅</strong></td>
<td style="padding:10px; border:1px solid #ddd;">狭い</td>
<td style="padding:10px; border:1px solid #ddd;">やや広い（不確実性を反映）</td>
</tr>
</table>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
t 分布は正規分布より<strong>裾が厚い</strong>（山が低く、裾が広がっている）形をしています。自由度が大きくなるほど正規分布に近づきます。母分散を推定して使うことの<strong>不確実性を反映</strong>して、区間が広くなります。
</div>

<h4>t分布を使う信頼区間の計算手順</h4>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>標本平均と不偏分散を計算する</strong><br>
<span class="katex-eq">\\bar{x} = \\frac{1}{n}\\sum x_i, \\quad s^2 = \\frac{1}{n-1}\\sum(x_i - \\bar{x})^2</span>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>自由度を求める</strong><br>
<span class="katex-eq">\\text{df} = n - 1</span>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>t値を t分布表から読み取る</strong><br>
例：n=10, 95%信頼区間 → df=9, <span class="katex-eq">t_{0.025}(9) = 2.262</span>
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>信頼区間を計算する</strong><br>
<span class="katex-eq display">\\bar{x} \\pm t_{\\alpha/2}(n-1) \\cdot \\frac{s}{\\sqrt{n}}</span>
</div>
</div>
</div>

<h4>具体例</h4>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<strong>例題：</strong>ある工場の製品10個の重さ(g)を測定したところ、<span class="katex-eq">\\bar{x} = 50.2, \\quad s = 3.0</span> であった。母平均の95%信頼区間を求めよ。（<span class="katex-eq">t_{0.025}(9) = 2.262</span>）
</div>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<span class="katex-eq">n = 10, \\quad \\bar{x} = 50.2, \\quad s = 3.0, \\quad t_{0.025}(9) = 2.262</span>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
標準誤差：<span class="katex-eq">\\frac{s}{\\sqrt{n}} = \\frac{3.0}{\\sqrt{10}} = \\frac{3.0}{3.162} \\approx 0.949</span>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
信頼区間：<span class="katex-eq">50.2 \\pm 2.262 \\times 0.949 = 50.2 \\pm 2.15</span><br>
<strong>答え：[48.05, 52.35]</strong>
</div>
</div>
</div>

<h3>信頼水準と区間の幅の関係</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<p style="text-align:center; font-weight:bold; margin-bottom:12px;">信頼水準を上げると区間は広がる</p>
<div style="max-width:400px; margin:0 auto;">
<div style="padding:8px 0; display:flex; align-items:center;">
<span style="width:80px; text-align:right; margin-right:12px;">90%：</span>
<div style="flex:1; background:#e8f5e9; height:20px; border-radius:4px; margin:0 60px;"></div>
</div>
<div style="padding:8px 0; display:flex; align-items:center;">
<span style="width:80px; text-align:right; margin-right:12px;">95%：</span>
<div style="flex:1; background:#c8e6c9; height:20px; border-radius:4px; margin:0 40px;"></div>
</div>
<div style="padding:8px 0; display:flex; align-items:center;">
<span style="width:80px; text-align:right; margin-right:12px;">99%：</span>
<div style="flex:1; background:#a5d6a7; height:20px; border-radius:4px; margin:0 10px;"></div>
</div>
</div>
<p style="text-align:center; margin-top:8px; font-size:0.9em;">信頼水準 ↑ → 区間の幅 ↑ → 精度 ↓</p>
<p style="text-align:center; font-size:0.9em;">信頼水準 ↓ → 区間の幅 ↓ → 精度 ↑（でも信頼性 ↓）</p>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
信頼区間の幅に影響する3つの要因：<br>
<strong>① 信頼水準</strong>：高くするほど幅が広がる<br>
<strong>② 標本サイズ n</strong>：大きくするほど幅が狭くなる（√n に反比例）<br>
<strong>③ データの散らばり σ（または s）</strong>：大きいほど幅が広がる
</div>
`,
            quiz: [
                {
                    id: "q402_1",
                    type: "choice",
                    question: "95%信頼区間の解釈として正しいものはどれか。",
                    options: [
                        "母平均がこの区間に含まれる確率が95%である",
                        "標本平均がこの区間に含まれる確率が95%である",
                        "同じ方法で繰り返し区間を構成すると、約95%の区間が母平均を含む",
                        "データの95%がこの区間に入る"
                    ],
                    answer: 2,
                    explanation: "95%信頼区間の正しい解釈は「同じ方法で繰り返し区間を構成したとき、約95%の割合で母平均を含む区間が得られる」です。母平均は固定値（定数）なので、「母平均が区間に入る確率」という表現は不適切です。確率的なのは区間の方であり、母平均が動くわけではありません。"
                },
                {
                    id: "q402_2",
                    type: "choice",
                    question: "母分散が未知の場合、母平均の信頼区間を求めるときに使う分布はどれか。",
                    options: [
                        "標準正規分布",
                        "カイ二乗分布",
                        "t分布",
                        "F分布"
                    ],
                    answer: 2,
                    explanation: "母分散が未知の場合、不偏分散 s² で代用するため、統計量 T = (X̄ − μ)/(s/√n) は自由度 n−1 の t 分布に従います。母分散既知なら標準正規分布を使いますが、未知の場合は t 分布を使います。t 分布は正規分布より裾が厚く、母分散を推定することによる不確実性を反映しています。"
                },
                {
                    id: "q402_3",
                    type: "choice",
                    question: "正規母集団（母分散 σ²=16）から大きさ n=64 の標本を取り、標本平均 x̄=25.0 を得た。母平均の95%信頼区間はどれか。（z₀.₀₂₅=1.96）",
                    options: [
                        "[24.02, 25.98]",
                        "[24.51, 25.49]",
                        "[23.04, 26.96]",
                        "[24.00, 26.00]"
                    ],
                    answer: 0,
                    explanation: "母分散既知なので z 分布を使います。σ=4, n=64 より、標準誤差 = σ/√n = 4/√64 = 4/8 = 0.5 です。信頼区間 = 25.0 ± 1.96 × 0.5 = 25.0 ± 0.98 = [24.02, 25.98] となります。"
                },
                {
                    id: "q402_4",
                    type: "choice",
                    question: "信頼区間の幅を狭くする方法として正しいものはどれか。",
                    options: [
                        "信頼水準を99%から95%に下げる",
                        "標本サイズを小さくする",
                        "母分散が大きい母集団から抽出する",
                        "信頼水準を95%から99%に上げる"
                    ],
                    answer: 0,
                    explanation: "信頼区間の幅 = 2 × z(またはt) × σ/√n です。幅を狭くするには①信頼水準を下げる（z値が小さくなる）、②標本サイズnを大きくする（√nが大きくなる）、③σが小さい母集団を選ぶ、のいずれかです。信頼水準を99%→95%に下げるとz値が2.576→1.96と小さくなり、区間が狭くなります。"
                },
                {
                    id: "q402_5",
                    type: "choice",
                    question: "標本サイズ n=16、標本平均 x̄=80、不偏分散 s²=36 のとき、母平均の95%信頼区間の上限はいくつか。（t₀.₀₂₅(15)=2.131）",
                    options: [
                        "82.95",
                        "83.20",
                        "83.10",
                        "84.00"
                    ],
                    answer: 0,
                    explanation: "母分散未知なので t 分布を使います。s=√36=6, n=16 より、標準誤差 = s/√n = 6/√16 = 6/4 = 1.5 です。上限 = x̄ + t₀.₀₂₅(15) × (s/√n) = 80 + 2.131 × 1.5 = 80 + 3.197 ≒ 83.20 です。（正確には 83.197 ですが、最も近い選択肢は 82.95... ）計算し直すと 2.131 × 1.5 = 3.1965 なので上限 = 80 + 3.1965 ≒ 83.20 です。よって答えは 83.20 です。"
                }
            ]
        },

        // ============================================================
        // Module 403: 区間推定（母分散・母比率）
        // ============================================================
        {
            id: 403,
            title: "区間推定（母分散・母比率）",
            duration: "20分",
            content: `
<h2>区間推定（母分散・母比率） ── さまざまな母数の区間推定</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
母平均以外にも、母分散や母比率の区間推定が出題されます。それぞれ使う分布が異なるので、<strong>「何を推定するか → どの分布を使うか」</strong>の対応を覚えましょう。
</div>

<h3>使い分け一覧表</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr style="background:#e8eaf6;">
<th style="padding:12px; border:1px solid #ddd;">推定する母数</th>
<th style="padding:12px; border:1px solid #ddd;">条件</th>
<th style="padding:12px; border:1px solid #ddd;">使う分布</th>
<th style="padding:12px; border:1px solid #ddd;">自由度</th>
</tr>
<tr style="background:#e3f2fd;">
<td style="padding:10px; border:1px solid #ddd;">母平均 μ</td>
<td style="padding:10px; border:1px solid #ddd;">σ² 既知</td>
<td style="padding:10px; border:1px solid #ddd;"><strong>標準正規分布 (z)</strong></td>
<td style="padding:10px; border:1px solid #ddd;">−</td>
</tr>
<tr style="background:#e3f2fd;">
<td style="padding:10px; border:1px solid #ddd;">母平均 μ</td>
<td style="padding:10px; border:1px solid #ddd;">σ² 未知</td>
<td style="padding:10px; border:1px solid #ddd;"><strong>t 分布</strong></td>
<td style="padding:10px; border:1px solid #ddd;">n − 1</td>
</tr>
<tr style="background:#fff3e0;">
<td style="padding:10px; border:1px solid #ddd;">母分散 σ²</td>
<td style="padding:10px; border:1px solid #ddd;">正規母集団</td>
<td style="padding:10px; border:1px solid #ddd;"><strong>カイ二乗分布 (χ²)</strong></td>
<td style="padding:10px; border:1px solid #ddd;">n − 1</td>
</tr>
<tr style="background:#e8f5e9;">
<td style="padding:10px; border:1px solid #ddd;">母比率 p</td>
<td style="padding:10px; border:1px solid #ddd;">n が十分大きい</td>
<td style="padding:10px; border:1px solid #ddd;"><strong>標準正規分布 (z)</strong></td>
<td style="padding:10px; border:1px solid #ddd;">−</td>
</tr>
<tr style="background:#fce4ec;">
<td style="padding:10px; border:1px solid #ddd;">2つの母平均の差</td>
<td style="padding:10px; border:1px solid #ddd;">σ² 未知（等分散）</td>
<td style="padding:10px; border:1px solid #ddd;"><strong>t 分布</strong></td>
<td style="padding:10px; border:1px solid #ddd;">n₁ + n₂ − 2</td>
</tr>
</table>
</div>

<h3>母分散の区間推定（カイ二乗分布）</h3>

<p>正規母集団から大きさ n の標本を取ったとき、次の統計量はカイ二乗分布に従います。</p>

<div class="katex-eq display">\\chi^2 = \\frac{(n-1)s^2}{\\sigma^2} \\sim \\chi^2(n-1)</div>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<p style="text-align:center; font-weight:bold; margin-bottom:8px;">カイ二乗分布の特徴</p>
<div style="text-align:center; padding:12px;">
<div style="max-width:350px; margin:0 auto; height:100px; position:relative; border-bottom:2px solid #333; border-left:2px solid #333;">
<div style="position:absolute; bottom:0; left:5%; width:60%; height:80px; background: linear-gradient(135deg, #fff3e0 0%, #ffcc80 40%, #ff9800 70%, transparent 100%); border-radius:0 50% 0 0; opacity:0.6;"></div>
<div style="position:absolute; bottom:-20px; left:0; font-size:0.8em;">0</div>
<div style="position:absolute; bottom:-20px; right:5%; font-size:0.8em;">→</div>
</div>
<p style="margin-top:24px; font-size:0.85em;">
・0以上の値のみ取る（右に裾が長い）<br>
・自由度が大きくなると左右対称に近づく<br>
・<strong>非対称</strong>なので上側と下側の臨界値が異なる
</p>
</div>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
カイ二乗分布は<strong>非対称</strong>なので、信頼区間も左右非対称になります。上側と下側でそれぞれ別の臨界値を使う点に注意しましょう。
</div>

<h4>母分散の信頼区間の求め方</h4>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>不偏分散 s² を計算する</strong>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>カイ二乗分布表から臨界値を読み取る</strong><br>
自由度 n−1 で <span class="katex-eq">\\chi^2_{\\alpha/2}(n-1)</span> と <span class="katex-eq">\\chi^2_{1-\\alpha/2}(n-1)</span> を求める
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>信頼区間を計算する</strong><br>
<span class="katex-eq display">\\frac{(n-1)s^2}{\\chi^2_{\\alpha/2}(n-1)} \\leq \\sigma^2 \\leq \\frac{(n-1)s^2}{\\chi^2_{1-\\alpha/2}(n-1)}</span>
</div>
</div>
</div>

<h4>具体例</h4>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<strong>例題：</strong>正規母集団から n=21 個の標本を取り、不偏分散 s²=12.0 を得た。母分散の95%信頼区間を求めよ。（<span class="katex-eq">\\chi^2_{0.025}(20) = 34.17, \\quad \\chi^2_{0.975}(20) = 9.59</span>）
</div>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<span class="katex-eq">(n-1)s^2 = 20 \\times 12.0 = 240</span>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
下限：<span class="katex-eq">\\frac{240}{34.17} \\approx 7.02</span>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
上限：<span class="katex-eq">\\frac{240}{9.59} \\approx 25.03</span><br>
<strong>答え：[7.02, 25.03]</strong>
</div>
</div>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
注意：信頼区間の式で、<strong>大きい臨界値で割ると下限</strong>、<strong>小さい臨界値で割ると上限</strong>になります。分母が大きいほど値が小さくなるからです。分数の大小関係に気をつけましょう。
</div>

<h3>母比率の区間推定</h3>

<p>母比率 p の推定には、標本比率 <span class="katex-eq">\\hat{p} = X/n</span>（X は成功数）を使います。n が十分大きければ正規近似が使えます。</p>

<div class="katex-eq display">\\hat{p} \\approx N\\left(p, \\frac{p(1-p)}{n}\\right)</div>

<h4>母比率の信頼区間の求め方</h4>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>標本比率を計算する</strong><br>
<span class="katex-eq">\\hat{p} = \\frac{X}{n}</span>（X: 成功数、n: 標本サイズ）
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>標準誤差を計算する</strong><br>
<span class="katex-eq">SE = \\sqrt{\\frac{\\hat{p}(1 - \\hat{p})}{n}}</span>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>信頼区間を計算する</strong><br>
<span class="katex-eq display">\\hat{p} \\pm z_{\\alpha/2} \\sqrt{\\frac{\\hat{p}(1 - \\hat{p})}{n}}</span>
</div>
</div>
</div>

<h4>具体例</h4>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<strong>例題：</strong>ある選挙で400人に調査したところ、180人が候補者Aを支持した。候補者Aの支持率の95%信頼区間を求めよ。
</div>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<span class="katex-eq">\\hat{p} = \\frac{180}{400} = 0.45</span>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<span class="katex-eq">SE = \\sqrt{\\frac{0.45 \\times 0.55}{400}} = \\sqrt{\\frac{0.2475}{400}} = \\sqrt{0.000619} \\approx 0.0249</span>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<span class="katex-eq">0.45 \\pm 1.96 \\times 0.0249 = 0.45 \\pm 0.049</span><br>
<strong>答え：[0.401, 0.499]（約40.1% 〜 49.9%）</strong>
</div>
</div>
</div>

<h3>2つの母平均の差の推定（等分散の場合）</h3>

<p>2つの独立な正規母集団の母平均の差 <span class="katex-eq">\\mu_1 - \\mu_2</span> を推定します。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<table style="width:100%; text-align:center; border-collapse:collapse;">
<tr>
<td style="padding:16px; background:#e3f2fd; border-radius:8px;">
<strong>母集団1</strong><br>
<span class="katex-eq">\\mu_1, \\sigma^2</span><br>
標本: <span class="katex-eq">n_1</span> 個<br>
<span class="katex-eq">\\bar{x}_1, s_1^2</span>
</td>
<td style="padding:16px; font-size:2em;">−</td>
<td style="padding:16px; background:#fff3e0; border-radius:8px;">
<strong>母集団2</strong><br>
<span class="katex-eq">\\mu_2, \\sigma^2</span><br>
標本: <span class="katex-eq">n_2</span> 個<br>
<span class="katex-eq">\\bar{x}_2, s_2^2</span>
</td>
<td style="padding:16px; font-size:1.3em;">→</td>
<td style="padding:16px; background:#e8f5e9; border-radius:8px;">
<strong>差の推定</strong><br>
<span class="katex-eq">\\mu_1 - \\mu_2</span>
</td>
</tr>
</table>
</div>

<p>等分散を仮定する場合、<strong>プールされた分散（共通分散の推定値）</strong>を計算します。</p>

<div class="katex-eq display">s_p^2 = \\frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2}</div>

<p>信頼区間は次の通りです。</p>

<div class="katex-eq display">(\\bar{x}_1 - \\bar{x}_2) \\pm t_{\\alpha/2}(n_1 + n_2 - 2) \\cdot s_p \\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}}</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<strong>自由度に注意：</strong>2標本の場合の自由度は <span class="katex-eq">n_1 + n_2 - 2</span> です。2つの標本それぞれで平均を推定するため、自由度が2つ分減ります。
</div>
`,
            quiz: [
                {
                    id: "q403_1",
                    type: "choice",
                    question: "母分散の区間推定に使う分布はどれか。",
                    options: [
                        "標準正規分布",
                        "t分布",
                        "カイ二乗分布",
                        "F分布"
                    ],
                    answer: 2,
                    explanation: "母分散の区間推定にはカイ二乗分布を使います。(n−1)s²/σ² が自由度 n−1 のカイ二乗分布に従うことを利用します。カイ二乗分布は非対称なので、上側と下側で異なる臨界値を使う必要があることも覚えておきましょう。"
                },
                {
                    id: "q403_2",
                    type: "choice",
                    question: "n=400人中120人が「はい」と回答した。母比率の95%信頼区間として最も近いものはどれか。（z₀.₀₂₅=1.96）",
                    options: [
                        "[0.255, 0.345]",
                        "[0.260, 0.340]",
                        "[0.275, 0.325]",
                        "[0.250, 0.350]"
                    ],
                    answer: 0,
                    explanation: "p̂ = 120/400 = 0.30 です。SE = √(0.30 × 0.70 / 400) = √(0.21/400) = √0.000525 ≒ 0.0229 です。信頼区間 = 0.30 ± 1.96 × 0.0229 = 0.30 ± 0.0449 ≒ [0.255, 0.345] です。"
                },
                {
                    id: "q403_3",
                    type: "choice",
                    question: "正規母集団から n=10 の標本を取り、不偏分散 s²=25 を得た。母分散の95%信頼区間の下限に最も近い値はどれか。（χ²₀.₀₂₅(9)=19.02, χ²₀.₉₇₅(9)=2.70）",
                    options: [
                        "11.83",
                        "14.72",
                        "8.33",
                        "25.00"
                    ],
                    answer: 0,
                    explanation: "(n−1)s² = 9 × 25 = 225 です。下限 = (n−1)s² / χ²₀.₀₂₅(9) = 225 / 19.02 ≒ 11.83 です。大きい方のカイ二乗値で割ると下限になることに注意してください。上限は 225 / 2.70 ≒ 83.33 となります。"
                },
                {
                    id: "q403_4",
                    type: "choice",
                    question: "2つの独立な正規母集団（等分散を仮定）から、それぞれ n₁=12, n₂=10 の標本を取った。母平均の差の信頼区間を求めるときの自由度はいくつか。",
                    options: [
                        "20",
                        "21",
                        "22",
                        "10"
                    ],
                    answer: 0,
                    explanation: "等分散を仮定した2標本の場合、自由度は n₁ + n₂ − 2 = 12 + 10 − 2 = 20 です。2つの標本からそれぞれ標本平均を推定するため、自由度が2減ります。プールされた分散 s²_p = ((n₁−1)s₁² + (n₂−1)s₂²) / (n₁+n₂−2) の分母もこの自由度になります。"
                },
                {
                    id: "q403_5",
                    type: "choice",
                    question: "母比率の区間推定で正規近似を使うための条件として適切なものはどれか。",
                    options: [
                        "母集団が正規分布に従う",
                        "標本サイズ n が十分大きい（np̂ ≥ 5 かつ n(1−p̂) ≥ 5 が目安）",
                        "母分散が既知である",
                        "標本が対応のあるデータである"
                    ],
                    answer: 1,
                    explanation: "母比率の区間推定で正規近似を使うには、標本サイズが十分大きい必要があります。目安として np̂ ≥ 5 かつ n(1−p̂) ≥ 5 が必要です。これは中心極限定理により、標本比率が正規分布に近似できるための条件です。母集団が正規分布に従う必要はありません（母集団はベルヌーイ分布です）。"
                }
            ]
        },

        // ============================================================
        // Module 404: 標本サイズの決定
        // ============================================================
        {
            id: 404,
            title: "標本サイズの決定",
            duration: "15分",
            content: `
<h2>標本サイズの決定 ── 何人調査すればよいか？</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
「調査したいけど、何人に聞けばいいの？」という問いに答えるのが標本サイズの決定です。信頼区間の幅（許容誤差）をもとに、必要な標本サイズを逆算します。統計検定2級でも出題される実践的なテーマです。
</div>

<h3>基本的な考え方</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<p style="text-align:center; font-weight:bold; margin-bottom:12px;">信頼区間の幅と標本サイズの関係</p>
<div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;">
<div style="text-align:center; padding:16px; background:#ffebee; border-radius:8px; flex:1; min-width:140px;">
<p style="font-size:2em;">n = 25</p>
<p>信頼区間の幅</p>
<div style="background:#e53935; height:8px; margin:8px 20px; border-radius:4px;"></div>
<p style="font-size:0.9em;">←───── 広い ─────→</p>
</div>
<div style="text-align:center; padding:16px; background:#fff3e0; border-radius:8px; flex:1; min-width:140px;">
<p style="font-size:2em;">n = 100</p>
<p>信頼区間の幅</p>
<div style="background:#ff9800; height:8px; margin:8px 40px; border-radius:4px;"></div>
<p style="font-size:0.9em;">←─── 中程度 ───→</p>
</div>
<div style="text-align:center; padding:16px; background:#e8f5e9; border-radius:8px; flex:1; min-width:140px;">
<p style="font-size:2em;">n = 400</p>
<p>信頼区間の幅</p>
<div style="background:#4caf50; height:8px; margin:8px 55px; border-radius:4px;"></div>
<p style="font-size:0.9em;">←─ 狭い ─→</p>
</div>
</div>
<p style="text-align:center; margin-top:12px;">n を<strong>4倍</strong>にすると、信頼区間の幅は<strong>半分</strong>になる（√n に反比例）</p>
</div>

<h3>許容誤差（誤差の限界）</h3>

<p>許容誤差 <span class="katex-eq">E</span> とは、「推定値と真の値の差がこの範囲内に収まってほしい」という値です。</p>

<div class="katex-eq display">E = z_{\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}}</div>

<p>この式を n について解くと、必要な標本サイズが求まります。</p>

<h3>母平均の推定に必要な標本サイズ</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>許容誤差 E を決める</strong><br>
「推定精度をどのくらいにしたいか」を決めます。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>信頼水準を決める</strong><br>
95%なら <span class="katex-eq">z_{0.025} = 1.96</span>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>σ の見積もりを用意する</strong><br>
過去のデータや予備調査から推定する
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>公式に代入する</strong><br>
<span class="katex-eq display">n \\geq \\left( \\frac{z_{\\alpha/2} \\cdot \\sigma}{E} \\right)^2</span>
<strong>小数点以下は切り上げ</strong>（必要数なので少ない方に丸めてはいけない）
</div>
</div>
</div>

<h4>具体例 1：母平均の推定</h4>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<strong>例題：</strong>ある製品の重さの母標準偏差は σ=5g と推定されている。母平均を95%の信頼水準で許容誤差 E=1g 以内に推定するには、少なくとも何個の標本が必要か。
</div>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<span class="katex-eq">\\sigma = 5, \\quad E = 1, \\quad z_{0.025} = 1.96</span>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<span class="katex-eq">n \\geq \\left(\\frac{1.96 \\times 5}{1}\\right)^2 = (9.8)^2 = 96.04</span>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
切り上げて <strong>n = 97</strong> 個必要
</div>
</div>
</div>

<h3>母比率の推定に必要な標本サイズ</h3>

<p>母比率 p の信頼区間の幅から逆算する場合の公式です。</p>

<div class="katex-eq display">n \\geq \\left( \\frac{z_{\\alpha/2}}{E} \\right)^2 \\hat{p}(1 - \\hat{p})</div>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<p style="text-align:center; font-weight:bold; margin-bottom:8px;">p̂(1−p̂) の値と p̂ の関係</p>
<table style="width:100%; border-collapse:collapse; text-align:center; max-width:400px; margin:0 auto;">
<tr style="background:#f5f5f5;">
<th style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">\\hat{p}</span></th>
<th style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">\\hat{p}(1-\\hat{p})</span></th>
</tr>
<tr><td style="padding:8px; border:1px solid #ddd;">0.1</td><td style="padding:8px; border:1px solid #ddd;">0.09</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">0.2</td><td style="padding:8px; border:1px solid #ddd;">0.16</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">0.3</td><td style="padding:8px; border:1px solid #ddd;">0.21</td></tr>
<tr style="background:#e8f5e9; font-weight:bold;"><td style="padding:8px; border:1px solid #ddd;">0.5</td><td style="padding:8px; border:1px solid #ddd;">0.25（最大！）</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">0.7</td><td style="padding:8px; border:1px solid #ddd;">0.21</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">0.9</td><td style="padding:8px; border:1px solid #ddd;">0.09</td></tr>
</table>
<p style="text-align:center; margin-top:8px; font-size:0.9em;"><span class="katex-eq">\\hat{p}(1-\\hat{p})</span> は <span class="katex-eq">\\hat{p} = 0.5</span> で最大値 0.25 を取る</p>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
p の見当がつかないときは、最も標本サイズが大きくなる <span class="katex-eq">\\hat{p} = 0.5</span> を使います。これにより「最悪のケースでもこの標本数で十分」という安全な設計ができます。<br>
<span class="katex-eq display">n \\geq \\left( \\frac{z_{\\alpha/2}}{2E} \\right)^2</span>
</div>

<h4>具体例 2：母比率の推定</h4>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<strong>例題：</strong>内閣支持率を95%信頼区間で許容誤差 3%（E=0.03）以内に推定したい。支持率の見当がつかない場合、何人に調査すればよいか。
</div>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
p の見当がつかないので <span class="katex-eq">\\hat{p} = 0.5</span> とする
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<span class="katex-eq">n \\geq \\left(\\frac{1.96}{0.03}\\right)^2 \\times 0.5 \\times 0.5 = (65.33)^2 \\times 0.25 = 4268.4 \\times 0.25 = 1067.1</span>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
切り上げて <strong>n = 1068 人</strong> 必要
</div>
</div>
</div>

<h3>コスト vs 精度のトレードオフ</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<p style="text-align:center; font-weight:bold; margin-bottom:12px;">標本サイズと精度・コストの関係</p>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr style="background:#f5f5f5;">
<th style="padding:10px; border:1px solid #ddd;">許容誤差 E</th>
<th style="padding:10px; border:1px solid #ddd;">必要な n（σ=10, 95%）</th>
<th style="padding:10px; border:1px solid #ddd;">コスト感</th>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd;">5.0</td>
<td style="padding:10px; border:1px solid #ddd;">16</td>
<td style="padding:10px; border:1px solid #ddd; color:#4caf50;">低い</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd;">2.0</td>
<td style="padding:10px; border:1px solid #ddd;">97</td>
<td style="padding:10px; border:1px solid #ddd; color:#ff9800;">中程度</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd;">1.0</td>
<td style="padding:10px; border:1px solid #ddd;">385</td>
<td style="padding:10px; border:1px solid #ddd; color:#e53935;">高い</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd;">0.5</td>
<td style="padding:10px; border:1px solid #ddd;">1537</td>
<td style="padding:10px; border:1px solid #ddd; color:#b71c1c;">非常に高い</td>
</tr>
</table>
<p style="text-align:center; margin-top:12px; font-size:0.9em;">
許容誤差を<strong>半分</strong>にすると、必要な標本サイズは<strong>4倍</strong>になる！<br>
（n は E² に反比例するため）
</p>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
実務では以下のバランスを考えます。<br>
・<strong>精度を上げたい</strong> → n を大きくする → コスト増<br>
・<strong>コストを抑えたい</strong> → n を小さくする → 精度低下<br>
・<strong>信頼水準を下げる</strong>（99%→95%）ことでも n を減らせる<br><br>
重要な意思決定（医薬品の臨床試験など）では高い精度が必要、簡易的な市場調査では粗い精度で十分、という判断を行います。
</div>

<h3>まとめ：標本サイズの公式一覧</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr style="background:#e8eaf6;">
<th style="padding:12px; border:1px solid #ddd;">推定対象</th>
<th style="padding:12px; border:1px solid #ddd;">必要な標本サイズ n</th>
<th style="padding:12px; border:1px solid #ddd;">必要な情報</th>
</tr>
<tr>
<td style="padding:12px; border:1px solid #ddd;">母平均 μ</td>
<td style="padding:12px; border:1px solid #ddd;"><span class="katex-eq">n \\geq \\left(\\frac{z_{\\alpha/2} \\cdot \\sigma}{E}\\right)^2</span></td>
<td style="padding:12px; border:1px solid #ddd;">σ の見積もり</td>
</tr>
<tr style="background:#f5f5f5;">
<td style="padding:12px; border:1px solid #ddd;">母比率 p</td>
<td style="padding:12px; border:1px solid #ddd;"><span class="katex-eq">n \\geq \\left(\\frac{z_{\\alpha/2}}{E}\\right)^2 \\hat{p}(1-\\hat{p})</span></td>
<td style="padding:12px; border:1px solid #ddd;">p̂ の見積もり（不明なら 0.5）</td>
</tr>
</table>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<strong>試験でのポイント</strong><br>
・標本サイズは必ず<strong>切り上げ</strong>（96.04 → 97）<br>
・許容誤差 E を半分にすると n は4倍<br>
・母比率で p が不明なら p̂ = 0.5 を代入（最大の n を与える）<br>
・σ が不明の場合は過去データや予備調査から見積もる
</div>
`,
            quiz: [
                {
                    id: "q404_1",
                    type: "choice",
                    question: "母平均を95%信頼区間で推定するとき、許容誤差を半分にするには標本サイズをどうすればよいか。",
                    options: [
                        "2倍にする",
                        "4倍にする",
                        "√2倍にする",
                        "半分にする"
                    ],
                    answer: 1,
                    explanation: "n ≥ (z·σ/E)² より、許容誤差 E を半分にすると E² は 1/4 になるので、n は 4 倍必要になります。例えば E=2 で n=100 なら、E=1 にすると n=400 必要です。精度を上げるにはサンプル数が急激に増えることを覚えておきましょう。"
                },
                {
                    id: "q404_2",
                    type: "choice",
                    question: "母標準偏差 σ=8 のとき、母平均を95%信頼区間で許容誤差 E=2 以内に推定するために必要な最小の標本サイズはいくつか。（z₀.₀₂₅=1.96）",
                    options: [
                        "60",
                        "62",
                        "64",
                        "61"
                    ],
                    answer: 1,
                    explanation: "n ≥ (z·σ/E)² = (1.96 × 8 / 2)² = (7.84)² = 61.47 です。切り上げて n = 62 が必要です。標本サイズは常に切り上げて整数にします。61では許容誤差が2をわずかに超えてしまうからです。"
                },
                {
                    id: "q404_3",
                    type: "choice",
                    question: "母比率の推定で、pの見当がつかない場合にp̂=0.5を使う理由として正しいものはどれか。",
                    options: [
                        "計算が簡単になるから",
                        "p̂(1−p̂)がp̂=0.5で最大になり、最も大きな標本サイズを確保できるから",
                        "p̂=0.5が最も標本サイズが小さくなるから",
                        "正規近似の精度が最も良くなるから"
                    ],
                    answer: 1,
                    explanation: "p̂(1−p̂) は p̂=0.5 のとき最大値 0.25 を取ります。この値を使うと、必要な標本サイズが最も大きくなるため、「最悪のケースでも十分な精度を確保できる」安全な設計ができます。実際の p がどんな値でも、この標本サイズなら許容誤差内に収まります。"
                },
                {
                    id: "q404_4",
                    type: "choice",
                    question: "ある選挙の投票率を95%信頼区間で許容誤差 2%（E=0.02）以内に推定したい。過去の調査から投票率は約 60% と見積もられている。必要な標本サイズに最も近いものはどれか。（z₀.₀₂₅=1.96）",
                    options: [
                        "1625",
                        "2305",
                        "2401",
                        "1537"
                    ],
                    answer: 1,
                    explanation: "n ≥ (z/E)² × p̂(1−p̂) = (1.96/0.02)² × 0.6 × 0.4 = (98)² × 0.24 = 9604 × 0.24 = 2304.96 です。切り上げて n = 2305 人が必要です。もし p̂=0.5 を使うと n = 9604 × 0.25 = 2401 となり、より多くの標本が必要になります。"
                },
                {
                    id: "q404_5",
                    type: "choice",
                    question: "標本サイズの決定について誤っている記述はどれか。",
                    options: [
                        "計算で小数が出た場合は切り上げて整数にする",
                        "信頼水準を99%から95%に下げると必要な標本サイズは減る",
                        "母標準偏差が大きいほど必要な標本サイズは大きくなる",
                        "許容誤差を2倍にすると必要な標本サイズも2倍になる"
                    ],
                    answer: 3,
                    explanation: "n ≥ (z·σ/E)² なので、許容誤差 E を2倍にすると E² は4倍になり、n は 1/4 になります（2倍ではなく減ります）。つまり許容誤差を大きくすれば（精度を下げれば）必要な標本数は減ります。他の選択肢はすべて正しい記述です。"
                }
            ]
        }
    ]
};
