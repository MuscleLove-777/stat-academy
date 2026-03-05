/* ============================================
   統計検定2級アカデミー - Level 2: 確率の基礎
   ============================================ */

const LEVEL2_DATA = {
    id: 2,
    title: "確率の基礎",
    icon: "🎲",
    description: "確率の基本概念を直感的に理解する",
    modules: [
        /* ============================================
           Module 201: 確率の基本
           ============================================ */
        {
            id: 201,
            title: "確率の基本",
            duration: "15分",
            content: `
<h2>🎯 標本空間と事象</h2>

<p>確率を学ぶうえで最初に押さえるべき概念は<strong>「標本空間」</strong>と<strong>「事象」</strong>です。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<strong>標本空間（Sample Space）</strong>とは、ある試行で起こり得るすべての結果の集合のことです。記号 <span class="katex-eq">\\Omega</span>（オメガ）で表します。<br>
<strong>事象（Event）</strong>とは、標本空間の部分集合のことです。記号 <span class="katex-eq">A, B, C, \\ldots</span> で表します。
</div>

<h3>例：サイコロを1回振る</h3>
<div class="visual-box">
<div class="visual-box-title">図解：標本空間と事象</div>
<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin:16px 0;">
  <div style="width:60px;height:60px;background:linear-gradient(135deg,#dbeafe,#bfdbfe);border:2px solid #2563eb;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:bold;">⚀</div>
  <div style="width:60px;height:60px;background:linear-gradient(135deg,#dbeafe,#bfdbfe);border:2px solid #2563eb;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:bold;">⚁</div>
  <div style="width:60px;height:60px;background:linear-gradient(135deg,#fce7f3,#fbcfe8);border:2px solid #ec4899;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:bold;">⚂</div>
  <div style="width:60px;height:60px;background:linear-gradient(135deg,#fce7f3,#fbcfe8);border:2px solid #ec4899;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:bold;">⚃</div>
  <div style="width:60px;height:60px;background:linear-gradient(135deg,#fce7f3,#fbcfe8);border:2px solid #ec4899;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:bold;">⚄</div>
  <div style="width:60px;height:60px;background:linear-gradient(135deg,#fce7f3,#fbcfe8);border:2px solid #ec4899;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:bold;">⚅</div>
</div>
<p style="font-size:0.85rem;color:var(--text-secondary);">
  🔵 標本空間 <span class="katex-eq">\\Omega = \\{1, 2, 3, 4, 5, 6\\}</span>（全体）<br>
  🩷 事象 A =「3以上の目が出る」= <span class="katex-eq">\\{3, 4, 5, 6\\}</span>
</p>
</div>

<table>
<tr><th>用語</th><th>意味</th><th>サイコロの例</th></tr>
<tr><td>標本空間 <span class="katex-eq">\\Omega</span></td><td>全ての結果の集合</td><td><span class="katex-eq">\\{1,2,3,4,5,6\\}</span></td></tr>
<tr><td>事象 <span class="katex-eq">A</span></td><td>標本空間の部分集合</td><td>偶数の目 = <span class="katex-eq">\\{2,4,6\\}</span></td></tr>
<tr><td>根元事象</td><td>1つの結果からなる事象</td><td><span class="katex-eq">\\{3\\}</span></td></tr>
<tr><td>空事象 <span class="katex-eq">\\emptyset</span></td><td>何も起こらない事象</td><td>7の目が出る</td></tr>
<tr><td>全事象 <span class="katex-eq">\\Omega</span></td><td>何かが必ず起こる事象</td><td>1〜6のどれか</td></tr>
</table>

<h2>📐 確率の公理（コルモゴロフの公理）</h2>

<p>確率は「なんとなくの数字」ではありません。次の<strong>3つの公理</strong>によって数学的に厳密に定義されています。</p>

<div class="info-box formula">
<div class="info-box-title">📐 コルモゴロフの3公理</div>
<strong>公理1（非負性）:</strong> 任意の事象 <span class="katex-eq">A</span> に対して<br>
<span class="katex-eq display">P(A) \\geq 0</span>
<strong>公理2（正規性）:</strong> 全事象の確率は1<br>
<span class="katex-eq display">P(\\Omega) = 1</span>
<strong>公理3（加法性）:</strong> 互いに排反な事象 <span class="katex-eq">A_1, A_2, \\ldots</span> に対して<br>
<span class="katex-eq display">P(A_1 \\cup A_2 \\cup \\cdots) = P(A_1) + P(A_2) + \\cdots</span>
</div>

<div class="steps">
<div class="step">
  <div class="step-num">1</div>
  <div class="step-content">
    <strong>非負性：確率は0以上</strong>
    「マイナスの確率」はありえません。最小は0（絶対に起こらない）です。
  </div>
</div>
<div class="step">
  <div class="step-num">2</div>
  <div class="step-content">
    <strong>正規性：全体で1</strong>
    何かは必ず起こるので、標本空間全体の確率は1です。
  </div>
</div>
<div class="step">
  <div class="step-num">3</div>
  <div class="step-content">
    <strong>加法性：排反なら足し算</strong>
    同時に起こらない事象同士なら、確率を足し合わせられます。
  </div>
</div>
</div>

<h2>➕ 加法定理（排反 / 非排反）</h2>

<h3>排反事象の場合</h3>
<p>事象 A と事象 B が<strong>互いに排反</strong>（同時に起きない）のとき：</p>
<div class="info-box formula">
<div class="info-box-title">📐 排反事象の加法定理</div>
<span class="katex-eq display">P(A \\cup B) = P(A) + P(B)</span>
<span class="katex-eq">A \\cap B = \\emptyset</span> のとき成立
</div>

<div class="visual-box">
<div class="visual-box-title">図解：排反事象のベン図</div>
<div style="position:relative;height:180px;margin:16px auto;max-width:400px;">
  <div style="position:absolute;left:40px;top:20px;width:140px;height:140px;border-radius:50%;background:rgba(37,99,235,0.2);border:3px solid #2563eb;display:flex;align-items:center;justify-content:center;font-weight:bold;color:#2563eb;font-size:1.1rem;">A</div>
  <div style="position:absolute;right:40px;top:20px;width:140px;height:140px;border-radius:50%;background:rgba(239,68,68,0.2);border:3px solid #ef4444;display:flex;align-items:center;justify-content:center;font-weight:bold;color:#ef4444;font-size:1.1rem;">B</div>
</div>
<p style="font-size:0.85rem;color:var(--text-secondary);">A と B は重ならない → <span class="katex-eq">A \\cap B = \\emptyset</span> → 単純に足せる</p>
</div>

<h3>非排反事象の場合（一般の加法定理）</h3>
<p>事象 A と B が重なる（同時に起きうる）場合は、<strong>重複分を引く</strong>必要があります。</p>

<div class="info-box formula">
<div class="info-box-title">📐 一般の加法定理</div>
<span class="katex-eq display">P(A \\cup B) = P(A) + P(B) - P(A \\cap B)</span>
</div>

<div class="visual-box">
<div class="visual-box-title">図解：非排反事象のベン図</div>
<div style="position:relative;height:200px;margin:16px auto;max-width:360px;">
  <div style="position:absolute;left:30px;top:20px;width:180px;height:160px;border-radius:50%;background:rgba(37,99,235,0.15);border:3px solid #2563eb;"></div>
  <div style="position:absolute;left:145px;top:20px;width:180px;height:160px;border-radius:50%;background:rgba(239,68,68,0.15);border:3px solid #ef4444;"></div>
  <div style="position:absolute;left:50px;top:70px;font-weight:bold;color:#2563eb;font-size:1.1rem;">A</div>
  <div style="position:absolute;right:55px;top:70px;font-weight:bold;color:#ef4444;font-size:1.1rem;">B</div>
  <div style="position:absolute;left:50%;top:80px;transform:translateX(-50%);font-weight:bold;color:#7c3aed;font-size:0.9rem;background:rgba(124,58,237,0.15);padding:4px 10px;border-radius:8px;">A∩B</div>
</div>
<p style="font-size:0.85rem;color:var(--text-secondary);">重なり部分 <span class="katex-eq">A \\cap B</span> を2回足してしまうので、1回分を引く！</p>
</div>

<h3>具体例：トランプ</h3>
<p>52枚のトランプから1枚引くとき、「ハートまたは絵札」が出る確率は？</p>
<div class="steps">
<div class="step">
  <div class="step-num">1</div>
  <div class="step-content">
    <strong>P(ハート) = 13/52</strong>
    ハートは13枚
  </div>
</div>
<div class="step">
  <div class="step-num">2</div>
  <div class="step-content">
    <strong>P(絵札) = 12/52</strong>
    J, Q, K が各スート4枚ずつで12枚
  </div>
</div>
<div class="step">
  <div class="step-num">3</div>
  <div class="step-content">
    <strong>P(ハート ∩ 絵札) = 3/52</strong>
    ハートの J, Q, K の3枚が重複
  </div>
</div>
<div class="step">
  <div class="step-num">4</div>
  <div class="step-content">
    <strong>答え：P(ハート ∪ 絵札) = 13/52 + 12/52 - 3/52 = 22/52 = 11/26</strong>
  </div>
</div>
</div>

<h2>🔄 余事象の確率</h2>

<p>事象 A が起こら<strong>ない</strong>確率は、<strong>余事象</strong> <span class="katex-eq">A^c</span>（または <span class="katex-eq">\\bar{A}</span>）の確率です。</p>

<div class="info-box formula">
<div class="info-box-title">📐 余事象の公式</div>
<span class="katex-eq display">P(A^c) = 1 - P(A)</span>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 試験テクニック</div>
「少なくとも1つは〜」という問題は、余事象を使うと簡単に解けます！<br>
<strong>P(少なくとも1つ) = 1 - P(1つも〜ない)</strong>
</div>

<h3>例題：サイコロ2回振り</h3>
<p>サイコロを2回振って「少なくとも1回は6が出る」確率は？</p>

<div class="steps">
<div class="step">
  <div class="step-num">1</div>
  <div class="step-content">
    <strong>余事象を考える</strong>
    「少なくとも1回は6」の余事象 = 「2回とも6が出ない」
  </div>
</div>
<div class="step">
  <div class="step-num">2</div>
  <div class="step-content">
    <strong>余事象の確率を計算</strong>
    <span class="katex-eq">P(\\text{6が出ない}) = \\frac{5}{6}</span> なので<br>
    <span class="katex-eq">P(\\text{2回とも6でない}) = \\frac{5}{6} \\times \\frac{5}{6} = \\frac{25}{36}</span>
  </div>
</div>
<div class="step">
  <div class="step-num">3</div>
  <div class="step-content">
    <strong>答え</strong>
    <span class="katex-eq">P(\\text{少なくとも1回6}) = 1 - \\frac{25}{36} = \\frac{11}{36} \\approx 0.306</span>
  </div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">✅ まとめ</div>
<ul>
<li>標本空間 <span class="katex-eq">\\Omega</span> は全ての結果の集合、事象はその部分集合</li>
<li>確率はコルモゴロフの3公理（非負性・正規性・加法性）で定義される</li>
<li>排反なら <span class="katex-eq">P(A \\cup B) = P(A) + P(B)</span></li>
<li>非排反なら <span class="katex-eq">P(A \\cup B) = P(A) + P(B) - P(A \\cap B)</span></li>
<li>余事象 <span class="katex-eq">P(A^c) = 1 - P(A)</span> は「少なくとも〜」問題の味方</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q201_1",
                    type: "choice",
                    question: "サイコロを1回振る試行において、標本空間 Ω として正しいものはどれか。",
                    options: [
                        "{1, 2, 3, 4, 5, 6}",
                        "{1, 2, 3}",
                        "{偶数, 奇数}",
                        "{大, 小}"
                    ],
                    answer: 0,
                    explanation: "標本空間は「起こり得る全ての結果の集合」です。サイコロを1回振る場合、出る目は1〜6のいずれかなので、Ω = {1, 2, 3, 4, 5, 6} が標本空間です。{偶数, 奇数}や{大, 小}は事象の分類であり、根元事象の集合ではありません。"
                },
                {
                    id: "q201_2",
                    type: "choice",
                    question: "コルモゴロフの確率の公理に含まれないものはどれか。",
                    options: [
                        "任意の事象 A に対して P(A) ≥ 0",
                        "P(Ω) = 1",
                        "P(A) + P(B) = 1 （A と B が排反のとき）",
                        "排反な事象の和の確率は各確率の和に等しい"
                    ],
                    answer: 2,
                    explanation: "コルモゴロフの3公理は ①非負性 P(A)≥0、②正規性 P(Ω)=1、③加法性（排反事象の和の確率＝各確率の和）です。選択肢Cの「P(A)+P(B)=1」は排反であるだけでは成立しません（A と B が互いに余事象の関係にあるときのみ成立します）。"
                },
                {
                    id: "q201_3",
                    type: "choice",
                    question: "52枚のトランプから1枚引くとき、「スペードまたはエース」が出る確率は？",
                    options: [
                        "16/52",
                        "17/52",
                        "13/52",
                        "4/52"
                    ],
                    answer: 0,
                    explanation: "P(スペード) = 13/52、P(エース) = 4/52、P(スペード∩エース) = 1/52（スペードのエース）。加法定理より P(スペード∪エース) = 13/52 + 4/52 - 1/52 = 16/52 = 4/13 です。重複するスペードのエースを引くのを忘れないようにしましょう。"
                },
                {
                    id: "q201_4",
                    type: "fill",
                    question: "ある事象 A の確率が P(A) = 0.35 のとき、余事象 P(A^c) の値を小数で答えなさい。",
                    answer: "0.65",
                    explanation: "余事象の公式 P(A^c) = 1 - P(A) より、P(A^c) = 1 - 0.35 = 0.65 です。事象が起きる確率と起きない確率を合計すると必ず1になります。"
                },
                {
                    id: "q201_5",
                    type: "choice",
                    question: "サイコロを3回振って「少なくとも1回は1の目が出る」確率に最も近いものはどれか。",
                    options: [
                        "約 0.421",
                        "約 0.500",
                        "約 0.167",
                        "約 0.579"
                    ],
                    answer: 0,
                    explanation: "余事象を利用します。「少なくとも1回は1」の余事象は「3回とも1が出ない」です。P(1が出ない) = 5/6 なので、P(3回とも1でない) = (5/6)^3 = 125/216 ≈ 0.579。よって P(少なくとも1回は1) = 1 - 125/216 = 91/216 ≈ 0.421 です。"
                }
            ]
        },

        /* ============================================
           Module 202: 条件付き確率
           ============================================ */
        {
            id: 202,
            title: "条件付き確率",
            duration: "20分",
            content: `
<h2>🔗 条件付き確率の定義</h2>

<p>ある事象 B が起きたことが分かっている状況で、事象 A が起きる確率を<strong>条件付き確率</strong>と呼びます。</p>

<div class="info-box formula">
<div class="info-box-title">📐 条件付き確率の定義</div>
<span class="katex-eq display">P(A|B) = \\frac{P(A \\cap B)}{P(B)}</span>
ただし <span class="katex-eq">P(B) > 0</span>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 直感的な理解</div>
「B が起きた世界」に限定して考えたとき、その中で A も起きている割合が <span class="katex-eq">P(A|B)</span> です。<br>
全体を B に縮小 → その中で A∩B の占める割合を求める、というイメージです。
</div>

<div class="visual-box">
<div class="visual-box-title">図解：条件付き確率のイメージ</div>
<div style="position:relative;height:220px;margin:16px auto;max-width:450px;">
  <!-- 全体の枠 -->
  <div style="position:absolute;left:0;top:0;width:100%;height:100%;border:2px dashed #94a3b8;border-radius:12px;"></div>
  <div style="position:absolute;left:8px;top:4px;font-size:0.75rem;color:#94a3b8;">Ω（全体）</div>
  <!-- B の円 -->
  <div style="position:absolute;left:120px;top:20px;width:200px;height:180px;border-radius:50%;background:rgba(245,158,11,0.15);border:3px solid #f59e0b;"></div>
  <div style="position:absolute;left:270px;top:30px;font-weight:bold;color:#f59e0b;font-size:1rem;">B</div>
  <!-- A の円 -->
  <div style="position:absolute;left:40px;top:30px;width:180px;height:160px;border-radius:50%;background:rgba(37,99,235,0.15);border:3px solid #2563eb;"></div>
  <div style="position:absolute;left:55px;top:40px;font-weight:bold;color:#2563eb;font-size:1rem;">A</div>
  <!-- A∩B -->
  <div style="position:absolute;left:160px;top:75px;font-weight:bold;color:#7c3aed;font-size:0.85rem;background:rgba(124,58,237,0.2);padding:6px 12px;border-radius:8px;">A∩B</div>
</div>
<p style="font-size:0.85rem;color:var(--text-secondary);">
  B が起きた → 世界が<span style="color:#f59e0b;font-weight:bold;">黄色の円内</span>に限定される<br>
  → その中で A∩B が占める割合 = <span class="katex-eq">P(A|B)</span>
</p>
</div>

<h3>具体例</h3>
<p>あるクラス40人中、数学が得意な人が16人、英語が得意な人が20人、両方得意な人が8人いるとします。</p>
<table>
<tr><th></th><th>英語○</th><th>英語✕</th><th>計</th></tr>
<tr><td><strong>数学○</strong></td><td>8</td><td>8</td><td>16</td></tr>
<tr><td><strong>数学✕</strong></td><td>12</td><td>12</td><td>24</td></tr>
<tr><td><strong>計</strong></td><td>20</td><td>20</td><td>40</td></tr>
</table>
<p>「英語が得意な人の中で、数学も得意な人」の確率は？</p>
<div class="info-box tip">
<div class="info-box-title">💡 解き方</div>
<span class="katex-eq display">P(\\text{数学}|\\text{英語}) = \\frac{P(\\text{数学} \\cap \\text{英語})}{P(\\text{英語})} = \\frac{8/40}{20/40} = \\frac{8}{20} = 0.4</span>
英語が得意な20人に絞り、その中の数学が得意な8人 → 8/20 = 40%
</div>

<h2>✖️ 乗法定理</h2>

<p>条件付き確率の定義式を変形すると<strong>乗法定理</strong>が得られます。</p>

<div class="info-box formula">
<div class="info-box-title">📐 乗法定理</div>
<span class="katex-eq display">P(A \\cap B) = P(B) \\cdot P(A|B) = P(A) \\cdot P(B|A)</span>
</div>

<p>「A かつ B が起きる確率」は、「まず B が起きて、その条件の下で A が起きる」確率と同じです。</p>

<div class="visual-box">
<div class="visual-box-title">図解：乗法定理の樹形図</div>
<div style="text-align:left;max-width:420px;margin:0 auto;font-size:0.9rem;line-height:2;">
<div style="margin-left:0px;">🔵 <strong>スタート</strong></div>
<div style="margin-left:20px;border-left:2px solid #2563eb;padding-left:16px;">
  <div>├─ B が起きる（確率 <span class="katex-eq">P(B)</span>）</div>
  <div style="margin-left:20px;border-left:2px solid #f59e0b;padding-left:16px;">
    <div>├─ A も起きる（確率 <span class="katex-eq">P(A|B)</span>）→ 🟢 <strong>A∩B</strong>：<span class="katex-eq">P(B) \\cdot P(A|B)</span></div>
    <div>└─ A は起きない（確率 <span class="katex-eq">P(A^c|B)</span>）→ 🔴 <strong>A<sup>c</sup>∩B</strong></div>
  </div>
  <div>└─ B が起きない（確率 <span class="katex-eq">P(B^c)</span>）</div>
  <div style="margin-left:20px;border-left:2px solid #94a3b8;padding-left:16px;">
    <div>├─ A が起きる → ⚪ <strong>A∩B<sup>c</sup></strong></div>
    <div>└─ A も起きない → ⚪ <strong>A<sup>c</sup>∩B<sup>c</sup></strong></div>
  </div>
</div>
</div>
</div>

<h2>🔀 独立と従属の判定</h2>

<p>2つの事象が<strong>独立</strong>であるとは、一方の結果が他方に影響しないことです。</p>

<div class="info-box formula">
<div class="info-box-title">📐 独立の定義（3つの同値条件）</div>
以下はすべて同値です：
<ul>
<li><span class="katex-eq">P(A \\cap B) = P(A) \\cdot P(B)</span></li>
<li><span class="katex-eq">P(A|B) = P(A)</span></li>
<li><span class="katex-eq">P(B|A) = P(B)</span></li>
</ul>
</div>

<div class="compare-grid">
<div class="compare-card">
<h4>🟢 独立の例</h4>
<p>サイコロ2個を振る：<br>
1個目の結果は2個目に影響しない。</p>
<p><span class="katex-eq">P(\\text{1個目が6} \\cap \\text{2個目が6})</span><br>
<span class="katex-eq">= \\frac{1}{6} \\times \\frac{1}{6} = \\frac{1}{36}</span></p>
</div>
<div class="compare-card">
<h4>🔴 従属の例</h4>
<p>袋から球を取る（非復元）：<br>
赤3個白2個の袋から2個取る。</p>
<p>1個目が赤 → 残りは赤2白2<br>
<span class="katex-eq">P(\\text{2個目赤}|\\text{1個目赤}) = \\frac{2}{4}</span><br>
≠ <span class="katex-eq">P(\\text{2個目赤}) = \\frac{3}{5}</span></p>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
<strong>排反と独立は全く別の概念です！</strong><br>
・排反：A∩B = ∅（同時に起きない）<br>
・独立：P(A∩B) = P(A)·P(B)（互いに影響しない）<br>
排反な事象は（どちらの確率も0でない限り）独立ではありません。A が起きると B は起きないため、互いに影響し合っているからです。
</div>

<h2>🎯 実例で理解する</h2>

<h3>例1：検査の精度</h3>
<p>ある病気の検査で、「陽性と判定された人が本当に病気である確率」を考えます。</p>

<table>
<tr><th></th><th>検査陽性</th><th>検査陰性</th><th>計</th></tr>
<tr><td><strong>病気あり</strong></td><td>95人</td><td>5人</td><td>100人</td></tr>
<tr><td><strong>病気なし</strong></td><td>45人</td><td>855人</td><td>900人</td></tr>
<tr><td><strong>計</strong></td><td>140人</td><td>860人</td><td>1000人</td></tr>
</table>

<div class="steps">
<div class="step">
  <div class="step-num">1</div>
  <div class="step-content">
    <strong>条件付き確率で考える</strong>
    <span class="katex-eq display">P(\\text{病気}|\\text{陽性}) = \\frac{95}{140} \\approx 0.679</span>
  </div>
</div>
<div class="step">
  <div class="step-num">2</div>
  <div class="step-content">
    <strong>解釈</strong>
    陽性と出ても、本当に病気である確率は約68%。偽陽性（病気でないのに陽性）が約32%もあることに注意！
  </div>
</div>
</div>

<h3>例2：カード問題</h3>
<p>52枚のトランプから2枚続けて引く（戻さない）。1枚目がハートのとき、2枚目もハートである確率は？</p>

<div class="info-box tip">
<div class="info-box-title">💡 解法</div>
1枚目がハート → 残りは51枚中ハート12枚<br>
<span class="katex-eq display">P(\\text{2枚目ハート}|\\text{1枚目ハート}) = \\frac{12}{51} = \\frac{4}{17} \\approx 0.235</span>
非復元抽出なので、条件付き確率が変わる典型例です。
</div>

<div class="info-box success">
<div class="info-box-title">✅ まとめ</div>
<ul>
<li>条件付き確率 <span class="katex-eq">P(A|B) = \\frac{P(A \\cap B)}{P(B)}</span></li>
<li>乗法定理 <span class="katex-eq">P(A \\cap B) = P(B) \\cdot P(A|B)</span></li>
<li>独立 ⟺ <span class="katex-eq">P(A \\cap B) = P(A) \\cdot P(B)</span></li>
<li>排反と独立は別概念（超頻出の混同ポイント！）</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q202_1",
                    type: "choice",
                    question: "P(A) = 0.5、P(B) = 0.4、P(A∩B) = 0.2 のとき、P(A|B) の値はどれか。",
                    options: [
                        "0.4",
                        "0.5",
                        "0.2",
                        "0.8"
                    ],
                    answer: 1,
                    explanation: "P(A|B) = P(A∩B) / P(B) = 0.2 / 0.4 = 0.5 です。この場合 P(A|B) = P(A) = 0.5 となり、A と B は独立であることもわかります。"
                },
                {
                    id: "q202_2",
                    type: "choice",
                    question: "事象 A と B が独立であるとき、正しいものはどれか。",
                    options: [
                        "P(A∩B) = 0",
                        "P(A∩B) = P(A) + P(B)",
                        "P(A∩B) = P(A) · P(B)",
                        "P(A∪B) = P(A) · P(B)"
                    ],
                    answer: 2,
                    explanation: "独立の定義は P(A∩B) = P(A)·P(B) です。P(A∩B) = 0 は排反の定義であり、独立とは異なります。独立と排反は全く別の概念なので混同しないようにしましょう。"
                },
                {
                    id: "q202_3",
                    type: "fill",
                    question: "P(A) = 0.6、P(B|A) = 0.3 のとき、P(A∩B) の値を小数で答えなさい。",
                    answer: "0.18",
                    explanation: "乗法定理より P(A∩B) = P(A) · P(B|A) = 0.6 × 0.3 = 0.18 です。条件付き確率の定義式を変形すれば乗法定理が得られます。"
                },
                {
                    id: "q202_4",
                    type: "choice",
                    question: "赤球4個と白球6個が入った袋から球を1つ取り出し、戻さずにもう1つ取り出す。1個目が赤のとき、2個目も赤である確率は？",
                    options: [
                        "4/10",
                        "3/9",
                        "4/9",
                        "3/10"
                    ],
                    answer: 1,
                    explanation: "非復元抽出です。1個目で赤を取ったので、残りは赤3個白6個の計9個。よって P(2個目赤|1個目赤) = 3/9 = 1/3 です。復元しない場合は条件付き確率が変わることに注意しましょう。"
                },
                {
                    id: "q202_5",
                    type: "choice",
                    question: "排反事象と独立事象について、正しい記述はどれか。",
                    options: [
                        "排反な事象は常に独立である",
                        "独立な事象は常に排反である",
                        "確率が0でない排反事象は独立ではない",
                        "排反と独立は同じ意味である"
                    ],
                    answer: 2,
                    explanation: "P(A)>0 かつ P(B)>0 の排反事象では、P(A∩B) = 0 ですが P(A)·P(B) > 0 となるため、P(A∩B) ≠ P(A)·P(B) であり独立ではありません。A が起きれば B は起きないので、互いに影響し合っています。排反と独立は全く別の概念です。"
                }
            ]
        },

        /* ============================================
           Module 203: ベイズの定理
           ============================================ */
        {
            id: 203,
            title: "ベイズの定理",
            duration: "20分",
            content: `
<h2>🔄 ベイズの定理とは</h2>

<p>ベイズの定理は、<strong>新しい情報（データ）を得たとき、信念（確率）をどう更新すべきか</strong>を教えてくれる定理です。</p>

<div class="info-box formula">
<div class="info-box-title">📐 ベイズの定理</div>
<span class="katex-eq display">P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}</span>
<table style="width:100%;margin-top:8px;">
<tr><td><span class="katex-eq">P(A|B)</span></td><td><strong>事後確率</strong>：B を観測した後の A の確率</td></tr>
<tr><td><span class="katex-eq">P(A)</span></td><td><strong>事前確率</strong>：B を知る前の A の確率</td></tr>
<tr><td><span class="katex-eq">P(B|A)</span></td><td><strong>尤度</strong>：A が起きたときに B が観測される確率</td></tr>
<tr><td><span class="katex-eq">P(B)</span></td><td><strong>周辺確率</strong>：B が全体で起きる確率</td></tr>
</table>
</div>

<div class="visual-box">
<div class="visual-box-title">図解：ベイズ更新の流れ</div>
<div style="display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;margin:16px 0;">
  <div style="background:linear-gradient(135deg,#dbeafe,#bfdbfe);border:2px solid #2563eb;border-radius:12px;padding:16px 20px;text-align:center;">
    <div style="font-size:0.75rem;color:#2563eb;font-weight:bold;">STEP 1</div>
    <div style="font-size:1.1rem;font-weight:bold;">事前確率</div>
    <div style="font-size:0.85rem;color:var(--text-secondary);">P(A)</div>
    <div style="font-size:0.8rem;">データ観測前の<br>「信念」</div>
  </div>
  <div style="font-size:2rem;color:#f59e0b;">→</div>
  <div style="background:linear-gradient(135deg,#fef3c7,#fde68a);border:2px solid #f59e0b;border-radius:12px;padding:16px 20px;text-align:center;">
    <div style="font-size:0.75rem;color:#f59e0b;font-weight:bold;">STEP 2</div>
    <div style="font-size:1.1rem;font-weight:bold;">データ B 観測</div>
    <div style="font-size:0.85rem;color:var(--text-secondary);">尤度 P(B|A)</div>
    <div style="font-size:0.8rem;">新しい情報で<br>更新</div>
  </div>
  <div style="font-size:2rem;color:#10b981;">→</div>
  <div style="background:linear-gradient(135deg,#d1fae5,#a7f3d0);border:2px solid #10b981;border-radius:12px;padding:16px 20px;text-align:center;">
    <div style="font-size:0.75rem;color:#10b981;font-weight:bold;">STEP 3</div>
    <div style="font-size:1.1rem;font-weight:bold;">事後確率</div>
    <div style="font-size:0.85rem;color:var(--text-secondary);">P(A|B)</div>
    <div style="font-size:0.8rem;">更新後の<br>「信念」</div>
  </div>
</div>
<p style="font-size:0.85rem;color:var(--text-secondary);text-align:center;">
  💡 事前確率 × 尤度 → 正規化 → 事後確率
</p>
</div>

<h2>🌐 全確率の公式</h2>

<p>ベイズの定理の分母 <span class="katex-eq">P(B)</span> を計算するために、<strong>全確率の公式</strong>を使います。</p>

<div class="info-box formula">
<div class="info-box-title">📐 全確率の公式</div>
<span class="katex-eq">A_1, A_2, \\ldots, A_n</span> が互いに排反で <span class="katex-eq">A_1 \\cup \\cdots \\cup A_n = \\Omega</span> のとき：
<span class="katex-eq display">P(B) = \\sum_{i=1}^{n} P(A_i) \\cdot P(B|A_i)</span>
</div>

<div class="visual-box">
<div class="visual-box-title">図解：全確率の公式</div>
<div style="max-width:400px;margin:16px auto;">
  <div style="display:flex;gap:4px;margin-bottom:8px;">
    <div style="flex:3;background:rgba(37,99,235,0.2);border:2px solid #2563eb;border-radius:8px;padding:12px;text-align:center;">
      <div style="font-weight:bold;color:#2563eb;"><span class="katex-eq">A_1</span></div>
      <div style="font-size:0.8rem;">P(A₁)·P(B|A₁)</div>
    </div>
    <div style="flex:2;background:rgba(16,185,129,0.2);border:2px solid #10b981;border-radius:8px;padding:12px;text-align:center;">
      <div style="font-weight:bold;color:#10b981;"><span class="katex-eq">A_2</span></div>
      <div style="font-size:0.8rem;">P(A₂)·P(B|A₂)</div>
    </div>
    <div style="flex:1.5;background:rgba(245,158,11,0.2);border:2px solid #f59e0b;border-radius:8px;padding:12px;text-align:center;">
      <div style="font-weight:bold;color:#f59e0b;"><span class="katex-eq">A_3</span></div>
      <div style="font-size:0.8rem;">P(A₃)·P(B|A₃)</div>
    </div>
  </div>
  <div style="text-align:center;font-size:0.85rem;color:var(--text-secondary);">
    ↑ 全体 Ω を排反な <span class="katex-eq">A_1, A_2, A_3</span> に分割<br>
    P(B) = それぞれの経路を全部足す
  </div>
</div>
</div>

<p>よって、ベイズの定理を全確率の公式を使って書くと：</p>

<div class="info-box formula">
<div class="info-box-title">📐 ベイズの定理（全確率の公式を利用）</div>
<span class="katex-eq display">P(A_i|B) = \\frac{P(B|A_i) \\cdot P(A_i)}{\\sum_{j=1}^{n} P(B|A_j) \\cdot P(A_j)}</span>
</div>

<h2>🏥 応用例1：病気の検査</h2>

<p>ある病気の有病率は0.1%（1000人に1人）。検査の精度は以下の通りです。</p>
<table>
<tr><th>指標</th><th>値</th><th>意味</th></tr>
<tr><td>感度（真陽性率）</td><td>99%</td><td>病気の人が陽性となる確率</td></tr>
<tr><td>特異度（真陰性率）</td><td>95%</td><td>健康な人が陰性となる確率</td></tr>
</table>

<p><strong>問題：陽性と判定されたとき、本当に病気である確率は？</strong></p>

<div class="steps">
<div class="step">
  <div class="step-num">1</div>
  <div class="step-content">
    <strong>事前確率を設定</strong>
    <span class="katex-eq">P(\\text{病気}) = 0.001</span>、<span class="katex-eq">P(\\text{健康}) = 0.999</span>
  </div>
</div>
<div class="step">
  <div class="step-num">2</div>
  <div class="step-content">
    <strong>尤度を確認</strong>
    <span class="katex-eq">P(\\text{陽性}|\\text{病気}) = 0.99</span>（感度）<br>
    <span class="katex-eq">P(\\text{陽性}|\\text{健康}) = 0.05</span>（偽陽性率 = 1 - 特異度）
  </div>
</div>
<div class="step">
  <div class="step-num">3</div>
  <div class="step-content">
    <strong>全確率の公式で P(陽性) を計算</strong>
    <span class="katex-eq display">P(\\text{陽性}) = 0.001 \\times 0.99 + 0.999 \\times 0.05 = 0.00099 + 0.04995 = 0.05094</span>
  </div>
</div>
<div class="step">
  <div class="step-num">4</div>
  <div class="step-content">
    <strong>ベイズの定理で事後確率を計算</strong>
    <span class="katex-eq display">P(\\text{病気}|\\text{陽性}) = \\frac{0.001 \\times 0.99}{0.05094} \\approx 0.0194</span>
  </div>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 驚きの結果</div>
精度の高い検査でも、<strong>陽性と判定されて本当に病気である確率はたった約2%</strong>です！<br>
これは有病率（事前確率）が非常に低いため。健康な人が圧倒的に多く、その中からの偽陽性が多数出るためです。<br>
→ <strong>事前確率の重要性</strong>がベイズの定理の核心です。
</div>

<div class="visual-box">
<div class="visual-box-title">図解：1万人で考える</div>
<table style="width:100%;">
<tr><th></th><th>検査陽性</th><th>検査陰性</th><th>計</th></tr>
<tr><td>🤒 <strong>病気</strong></td><td style="background:rgba(239,68,68,0.15);font-weight:bold;">10人 × 0.99 ≈ <span style="color:#ef4444;">10人</span></td><td>≈ 0人</td><td><strong>10人</strong></td></tr>
<tr><td>😊 <strong>健康</strong></td><td style="background:rgba(245,158,11,0.15);">9990人 × 0.05 ≈ <span style="color:#f59e0b;">500人</span></td><td>≈ 9490人</td><td><strong>9990人</strong></td></tr>
<tr><td><strong>計</strong></td><td><strong>≈ 510人</strong></td><td><strong>≈ 9490人</strong></td><td><strong>10000人</strong></td></tr>
</table>
<p style="font-size:0.85rem;color:var(--text-secondary);margin-top:8px;">
  陽性510人中、本当に病気なのは10人だけ → 10/510 ≈ 2%
</p>
</div>

<h2>📧 応用例2：迷惑メールフィルタ</h2>

<p>メールフィルタは、ベイズの定理を応用した「ナイーブベイズ分類器」を使っています。</p>

<div class="info-box tip">
<div class="info-box-title">💡 仕組み</div>
<ul>
<li>事前確率：全メールの30%が迷惑メール → <span class="katex-eq">P(\\text{迷惑}) = 0.3</span></li>
<li>特定の単語（例：「当選」）が含まれる確率：
  <ul>
    <li>迷惑メールの場合：<span class="katex-eq">P(\\text{「当選」}|\\text{迷惑}) = 0.8</span></li>
    <li>正常メールの場合：<span class="katex-eq">P(\\text{「当選」}|\\text{正常}) = 0.01</span></li>
  </ul>
</li>
</ul>
</div>

<div class="steps">
<div class="step">
  <div class="step-num">1</div>
  <div class="step-content">
    <strong>全確率の公式</strong>
    <span class="katex-eq display">P(\\text{「当選」}) = 0.3 \\times 0.8 + 0.7 \\times 0.01 = 0.24 + 0.007 = 0.247</span>
  </div>
</div>
<div class="step">
  <div class="step-num">2</div>
  <div class="step-content">
    <strong>ベイズ更新</strong>
    <span class="katex-eq display">P(\\text{迷惑}|\\text{「当選」}) = \\frac{0.3 \\times 0.8}{0.247} \\approx 0.972</span>
  </div>
</div>
<div class="step">
  <div class="step-num">3</div>
  <div class="step-content">
    <strong>結果</strong>
    「当選」という単語が含まれるメールが迷惑メールである確率は約97.2% → 迷惑フォルダへ！
  </div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">✅ まとめ</div>
<ul>
<li>ベイズの定理：<span class="katex-eq">P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}</span></li>
<li>全確率の公式で分母 P(B) を計算する</li>
<li>事前確率 → データ観測 → 事後確率 という更新プロセス</li>
<li>事前確率が低いと、高精度の検査でも偽陽性が多くなる</li>
<li>統計検定では「2×2の表」で具体的に人数を考えると解きやすい</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q203_1",
                    type: "choice",
                    question: "ベイズの定理 P(A|B) = P(B|A)·P(A)/P(B) において、P(A) は何と呼ばれるか。",
                    options: [
                        "事後確率",
                        "尤度",
                        "事前確率",
                        "周辺確率"
                    ],
                    answer: 2,
                    explanation: "P(A) は「データ B を観測する前のA の確率」であり、事前確率（prior probability）と呼ばれます。P(A|B) が事後確率、P(B|A) が尤度、P(B) が周辺確率（または正規化定数）です。"
                },
                {
                    id: "q203_2",
                    type: "choice",
                    question: "有病率1%の病気に対して、感度90%・特異度90%の検査を行った。陽性と判定されたとき、本当に病気である確率に最も近いものはどれか。",
                    options: [
                        "約 8.3%",
                        "約 50%",
                        "約 90%",
                        "約 1%"
                    ],
                    answer: 0,
                    explanation: "全確率の公式：P(陽性) = 0.01×0.90 + 0.99×0.10 = 0.009 + 0.099 = 0.108。ベイズの定理：P(病気|陽性) = 0.01×0.90/0.108 = 0.009/0.108 ≈ 0.0833 つまり約8.3%です。有病率が低いため、検査精度が高くても陽性的中率は低くなります。"
                },
                {
                    id: "q203_3",
                    type: "fill",
                    question: "P(A) = 0.4、P(B|A) = 0.5、P(B|A^c) = 0.2 のとき、全確率の公式で P(B) を求めなさい（小数で回答）。",
                    answer: "0.32",
                    explanation: "全確率の公式 P(B) = P(A)·P(B|A) + P(A^c)·P(B|A^c) = 0.4×0.5 + 0.6×0.2 = 0.20 + 0.12 = 0.32 です。"
                },
                {
                    id: "q203_4",
                    type: "choice",
                    question: "工場Xは製品全体の60%を、工場Yは40%を生産している。不良品率はXが2%、Yが5%である。ランダムに1つ選んだ製品が不良品だったとき、それが工場X製である確率に最も近いものはどれか。",
                    options: [
                        "約 37.5%",
                        "約 60%",
                        "約 50%",
                        "約 25%"
                    ],
                    answer: 0,
                    explanation: "P(不良) = 0.6×0.02 + 0.4×0.05 = 0.012 + 0.020 = 0.032。P(X|不良) = 0.6×0.02/0.032 = 0.012/0.032 = 0.375 つまり約37.5%です。工場Xは生産割合は大きいですが不良品率が低いため、不良品がXから来た確率は事前確率60%より低い37.5%に更新されます。"
                },
                {
                    id: "q203_5",
                    type: "choice",
                    question: "ベイズの定理の応用について、正しくないものはどれか。",
                    options: [
                        "事前確率が非常に低い場合、高精度の検査でも偽陽性が多くなりうる",
                        "データ（証拠）を観測するたびに確率を逐次更新できる",
                        "事前確率が0の仮説は、どんなデータを観測しても事後確率は0のままである",
                        "事前確率が高ければ、尤度が低くても事後確率は必ず高くなる"
                    ],
                    answer: 3,
                    explanation: "選択肢Dは誤りです。事前確率が高くても、尤度が非常に低ければ事後確率は低くなりえます。事後確率は事前確率と尤度の積（を正規化したもの）で決まるため、どちらか一方だけでは決まりません。A、B、Cはすべて正しいベイズの定理の性質です。"
                }
            ]
        },

        /* ============================================
           Module 204: 確率変数と期待値
           ============================================ */
        {
            id: 204,
            title: "確率変数と期待値",
            duration: "20分",
            content: `
<h2>🎰 確率変数とは</h2>

<p><strong>確率変数（Random Variable）</strong>とは、試行の結果に対して数値を割り当てるルールのことです。大文字 <span class="katex-eq">X</span> で表します。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
確率変数は「変数」と呼ばれていますが、実際には<strong>関数</strong>です。標本空間の各結果を数値に変換する対応関係と考えましょう。
</div>

<div class="compare-grid">
<div class="compare-card">
<h4>📊 離散型確率変数</h4>
<p>取りうる値が<strong>飛び飛び</strong>（有限個 or 可算個）</p>
<p>例：</p>
<ul>
<li>サイコロの出目：1, 2, 3, 4, 5, 6</li>
<li>コイン投げの表の回数：0, 1, 2, ...</li>
<li>不良品の個数：0, 1, 2, ...</li>
</ul>
</div>
<div class="compare-card">
<h4>📈 連続型確率変数</h4>
<p>取りうる値が<strong>連続的</strong>（ある区間の全ての実数）</p>
<p>例：</p>
<ul>
<li>身長：160.0, 160.1, ... cm</li>
<li>時間：0秒〜∞秒</li>
<li>温度：任意の実数値</li>
</ul>
</div>
</div>

<h2>📋 確率分布</h2>

<h3>離散型：確率関数（確率質量関数）</h3>
<p>離散型確率変数 <span class="katex-eq">X</span> の確率分布は<strong>確率関数</strong> <span class="katex-eq">P(X = x)</span> で表します。</p>

<div class="info-box formula">
<div class="info-box-title">📐 確率関数の性質</div>
<ol>
<li><span class="katex-eq">P(X = x_i) \\geq 0</span> （各値の確率は0以上）</li>
<li><span class="katex-eq">\\sum_i P(X = x_i) = 1</span> （全体で1）</li>
</ol>
</div>

<div class="visual-box">
<div class="visual-box-title">図解：サイコロの確率分布</div>
<div style="display:flex;align-items:flex-end;justify-content:center;gap:16px;height:160px;padding-bottom:30px;position:relative;">
  <div style="display:flex;flex-direction:column;align-items:center;">
    <div style="width:40px;height:100px;background:linear-gradient(180deg,#3b82f6,#2563eb);border-radius:6px 6px 0 0;"></div>
    <div style="margin-top:4px;font-weight:bold;font-size:0.85rem;">1</div>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;">
    <div style="width:40px;height:100px;background:linear-gradient(180deg,#3b82f6,#2563eb);border-radius:6px 6px 0 0;"></div>
    <div style="margin-top:4px;font-weight:bold;font-size:0.85rem;">2</div>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;">
    <div style="width:40px;height:100px;background:linear-gradient(180deg,#3b82f6,#2563eb);border-radius:6px 6px 0 0;"></div>
    <div style="margin-top:4px;font-weight:bold;font-size:0.85rem;">3</div>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;">
    <div style="width:40px;height:100px;background:linear-gradient(180deg,#3b82f6,#2563eb);border-radius:6px 6px 0 0;"></div>
    <div style="margin-top:4px;font-weight:bold;font-size:0.85rem;">4</div>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;">
    <div style="width:40px;height:100px;background:linear-gradient(180deg,#3b82f6,#2563eb);border-radius:6px 6px 0 0;"></div>
    <div style="margin-top:4px;font-weight:bold;font-size:0.85rem;">5</div>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;">
    <div style="width:40px;height:100px;background:linear-gradient(180deg,#3b82f6,#2563eb);border-radius:6px 6px 0 0;"></div>
    <div style="margin-top:4px;font-weight:bold;font-size:0.85rem;">6</div>
  </div>
</div>
<p style="font-size:0.85rem;color:var(--text-secondary);">各目の確率がすべて 1/6 で等しい → 一様分布（離散）</p>
</div>

<h3>連続型：確率密度関数</h3>
<p>連続型確率変数では、特定の1点の確率は0になります。代わりに<strong>確率密度関数 (PDF)</strong> <span class="katex-eq">f(x)</span> を使います。</p>

<div class="info-box formula">
<div class="info-box-title">📐 確率密度関数の性質</div>
<ol>
<li><span class="katex-eq">f(x) \\geq 0</span> （密度は0以上）</li>
<li><span class="katex-eq">\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1</span> （全体の面積が1）</li>
<li>区間の確率：<span class="katex-eq">P(a \\leq X \\leq b) = \\int_a^b f(x)\\,dx</span></li>
</ol>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ よくある誤解</div>
連続型で <span class="katex-eq">f(x) > 1</span> となることがあります。<span class="katex-eq">f(x)</span> は確率そのものではなく<strong>密度</strong>なので、1を超えてもOKです。<br>
確率は面積（積分値）で、1点の確率 <span class="katex-eq">P(X = a) = 0</span> です。
</div>

<h2>🎯 期待値 E[X]</h2>

<p>期待値とは、確率変数の<strong>「平均的な値」</strong>です。各値をその確率で重み付けした加重平均と考えられます。</p>

<div class="info-box formula">
<div class="info-box-title">📐 期待値の定義</div>
<strong>離散型：</strong>
<span class="katex-eq display">E[X] = \\sum_i x_i \\cdot P(X = x_i)</span>
<strong>連続型：</strong>
<span class="katex-eq display">E[X] = \\int_{-\\infty}^{\\infty} x \\cdot f(x)\\,dx</span>
</div>

<h3>具体例：サイコロの期待値</h3>

<div class="visual-box">
<div class="visual-box-title">図解：サイコロの期待値計算</div>
<table style="width:100%;">
<tr><th>出目 <span class="katex-eq">x</span></th><th>確率 <span class="katex-eq">P(X=x)</span></th><th><span class="katex-eq">x \\cdot P(X=x)</span></th></tr>
<tr><td>1</td><td>1/6</td><td>1/6</td></tr>
<tr><td>2</td><td>1/6</td><td>2/6</td></tr>
<tr><td>3</td><td>1/6</td><td>3/6</td></tr>
<tr><td>4</td><td>1/6</td><td>4/6</td></tr>
<tr><td>5</td><td>1/6</td><td>5/6</td></tr>
<tr><td>6</td><td>1/6</td><td>6/6</td></tr>
<tr style="font-weight:bold;background:var(--primary-light);"><td>合計</td><td>1</td><td>21/6 = 3.5</td></tr>
</table>
<p style="font-size:0.9rem;color:var(--text-secondary);margin-top:8px;">
  <span class="katex-eq">E[X] = \\frac{1+2+3+4+5+6}{6} = \\frac{21}{6} = 3.5</span>
</p>
</div>

<h3>具体例：宝くじ</h3>
<p>1枚300円の宝くじ。賞金は以下の通り。</p>
<table>
<tr><th>賞金</th><th>確率</th></tr>
<tr><td>100万円</td><td>1/100,000</td></tr>
<tr><td>1,000円</td><td>1/100</td></tr>
<tr><td>0円（ハズレ）</td><td>残り</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 期待値の計算</div>
<span class="katex-eq display">E[X] = 1{,}000{,}000 \\times \\frac{1}{100{,}000} + 1{,}000 \\times \\frac{1}{100} + 0 \\times \\frac{99{,}899}{100{,}000}</span>
<span class="katex-eq display">= 10 + 10 + 0 = 20\\text{円}</span>
300円払って期待できるリターンは20円。<strong>期待値的には損</strong>ということがわかります。
</div>

<h2>⚡ 期待値の性質</h2>

<div class="info-box formula">
<div class="info-box-title">📐 期待値の線形性</div>
<span class="katex-eq display">E[aX + b] = aE[X] + b</span>
<span class="katex-eq display">E[X + Y] = E[X] + E[Y]</span>
（2番目は<strong>独立でなくても</strong>常に成立！）
</div>

<div class="steps">
<div class="step">
  <div class="step-num">1</div>
  <div class="step-content">
    <strong>定数倍は外に出せる</strong>
    <span class="katex-eq">E[3X] = 3E[X]</span>（すべての値が3倍になるなら、平均も3倍）
  </div>
</div>
<div class="step">
  <div class="step-num">2</div>
  <div class="step-content">
    <strong>定数の加算はそのまま</strong>
    <span class="katex-eq">E[X + 5] = E[X] + 5</span>（すべての値に5を足すと、平均も5増える）
  </div>
</div>
<div class="step">
  <div class="step-num">3</div>
  <div class="step-content">
    <strong>和の期待値 = 期待値の和</strong>
    サイコロ2個の合計の期待値 = 3.5 + 3.5 = 7（独立でなくてもOK！）
  </div>
</div>
</div>

<h3>応用例</h3>
<p>テストの点数 X の平均が65点のとき、得点を <span class="katex-eq">Y = 2X + 10</span> に変換すると：</p>
<div class="info-box tip">
<div class="info-box-title">💡 計算</div>
<span class="katex-eq display">E[Y] = E[2X + 10] = 2E[X] + 10 = 2 \\times 65 + 10 = 140\\text{点}</span>
</div>

<div class="info-box success">
<div class="info-box-title">✅ まとめ</div>
<ul>
<li>確率変数：試行の結果に数値を対応させるもの（離散型 / 連続型）</li>
<li>離散型は確率関数、連続型は確率密度関数で分布を表す</li>
<li>期待値 <span class="katex-eq">E[X]</span> は確率で重み付けした平均</li>
<li><span class="katex-eq">E[aX+b] = aE[X] + b</span>（線形性）</li>
<li><span class="katex-eq">E[X+Y] = E[X] + E[Y]</span>（独立でなくても成立）</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q204_1",
                    type: "choice",
                    question: "次のうち「連続型確率変数」の例として最も適切なものはどれか。",
                    options: [
                        "サイコロの出目",
                        "コイン投げで表が出た回数",
                        "ある地点の気温",
                        "不良品の個数"
                    ],
                    answer: 2,
                    explanation: "気温は連続的な値を取りうるので連続型確率変数です。サイコロの出目、コイン投げの表の回数、不良品の個数はいずれも飛び飛びの値しか取らないため離散型確率変数です。"
                },
                {
                    id: "q204_2",
                    type: "fill",
                    question: "確率変数 X の確率分布が P(X=1)=0.3、P(X=2)=0.5、P(X=3)=0.2 のとき、E[X] の値を小数で答えなさい。",
                    answer: "1.9",
                    explanation: "E[X] = 1×0.3 + 2×0.5 + 3×0.2 = 0.3 + 1.0 + 0.6 = 1.9 です。各値にその確率を掛けて足し合わせたものが期待値です。"
                },
                {
                    id: "q204_3",
                    type: "choice",
                    question: "E[X] = 10 のとき、E[3X - 5] の値はいくつか。",
                    options: [
                        "25",
                        "30",
                        "35",
                        "15"
                    ],
                    answer: 0,
                    explanation: "期待値の線形性 E[aX+b] = aE[X]+b を使います。E[3X-5] = 3×E[X] + (-5) = 3×10 - 5 = 30 - 5 = 25 です。"
                },
                {
                    id: "q204_4",
                    type: "choice",
                    question: "連続型確率変数 X の確率密度関数 f(x) について、正しいものはどれか。",
                    options: [
                        "f(x) は常に 0 以上 1 以下である",
                        "P(X = a) = f(a) である",
                        "f(x) が 1 を超えることはありえる",
                        "∫f(x)dx の値は 1 以上になることがある"
                    ],
                    answer: 2,
                    explanation: "確率密度関数 f(x) は確率そのものではなく「密度」なので、1を超えることがあります。例えば一様分布 U(0, 0.5) では f(x) = 2（0≤x≤0.5）です。ただし全区間の積分は必ず1になります。また P(X=a) = 0 であり、f(a)ではありません。"
                },
                {
                    id: "q204_5",
                    type: "choice",
                    question: "確率変数 X と Y について、E[X] = 4、E[Y] = 6 のとき、E[X + Y] の値はいくつか。ただし X と Y は独立とは限らない。",
                    options: [
                        "独立でないと計算できない",
                        "10",
                        "24",
                        "情報が不足して求められない"
                    ],
                    answer: 1,
                    explanation: "期待値の和の性質 E[X+Y] = E[X] + E[Y] は、X と Y が独立であるかどうかに関わらず常に成立します。よって E[X+Y] = 4 + 6 = 10 です。これは期待値の重要な性質（線形性）です。"
                }
            ]
        },

        /* ============================================
           Module 205: 分散と共分散
           ============================================ */
        {
            id: 205,
            title: "分散と共分散",
            duration: "20分",
            content: `
<h2>📏 分散 V[X] とは</h2>

<p>分散は、確率変数が期待値からどれくらい<strong>散らばっているか</strong>を測る指標です。</p>

<div class="info-box formula">
<div class="info-box-title">📐 分散の定義</div>
<span class="katex-eq display">V[X] = E[(X - E[X])^2] = E[X^2] - (E[X])^2</span>
<p style="margin-top:8px;">
左側：「偏差の2乗の期待値」（定義）<br>
右側：「2乗の期待値 - 期待値の2乗」（<strong>計算用の公式</strong>、超頻出！）
</p>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 計算用公式の導出</div>
<span class="katex-eq display">V[X] = E[(X - \\mu)^2] = E[X^2 - 2\\mu X + \\mu^2]</span>
<span class="katex-eq display">= E[X^2] - 2\\mu E[X] + \\mu^2 = E[X^2] - 2\\mu^2 + \\mu^2 = E[X^2] - \\mu^2</span>
ここで <span class="katex-eq">\\mu = E[X]</span> としました。
</div>

<div class="visual-box">
<div class="visual-box-title">図解：分散のイメージ</div>
<div style="display:flex;gap:20px;justify-content:center;flex-wrap:wrap;margin:16px 0;">
  <div style="text-align:center;">
    <div style="font-weight:bold;margin-bottom:8px;color:#2563eb;">分散が小さい（集中）</div>
    <div style="display:flex;align-items:flex-end;justify-content:center;gap:4px;height:100px;">
      <div style="width:20px;height:10px;background:#bfdbfe;border-radius:3px 3px 0 0;"></div>
      <div style="width:20px;height:30px;background:#93c5fd;border-radius:3px 3px 0 0;"></div>
      <div style="width:20px;height:90px;background:#2563eb;border-radius:3px 3px 0 0;"></div>
      <div style="width:20px;height:30px;background:#93c5fd;border-radius:3px 3px 0 0;"></div>
      <div style="width:20px;height:10px;background:#bfdbfe;border-radius:3px 3px 0 0;"></div>
    </div>
    <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;">V[X] 小 → データが平均付近に集中</div>
  </div>
  <div style="text-align:center;">
    <div style="font-weight:bold;margin-bottom:8px;color:#ef4444;">分散が大きい（散らばり）</div>
    <div style="display:flex;align-items:flex-end;justify-content:center;gap:4px;height:100px;">
      <div style="width:20px;height:50px;background:#fca5a5;border-radius:3px 3px 0 0;"></div>
      <div style="width:20px;height:60px;background:#f87171;border-radius:3px 3px 0 0;"></div>
      <div style="width:20px;height:55px;background:#ef4444;border-radius:3px 3px 0 0;"></div>
      <div style="width:20px;height:65px;background:#f87171;border-radius:3px 3px 0 0;"></div>
      <div style="width:20px;height:45px;background:#fca5a5;border-radius:3px 3px 0 0;"></div>
    </div>
    <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;">V[X] 大 → データが広く散らばる</div>
  </div>
</div>
</div>

<h3>具体例：サイコロの分散</h3>
<div class="steps">
<div class="step">
  <div class="step-num">1</div>
  <div class="step-content">
    <strong>E[X] を求める</strong>
    <span class="katex-eq">E[X] = 3.5</span>（前モジュールで計算済み）
  </div>
</div>
<div class="step">
  <div class="step-num">2</div>
  <div class="step-content">
    <strong>E[X²] を求める</strong>
    <span class="katex-eq display">E[X^2] = \\frac{1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2}{6} = \\frac{1+4+9+16+25+36}{6} = \\frac{91}{6}</span>
  </div>
</div>
<div class="step">
  <div class="step-num">3</div>
  <div class="step-content">
    <strong>計算用公式を適用</strong>
    <span class="katex-eq display">V[X] = E[X^2] - (E[X])^2 = \\frac{91}{6} - \\left(\\frac{7}{2}\\right)^2 = \\frac{91}{6} - \\frac{49}{4} = \\frac{182 - 147}{12} = \\frac{35}{12} \\approx 2.917</span>
  </div>
</div>
</div>

<h2>⚡ 分散の性質</h2>

<div class="info-box formula">
<div class="info-box-title">📐 分散の変換公式</div>
<span class="katex-eq display">V[aX + b] = a^2 V[X]</span>
<ul>
<li>定数 <span class="katex-eq">a</span> を掛けると → 分散は <span class="katex-eq">a^2</span> 倍になる</li>
<li>定数 <span class="katex-eq">b</span> を足しても → 分散は変わらない</li>
</ul>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 期待値との違いに注意！</div>
<table style="width:100%;">
<tr><th>操作</th><th>期待値 E</th><th>分散 V</th></tr>
<tr><td>a 倍する</td><td>a 倍: <span class="katex-eq">E[aX]=aE[X]</span></td><td>a² 倍: <span class="katex-eq">V[aX]=a^2V[X]</span></td></tr>
<tr><td>b を足す</td><td>b 増加: <span class="katex-eq">E[X+b]=E[X]+b</span></td><td>変化なし: <span class="katex-eq">V[X+b]=V[X]</span></td></tr>
</table>
<p style="margin-top:8px;">分散は「散らばり具合」なので、全体をずらしても変わりませんが、倍率を変えると散らばりが2乗で変化します。</p>
</div>

<h2>🤝 共分散 Cov(X, Y)</h2>

<p>共分散は<strong>2つの確率変数の間の関連性</strong>を測る指標です。</p>

<div class="info-box formula">
<div class="info-box-title">📐 共分散の定義</div>
<span class="katex-eq display">\\text{Cov}(X, Y) = E[(X - E[X])(Y - E[Y])] = E[XY] - E[X]E[Y]</span>
</div>

<div class="visual-box">
<div class="visual-box-title">図解：共分散の符号と散布図</div>
<div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:16px 0;">
  <div style="text-align:center;padding:16px;background:var(--bg);border-radius:var(--radius);border:1px solid var(--border);min-width:140px;">
    <div style="font-size:2rem;">📈</div>
    <div style="font-weight:bold;color:#10b981;">Cov > 0</div>
    <div style="font-size:0.85rem;color:var(--text-secondary);">正の相関<br>X↑ なら Y↑</div>
    <div style="font-size:0.8rem;margin-top:4px;">例：身長と体重</div>
  </div>
  <div style="text-align:center;padding:16px;background:var(--bg);border-radius:var(--radius);border:1px solid var(--border);min-width:140px;">
    <div style="font-size:2rem;">📉</div>
    <div style="font-weight:bold;color:#ef4444;">Cov < 0</div>
    <div style="font-size:0.85rem;color:var(--text-secondary);">負の相関<br>X↑ なら Y↓</div>
    <div style="font-size:0.8rem;margin-top:4px;">例：勉強時間と<br>不合格率</div>
  </div>
  <div style="text-align:center;padding:16px;background:var(--bg);border-radius:var(--radius);border:1px solid var(--border);min-width:140px;">
    <div style="font-size:2rem;">🔘</div>
    <div style="font-weight:bold;color:#6b7280;">Cov ≈ 0</div>
    <div style="font-size:0.85rem;color:var(--text-secondary);">無相関<br>関連なし</div>
    <div style="font-size:0.8rem;margin-top:4px;">例：身長と<br>好きな色</div>
  </div>
</div>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 重要な性質</div>
<strong>X と Y が独立 → Cov(X, Y) = 0</strong><br>
ただし逆は成り立ちません！ Cov(X, Y) = 0 でも独立とは限らないことに注意。
</div>

<h2>➕ 独立な確率変数の分散の加法性</h2>

<div class="info-box formula">
<div class="info-box-title">📐 分散の加法性</div>
<strong>一般の場合：</strong>
<span class="katex-eq display">V[X + Y] = V[X] + V[Y] + 2\\text{Cov}(X, Y)</span>
<strong>X と Y が独立のとき（Cov = 0）：</strong>
<span class="katex-eq display">V[X + Y] = V[X] + V[Y]</span>
<strong>差の場合も同じ（独立のとき）：</strong>
<span class="katex-eq display">V[X - Y] = V[X] + V[Y]</span>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 超頻出の落とし穴</div>
<strong>V[X - Y] = V[X] + V[Y]</strong>（独立のとき）<br>
引き算なのに分散は<strong>足す</strong>！これは分散が「散らばりの大きさ」を表すため、差をとっても散らばりは小さくならないからです。符号に惑わされないようにしましょう。
</div>

<h3>具体例</h3>
<p>サイコロ2個を振って合計を求めるとき：</p>
<div class="info-box tip">
<div class="info-box-title">💡 計算</div>
各サイコロの分散 <span class="katex-eq">V[X] = 35/12</span>、2個は独立なので：<br>
<span class="katex-eq display">V[X_1 + X_2] = V[X_1] + V[X_2] = \\frac{35}{12} + \\frac{35}{12} = \\frac{70}{12} = \\frac{35}{6} \\approx 5.833</span>
</div>

<h2>📊 相関係数 ρ</h2>

<p>共分散には「単位に依存する」という欠点があります。それを解消するのが<strong>相関係数</strong>です。</p>

<div class="info-box formula">
<div class="info-box-title">📐 相関係数の定義</div>
<span class="katex-eq display">\\rho(X, Y) = \\frac{\\text{Cov}(X, Y)}{\\sqrt{V[X]} \\cdot \\sqrt{V[Y]}} = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\cdot \\sigma_Y}</span>
<p style="margin-top:8px;"><strong>性質：</strong><span class="katex-eq">-1 \\leq \\rho \\leq 1</span></p>
</div>

<div class="visual-box">
<div class="visual-box-title">図解：相関係数の値と散布図パターン</div>
<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:16px 0;">
  <div style="text-align:center;padding:12px;background:var(--bg);border-radius:var(--radius);border:1px solid var(--border);width:100px;">
    <div style="font-size:1.4rem;font-weight:bold;color:#ef4444;">ρ = -1</div>
    <div style="font-size:0.8rem;">完全な<br>負の相関</div>
    <div style="margin-top:4px;font-size:1.2rem;">↘</div>
  </div>
  <div style="text-align:center;padding:12px;background:var(--bg);border-radius:var(--radius);border:1px solid var(--border);width:100px;">
    <div style="font-size:1.4rem;font-weight:bold;color:#f59e0b;">ρ = -0.5</div>
    <div style="font-size:0.8rem;">弱い<br>負の相関</div>
    <div style="margin-top:4px;font-size:1.2rem;">⤵</div>
  </div>
  <div style="text-align:center;padding:12px;background:var(--bg);border-radius:var(--radius);border:1px solid var(--border);width:100px;">
    <div style="font-size:1.4rem;font-weight:bold;color:#6b7280;">ρ = 0</div>
    <div style="font-size:0.8rem;">無相関</div>
    <div style="margin-top:4px;font-size:1.2rem;">⚬</div>
  </div>
  <div style="text-align:center;padding:12px;background:var(--bg);border-radius:var(--radius);border:1px solid var(--border);width:100px;">
    <div style="font-size:1.4rem;font-weight:bold;color:#3b82f6;">ρ = 0.5</div>
    <div style="font-size:0.8rem;">弱い<br>正の相関</div>
    <div style="margin-top:4px;font-size:1.2rem;">⤴</div>
  </div>
  <div style="text-align:center;padding:12px;background:var(--bg);border-radius:var(--radius);border:1px solid var(--border);width:100px;">
    <div style="font-size:1.4rem;font-weight:bold;color:#10b981;">ρ = 1</div>
    <div style="font-size:0.8rem;">完全な<br>正の相関</div>
    <div style="margin-top:4px;font-size:1.2rem;">↗</div>
  </div>
</div>
</div>

<table>
<tr><th>相関係数の範囲</th><th>解釈</th></tr>
<tr><td><span class="katex-eq">|\\rho| = 1</span></td><td>完全な線形関係（直線上に並ぶ）</td></tr>
<tr><td><span class="katex-eq">0.7 \\leq |\\rho| < 1</span></td><td>強い相関</td></tr>
<tr><td><span class="katex-eq">0.4 \\leq |\\rho| < 0.7</span></td><td>中程度の相関</td></tr>
<tr><td><span class="katex-eq">0.2 \\leq |\\rho| < 0.4</span></td><td>弱い相関</td></tr>
<tr><td><span class="katex-eq">|\\rho| < 0.2</span></td><td>ほぼ無相関</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">⚠️ 相関と因果は別！</div>
相関係数が高くても、<strong>因果関係があるとは限りません</strong>。<br>
例：「アイスの売上」と「水難事故の件数」は正の相関がありますが、アイスが事故を起こすわけではありません（共通の原因 = 気温の上昇）。
</div>

<h2>🔧 分散の加法性のまとめ</h2>

<div class="info-box formula">
<div class="info-box-title">📐 重要公式一覧</div>
<table style="width:100%;">
<tr><th>公式</th><th>条件</th></tr>
<tr><td><span class="katex-eq">V[aX+b] = a^2 V[X]</span></td><td>常に成立</td></tr>
<tr><td><span class="katex-eq">V[X+Y] = V[X]+V[Y]+2\\text{Cov}(X,Y)</span></td><td>常に成立</td></tr>
<tr><td><span class="katex-eq">V[X+Y] = V[X]+V[Y]</span></td><td>X, Y 独立のとき</td></tr>
<tr><td><span class="katex-eq">V[X-Y] = V[X]+V[Y]</span></td><td>X, Y 独立のとき</td></tr>
<tr><td><span class="katex-eq">V[aX+bY] = a^2V[X]+b^2V[Y]+2ab\\text{Cov}(X,Y)</span></td><td>常に成立</td></tr>
</table>
</div>

<div class="info-box success">
<div class="info-box-title">✅ まとめ</div>
<ul>
<li><span class="katex-eq">V[X] = E[X^2] - (E[X])^2</span>（計算用公式）</li>
<li><span class="katex-eq">V[aX+b] = a^2 V[X]</span>（定数の足し算は影響なし、掛け算は2乗）</li>
<li><span class="katex-eq">\\text{Cov}(X,Y) = E[XY] - E[X]E[Y]</span></li>
<li>独立なら <span class="katex-eq">V[X \\pm Y] = V[X] + V[Y]</span>（引き算でも足す！）</li>
<li>相関係数 <span class="katex-eq">\\rho = \\text{Cov}(X,Y) / (\\sigma_X \\sigma_Y)</span>、範囲は <span class="katex-eq">-1 \\leq \\rho \\leq 1</span></li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q205_1",
                    type: "choice",
                    question: "V[X] = E[X²] - (E[X])² において、E[X] = 3、E[X²] = 11 のとき、V[X] の値はいくつか。",
                    options: [
                        "2",
                        "8",
                        "3",
                        "5"
                    ],
                    answer: 0,
                    explanation: "V[X] = E[X²] - (E[X])² = 11 - 3² = 11 - 9 = 2 です。この「2乗の期待値 - 期待値の2乗」の公式は計算問題で非常によく使います。"
                },
                {
                    id: "q205_2",
                    type: "fill",
                    question: "V[X] = 4 のとき、V[3X + 7] の値を答えなさい。",
                    answer: "36",
                    explanation: "V[aX+b] = a²V[X] より、V[3X+7] = 3²×V[X] = 9×4 = 36 です。定数 b = 7 を足しても分散は変わりませんが、定数 a = 3 を掛けると分散は a² = 9 倍になります。"
                },
                {
                    id: "q205_3",
                    type: "choice",
                    question: "独立な確率変数 X, Y について V[X] = 5、V[Y] = 3 のとき、V[X - Y] の値はいくつか。",
                    options: [
                        "2",
                        "8",
                        "-2",
                        "計算できない"
                    ],
                    answer: 1,
                    explanation: "X と Y が独立のとき、V[X-Y] = V[X] + V[Y] = 5 + 3 = 8 です。引き算でも分散は足します！分散は「散らばりの大きさ」を表すので、差をとっても散らばりが小さくなるわけではありません。"
                },
                {
                    id: "q205_4",
                    type: "choice",
                    question: "Cov(X, Y) = 6、V[X] = 9、V[Y] = 16 のとき、相関係数 ρ(X, Y) の値はどれか。",
                    options: [
                        "0.5",
                        "0.75",
                        "0.25",
                        "0.6"
                    ],
                    answer: 0,
                    explanation: "ρ = Cov(X,Y) / (σ_X · σ_Y) = 6 / (√9 · √16) = 6 / (3 × 4) = 6/12 = 0.5 です。標準偏差は分散の平方根であることに注意しましょう。"
                },
                {
                    id: "q205_5",
                    type: "choice",
                    question: "以下のうち、正しい記述はどれか。",
                    options: [
                        "Cov(X, Y) = 0 ならば X と Y は必ず独立である",
                        "相関係数が 0.9 であれば X と Y の間には因果関係がある",
                        "V[X + Y] = V[X] + V[Y] は X と Y が独立でなくても常に成り立つ",
                        "X と Y が独立ならば Cov(X, Y) = 0 である"
                    ],
                    answer: 3,
                    explanation: "独立 → Cov = 0 は正しいです。しかし逆は成り立たず、Cov = 0 でも独立とは限りません（非線形な関係がある場合など）。相関は因果を意味しません。V[X+Y] = V[X]+V[Y] は独立のときのみ成立し、一般には V[X+Y] = V[X]+V[Y]+2Cov(X,Y) です。"
                }
            ]
        }
    ]
};
