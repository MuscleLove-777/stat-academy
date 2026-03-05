/* ============================================
   Level 5: 仮説検定
   ============================================ */

const LEVEL5_DATA = {
    id: 5,
    title: "仮説検定",
    icon: "⚖️",
    description: "仮説検定の考え方と各種検定法を学ぶ",
    modules: [
        // ============================================
        // Module 501: 検定の基本概念
        // ============================================
        {
            id: 501,
            title: "検定の基本概念",
            duration: "20分",
            content: `
<h2>⚖️ 検定の基本概念</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
仮説検定は「データに基づいて仮説を判断する」ための統計的な手続きです。統計検定2級では、検定の考え方・手順・過誤の理解が頻出です。
</div>

<h3>🔍 裁判のたとえで理解する仮説検定</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr style="background:#e8f4fd;">
<th style="padding:12px; border:2px solid #ccc; width:50%;">裁判</th>
<th style="padding:12px; border:2px solid #ccc; width:50%;">仮説検定</th>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd;">被告人は<strong>無罪と推定</strong>される</td>
<td style="padding:10px; border:1px solid #ddd;"><strong>帰無仮説 <span class="katex-eq">H_0</span></strong> を立てる</td>
</tr>
<tr style="background:#f9f9f9;">
<td style="padding:10px; border:1px solid #ddd;">検察が<strong>有罪の証拠</strong>を提出</td>
<td style="padding:10px; border:1px solid #ddd;"><strong>データ（標本）</strong>を集める</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd;">証拠が<strong>十分に強い</strong>か判断</td>
<td style="padding:10px; border:1px solid #ddd;"><strong>検定統計量・p値</strong>を計算</td>
</tr>
<tr style="background:#f9f9f9;">
<td style="padding:10px; border:1px solid #ddd;">有罪 or 無罪の<strong>判決</strong></td>
<td style="padding:10px; border:1px solid #ddd;"><span class="katex-eq">H_0</span> を<strong>棄却 or 棄却しない</strong></td>
</tr>
</table>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
「帰無仮説を棄却しない」は「帰無仮説が正しい」という意味では<strong>ありません</strong>。裁判で「無罪」は「犯罪を犯していない証明」ではなく「有罪の証拠が不十分」という意味と同じです。
</div>

<h3>📝 帰無仮説 <span class="katex-eq">H_0</span> と対立仮説 <span class="katex-eq">H_1</span></h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="display:flex; gap:20px; flex-wrap:wrap; justify-content:center;">
<div style="flex:1; min-width:220px; background:#fff3e0; border:2px solid #ff9800; border-radius:12px; padding:16px; text-align:center;">
<div style="font-size:1.3em; font-weight:bold; color:#e65100; margin-bottom:8px;">帰無仮説 <span class="katex-eq">H_0</span></div>
<div style="font-size:0.95em;">「差がない」「効果がない」<br>「変化していない」<br><br>
<span style="color:#888;">例：新薬の効果は<strong>ない</strong></span><br>
<span class="katex-eq display">H_0: \mu = \mu_0</span>
</div>
</div>
<div style="flex:1; min-width:220px; background:#e8f5e9; border:2px solid #4caf50; border-radius:12px; padding:16px; text-align:center;">
<div style="font-size:1.3em; font-weight:bold; color:#2e7d32; margin-bottom:8px;">対立仮説 <span class="katex-eq">H_1</span></div>
<div style="font-size:0.95em;">「差がある」「効果がある」<br>「変化している」<br><br>
<span style="color:#888;">例：新薬の効果は<strong>ある</strong></span><br>
<span class="katex-eq display">H_1: \mu \neq \mu_0</span>
</div>
</div>
</div>
</div>

<h3>🎯 有意水準 <span class="katex-eq">\\alpha</span> と過誤</h3>

<p>検定では2種類の誤りが起こりえます。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr>
<th style="padding:10px; border:2px solid #999; background:#f5f5f5;" colspan="2" rowspan="2"></th>
<th style="padding:10px; border:2px solid #999; background:#e3f2fd;" colspan="2">真実</th>
</tr>
<tr>
<th style="padding:10px; border:2px solid #999; background:#bbdefb;"><span class="katex-eq">H_0</span> が正しい</th>
<th style="padding:10px; border:2px solid #999; background:#bbdefb;"><span class="katex-eq">H_1</span> が正しい</th>
</tr>
<tr>
<th style="padding:10px; border:2px solid #999; background:#fff3e0;" rowspan="2">判断</th>
<th style="padding:10px; border:2px solid #999; background:#ffe0b2;"><span class="katex-eq">H_0</span> を棄却</th>
<td style="padding:10px; border:2px solid #999; background:#ffcdd2;"><strong>第1種の過誤</strong><br>（偽陽性）<br>確率 = <span class="katex-eq">\alpha</span></td>
<td style="padding:10px; border:2px solid #999; background:#c8e6c9;">正しい判断<br>（検出力）<br>確率 = <span class="katex-eq">1-\beta</span></td>
</tr>
<tr>
<th style="padding:10px; border:2px solid #999; background:#ffe0b2;"><span class="katex-eq">H_0</span> を棄却しない</th>
<td style="padding:10px; border:2px solid #999; background:#c8e6c9;">正しい判断<br><br>確率 = <span class="katex-eq">1-\alpha</span></td>
<td style="padding:10px; border:2px solid #999; background:#ffcdd2;"><strong>第2種の過誤</strong><br>（偽陰性）<br>確率 = <span class="katex-eq">\beta</span></td>
</tr>
</table>
</div>

<div class="info-box formula">
<div class="info-box-title">📐 公式</div>
<ul>
<li><strong>有意水準 <span class="katex-eq">\\alpha</span></strong>：第1種の過誤の確率の上限（通常 0.05 または 0.01）</li>
<li><strong>第2種の過誤 <span class="katex-eq">\\beta</span></strong>：本当は <span class="katex-eq">H_1</span> が正しいのに <span class="katex-eq">H_0</span> を棄却できない確率</li>
<li><strong>検出力</strong> = <span class="katex-eq">1 - \\beta</span>：正しく <span class="katex-eq">H_0</span> を棄却できる確率</li>
</ul>
</div>

<h3>📊 棄却域と p値</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; padding:10px;">
<div style="position:relative; height:180px; max-width:500px; margin:0 auto;">
<div style="position:absolute; bottom:40px; left:0; right:0; height:3px; background:#333;"></div>
<div style="position:absolute; bottom:40px; left:5%; width:15%; height:80px; background:linear-gradient(to top, #ef5350, transparent); border-radius:4px 4px 0 0; opacity:0.7;"></div>
<div style="position:absolute; bottom:40px; right:5%; width:15%; height:80px; background:linear-gradient(to top, #ef5350, transparent); border-radius:4px 4px 0 0; opacity:0.7;"></div>
<div style="position:absolute; bottom:40px; left:20%; width:60%; height:120px; background:linear-gradient(to top, #42a5f5, transparent); border-radius:8px 8px 0 0; opacity:0.5;"></div>
<div style="position:absolute; bottom:10px; left:5%; width:15%; text-align:center; color:#c62828; font-weight:bold; font-size:0.85em;">棄却域<br><span class="katex-eq">\\alpha/2</span></div>
<div style="position:absolute; bottom:10px; right:5%; width:15%; text-align:center; color:#c62828; font-weight:bold; font-size:0.85em;">棄却域<br><span class="katex-eq">\\alpha/2</span></div>
<div style="position:absolute; bottom:10px; left:30%; width:40%; text-align:center; color:#1565c0; font-weight:bold; font-size:0.85em;">採択域（棄却しない領域）</div>
<div style="position:absolute; top:5px; left:35%; width:30%; text-align:center; font-size:0.9em; color:#555;">両側検定の場合</div>
</div>
</div>
</div>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content"><strong>p値</strong>とは、帰無仮説が正しいと仮定したとき、観測されたデータ以上に極端な結果が得られる確率です。</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content"><strong>p値 ≦ <span class="katex-eq">\\alpha</span></strong> のとき → <span class="katex-eq">H_0</span> を<strong>棄却</strong>（統計的に有意）</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content"><strong>p値 > <span class="katex-eq">\\alpha</span></strong> のとき → <span class="katex-eq">H_0</span> を<strong>棄却しない</strong>（有意でない）</div>
</div>
</div>

<h3>↔️ 片側検定 vs 両側検定</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr style="background:#e8f4fd;">
<th style="padding:10px; border:2px solid #ccc;">項目</th>
<th style="padding:10px; border:2px solid #ccc;">両側検定</th>
<th style="padding:10px; border:2px solid #ccc;">片側検定（右側）</th>
<th style="padding:10px; border:2px solid #ccc;">片側検定（左側）</th>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd;"><strong>対立仮説</strong></td>
<td style="padding:10px; border:1px solid #ddd;"><span class="katex-eq">H_1: \\mu \\neq \\mu_0</span></td>
<td style="padding:10px; border:1px solid #ddd;"><span class="katex-eq">H_1: \\mu > \\mu_0</span></td>
<td style="padding:10px; border:1px solid #ddd;"><span class="katex-eq">H_1: \\mu < \\mu_0</span></td>
</tr>
<tr style="background:#f9f9f9;">
<td style="padding:10px; border:1px solid #ddd;"><strong>棄却域</strong></td>
<td style="padding:10px; border:1px solid #ddd;">両端（<span class="katex-eq">\\alpha/2</span> ずつ）</td>
<td style="padding:10px; border:1px solid #ddd;">右端のみ（<span class="katex-eq">\\alpha</span>）</td>
<td style="padding:10px; border:1px solid #ddd;">左端のみ（<span class="katex-eq">\\alpha</span>）</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd;"><strong>使う場面</strong></td>
<td style="padding:10px; border:1px solid #ddd;">差があるか知りたい</td>
<td style="padding:10px; border:1px solid #ddd;">大きいか知りたい</td>
<td style="padding:10px; border:1px solid #ddd;">小さいか知りたい</td>
</tr>
</table>
</div>

<div class="info-box success">
<div class="info-box-title">✅ 試験対策</div>
<ul>
<li>検定の手順（仮説設定→有意水準→検定統計量→判定）は必ず覚える</li>
<li>p値の解釈を正確に理解する（よくある誤解に注意）</li>
<li>第1種・第2種の過誤の違いは頻出問題</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q501_1",
                    type: "choice",
                    question: "帰無仮説 H₀ が実際には正しいのに、それを棄却してしまう誤りを何というか。",
                    options: [
                        "第1種の過誤（α過誤）",
                        "第2種の過誤（β過誤）",
                        "標本誤差",
                        "系統誤差"
                    ],
                    answer: 0,
                    explanation: "H₀ が正しいのに棄却する誤りは第1種の過誤（Type I error）であり、その確率の上限が有意水準 α です。H₁ が正しいのに H₀ を棄却できない誤りは第2種の過誤（Type II error）です。"
                },
                {
                    id: "q501_2",
                    type: "choice",
                    question: "有意水準 α = 0.05 で両側検定を行うとき、棄却域はどのように設定されるか。",
                    options: [
                        "分布の両端にそれぞれ 2.5% ずつ",
                        "分布の右端に 5%",
                        "分布の両端にそれぞれ 5% ずつ",
                        "分布の左端に 5%"
                    ],
                    answer: 0,
                    explanation: "両側検定では有意水準 α を2等分して、分布の両端にそれぞれ α/2 = 0.025（2.5%）の棄却域を設けます。"
                },
                {
                    id: "q501_3",
                    type: "choice",
                    question: "p値について正しい記述はどれか。",
                    options: [
                        "帰無仮説が正しい確率",
                        "帰無仮説が正しいと仮定したとき、観測値以上に極端な値が得られる確率",
                        "対立仮説が正しい確率",
                        "検定統計量の値そのもの"
                    ],
                    answer: 1,
                    explanation: "p値は「帰無仮説 H₀ が正しいと仮定したとき、観測されたデータ以上に極端な結果が得られる確率」です。H₀ が正しい確率そのものではないことに注意してください。"
                },
                {
                    id: "q501_4",
                    type: "choice",
                    question: "検出力（power）とは何か。",
                    options: [
                        "帰無仮説が正しいときに棄却する確率",
                        "帰無仮説が正しいときに棄却しない確率",
                        "対立仮説が正しいときに帰無仮説を棄却できる確率",
                        "対立仮説が正しいときに帰無仮説を棄却できない確率"
                    ],
                    answer: 2,
                    explanation: "検出力は 1-β で表され、対立仮説 H₁ が正しいときに正しく H₀ を棄却できる確率です。検出力が高いほど、真の効果を見逃しにくくなります。"
                },
                {
                    id: "q501_5",
                    type: "choice",
                    question: "「新薬Aは従来薬よりも効果が高い」ことを示したい。対立仮説 H₁ として適切なのはどれか。ただし μ_A は新薬の母平均、μ_0 は従来薬の母平均とする。",
                    options: [
                        "H₁: μ_A = μ_0",
                        "H₁: μ_A ≠ μ_0",
                        "H₁: μ_A > μ_0",
                        "H₁: μ_A < μ_0"
                    ],
                    answer: 2,
                    explanation: "「効果が高い」という方向が決まっているため、片側検定（右側）が適切です。対立仮説は H₁: μ_A > μ_0 となります。方向が決まっていない場合は両側検定（H₁: μ_A ≠ μ_0）を使います。"
                }
            ]
        },

        // ============================================
        // Module 502: z検定とt検定
        // ============================================
        {
            id: 502,
            title: "z検定とt検定",
            duration: "25分",
            content: `
<h2>📐 z検定とt検定</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
母平均に関する検定は統計検定2級の最重要テーマの一つです。母分散が既知か未知かで使う検定が変わります。
</div>

<h3>🔀 どの検定を使う？判定フローチャート</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; padding:10px;">
<div style="display:inline-block; background:#e3f2fd; border:2px solid #1976d2; border-radius:12px; padding:12px 24px; font-weight:bold; color:#1565c0;">母平均の検定をしたい</div>
<div style="font-size:1.5em; color:#666;">↓</div>
<div style="display:inline-block; background:#fff3e0; border:2px solid #f57c00; border-radius:50%; padding:16px 12px; font-weight:bold; color:#e65100;">母分散 <span class="katex-eq">\\sigma^2</span><br>は既知？</div>
<div style="display:flex; justify-content:center; gap:60px; margin-top:10px;">
<div>
<div style="color:#4caf50; font-weight:bold; font-size:1.1em;">はい ↓</div>
<div style="background:#e8f5e9; border:2px solid #4caf50; border-radius:12px; padding:12px 20px; font-weight:bold; color:#2e7d32;">z検定</div>
</div>
<div>
<div style="color:#f44336; font-weight:bold; font-size:1.1em;">いいえ ↓</div>
<div style="background:#fce4ec; border:2px solid #e91e63; border-radius:12px; padding:12px 20px; font-weight:bold; color:#c2185b;">t検定</div>
</div>
</div>
</div>
</div>

<h3>📏 z検定（母分散 <span class="katex-eq">\\sigma^2</span> 既知）</h3>

<div class="info-box formula">
<div class="info-box-title">📐 検定統計量</div>
<span class="katex-eq display">z = \\frac{\\bar{X} - \\mu_0}{\\sigma / \\sqrt{n}}</span>
<p><span class="katex-eq">H_0</span> のもとで <span class="katex-eq">z \\sim N(0, 1)</span>（標準正規分布に従う）</p>
</div>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content"><strong>仮説を設定</strong>：<span class="katex-eq">H_0: \\mu = \\mu_0</span> vs <span class="katex-eq">H_1: \\mu \\neq \\mu_0</span>（両側）</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content"><strong>有意水準を決定</strong>：<span class="katex-eq">\\alpha = 0.05</span> など</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content"><strong>検定統計量を計算</strong>：<span class="katex-eq">z = \\frac{\\bar{X} - \\mu_0}{\\sigma / \\sqrt{n}}</span></div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content"><strong>判定</strong>：両側検定なら <span class="katex-eq">|z| > z_{\\alpha/2}</span> で棄却<br>（<span class="katex-eq">\\alpha = 0.05</span> のとき <span class="katex-eq">z_{0.025} = 1.96</span>）</div>
</div>
</div>

<h3>📏 t検定（母分散 <span class="katex-eq">\\sigma^2</span> 未知）</h3>

<div class="info-box formula">
<div class="info-box-title">📐 検定統計量</div>
<span class="katex-eq display">t = \\frac{\\bar{X} - \\mu_0}{s / \\sqrt{n}}</span>
<p><span class="katex-eq">H_0</span> のもとで <span class="katex-eq">t \\sim t(n-1)</span>（自由度 <span class="katex-eq">n-1</span> のt分布に従う）</p>
<p>※ <span class="katex-eq">s</span> は標本標準偏差（不偏分散の平方根）</p>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
z検定との違いは、母分散 <span class="katex-eq">\\sigma</span> の代わりに標本標準偏差 <span class="katex-eq">s</span> を使う点と、標準正規分布ではなくt分布を使う点です。標本サイズが大きい（目安：<span class="katex-eq">n \\geq 30</span>）場合、t分布は標準正規分布に近づきます。
</div>

<h3>🔗 対応のあるt検定</h3>

<p>同じ被験者に対して2回測定（前後比較など）した場合に使います。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<table style="width:100%; border-collapse:collapse; text-align:center; max-width:450px; margin:0 auto;">
<tr style="background:#e8f4fd;">
<th style="padding:8px; border:1px solid #ccc;">被験者</th>
<th style="padding:8px; border:1px solid #ccc;">投与前 <span class="katex-eq">X_i</span></th>
<th style="padding:8px; border:1px solid #ccc;">投与後 <span class="katex-eq">Y_i</span></th>
<th style="padding:8px; border:1px solid #ccc;">差 <span class="katex-eq">d_i = Y_i - X_i</span></th>
</tr>
<tr><td style="padding:8px; border:1px solid #ddd;">1</td><td style="padding:8px; border:1px solid #ddd;">120</td><td style="padding:8px; border:1px solid #ddd;">115</td><td style="padding:8px; border:1px solid #ddd; color:#2e7d32; font-weight:bold;">-5</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:8px; border:1px solid #ddd;">2</td><td style="padding:8px; border:1px solid #ddd;">135</td><td style="padding:8px; border:1px solid #ddd;">128</td><td style="padding:8px; border:1px solid #ddd; color:#2e7d32; font-weight:bold;">-7</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">3</td><td style="padding:8px; border:1px solid #ddd;">140</td><td style="padding:8px; border:1px solid #ddd;">132</td><td style="padding:8px; border:1px solid #ddd; color:#2e7d32; font-weight:bold;">-8</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:8px; border:1px solid #ddd;">...</td><td style="padding:8px; border:1px solid #ddd;">...</td><td style="padding:8px; border:1px solid #ddd;">...</td><td style="padding:8px; border:1px solid #ddd;">...</td></tr>
</table>
<div style="text-align:center; margin-top:12px; font-size:0.95em;">差 <span class="katex-eq">d_i</span> に対して1標本t検定を行う</div>
</div>

<div class="info-box formula">
<div class="info-box-title">📐 対応のあるt検定の統計量</div>
<span class="katex-eq display">t = \\frac{\\bar{d}}{s_d / \\sqrt{n}}</span>
<p><span class="katex-eq">\\bar{d}</span>：差の平均、<span class="katex-eq">s_d</span>：差の標本標準偏差、自由度 <span class="katex-eq">n-1</span></p>
</div>

<h3>👥 2標本t検定</h3>

<p>2つの独立な集団の母平均を比較します。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="display:flex; gap:20px; flex-wrap:wrap; justify-content:center;">
<div style="flex:1; min-width:200px; background:#e3f2fd; border:2px solid #1976d2; border-radius:12px; padding:16px; text-align:center;">
<div style="font-weight:bold; color:#1565c0; margin-bottom:8px;">等分散を仮定する場合</div>
<div style="font-size:0.9em; text-align:left;">
<span class="katex-eq display">t = \\frac{\\bar{X}_1 - \\bar{X}_2}{s_p\\sqrt{\\frac{1}{n_1}+\\frac{1}{n_2}}}</span>
<p>プールされた分散：</p>
<span class="katex-eq display">s_p^2 = \\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}</span>
<p>自由度：<span class="katex-eq">n_1 + n_2 - 2</span></p>
</div>
</div>
<div style="flex:1; min-width:200px; background:#fce4ec; border:2px solid #e91e63; border-radius:12px; padding:16px; text-align:center;">
<div style="font-weight:bold; color:#c2185b; margin-bottom:8px;">等分散を仮定しない場合<br>（ウェルチのt検定）</div>
<div style="font-size:0.9em; text-align:left;">
<span class="katex-eq display">t = \\frac{\\bar{X}_1 - \\bar{X}_2}{\\sqrt{\\frac{s_1^2}{n_1}+\\frac{s_2^2}{n_2}}}</span>
<p>自由度はウェルチ・サタスウェイトの近似で求める</p>
</div>
</div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">✅ 試験対策</div>
<ul>
<li>z検定とt検定の使い分けは最頻出</li>
<li>対応のあるt検定では「差」を計算してから1標本t検定を行う</li>
<li>2標本t検定ではプールされた分散の計算が重要</li>
<li>ウェルチのt検定は等分散を仮定しなくてよい→実務では一般的</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q502_1",
                    type: "choice",
                    question: "母分散が既知のとき、母平均の検定に用いる検定統計量が従う分布はどれか。",
                    options: [
                        "t分布",
                        "カイ二乗分布",
                        "標準正規分布",
                        "F分布"
                    ],
                    answer: 2,
                    explanation: "母分散 σ² が既知の場合、z = (X̄ - μ₀)/(σ/√n) は標準正規分布 N(0,1) に従います。これがz検定です。母分散が未知の場合はt分布に従います。"
                },
                {
                    id: "q502_2",
                    type: "choice",
                    question: "標本サイズ n = 16 のとき、母平均の t 検定における検定統計量の自由度はいくつか。",
                    options: [
                        "16",
                        "15",
                        "17",
                        "14"
                    ],
                    answer: 1,
                    explanation: "1標本t検定の自由度は n - 1 です。n = 16 のとき自由度は 16 - 1 = 15 となります。"
                },
                {
                    id: "q502_3",
                    type: "choice",
                    question: "対応のあるt検定で正しい記述はどれか。",
                    options: [
                        "2つの独立な標本の平均を比較する",
                        "各ペアの差を計算し、差のデータに対して1標本t検定を行う",
                        "母分散が既知のときに使う",
                        "自由度は 2n - 2 である"
                    ],
                    answer: 1,
                    explanation: "対応のあるt検定では、各ペアの差 dᵢ = Yᵢ - Xᵢ を計算し、その差のデータに対して「母平均 = 0」の1標本t検定を行います。自由度は n - 1 です。"
                },
                {
                    id: "q502_4",
                    type: "choice",
                    question: "2標本t検定（等分散を仮定）において、標本サイズが n₁ = 10, n₂ = 12 のとき、自由度はいくつか。",
                    options: [
                        "20",
                        "21",
                        "22",
                        "10"
                    ],
                    answer: 0,
                    explanation: "等分散を仮定した2標本t検定の自由度は n₁ + n₂ - 2 = 10 + 12 - 2 = 20 です。"
                },
                {
                    id: "q502_5",
                    type: "choice",
                    question: "ウェルチのt検定の特徴として正しいものはどれか。",
                    options: [
                        "母分散が既知のときに使う",
                        "2つの母集団の分散が等しいことを仮定する",
                        "2つの母集団の分散が等しいことを仮定しない",
                        "対応のあるデータにのみ使える"
                    ],
                    answer: 2,
                    explanation: "ウェルチのt検定は等分散を仮定せずに2つの母平均の差を検定できます。自由度はウェルチ・サタスウェイトの近似式で計算します。等分散が保証できない場合に有用です。"
                }
            ]
        },

        // ============================================
        // Module 503: カイ二乗検定
        // ============================================
        {
            id: 503,
            title: "カイ二乗検定",
            duration: "20分",
            content: `
<h2>📊 カイ二乗検定</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
カイ二乗検定（<span class="katex-eq">\\chi^2</span> 検定）は、度数データ（カテゴリカルデータ）に対する検定です。適合度検定と独立性の検定の2種類を確実に区別しましょう。
</div>

<h3>📋 適合度検定</h3>

<p>観測された度数が、理論的な期待度数と合っているかどうかを検定します。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; margin-bottom:10px; font-weight:bold; color:#1565c0;">例：サイコロが公正かどうかの検定（60回投げた結果）</div>
<table style="width:100%; max-width:500px; margin:0 auto; border-collapse:collapse; text-align:center;">
<tr style="background:#e8f4fd;">
<th style="padding:10px; border:2px solid #ccc;">目</th>
<th style="padding:10px; border:2px solid #ccc;">1</th>
<th style="padding:10px; border:2px solid #ccc;">2</th>
<th style="padding:10px; border:2px solid #ccc;">3</th>
<th style="padding:10px; border:2px solid #ccc;">4</th>
<th style="padding:10px; border:2px solid #ccc;">5</th>
<th style="padding:10px; border:2px solid #ccc;">6</th>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;"><strong>観測度数 <span class="katex-eq">O_i</span></strong></td>
<td style="padding:8px; border:1px solid #ddd;">14</td>
<td style="padding:8px; border:1px solid #ddd;">8</td>
<td style="padding:8px; border:1px solid #ddd;">12</td>
<td style="padding:8px; border:1px solid #ddd;">7</td>
<td style="padding:8px; border:1px solid #ddd;">11</td>
<td style="padding:8px; border:1px solid #ddd;">8</td>
</tr>
<tr style="background:#f9f9f9;">
<td style="padding:8px; border:1px solid #ddd;"><strong>期待度数 <span class="katex-eq">E_i</span></strong></td>
<td style="padding:8px; border:1px solid #ddd;">10</td>
<td style="padding:8px; border:1px solid #ddd;">10</td>
<td style="padding:8px; border:1px solid #ddd;">10</td>
<td style="padding:8px; border:1px solid #ddd;">10</td>
<td style="padding:8px; border:1px solid #ddd;">10</td>
<td style="padding:8px; border:1px solid #ddd;">10</td>
</tr>
</table>
</div>

<div class="info-box formula">
<div class="info-box-title">📐 適合度検定の統計量</div>
<span class="katex-eq display">\\chi^2 = \\sum_{i=1}^{k} \\frac{(O_i - E_i)^2}{E_i}</span>
<p>自由度：<span class="katex-eq">k - 1</span>（<span class="katex-eq">k</span> はカテゴリの数）</p>
<p>上の例では自由度 = 6 - 1 = 5</p>
</div>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content"><strong>仮説設定</strong>：<span class="katex-eq">H_0</span>：サイコロは公正（各目の出る確率は1/6）</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content"><strong>期待度数の計算</strong>：各カテゴリの期待度数 <span class="katex-eq">E_i = n \\times p_i</span> を求める（上の例：<span class="katex-eq">60 \\times 1/6 = 10</span>）</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content"><strong>検定統計量の計算</strong>：<span class="katex-eq">\\chi^2 = \\frac{(14-10)^2}{10} + \\frac{(8-10)^2}{10} + \\cdots = \\frac{16+4+4+9+1+4}{10} = 3.8</span></div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content"><strong>判定</strong>：自由度5の <span class="katex-eq">\\chi^2</span> 分布の上側5%点は 11.07。<span class="katex-eq">3.8 < 11.07</span> なので <span class="katex-eq">H_0</span> を棄却しない。</div>
</div>
</div>

<h3>📋 独立性の検定（分割表）</h3>

<p>2つのカテゴリカル変数が独立かどうかを検定します。</p>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; margin-bottom:10px; font-weight:bold; color:#1565c0;">例：性別と商品の好みは関連があるか？</div>
<table style="width:100%; max-width:400px; margin:0 auto; border-collapse:collapse; text-align:center;">
<tr style="background:#e8f4fd;">
<th style="padding:10px; border:2px solid #ccc;"></th>
<th style="padding:10px; border:2px solid #ccc;">商品A</th>
<th style="padding:10px; border:2px solid #ccc;">商品B</th>
<th style="padding:10px; border:2px solid #ccc; background:#bbdefb;">計</th>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold;">男性</td>
<td style="padding:8px; border:1px solid #ddd;">30</td>
<td style="padding:8px; border:1px solid #ddd;">20</td>
<td style="padding:8px; border:1px solid #ddd; background:#e3f2fd; font-weight:bold;">50</td>
</tr>
<tr style="background:#f9f9f9;">
<td style="padding:8px; border:1px solid #ddd; font-weight:bold;">女性</td>
<td style="padding:8px; border:1px solid #ddd;">15</td>
<td style="padding:8px; border:1px solid #ddd;">35</td>
<td style="padding:8px; border:1px solid #ddd; background:#e3f2fd; font-weight:bold;">50</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; background:#bbdefb;">計</td>
<td style="padding:8px; border:1px solid #ddd; background:#e3f2fd; font-weight:bold;">45</td>
<td style="padding:8px; border:1px solid #ddd; background:#e3f2fd; font-weight:bold;">55</td>
<td style="padding:8px; border:1px solid #ddd; background:#bbdefb; font-weight:bold;">100</td>
</tr>
</table>
</div>

<div class="info-box formula">
<div class="info-box-title">📐 期待度数の計算</div>
<span class="katex-eq display">E_{ij} = \\frac{\\text{（行の合計）} \\times \\text{（列の合計）}}{\\text{総計}}</span>
<p>例：男性×商品Aの期待度数 = <span class="katex-eq">\\frac{50 \\times 45}{100} = 22.5</span></p>
</div>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; margin-bottom:10px; font-weight:bold; color:#e65100;">期待度数の表</div>
<table style="width:100%; max-width:400px; margin:0 auto; border-collapse:collapse; text-align:center;">
<tr style="background:#fff3e0;">
<th style="padding:10px; border:2px solid #ccc;"></th>
<th style="padding:10px; border:2px solid #ccc;">商品A</th>
<th style="padding:10px; border:2px solid #ccc;">商品B</th>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold;">男性</td>
<td style="padding:8px; border:1px solid #ddd;">22.5</td>
<td style="padding:8px; border:1px solid #ddd;">27.5</td>
</tr>
<tr style="background:#f9f9f9;">
<td style="padding:8px; border:1px solid #ddd; font-weight:bold;">女性</td>
<td style="padding:8px; border:1px solid #ddd;">22.5</td>
<td style="padding:8px; border:1px solid #ddd;">27.5</td>
</tr>
</table>
</div>

<div class="info-box formula">
<div class="info-box-title">📐 独立性の検定の統計量と自由度</div>
<span class="katex-eq display">\\chi^2 = \\sum_{i,j} \\frac{(O_{ij} - E_{ij})^2}{E_{ij}}</span>
<p>自由度：<span class="katex-eq">(r-1)(c-1)</span>（<span class="katex-eq">r</span>：行数、<span class="katex-eq">c</span>：列数）</p>
<p>上の例では自由度 = <span class="katex-eq">(2-1)(2-1) = 1</span></p>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
<ul>
<li>カイ二乗検定は<strong>常に右側（上側）検定</strong>です（<span class="katex-eq">\\chi^2</span> 値が大きいほど「ズレ」が大きい）</li>
<li>期待度数が<strong>5未満のセル</strong>がある場合、検定の精度が下がるため注意が必要です</li>
<li>適合度検定の自由度は <span class="katex-eq">k-1</span>、独立性検定の自由度は <span class="katex-eq">(r-1)(c-1)</span> を混同しない</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ 試験対策</div>
<ul>
<li>期待度数の計算は必ず出題される</li>
<li>自由度の求め方（適合度 vs 独立性）を整理しておく</li>
<li>検定統計量の計算手順を繰り返し練習する</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q503_1",
                    type: "choice",
                    question: "カイ二乗適合度検定で、カテゴリが5つあるとき、自由度はいくつか。",
                    options: [
                        "5",
                        "4",
                        "6",
                        "3"
                    ],
                    answer: 1,
                    explanation: "適合度検定の自由度は k - 1 です。カテゴリが5つなので自由度 = 5 - 1 = 4 となります。"
                },
                {
                    id: "q503_2",
                    type: "choice",
                    question: "3行4列の分割表における独立性の検定で、自由度はいくつか。",
                    options: [
                        "12",
                        "11",
                        "6",
                        "7"
                    ],
                    answer: 2,
                    explanation: "独立性の検定の自由度は (r-1)(c-1) です。3行4列なので (3-1)(4-1) = 2×3 = 6 となります。"
                },
                {
                    id: "q503_3",
                    type: "choice",
                    question: "2×2分割表において、あるセルの行合計が60、列合計が40、総計が200のとき、そのセルの期待度数はいくつか。",
                    options: [
                        "10",
                        "12",
                        "15",
                        "20"
                    ],
                    answer: 1,
                    explanation: "期待度数 = (行合計 × 列合計) / 総計 = (60 × 40) / 200 = 12 です。"
                },
                {
                    id: "q503_4",
                    type: "choice",
                    question: "カイ二乗検定について正しい記述はどれか。",
                    options: [
                        "両側検定で行う",
                        "左側検定で行う",
                        "右側（上側）検定で行う",
                        "片側・両側のどちらでもよい"
                    ],
                    answer: 2,
                    explanation: "カイ二乗検定統計量は (O-E)²/E の合計で常に非負であり、観測と期待のズレが大きいほど値が大きくなります。そのため常に右側（上側）検定を行います。"
                },
                {
                    id: "q503_5",
                    type: "choice",
                    question: "観測度数が20、期待度数が15のセルが検定統計量に寄与する値はいくつか。",
                    options: [
                        "5/15",
                        "25/15",
                        "5/20",
                        "25/20"
                    ],
                    answer: 1,
                    explanation: "各セルの寄与は (O - E)² / E = (20 - 15)² / 15 = 25/15 です。分母は期待度数 E であることに注意してください。"
                }
            ]
        },

        // ============================================
        // Module 504: F検定と分散分析
        // ============================================
        {
            id: 504,
            title: "F検定と分散分析",
            duration: "20分",
            content: `
<h2>📈 F検定と分散分析</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
F検定は分散の比に関する検定です。等分散の検定と、3群以上の平均の差を調べる分散分析（ANOVA）で使われます。
</div>

<h3>⚖️ 等分散のF検定</h3>

<p>2つの母集団の分散が等しいかどうかを検定します。</p>

<div class="info-box formula">
<div class="info-box-title">📐 F検定の統計量</div>
<span class="katex-eq display">F = \\frac{s_1^2}{s_2^2}</span>
<p>（通常、大きい方の不偏分散を分子にする）</p>
<p><span class="katex-eq">H_0: \\sigma_1^2 = \\sigma_2^2</span> のもとで <span class="katex-eq">F \\sim F(n_1-1,\\; n_2-1)</span></p>
</div>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content"><strong>仮説</strong>：<span class="katex-eq">H_0: \\sigma_1^2 = \\sigma_2^2</span> vs <span class="katex-eq">H_1: \\sigma_1^2 \\neq \\sigma_2^2</span></div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content"><strong>統計量</strong>：大きい方の不偏分散を分子にして <span class="katex-eq">F = s_1^2 / s_2^2</span> を計算</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content"><strong>判定</strong>：<span class="katex-eq">F > F_{\\alpha/2}(n_1-1, n_2-1)</span> なら棄却</div>
</div>
</div>

<h3>📊 一元配置分散分析（ANOVA）</h3>

<p>3つ以上の群の母平均に差があるかどうかを検定します。</p>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
なぜ t検定を繰り返さないのか？ → 群が3つの場合、t検定を3回行うと第1種の過誤の確率が増大します（多重比較の問題）。分散分析はこれを1回の検定で行えます。
</div>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; font-weight:bold; color:#1565c0; margin-bottom:12px;">分散の分解：全体変動 = 群間変動 + 群内変動</div>
<div style="display:flex; gap:10px; flex-wrap:wrap; justify-content:center; align-items:center;">
<div style="background:linear-gradient(135deg, #e3f2fd, #bbdefb); border:2px solid #1976d2; border-radius:12px; padding:16px; text-align:center; min-width:120px;">
<div style="font-weight:bold; color:#1565c0;">全体変動</div>
<div style="font-size:0.9em;"><span class="katex-eq">S_T</span></div>
</div>
<div style="font-size:2em; color:#666;">=</div>
<div style="background:linear-gradient(135deg, #fff3e0, #ffe0b2); border:2px solid #f57c00; border-radius:12px; padding:16px; text-align:center; min-width:120px;">
<div style="font-weight:bold; color:#e65100;">群間変動</div>
<div style="font-size:0.9em;"><span class="katex-eq">S_A</span></div>
</div>
<div style="font-size:2em; color:#666;">+</div>
<div style="background:linear-gradient(135deg, #e8f5e9, #c8e6c9); border:2px solid #4caf50; border-radius:12px; padding:16px; text-align:center; min-width:120px;">
<div style="font-weight:bold; color:#2e7d32;">群内変動</div>
<div style="font-size:0.9em;"><span class="katex-eq">S_E</span></div>
</div>
</div>
</div>

<div class="info-box formula">
<div class="info-box-title">📐 分散分析の公式</div>
<p><strong>全体変動</strong>（総平方和）：</p>
<span class="katex-eq display">S_T = \\sum_{i=1}^{a}\\sum_{j=1}^{n_i}(x_{ij} - \\bar{x})^2</span>
<p><strong>群間変動</strong>（要因の平方和）：</p>
<span class="katex-eq display">S_A = \\sum_{i=1}^{a} n_i(\\bar{x}_i - \\bar{x})^2</span>
<p><strong>群内変動</strong>（誤差の平方和）：</p>
<span class="katex-eq display">S_E = \\sum_{i=1}^{a}\\sum_{j=1}^{n_i}(x_{ij} - \\bar{x}_i)^2</span>
<p>ここで、<span class="katex-eq">a</span>：群の数、<span class="katex-eq">\\bar{x}_i</span>：第 <span class="katex-eq">i</span> 群の平均、<span class="katex-eq">\\bar{x}</span>：全体平均</p>
</div>

<h3>📋 分散分析表の読み方</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr style="background:#e8f4fd;">
<th style="padding:10px; border:2px solid #ccc;">要因</th>
<th style="padding:10px; border:2px solid #ccc;">平方和 (SS)</th>
<th style="padding:10px; border:2px solid #ccc;">自由度 (df)</th>
<th style="padding:10px; border:2px solid #ccc;">平均平方 (MS)</th>
<th style="padding:10px; border:2px solid #ccc;">F値</th>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd; font-weight:bold; background:#fff3e0;">群間（要因A）</td>
<td style="padding:10px; border:1px solid #ddd;"><span class="katex-eq">S_A</span></td>
<td style="padding:10px; border:1px solid #ddd;"><span class="katex-eq">a - 1</span></td>
<td style="padding:10px; border:1px solid #ddd;"><span class="katex-eq">V_A = \\frac{S_A}{a-1}</span></td>
<td style="padding:10px; border:1px solid #ddd;"><span class="katex-eq">F = \\frac{V_A}{V_E}</span></td>
</tr>
<tr style="background:#f9f9f9;">
<td style="padding:10px; border:1px solid #ddd; font-weight:bold; background:#e8f5e9;">群内（誤差E）</td>
<td style="padding:10px; border:1px solid #ddd;"><span class="katex-eq">S_E</span></td>
<td style="padding:10px; border:1px solid #ddd;"><span class="katex-eq">n - a</span></td>
<td style="padding:10px; border:1px solid #ddd;"><span class="katex-eq">V_E = \\frac{S_E}{n-a}</span></td>
<td style="padding:10px; border:1px solid #ddd;"></td>
</tr>
<tr>
<td style="padding:10px; border:1px solid #ddd; font-weight:bold; background:#e3f2fd;">全体</td>
<td style="padding:10px; border:1px solid #ddd;"><span class="katex-eq">S_T</span></td>
<td style="padding:10px; border:1px solid #ddd;"><span class="katex-eq">n - 1</span></td>
<td style="padding:10px; border:1px solid #ddd;"></td>
<td style="padding:10px; border:1px solid #ddd;"></td>
</tr>
</table>
<p style="text-align:center; margin-top:8px; font-size:0.9em;"><span class="katex-eq">a</span>：群数、<span class="katex-eq">n</span>：全データ数</p>
</div>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; font-weight:bold; color:#1565c0; margin-bottom:12px;">F値の意味</div>
<div style="display:flex; gap:10px; flex-wrap:wrap; justify-content:center; align-items:center;">
<div style="background:#fff3e0; border:2px solid #f57c00; border-radius:12px; padding:14px; text-align:center; min-width:150px;">
<div style="font-weight:bold; color:#e65100;">F値 が大きい</div>
<div style="font-size:0.9em; margin-top:4px;">群間の差 > 群内のバラつき<br>→ 群の平均に差がある可能性</div>
</div>
<div style="background:#e8f5e9; border:2px solid #4caf50; border-radius:12px; padding:14px; text-align:center; min-width:150px;">
<div style="font-weight:bold; color:#2e7d32;">F値 が小さい（≈1）</div>
<div style="font-size:0.9em; margin-top:4px;">群間の差 ≈ 群内のバラつき<br>→ 群の平均に差はなさそう</div>
</div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">✅ 試験対策</div>
<ul>
<li>分散分析表の空欄補充は頻出パターン</li>
<li>自由度の関係：<span class="katex-eq">(a-1) + (n-a) = n-1</span> を確認に使う</li>
<li>F値 = 群間平均平方 / 群内平均平方 の意味を理解する</li>
<li>分散分析の前提条件：各群が正規分布、等分散、独立</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q504_1",
                    type: "choice",
                    question: "等分散のF検定において、標本1の不偏分散が 12、標本2の不偏分散が 4 のとき、F統計量の値はいくつか。",
                    options: [
                        "3",
                        "8",
                        "16",
                        "48"
                    ],
                    answer: 0,
                    explanation: "F = s₁²/s₂² = 12/4 = 3 です。大きい方の不偏分散を分子にします。"
                },
                {
                    id: "q504_2",
                    type: "choice",
                    question: "一元配置分散分析で、4つの群があり全データ数が40のとき、群内変動の自由度はいくつか。",
                    options: [
                        "3",
                        "36",
                        "39",
                        "37"
                    ],
                    answer: 1,
                    explanation: "群内変動の自由度は n - a = 40 - 4 = 36 です。群間の自由度は a - 1 = 3、全体の自由度は n - 1 = 39 で、3 + 36 = 39 と一致します。"
                },
                {
                    id: "q504_3",
                    type: "choice",
                    question: "分散分析表において、群間平方和が 120、群間の自由度が 3 のとき、群間の平均平方（MS）はいくつか。",
                    options: [
                        "360",
                        "40",
                        "30",
                        "117"
                    ],
                    answer: 1,
                    explanation: "平均平方 MS = 平方和 / 自由度 = 120 / 3 = 40 です。"
                },
                {
                    id: "q504_4",
                    type: "choice",
                    question: "分散分析のF値が1に近いとき、適切な解釈はどれか。",
                    options: [
                        "群間に大きな差がある",
                        "群間の変動と群内の変動がほぼ同程度であり、群の平均に差がなさそう",
                        "データに正規性がない",
                        "標本サイズが不足している"
                    ],
                    answer: 1,
                    explanation: "F = 群間平均平方 / 群内平均平方 なので、F ≈ 1 は群間の変動と群内の変動がほぼ同じであることを意味します。つまり群の平均に有意な差は見られないと判断します。"
                },
                {
                    id: "q504_5",
                    type: "choice",
                    question: "一元配置分散分析の前提条件として正しくないものはどれか。",
                    options: [
                        "各群のデータが正規分布に従う",
                        "各群の分散が等しい（等分散）",
                        "各群のデータが互いに独立",
                        "各群の標本サイズが等しい"
                    ],
                    answer: 3,
                    explanation: "一元配置分散分析の前提条件は、正規性・等分散性・独立性の3つです。標本サイズが等しい（バランスのとれたデザイン）ことは望ましいですが、必須条件ではありません。"
                }
            ]
        },

        // ============================================
        // Module 505: 検定の選び方
        // ============================================
        {
            id: 505,
            title: "検定の選び方",
            duration: "15分",
            content: `
<h2>🗺️ 検定の選び方</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
統計検定2級では「どの検定手法を使うべきか」を問う問題が頻出です。問題文のキーワードから正しい検定を選ぶ力を身につけましょう。
</div>

<h3>🔀 検定選択フローチャート</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<div style="text-align:center; padding:10px;">

<div style="display:inline-block; background:#e3f2fd; border:2px solid #1976d2; border-radius:12px; padding:12px 24px; font-weight:bold; color:#1565c0; margin-bottom:8px;">何を検定したい？</div>

<div style="display:flex; flex-wrap:wrap; justify-content:center; gap:16px; margin-top:16px;">

<div style="flex:1; min-width:180px; max-width:220px;">
<div style="background:#fff3e0; border:2px solid #f57c00; border-radius:10px; padding:10px; font-weight:bold; color:#e65100; text-align:center;">母平均</div>
<div style="font-size:0.85em; color:#666; text-align:center; padding:4px;">↓</div>
<div style="background:#fffde7; border:1px solid #fbc02d; border-radius:8px; padding:8px; text-align:center; font-size:0.85em;">
<strong>σ既知？</strong><br>
はい → <span style="color:#1565c0; font-weight:bold;">z検定</span><br>
いいえ → <span style="color:#c2185b; font-weight:bold;">t検定</span>
</div>
<div style="font-size:0.85em; color:#666; text-align:center; padding:4px;">↓</div>
<div style="background:#fffde7; border:1px solid #fbc02d; border-radius:8px; padding:8px; text-align:center; font-size:0.85em;">
<strong>2群の比較？</strong><br>
対応あり → <span style="color:#c2185b; font-weight:bold;">対応ありt検定</span><br>
対応なし → <span style="color:#c2185b; font-weight:bold;">2標本t検定</span>
</div>
</div>

<div style="flex:1; min-width:180px; max-width:220px;">
<div style="background:#e8f5e9; border:2px solid #4caf50; border-radius:10px; padding:10px; font-weight:bold; color:#2e7d32; text-align:center;">母分散</div>
<div style="font-size:0.85em; color:#666; text-align:center; padding:4px;">↓</div>
<div style="background:#f1f8e9; border:1px solid #8bc34a; border-radius:8px; padding:8px; text-align:center; font-size:0.85em;">
<strong>1つの母分散？</strong><br>
→ <span style="color:#6a1b9a; font-weight:bold;">カイ二乗検定</span>
</div>
<div style="font-size:0.85em; color:#666; text-align:center; padding:4px;">↓</div>
<div style="background:#f1f8e9; border:1px solid #8bc34a; border-radius:8px; padding:8px; text-align:center; font-size:0.85em;">
<strong>2つの母分散の比？</strong><br>
→ <span style="color:#e65100; font-weight:bold;">F検定</span>
</div>
</div>

<div style="flex:1; min-width:180px; max-width:220px;">
<div style="background:#fce4ec; border:2px solid #e91e63; border-radius:10px; padding:10px; font-weight:bold; color:#c2185b; text-align:center;">母比率</div>
<div style="font-size:0.85em; color:#666; text-align:center; padding:4px;">↓</div>
<div style="background:#fce4ec; border:1px solid #f48fb1; border-radius:8px; padding:8px; text-align:center; font-size:0.85em;">
→ <span style="color:#1565c0; font-weight:bold;">比率のz検定</span><br>
（正規近似）
</div>
</div>

<div style="flex:1; min-width:180px; max-width:220px;">
<div style="background:#ede7f6; border:2px solid #7e57c2; border-radius:10px; padding:10px; font-weight:bold; color:#4527a0; text-align:center;">カテゴリ間の関連</div>
<div style="font-size:0.85em; color:#666; text-align:center; padding:4px;">↓</div>
<div style="background:#f3e5f5; border:1px solid #ce93d8; border-radius:8px; padding:8px; text-align:center; font-size:0.85em;">
<strong>分割表？</strong><br>
→ <span style="color:#6a1b9a; font-weight:bold;">カイ二乗検定</span><br>
（独立性の検定）
</div>
</div>

<div style="flex:1; min-width:180px; max-width:220px;">
<div style="background:#e0f2f1; border:2px solid #26a69a; border-radius:10px; padding:10px; font-weight:bold; color:#00695c; text-align:center;">3群以上の平均</div>
<div style="font-size:0.85em; color:#666; text-align:center; padding:4px;">↓</div>
<div style="background:#e0f7fa; border:1px solid #4dd0e1; border-radius:8px; padding:8px; text-align:center; font-size:0.85em;">
→ <span style="color:#e65100; font-weight:bold;">分散分析</span><br>
（ANOVA）
</div>
</div>

</div>
</div>
</div>

<h3>📋 検定法一覧まとめ</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<table style="width:100%; border-collapse:collapse; text-align:center; font-size:0.92em;">
<tr style="background:#e8f4fd;">
<th style="padding:10px; border:2px solid #ccc;">検定対象</th>
<th style="padding:10px; border:2px solid #ccc;">検定名</th>
<th style="padding:10px; border:2px solid #ccc;">統計量</th>
<th style="padding:10px; border:2px solid #ccc;">分布</th>
<th style="padding:10px; border:2px solid #ccc;">自由度</th>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">母平均（σ既知）</td>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; color:#1565c0;">z検定</td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">\\frac{\\bar{X}-\\mu_0}{\\sigma/\\sqrt{n}}</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">N(0,1)</span></td>
<td style="padding:8px; border:1px solid #ddd;">---</td>
</tr>
<tr style="background:#f9f9f9;">
<td style="padding:8px; border:1px solid #ddd;">母平均（σ未知）</td>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; color:#c2185b;">t検定</td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">\\frac{\\bar{X}-\\mu_0}{s/\\sqrt{n}}</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">t(n-1)</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">n-1</span></td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">2群の母平均の差（対応あり）</td>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; color:#c2185b;">対応ありt検定</td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">\\frac{\\bar{d}}{s_d/\\sqrt{n}}</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">t(n-1)</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">n-1</span></td>
</tr>
<tr style="background:#f9f9f9;">
<td style="padding:8px; border:1px solid #ddd;">2群の母平均の差（等分散）</td>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; color:#c2185b;">2標本t検定</td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">\\frac{\\bar{X}_1-\\bar{X}_2}{s_p\\sqrt{1/n_1+1/n_2}}</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">t(n_1+n_2-2)</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">n_1+n_2-2</span></td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">2群の母平均の差（非等分散）</td>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; color:#c2185b;">ウェルチのt検定</td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">\\frac{\\bar{X}_1-\\bar{X}_2}{\\sqrt{s_1^2/n_1+s_2^2/n_2}}</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">t(\\nu)</span></td>
<td style="padding:8px; border:1px solid #ddd;">近似計算</td>
</tr>
<tr style="background:#f9f9f9;">
<td style="padding:8px; border:1px solid #ddd;">母分散</td>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; color:#6a1b9a;">カイ二乗検定</td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">\\frac{(n-1)s^2}{\\sigma_0^2}</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">\\chi^2(n-1)</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">n-1</span></td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">等分散性</td>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; color:#e65100;">F検定</td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">s_1^2 / s_2^2</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">F(n_1-1, n_2-1)</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">(n_1-1, n_2-1)</span></td>
</tr>
<tr style="background:#f9f9f9;">
<td style="padding:8px; border:1px solid #ddd;">適合度</td>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; color:#6a1b9a;">カイ二乗適合度検定</td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">\\sum(O_i-E_i)^2/E_i</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">\\chi^2(k-1)</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">k-1</span></td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">独立性</td>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; color:#6a1b9a;">カイ二乗独立性検定</td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">\\sum(O_{ij}-E_{ij})^2/E_{ij}</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">\\chi^2</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">(r-1)(c-1)</span></td>
</tr>
<tr style="background:#f9f9f9;">
<td style="padding:8px; border:1px solid #ddd;">3群以上の平均</td>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; color:#e65100;">分散分析（ANOVA）</td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">V_A / V_E</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">F(a-1, n-a)</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">(a-1, n-a)</span></td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">母比率</td>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; color:#1565c0;">比率のz検定</td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">\\frac{\\hat{p}-p_0}{\\sqrt{p_0(1-p_0)/n}}</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">N(0,1)</span></td>
<td style="padding:8px; border:1px solid #ddd;">---</td>
</tr>
</table>
</div>

<h3>🔑 問題文のキーワードと検定の対応</h3>

<div class="visual-box">
<div class="visual-box-title">図解</div>
<table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.92em;">
<tr style="background:#e8f4fd;">
<th style="padding:10px; border:2px solid #ccc;">問題文のキーワード</th>
<th style="padding:10px; border:2px solid #ccc;">使う検定</th>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">「母標準偏差は既知で <span class="katex-eq">\\sigma = ...</span>」</td>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; color:#1565c0;">z検定</td>
</tr>
<tr style="background:#f9f9f9;">
<td style="padding:8px; border:1px solid #ddd;">「母分散は未知」「標本標準偏差 <span class="katex-eq">s = ...</span>」</td>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; color:#c2185b;">t検定</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">「投与前と投与後」「同じ被験者で2回測定」</td>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; color:#c2185b;">対応のあるt検定</td>
</tr>
<tr style="background:#f9f9f9;">
<td style="padding:8px; border:1px solid #ddd;">「2つの独立な群」「A群とB群を比較」</td>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; color:#c2185b;">2標本t検定</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">「分散が等しいか」「等分散性の検定」</td>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; color:#e65100;">F検定</td>
</tr>
<tr style="background:#f9f9f9;">
<td style="padding:8px; border:1px solid #ddd;">「度数」「理論比率と一致するか」</td>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; color:#6a1b9a;">カイ二乗適合度検定</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">「分割表」「2変数は独立か」「関連があるか」</td>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; color:#6a1b9a;">カイ二乗独立性検定</td>
</tr>
<tr style="background:#f9f9f9;">
<td style="padding:8px; border:1px solid #ddd;">「3群以上」「処理ごとの差」「要因の効果」</td>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; color:#e65100;">分散分析（ANOVA）</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">「割合」「比率」「不良率」</td>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold; color:#1565c0;">比率のz検定</td>
</tr>
</table>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
<strong>よくある間違い</strong>
<ul>
<li>3群以上の平均の比較にt検定を繰り返す → 分散分析を使う</li>
<li>対応のあるデータに2標本t検定を使う → 対応のあるt検定を使う</li>
<li>カテゴリデータにt検定を使う → カイ二乗検定を使う</li>
<li>母分散が未知なのにz検定を使う → t検定を使う</li>
</ul>
</div>

<h3>📝 検定手順の統一フォーマット</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content"><strong>仮説を設定</strong>：帰無仮説 <span class="katex-eq">H_0</span> と対立仮説 <span class="katex-eq">H_1</span> を明確に書く</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content"><strong>有意水準を決定</strong>：<span class="katex-eq">\\alpha = 0.05</span> や <span class="katex-eq">\\alpha = 0.01</span>（問題文で指定される）</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content"><strong>検定統計量を計算</strong>：データの種類に応じた適切な統計量を使う</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content"><strong>棄却域（またはp値）を求める</strong>：分布表やp値から判定基準を設定</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content"><strong>結論</strong>：棄却する/棄却しない → 統計的に有意/有意でないと結論</div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">✅ 試験対策</div>
<ul>
<li>フローチャートを頭に入れておけば、問題文からすぐに検定法を選べる</li>
<li>検定統計量の公式と使用する分布の対応を暗記する</li>
<li>自由度の求め方は検定ごとに異なるので整理して覚える</li>
<li>検定手順の5ステップは記述問題でも使える</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q505_1",
                    type: "choice",
                    question: "ある工場で不良品率が5%以下かどうかを検定したい。適切な検定法はどれか。",
                    options: [
                        "t検定",
                        "カイ二乗適合度検定",
                        "比率のz検定",
                        "F検定"
                    ],
                    answer: 2,
                    explanation: "母比率（不良品率）に関する検定なので、比率のz検定（正規近似による検定）を使います。"
                },
                {
                    id: "q505_2",
                    type: "choice",
                    question: "同じ患者20人に薬を投与し、投与前と投与後の血圧を比較したい。適切な検定法はどれか。",
                    options: [
                        "2標本t検定（等分散）",
                        "対応のあるt検定",
                        "分散分析",
                        "カイ二乗独立性検定"
                    ],
                    answer: 1,
                    explanation: "同じ患者の投与前後を比較するので、対応のあるデータです。対応のあるt検定を使います。"
                },
                {
                    id: "q505_3",
                    type: "choice",
                    question: "3つの肥料（A, B, C）の効果の差を検定するために最も適切な方法はどれか。",
                    options: [
                        "t検定を3回繰り返す",
                        "カイ二乗検定",
                        "一元配置分散分析",
                        "F検定（等分散）"
                    ],
                    answer: 2,
                    explanation: "3群以上の平均の差を検定するには一元配置分散分析（ANOVA）を使います。t検定を繰り返すと第1種の過誤の確率が増大するため不適切です。"
                },
                {
                    id: "q505_4",
                    type: "choice",
                    question: "性別（男/女）と喫煙状況（喫煙/非喫煙）の関連を調べたい。適切な検定法はどれか。",
                    options: [
                        "2標本t検定",
                        "F検定",
                        "カイ二乗独立性検定",
                        "対応のあるt検定"
                    ],
                    answer: 2,
                    explanation: "2つのカテゴリカル変数（性別と喫煙状況）の関連（独立性）を調べるには、分割表に対するカイ二乗独立性検定を使います。"
                },
                {
                    id: "q505_5",
                    type: "choice",
                    question: "母平均の検定で、母分散が未知のとき検定統計量が従う分布はどれか。",
                    options: [
                        "標準正規分布",
                        "カイ二乗分布",
                        "F分布",
                        "t分布"
                    ],
                    answer: 3,
                    explanation: "母分散が未知の場合、標本標準偏差 s を使って計算した統計量 t = (X̄ - μ₀)/(s/√n) は自由度 n-1 の t 分布に従います。母分散既知なら標準正規分布です。"
                }
            ]
        }
    ]
};
