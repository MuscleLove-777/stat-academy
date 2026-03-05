const LEVEL1_DATA = {
    id: 1,
    title: "データの記述と整理",
    icon: "📊",
    description: "記述統計の基本を図解で学ぶ",
    modules: [
        {
            id: 101,
            title: "データの種類と尺度",
            duration: "15分",
            content: `
<h2>📊 データの種類と尺度</h2>

<p>統計学を学ぶ第一歩は、<strong>データの種類</strong>を正しく理解することです。データの種類によって、使える統計手法が変わります。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
データは大きく<strong>質的データ</strong>（カテゴリ）と<strong>量的データ</strong>（数値）に分けられます。さらに、それぞれ2つの尺度に細分化されます。
</div>

<div class="visual-box">
<div class="visual-box-title">図解：データの分類ツリー</div>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr>
<td colspan="4" style="padding:12px; background:#e3f2fd; border-radius:8px; font-weight:bold; font-size:1.1em;">📦 データ</td>
</tr>
<tr><td colspan="4" style="padding:4px;">⬇️</td></tr>
<tr>
<td colspan="2" style="padding:10px; background:#fff3e0; border-radius:8px; font-weight:bold;">🏷️ 質的データ（カテゴリ）</td>
<td colspan="2" style="padding:10px; background:#e8f5e9; border-radius:8px; font-weight:bold;">🔢 量的データ（数値）</td>
</tr>
<tr>
<td colspan="2" style="padding:4px;">⬇️</td>
<td colspan="2" style="padding:4px;">⬇️</td>
</tr>
<tr>
<td style="padding:8px; background:#ffe0b2; border-radius:8px;">名義尺度</td>
<td style="padding:8px; background:#ffe0b2; border-radius:8px;">順序尺度</td>
<td style="padding:8px; background:#c8e6c9; border-radius:8px;">間隔尺度</td>
<td style="padding:8px; background:#c8e6c9; border-radius:8px;">比率尺度</td>
</tr>
</table>
</div>

<h3>🏷️ 質的データ（カテゴリデータ）</h3>
<p>質的データは、<strong>分類やカテゴリ</strong>を表すデータです。数値で表されることもありますが、計算には意味がありません。</p>

<h4>① 名義尺度（めいぎしゃくど）</h4>
<p>単なる<strong>区別・分類</strong>のためのデータです。順番や大小関係はありません。</p>

<div class="visual-box">
<div class="visual-box-title">名義尺度の具体例</div>
<table style="width:100%; border-collapse:collapse;">
<tr style="background:#f5f5f5;"><th style="padding:8px; border:1px solid #ddd;">例</th><th style="padding:8px; border:1px solid #ddd;">値</th><th style="padding:8px; border:1px solid #ddd;">説明</th></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">🩸 血液型</td><td style="padding:8px; border:1px solid #ddd;">A, B, O, AB</td><td style="padding:8px; border:1px solid #ddd;">順番なし、区別のみ</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">👤 性別</td><td style="padding:8px; border:1px solid #ddd;">男, 女</td><td style="padding:8px; border:1px solid #ddd;">順番なし、区別のみ</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">🏠 都道府県</td><td style="padding:8px; border:1px solid #ddd;">東京, 大阪, …</td><td style="padding:8px; border:1px solid #ddd;">順番なし、区別のみ</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">⚽ 背番号</td><td style="padding:8px; border:1px solid #ddd;">1, 10, 7, …</td><td style="padding:8px; border:1px solid #ddd;">数字だが計算に意味なし</td></tr>
</table>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
背番号や郵便番号のように<strong>数字で表されていても</strong>、足し算や引き算に意味がなければ<strong>名義尺度</strong>です。「背番号10 − 背番号7 = 3」に意味はありません。
</div>

<h4>② 順序尺度（じゅんじょしゃくど）</h4>
<p><strong>順番・大小関係</strong>はあるが、間隔が等しいとは限らないデータです。</p>

<div class="visual-box">
<div class="visual-box-title">順序尺度の具体例</div>
<table style="width:100%; border-collapse:collapse;">
<tr style="background:#f5f5f5;"><th style="padding:8px; border:1px solid #ddd;">例</th><th style="padding:8px; border:1px solid #ddd;">値</th><th style="padding:8px; border:1px solid #ddd;">説明</th></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">⭐ 満足度</td><td style="padding:8px; border:1px solid #ddd;">1:不満 → 5:満足</td><td style="padding:8px; border:1px solid #ddd;">順番あり、間隔は不均一</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">🏅 順位</td><td style="padding:8px; border:1px solid #ddd;">1位, 2位, 3位</td><td style="padding:8px; border:1px solid #ddd;">1位と2位の差≠2位と3位の差</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">📚 学年</td><td style="padding:8px; border:1px solid #ddd;">小1 → 中3 → 高3</td><td style="padding:8px; border:1px solid #ddd;">順番あり</td></tr>
</table>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 名義 vs 順序の見分け方</div>
「並べ替え（ランキング）に意味があるか？」を考えましょう。<br>
🩸 血液型を A → B → O → AB と並べても意味なし → <strong>名義尺度</strong><br>
⭐ 満足度を 1 → 2 → 3 → 4 → 5 と並べると意味あり → <strong>順序尺度</strong>
</div>

<h3>🔢 量的データ（数値データ）</h3>
<p>量的データは、<strong>数値として計算に意味がある</strong>データです。</p>

<h4>③ 間隔尺度（かんかくしゃくど）</h4>
<p>等間隔で測定され、<strong>差に意味がある</strong>が、<strong>比には意味がない</strong>データです。原点（ゼロ）が任意に決められています。</p>

<div class="visual-box">
<div class="visual-box-title">間隔尺度の具体例</div>
<table style="width:100%; border-collapse:collapse;">
<tr style="background:#f5f5f5;"><th style="padding:8px; border:1px solid #ddd;">例</th><th style="padding:8px; border:1px solid #ddd;">説明</th></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">🌡️ 気温（摂氏）</td><td style="padding:8px; border:1px solid #ddd;">20°C と 10°C の差は10°C（差に意味あり）。しかし「20°Cは10°Cの2倍暑い」とは言えない（比に意味なし）</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">📅 西暦</td><td style="padding:8px; border:1px solid #ddd;">2020年 − 2000年 = 20年（差に意味あり）。しかし「2000年は1000年の2倍」とは言えない</td></tr>
</table>
</div>

<h4>④ 比率尺度（ひりつしゃくど）</h4>
<p><strong>絶対的なゼロ</strong>（原点）があり、<strong>差にも比にも意味がある</strong>データです。最も情報量が多い尺度です。</p>

<div class="visual-box">
<div class="visual-box-title">比率尺度の具体例</div>
<table style="width:100%; border-collapse:collapse;">
<tr style="background:#f5f5f5;"><th style="padding:8px; border:1px solid #ddd;">例</th><th style="padding:8px; border:1px solid #ddd;">説明</th></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">📏 身長</td><td style="padding:8px; border:1px solid #ddd;">180cm は 90cm の2倍（比に意味あり）。0cm = 長さなし</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">⚖️ 体重</td><td style="padding:8px; border:1px solid #ddd;">60kg は 30kg の2倍（比に意味あり）。0kg = 重さなし</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">💰 収入</td><td style="padding:8px; border:1px solid #ddd;">40万円 は 20万円の2倍（比に意味あり）。0円 = 収入なし</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">⏱️ 時間（経過）</td><td style="padding:8px; border:1px solid #ddd;">10秒 は 5秒の2倍（比に意味あり）。0秒 = 時間なし</td></tr>
</table>
</div>

<h3>📋 4つの尺度の比較まとめ</h3>

<div class="visual-box">
<div class="visual-box-title">尺度の比較表</div>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr style="background:#e3f2fd;">
<th style="padding:10px; border:1px solid #ddd;">尺度</th>
<th style="padding:10px; border:1px solid #ddd;">区別</th>
<th style="padding:10px; border:1px solid #ddd;">順序</th>
<th style="padding:10px; border:1px solid #ddd;">差</th>
<th style="padding:10px; border:1px solid #ddd;">比</th>
<th style="padding:10px; border:1px solid #ddd;">代表的な統計量</th>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd; background:#ffe0b2; font-weight:bold;">名義尺度</td>
<td style="padding:8px; border:1px solid #ddd;">✅</td>
<td style="padding:8px; border:1px solid #ddd;">❌</td>
<td style="padding:8px; border:1px solid #ddd;">❌</td>
<td style="padding:8px; border:1px solid #ddd;">❌</td>
<td style="padding:8px; border:1px solid #ddd;">最頻値</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd; background:#ffe0b2; font-weight:bold;">順序尺度</td>
<td style="padding:8px; border:1px solid #ddd;">✅</td>
<td style="padding:8px; border:1px solid #ddd;">✅</td>
<td style="padding:8px; border:1px solid #ddd;">❌</td>
<td style="padding:8px; border:1px solid #ddd;">❌</td>
<td style="padding:8px; border:1px solid #ddd;">中央値</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd; background:#c8e6c9; font-weight:bold;">間隔尺度</td>
<td style="padding:8px; border:1px solid #ddd;">✅</td>
<td style="padding:8px; border:1px solid #ddd;">✅</td>
<td style="padding:8px; border:1px solid #ddd;">✅</td>
<td style="padding:8px; border:1px solid #ddd;">❌</td>
<td style="padding:8px; border:1px solid #ddd;">平均値</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd; background:#c8e6c9; font-weight:bold;">比率尺度</td>
<td style="padding:8px; border:1px solid #ddd;">✅</td>
<td style="padding:8px; border:1px solid #ddd;">✅</td>
<td style="padding:8px; border:1px solid #ddd;">✅</td>
<td style="padding:8px; border:1px solid #ddd;">✅</td>
<td style="padding:8px; border:1px solid #ddd;">平均値・変動係数</td>
</tr>
</table>
</div>

<div class="info-box success">
<div class="info-box-title">✅ まとめ</div>
<strong>覚え方：「名・順・間・比」</strong><br>
下にいくほど情報量が多く、使える統計手法が増えます。<br>
名義 → 順序 → 間隔 → 比率 の順に「できること」が積み重なっていきます。<br><br>
<strong>試験頻出ポイント：</strong>「ゼロに意味があるか？」で間隔尺度と比率尺度を区別しましょう。
</div>
`,
            quiz: [
                {
                    id: "q101_1",
                    type: "choice",
                    question: "血液型（A型、B型、O型、AB型）のデータはどの尺度に該当しますか？",
                    options: ["名義尺度", "順序尺度", "間隔尺度", "比率尺度"],
                    answer: 0,
                    explanation: "血液型は単に分類するためのデータであり、順番や数値的な意味はありません。したがって名義尺度です。A型がB型より「大きい」「良い」ということはなく、計算もできません。"
                },
                {
                    id: "q101_2",
                    type: "choice",
                    question: "気温（摂氏）はどの尺度に該当しますか？",
                    options: ["名義尺度", "順序尺度", "間隔尺度", "比率尺度"],
                    answer: 2,
                    explanation: "摂氏の気温は間隔尺度です。「20°Cと10°Cの差は10°C」と差には意味がありますが、0°Cは「温度がない」ことを意味しません（水の凝固点として任意に決めた値）。そのため「20°Cは10°Cの2倍の温度」とは言えず、比には意味がありません。"
                },
                {
                    id: "q101_3",
                    type: "choice",
                    question: "アンケートの満足度（1:非常に不満 〜 5:非常に満足）はどの尺度に該当しますか？",
                    options: ["名義尺度", "順序尺度", "間隔尺度", "比率尺度"],
                    answer: 1,
                    explanation: "満足度は順序尺度です。1→2→3→4→5という順序には意味がありますが、「満足度4と3の差」と「3と2の差」が等しいとは限りません。数値で表されていますが、間隔が等しい保証がないため間隔尺度ではありません。"
                },
                {
                    id: "q101_4",
                    type: "choice",
                    question: "次のうち、比率尺度に該当するものはどれですか？",
                    options: ["偏差値", "摂氏温度", "体重（kg）", "順位"],
                    answer: 2,
                    explanation: "体重（kg）は比率尺度です。0kgは「重さがない」ことを意味し（絶対的なゼロ）、「60kgは30kgの2倍」と比にも意味があります。偏差値と摂氏温度は間隔尺度（ゼロに特別な意味なし）、順位は順序尺度です。"
                },
                {
                    id: "q101_5",
                    type: "fill",
                    question: "データの尺度は「名義尺度 → 順序尺度 → 間隔尺度 → ？尺度」の順に情報量が増えます。？に入る言葉を漢字2文字で答えてください。",
                    answer: "比率",
                    explanation: "4つの尺度は「名義→順序→間隔→比率」の順に、区別→順序→等間隔→絶対原点と情報量が増えていきます。比率尺度は最も情報量が多く、すべての統計的操作が可能です。"
                }
            ]
        },
        {
            id: 102,
            title: "度数分布とヒストグラム",
            duration: "15分",
            content: `
<h2>📊 度数分布とヒストグラム</h2>

<p>データを集めたら、まず<strong>全体の分布</strong>を把握することが重要です。度数分布表とヒストグラムは、データの分布を「見える化」する基本的なツールです。</p>

<h3>📋 度数分布表の作り方</h3>

<p>生データ（ローデータ）をそのまま見ても、全体像はわかりません。そこで、データを<strong>いくつかの区間（階級）</strong>に分けて整理します。</p>

<div class="visual-box">
<div class="visual-box-title">例：30人のテスト成績（100点満点）</div>
<p style="background:#f9f9f9; padding:10px; border-radius:6px; font-family:monospace; font-size:0.95em;">
45, 52, 58, 60, 62, 63, 65, 66, 67, 68,<br>
70, 71, 72, 73, 74, 75, 75, 76, 78, 79,<br>
80, 82, 83, 85, 87, 88, 90, 92, 95, 98
</p>
</div>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>階級（かいきゅう）を決める</strong><br>
データの範囲を等間隔の区間に分けます。一般的に5〜15個の階級が適切です。<br>
ここでは10点刻みにします：40以上50未満、50以上60未満、…
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>各階級のデータ数（度数）を数える</strong><br>
各区間に入るデータの個数を数えます。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>相対度数・累積度数を計算する</strong><br>
相対度数 = 各階級の度数 ÷ 全データ数<br>
累積度数 = その階級までの度数の合計
</div>
</div>
</div>

<div class="visual-box">
<div class="visual-box-title">度数分布表</div>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr style="background:#e3f2fd;">
<th style="padding:8px; border:1px solid #ddd;">階級（点）</th>
<th style="padding:8px; border:1px solid #ddd;">階級値</th>
<th style="padding:8px; border:1px solid #ddd;">度数</th>
<th style="padding:8px; border:1px solid #ddd;">相対度数</th>
<th style="padding:8px; border:1px solid #ddd;">累積度数</th>
<th style="padding:8px; border:1px solid #ddd;">累積相対度数</th>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">40以上〜50未満</td>
<td style="padding:8px; border:1px solid #ddd;">45</td>
<td style="padding:8px; border:1px solid #ddd;">1</td>
<td style="padding:8px; border:1px solid #ddd;">0.033</td>
<td style="padding:8px; border:1px solid #ddd;">1</td>
<td style="padding:8px; border:1px solid #ddd;">0.033</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">50以上〜60未満</td>
<td style="padding:8px; border:1px solid #ddd;">55</td>
<td style="padding:8px; border:1px solid #ddd;">2</td>
<td style="padding:8px; border:1px solid #ddd;">0.067</td>
<td style="padding:8px; border:1px solid #ddd;">3</td>
<td style="padding:8px; border:1px solid #ddd;">0.100</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">60以上〜70未満</td>
<td style="padding:8px; border:1px solid #ddd;">65</td>
<td style="padding:8px; border:1px solid #ddd;">7</td>
<td style="padding:8px; border:1px solid #ddd;">0.233</td>
<td style="padding:8px; border:1px solid #ddd;">10</td>
<td style="padding:8px; border:1px solid #ddd;">0.333</td>
</tr>
<tr style="background:#fff9c4;">
<td style="padding:8px; border:1px solid #ddd;">70以上〜80未満</td>
<td style="padding:8px; border:1px solid #ddd;">75</td>
<td style="padding:8px; border:1px solid #ddd;"><strong>10</strong></td>
<td style="padding:8px; border:1px solid #ddd;"><strong>0.333</strong></td>
<td style="padding:8px; border:1px solid #ddd;">20</td>
<td style="padding:8px; border:1px solid #ddd;">0.667</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">80以上〜90未満</td>
<td style="padding:8px; border:1px solid #ddd;">85</td>
<td style="padding:8px; border:1px solid #ddd;">5</td>
<td style="padding:8px; border:1px solid #ddd;">0.167</td>
<td style="padding:8px; border:1px solid #ddd;">25</td>
<td style="padding:8px; border:1px solid #ddd;">0.833</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">90以上〜100以下</td>
<td style="padding:8px; border:1px solid #ddd;">95</td>
<td style="padding:8px; border:1px solid #ddd;">5</td>
<td style="padding:8px; border:1px solid #ddd;">0.167</td>
<td style="padding:8px; border:1px solid #ddd;">30</td>
<td style="padding:8px; border:1px solid #ddd;">1.000</td>
</tr>
<tr style="background:#f5f5f5; font-weight:bold;">
<td style="padding:8px; border:1px solid #ddd;">合計</td>
<td style="padding:8px; border:1px solid #ddd;">—</td>
<td style="padding:8px; border:1px solid #ddd;">30</td>
<td style="padding:8px; border:1px solid #ddd;">1.000</td>
<td style="padding:8px; border:1px solid #ddd;">—</td>
<td style="padding:8px; border:1px solid #ddd;">—</td>
</tr>
</table>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 用語を整理しよう</div>
<strong>階級（かいきゅう）：</strong>データを分けた各区間（例：70以上〜80未満）<br>
<strong>階級幅：</strong>各区間の幅（例：10点）<br>
<strong>階級値：</strong>各階級の中央の値（例：70〜80の階級値は75）<br>
<strong>度数：</strong>各階級に含まれるデータの個数<br>
<strong>相対度数：</strong>度数 ÷ 全データ数（割合）<br>
<strong>累積度数：</strong>その階級までの度数の合計
</div>

<h3>📊 ヒストグラム</h3>

<p>度数分布表をグラフにしたものが<strong>ヒストグラム</strong>（柱状図）です。棒グラフと似ていますが、<strong>棒と棒の間に隙間がない</strong>のが特徴です。</p>

<div class="visual-box">
<div class="visual-box-title">ヒストグラム（テスト成績の分布）</div>
<div style="display:flex; align-items:flex-end; gap:0; height:200px; padding:10px 10px 30px 40px; position:relative; border-left:2px solid #333; border-bottom:2px solid #333;">
<div style="position:absolute; left:0; bottom:25px; font-size:0.7em; transform:rotate(-90deg); transform-origin:left bottom;">度数（人）</div>
<div style="display:flex; flex-direction:column; align-items:center; flex:1;">
<div style="width:100%; background:#90caf9; height:20px; border:1px solid #1976d2;"></div>
<div style="font-size:0.7em; margin-top:4px;">40-50</div>
</div>
<div style="display:flex; flex-direction:column; align-items:center; flex:1;">
<div style="width:100%; background:#90caf9; height:40px; border:1px solid #1976d2;"></div>
<div style="font-size:0.7em; margin-top:4px;">50-60</div>
</div>
<div style="display:flex; flex-direction:column; align-items:center; flex:1;">
<div style="width:100%; background:#64b5f6; height:100px; border:1px solid #1976d2;"></div>
<div style="font-size:0.7em; margin-top:4px;">60-70</div>
</div>
<div style="display:flex; flex-direction:column; align-items:center; flex:1;">
<div style="width:100%; background:#42a5f5; height:160px; border:1px solid #1976d2; position:relative;"><span style="position:absolute; top:-18px; width:100%; text-align:center; font-size:0.8em; font-weight:bold;">10</span></div>
<div style="font-size:0.7em; margin-top:4px;">70-80</div>
</div>
<div style="display:flex; flex-direction:column; align-items:center; flex:1;">
<div style="width:100%; background:#64b5f6; height:80px; border:1px solid #1976d2;"></div>
<div style="font-size:0.7em; margin-top:4px;">80-90</div>
</div>
<div style="display:flex; flex-direction:column; align-items:center; flex:1;">
<div style="width:100%; background:#64b5f6; height:80px; border:1px solid #1976d2;"></div>
<div style="font-size:0.7em; margin-top:4px;">90-100</div>
</div>
</div>
<p style="text-align:center; font-size:0.85em; color:#666; margin-top:4px;">点数（横軸）</p>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ ヒストグラムと棒グラフの違い</div>
<table style="width:100%; border-collapse:collapse;">
<tr style="background:#f5f5f5;"><th style="padding:8px; border:1px solid #ddd;"></th><th style="padding:8px; border:1px solid #ddd;">ヒストグラム</th><th style="padding:8px; border:1px solid #ddd;">棒グラフ</th></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">データ</td><td style="padding:8px; border:1px solid #ddd;">量的データ（連続）</td><td style="padding:8px; border:1px solid #ddd;">質的データ（カテゴリ）</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">棒の間隔</td><td style="padding:8px; border:1px solid #ddd;">隙間なし</td><td style="padding:8px; border:1px solid #ddd;">隙間あり</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">横軸</td><td style="padding:8px; border:1px solid #ddd;">連続的な数値</td><td style="padding:8px; border:1px solid #ddd;">カテゴリ名</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd;">面積</td><td style="padding:8px; border:1px solid #ddd;">面積が度数に比例</td><td style="padding:8px; border:1px solid #ddd;">高さが値に対応</td></tr>
</table>
</div>

<h3>📐 階級幅が異なる場合</h3>
<p>階級幅が不均一の場合、ヒストグラムの縦軸は<strong>度数密度</strong>（度数÷階級幅）を使います。これにより、<strong>面積が度数（相対度数）に比例</strong>する性質が保たれます。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<span class="katex-eq">度数密度 = \\frac{度数}{階級幅}</span><br><br>
ヒストグラムでは<strong>「面積＝相対度数」</strong>が原則です。階級幅が異なる場合は特に注意しましょう。
</div>

<div class="info-box success">
<div class="info-box-title">✅ まとめ</div>
<strong>度数分布表</strong>：データを階級に分けて度数を数え、分布を表形式で整理したもの<br>
<strong>ヒストグラム</strong>：度数分布表をグラフにしたもの。棒の間に隙間がなく、面積が度数に比例<br>
<strong>階級値</strong>：各階級の代表値（中点）。平均の近似計算に使用<br>
<strong>相対度数の合計</strong>は必ず<strong>1（100%）</strong>になる
</div>
`,
            quiz: [
                {
                    id: "q102_1",
                    type: "choice",
                    question: "度数分布表において、各階級の度数をデータの総数で割った値を何と呼びますか？",
                    options: ["累積度数", "相対度数", "階級値", "度数密度"],
                    answer: 1,
                    explanation: "各階級の度数をデータの総数で割った値は「相対度数」です。相対度数は各階級の割合を表し、すべての階級の相対度数の合計は1（100%）になります。"
                },
                {
                    id: "q102_2",
                    type: "choice",
                    question: "「50以上60未満」の階級の階級値はいくつですか？",
                    options: ["50", "55", "60", "10"],
                    answer: 1,
                    explanation: "階級値は階級の中央の値です。「50以上60未満」の場合、(50 + 60) ÷ 2 = 55 が階級値です。階級値は度数分布表から平均値を近似的に計算するときなどに使います。"
                },
                {
                    id: "q102_3",
                    type: "choice",
                    question: "ヒストグラムと棒グラフの違いについて、正しいものはどれですか？",
                    options: [
                        "ヒストグラムは質的データ、棒グラフは量的データに用いる",
                        "ヒストグラムは棒の間に隙間があり、棒グラフは隙間がない",
                        "ヒストグラムは棒の間に隙間がなく、棒グラフは隙間がある",
                        "ヒストグラムと棒グラフに本質的な違いはない"
                    ],
                    answer: 2,
                    explanation: "ヒストグラムは量的データ（連続データ）に用いるグラフで、棒の間に隙間がありません。これはデータが連続していることを表しています。一方、棒グラフは質的データ（カテゴリデータ）に用い、棒の間に隙間があります。"
                },
                {
                    id: "q102_4",
                    type: "fill",
                    question: "ヒストグラムにおいて、階級幅が異なる場合に縦軸に用いる値を「度数○○」と言います。○○に入る漢字2文字を答えてください。",
                    answer: "密度",
                    explanation: "階級幅が不均一なヒストグラムでは、縦軸に「度数密度」（＝度数÷階級幅）を使います。これにより、棒の面積が度数（相対度数）に比例するという原則が保たれます。"
                },
                {
                    id: "q102_5",
                    type: "choice",
                    question: "ある度数分布表の累積相対度数が、60点未満で0.30、70点未満で0.65であった。60以上70未満の階級の相対度数はいくつですか？",
                    options: ["0.30", "0.35", "0.65", "0.95"],
                    answer: 1,
                    explanation: "累積相対度数は、その階級までの相対度数の合計です。60以上70未満の相対度数は、70点未満の累積相対度数（0.65）から60点未満の累積相対度数（0.30）を引いて、0.65 − 0.30 = 0.35 となります。"
                }
            ]
        },
        {
            id: 103,
            title: "代表値",
            duration: "20分",
            content: `
<h2>📍 代表値（データの中心を表す値）</h2>

<p>大量のデータの特徴を<strong>ひとつの数値</strong>で表すのが「代表値」です。代表値を使うことで、データの中心的な傾向を把握できます。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
代表値には主に<strong>3つ</strong>あります：<strong>算術平均</strong>（平均値）、<strong>中央値</strong>（メディアン）、<strong>最頻値</strong>（モード）。それぞれ特徴が異なるため、状況に応じて使い分けることが重要です。
</div>

<h3>① 算術平均（さんじゅつへいきん）</h3>

<p>最もよく使われる代表値です。全データの合計を、データの個数で割ります。</p>

<div class="visual-box">
<div class="visual-box-title">算術平均の計算</div>
<p><span class="katex-eq display">\\bar{x} = \\frac{x_1 + x_2 + \\cdots + x_n}{n} = \\frac{1}{n}\\sum_{i=1}^{n}x_i</span></p>
</div>

<div class="visual-box">
<div class="visual-box-title">例：5人のテスト成績</div>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr style="background:#e3f2fd;">
<th style="padding:8px; border:1px solid #ddd;">Aさん</th>
<th style="padding:8px; border:1px solid #ddd;">Bさん</th>
<th style="padding:8px; border:1px solid #ddd;">Cさん</th>
<th style="padding:8px; border:1px solid #ddd;">Dさん</th>
<th style="padding:8px; border:1px solid #ddd;">Eさん</th>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">60</td>
<td style="padding:8px; border:1px solid #ddd;">70</td>
<td style="padding:8px; border:1px solid #ddd;">75</td>
<td style="padding:8px; border:1px solid #ddd;">80</td>
<td style="padding:8px; border:1px solid #ddd;">90</td>
</tr>
</table>
<p style="text-align:center; margin-top:10px;">
<span class="katex-eq">\\bar{x} = \\frac{60+70+75+80+90}{5} = \\frac{375}{5} = 75</span>
</p>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 平均値の性質</div>
<strong>偏差の合計は常にゼロ</strong>になります。偏差とは各データと平均値の差です。<br>
<span class="katex-eq">(60-75)+(70-75)+(75-75)+(80-75)+(90-75) = -15-5+0+5+15 = 0</span><br><br>
これは平均値がデータの「重心」であることを意味しています。天秤の支点に例えるとわかりやすいでしょう。
</div>

<h3>② 中央値（メディアン）</h3>

<p>データを小さい順に並べたとき、<strong>真ん中に位置する値</strong>です。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>データを小さい順に並べる</strong>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>データ数が奇数の場合：</strong>ちょうど真ん中の値<br>
<strong>データ数が偶数の場合：</strong>真ん中の2つの値の平均
</div>
</div>
</div>

<div class="visual-box">
<div class="visual-box-title">中央値の求め方</div>
<p><strong>【奇数の例】5個のデータ：</strong>60, 70, <span style="background:#ffeb3b; padding:2px 8px; border-radius:4px; font-weight:bold;">75</span>, 80, 90 → 中央値 = <strong>75</strong></p>
<p><strong>【偶数の例】6個のデータ：</strong>60, 70, <span style="background:#ffeb3b; padding:2px 8px; border-radius:4px;">75</span>, <span style="background:#ffeb3b; padding:2px 8px; border-radius:4px;">80</span>, 85, 90 → 中央値 = <strong>(75+80)÷2 = 77.5</strong></p>
</div>

<h3>③ 最頻値（モード）</h3>

<p>データの中で<strong>最も頻繁に出現する値</strong>です。度数分布表では、度数が最も大きい階級の階級値になります。</p>

<div class="visual-box">
<div class="visual-box-title">最頻値の例</div>
<p>靴のサイズデータ：24.5, 25.0, 25.0, 25.5, <span style="background:#ffeb3b; padding:2px 8px; border-radius:4px; font-weight:bold;">26.0, 26.0, 26.0</span>, 26.5, 27.0</p>
<p>26.0が3回で最も多い → 最頻値 = <strong>26.0</strong></p>
</div>

<h3>🔄 3つの代表値の比較</h3>

<div class="visual-box">
<div class="visual-box-title">代表値の比較表</div>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr style="background:#e3f2fd;">
<th style="padding:8px; border:1px solid #ddd;"></th>
<th style="padding:8px; border:1px solid #ddd;">算術平均</th>
<th style="padding:8px; border:1px solid #ddd;">中央値</th>
<th style="padding:8px; border:1px solid #ddd;">最頻値</th>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold;">求め方</td>
<td style="padding:8px; border:1px solid #ddd;">合計÷個数</td>
<td style="padding:8px; border:1px solid #ddd;">真ん中の値</td>
<td style="padding:8px; border:1px solid #ddd;">最も多い値</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold;">外れ値の影響</td>
<td style="padding:8px; border:1px solid #ddd;">🔴 受けやすい</td>
<td style="padding:8px; border:1px solid #ddd;">🟢 受けにくい</td>
<td style="padding:8px; border:1px solid #ddd;">🟢 受けにくい</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold;">使う尺度</td>
<td style="padding:8px; border:1px solid #ddd;">間隔・比率</td>
<td style="padding:8px; border:1px solid #ddd;">順序以上</td>
<td style="padding:8px; border:1px solid #ddd;">名義以上</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold;">使用例</td>
<td style="padding:8px; border:1px solid #ddd;">テスト平均点</td>
<td style="padding:8px; border:1px solid #ddd;">年収の代表値</td>
<td style="padding:8px; border:1px solid #ddd;">服のサイズ</td>
</tr>
</table>
</div>

<h3>⚠️ 外れ値の影響</h3>

<p>外れ値（極端に大きい or 小さい値）があると、<strong>平均値は大きく引っ張られます</strong>が、中央値はほとんど変わりません。</p>

<div class="visual-box">
<div class="visual-box-title">外れ値の影響を比較</div>
<p><strong>【元のデータ】</strong>60, 70, 75, 80, 90</p>
<table style="width:60%; margin:0 auto; border-collapse:collapse; text-align:center;">
<tr><td style="padding:6px;">平均値 = 75</td><td style="padding:6px;">中央値 = 75</td></tr>
</table>
<p style="text-align:center; font-size:1.5em;">⬇️ Eさんの点数が 90 → 200 に変わったら？</p>
<p><strong>【外れ値あり】</strong>60, 70, 75, 80, <span style="color:red; font-weight:bold;">200</span></p>
<table style="width:60%; margin:0 auto; border-collapse:collapse; text-align:center;">
<tr><td style="padding:6px;">平均値 = <span style="color:red; font-weight:bold;">97</span>（+22も変化！）</td><td style="padding:6px;">中央値 = <strong>75</strong>（変化なし）</td></tr>
</table>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 年収の代表値に注意！</div>
年収のように<strong>右に裾が長い分布</strong>（正の歪み）では、平均値 ＞ 中央値になります。<br>
「平均年収500万円」と言われても、一部の高所得者が平均を押し上げているため、多くの人はそれより低い年収です。このような場合は<strong>中央値</strong>のほうが実態を表します。
</div>

<h3>📊 分布の形と代表値の関係</h3>

<div class="visual-box">
<div class="visual-box-title">分布の歪みと代表値の位置関係</div>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr>
<td style="padding:15px; width:33%;">
<div style="font-size:1.2em; font-weight:bold;">左に歪み（負の歪度）</div>
<div style="font-size:2em; margin:8px 0;">◀️ 🗻</div>
<div>平均 ＜ 中央値 ＜ 最頻値</div>
</td>
<td style="padding:15px; width:33%;">
<div style="font-size:1.2em; font-weight:bold;">対称分布</div>
<div style="font-size:2em; margin:8px 0;">🗻</div>
<div>平均 ＝ 中央値 ＝ 最頻値</div>
</td>
<td style="padding:15px; width:33%;">
<div style="font-size:1.2em; font-weight:bold;">右に歪み（正の歪度）</div>
<div style="font-size:2em; margin:8px 0;">🗻 ▶️</div>
<div>最頻値 ＜ 中央値 ＜ 平均</div>
</td>
</tr>
</table>
</div>

<div class="info-box success">
<div class="info-box-title">✅ まとめ</div>
<strong>算術平均：</strong>全データを使った計算。外れ値に弱い。偏差の和は常にゼロ。<br>
<strong>中央値：</strong>順番が真ん中の値。外れ値に強い（頑健）。<br>
<strong>最頻値：</strong>最も多く出現する値。名義尺度でも使える。<br>
<strong>対称分布</strong>では3つの代表値は一致し、<strong>歪んだ分布</strong>では裾が長い方向に平均が引っ張られます。
</div>
`,
            quiz: [
                {
                    id: "q103_1",
                    type: "choice",
                    question: "データ {3, 5, 7, 7, 8} の中央値（メディアン）はいくつですか？",
                    options: ["5", "6", "7", "8"],
                    answer: 2,
                    explanation: "データを小さい順に並べると 3, 5, 7, 7, 8 です。データ数は5個（奇数）なので、3番目の値が中央値です。3番目は7なので、中央値は7です。"
                },
                {
                    id: "q103_2",
                    type: "choice",
                    question: "年収のように右に裾が長い（正の歪み）分布において、平均値、中央値、最頻値の大小関係として正しいものはどれですか？",
                    options: [
                        "平均値 < 中央値 < 最頻値",
                        "最頻値 < 中央値 < 平均値",
                        "中央値 < 最頻値 < 平均値",
                        "平均値 = 中央値 = 最頻値"
                    ],
                    answer: 1,
                    explanation: "右に裾が長い（正の歪みがある）分布では、一部の大きな値が平均を引き上げます。そのため、最頻値 < 中央値 < 平均値の順になります。年収分布が典型例で、高所得者の存在により平均年収は中央値より高くなります。"
                },
                {
                    id: "q103_3",
                    type: "fill",
                    question: "各データと平均値の差を「偏差」と言います。全データの偏差を合計すると、必ずいくつになりますか？半角数字で答えてください。",
                    answer: "0",
                    explanation: "偏差の合計（Σ(xi - x̄)）は必ず0になります。これは平均値の定義から導かれる性質で、平均値がデータの「重心」（バランスポイント）であることを意味しています。"
                },
                {
                    id: "q103_4",
                    type: "choice",
                    question: "データ {2, 4, 6, 8, 10, 12} の中央値はいくつですか？",
                    options: ["6", "7", "8", "6と8の平均なので7"],
                    answer: 1,
                    explanation: "データ数は6個（偶数）なので、真ん中の2つの値（3番目の6と4番目の8）の平均を取ります。(6 + 8) ÷ 2 = 7 が中央値です。選択肢の「6と8の平均なので7」と同じ意味ですが、シンプルに7が正解です。"
                },
                {
                    id: "q103_5",
                    type: "choice",
                    question: "外れ値の影響を最も受けやすい代表値はどれですか？",
                    options: ["中央値（メディアン）", "最頻値（モード）", "算術平均", "四分位数"],
                    answer: 2,
                    explanation: "算術平均は全てのデータ値を使って計算するため、極端な値（外れ値）があると大きく影響を受けます。一方、中央値は順位だけで決まるため、外れ値に対して頑健（ロバスト）です。最頻値も頻度で決まるため外れ値の影響を受けにくいです。"
                }
            ]
        },
        {
            id: 104,
            title: "散布度（ばらつきの指標）",
            duration: "20分",
            content: `
<h2>📏 散布度（ばらつきの指標）</h2>

<p>代表値だけではデータの特徴は十分にわかりません。同じ平均値でも、データの<strong>ばらつき</strong>が大きいか小さいかで意味が全く異なります。</p>

<div class="visual-box">
<div class="visual-box-title">同じ平均値でもばらつきが違う例</div>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr>
<td style="padding:15px; width:50%;">
<div style="font-weight:bold; margin-bottom:8px;">クラスA（ばらつき小）</div>
<div style="background:#e8f5e9; padding:10px; border-radius:8px; font-family:monospace;">
68, 70, 72, 74, 76<br>
平均 = 72
</div>
<div style="margin-top:8px;">
<span style="display:inline-block; width:8px; height:8px; background:#4caf50; border-radius:50%;"></span>
<span style="display:inline-block; width:8px; height:8px; background:#4caf50; border-radius:50%; margin-left:2px;"></span>
<span style="display:inline-block; width:8px; height:8px; background:#4caf50; border-radius:50%; margin-left:2px;"></span>
<span style="display:inline-block; width:8px; height:8px; background:#4caf50; border-radius:50%; margin-left:2px;"></span>
<span style="display:inline-block; width:8px; height:8px; background:#4caf50; border-radius:50%; margin-left:2px;"></span>
← ぎゅっと集中
</div>
</td>
<td style="padding:15px; width:50%;">
<div style="font-weight:bold; margin-bottom:8px;">クラスB（ばらつき大）</div>
<div style="background:#ffebee; padding:10px; border-radius:8px; font-family:monospace;">
40, 55, 72, 89, 104<br>
平均 = 72
</div>
<div style="margin-top:8px;">
<span style="display:inline-block; width:8px; height:8px; background:#f44336; border-radius:50%;"></span>
&nbsp;&nbsp;&nbsp;
<span style="display:inline-block; width:8px; height:8px; background:#f44336; border-radius:50%;"></span>
&nbsp;&nbsp;&nbsp;&nbsp;
<span style="display:inline-block; width:8px; height:8px; background:#f44336; border-radius:50%;"></span>
&nbsp;&nbsp;&nbsp;&nbsp;
<span style="display:inline-block; width:8px; height:8px; background:#f44336; border-radius:50%;"></span>
&nbsp;&nbsp;&nbsp;
<span style="display:inline-block; width:8px; height:8px; background:#f44336; border-radius:50%;"></span>
← バラバラ
</div>
</td>
</tr>
</table>
</div>

<h3>① 範囲（レンジ）</h3>

<p>最もシンプルなばらつきの指標です。</p>

<div class="visual-box">
<div class="visual-box-title">範囲の計算</div>
<p><span class="katex-eq display">範囲 = 最大値 - 最小値</span></p>
<p>クラスA：76 - 68 = <strong>8</strong> ／ クラスB：104 - 40 = <strong>64</strong></p>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
範囲は最大値と最小値の2つだけで決まるため、<strong>外れ値に非常に弱い</strong>です。また、データ数が増えると範囲は大きくなる傾向があります。
</div>

<h3>② 四分位範囲（IQR）</h3>

<p>データを4等分したとき、<strong>真ん中の50%</strong>が収まる範囲です。外れ値の影響を受けにくい指標です。</p>

<div class="visual-box">
<div class="visual-box-title">四分位数と四分位範囲</div>
<table style="width:100%; text-align:center; border-collapse:collapse;">
<tr>
<td style="padding:10px; width:25%; background:#ffcdd2; border-radius:8px 0 0 8px;">下位25%</td>
<td style="padding:10px; width:25%; background:#fff9c4;">Q1〜Q2<br>(25%)</td>
<td style="padding:10px; width:25%; background:#fff9c4;">Q2〜Q3<br>(25%)</td>
<td style="padding:10px; width:25%; background:#ffcdd2; border-radius:0 8px 8px 0;">上位25%</td>
</tr>
<tr>
<td style="padding:5px;">↑<br>最小値</td>
<td style="padding:5px;">↑<br><strong>Q1</strong>（第1四分位数）</td>
<td style="padding:5px;">↑<br><strong>Q2</strong>（中央値）</td>
<td style="padding:5px;"></td>
</tr>
<tr>
<td></td>
<td></td>
<td style="padding:5px;">↑<br><strong>Q3</strong>（第3四分位数）</td>
<td style="padding:5px;">↑<br>最大値</td>
</tr>
</table>
<p style="text-align:center; margin-top:15px; font-size:1.1em;">
<span class="katex-eq">IQR = Q_3 - Q_1</span>
</p>
</div>

<div class="steps">
<div class="step">
<div class="step-num">例</div>
<div class="step-content">
データ：2, 4, 5, 7, 8, 9, 11, 13, 15<br>
Q1 = 4.5、Q2（中央値）= 8、Q3 = 12<br>
<strong>IQR = 12 − 4.5 = 7.5</strong>
</div>
</div>
</div>

<h3>③ 分散と標準偏差</h3>

<p>最もよく使われるばらつきの指標です。各データが平均からどれだけ離れているかを数値化します。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>偏差を求める</strong>：各データから平均を引く<br>
<span class="katex-eq">偏差 = x_i - \\bar{x}</span>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>偏差を2乗する</strong>：マイナスをなくすため<br>
<span class="katex-eq">(x_i - \\bar{x})^2</span>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>平均を取る → 分散</strong><br>
<span class="katex-eq display">s^2 = \\frac{1}{n}\\sum_{i=1}^{n}(x_i - \\bar{x})^2</span>
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>平方根を取る → 標準偏差</strong><br>
<span class="katex-eq display">s = \\sqrt{s^2} = \\sqrt{\\frac{1}{n}\\sum_{i=1}^{n}(x_i - \\bar{x})^2}</span>
</div>
</div>
</div>

<div class="visual-box">
<div class="visual-box-title">計算例：データ {2, 4, 6, 8, 10}</div>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr style="background:#e3f2fd;">
<th style="padding:8px; border:1px solid #ddd;">データ <span class="katex-eq">x_i</span></th>
<th style="padding:8px; border:1px solid #ddd;">偏差 <span class="katex-eq">x_i - \\bar{x}</span></th>
<th style="padding:8px; border:1px solid #ddd;">偏差² <span class="katex-eq">(x_i - \\bar{x})^2</span></th>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">2</td>
<td style="padding:8px; border:1px solid #ddd;">2 − 6 = −4</td>
<td style="padding:8px; border:1px solid #ddd;">16</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">4</td>
<td style="padding:8px; border:1px solid #ddd;">4 − 6 = −2</td>
<td style="padding:8px; border:1px solid #ddd;">4</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">6</td>
<td style="padding:8px; border:1px solid #ddd;">6 − 6 = 0</td>
<td style="padding:8px; border:1px solid #ddd;">0</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">8</td>
<td style="padding:8px; border:1px solid #ddd;">8 − 6 = 2</td>
<td style="padding:8px; border:1px solid #ddd;">4</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">10</td>
<td style="padding:8px; border:1px solid #ddd;">10 − 6 = 4</td>
<td style="padding:8px; border:1px solid #ddd;">16</td>
</tr>
<tr style="background:#fff9c4; font-weight:bold;">
<td style="padding:8px; border:1px solid #ddd;">平均 = 6</td>
<td style="padding:8px; border:1px solid #ddd;">合計 = 0</td>
<td style="padding:8px; border:1px solid #ddd;">合計 = 40</td>
</tr>
</table>
<p style="text-align:center; margin-top:10px;">
分散 <span class="katex-eq">s^2 = \\frac{40}{5} = 8</span>　→　標準偏差 <span class="katex-eq">s = \\sqrt{8} \\approx 2.83</span>
</p>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 なぜ偏差を2乗するの？</div>
偏差をそのまま足すと<strong>必ずゼロ</strong>になります（正と負が打ち消し合う）。そのため、2乗してマイナスをなくしてから平均を取ります。<br>
絶対値を使う方法もありますが（平均絶対偏差）、数学的な扱いやすさから2乗が主流です。
</div>

<h3>④ 不偏分散 vs 標本分散</h3>

<p>統計検定で<strong>最頻出</strong>のポイントです！</p>

<div class="visual-box">
<div class="visual-box-title">2つの分散の違い</div>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr style="background:#e3f2fd;">
<th style="padding:10px; border:1px solid #ddd;"></th>
<th style="padding:10px; border:1px solid #ddd;">標本分散</th>
<th style="padding:10px; border:1px solid #ddd;">不偏分散</th>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold;">式</td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">s^2 = \\frac{1}{n}\\sum(x_i - \\bar{x})^2</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">u^2 = \\frac{1}{n-1}\\sum(x_i - \\bar{x})^2</span></td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold;">割る数</td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">n</span></td>
<td style="padding:8px; border:1px solid #ddd;"><span class="katex-eq">n - 1</span>（自由度）</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold;">用途</td>
<td style="padding:8px; border:1px solid #ddd;">手元のデータのばらつき</td>
<td style="padding:8px; border:1px solid #ddd;">母集団の分散の推定</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd; font-weight:bold;">性質</td>
<td style="padding:8px; border:1px solid #ddd;">母分散を過小評価しがち</td>
<td style="padding:8px; border:1px solid #ddd;">母分散の不偏推定量</td>
</tr>
</table>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ なぜ n-1 で割るの？</div>
標本平均 <span class="katex-eq">\\bar{x}</span> を使って偏差を計算すると、<strong>偏差の合計が必ず0になる</strong>という制約があります。つまり、n個の偏差のうち自由に動けるのは<strong>n−1個だけ</strong>（最後の1個は自動的に決まる）。この「自由度」がn−1です。<br><br>
n で割ると母分散を過小評価する傾向がありますが、n−1 で割ると平均的に母分散と一致します（不偏性）。
</div>

<h3>⑤ 変動係数（CV）</h3>

<p>単位やスケールが異なるデータのばらつきを比較するための指標です。</p>

<div class="visual-box">
<div class="visual-box-title">変動係数</div>
<p><span class="katex-eq display">CV = \\frac{s}{\\bar{x}} \\times 100 \\quad (\\%)</span></p>
<p>標準偏差を平均で割ることで、<strong>相対的なばらつき</strong>を表します。</p>
</div>

<div class="visual-box">
<div class="visual-box-title">例：身長と体重のばらつき比較</div>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr style="background:#e3f2fd;">
<th style="padding:8px; border:1px solid #ddd;"></th>
<th style="padding:8px; border:1px solid #ddd;">平均</th>
<th style="padding:8px; border:1px solid #ddd;">標準偏差</th>
<th style="padding:8px; border:1px solid #ddd;">変動係数</th>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">📏 身長</td>
<td style="padding:8px; border:1px solid #ddd;">170 cm</td>
<td style="padding:8px; border:1px solid #ddd;">5.1 cm</td>
<td style="padding:8px; border:1px solid #ddd;">3.0%</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">⚖️ 体重</td>
<td style="padding:8px; border:1px solid #ddd;">65 kg</td>
<td style="padding:8px; border:1px solid #ddd;">7.8 kg</td>
<td style="padding:8px; border:1px solid #ddd;">12.0%</td>
</tr>
</table>
<p style="text-align:center; margin-top:8px;">→ 体重の方が相対的なばらつきが<strong>4倍</strong>大きい！</p>
</div>

<div class="info-box success">
<div class="info-box-title">✅ まとめ</div>
<strong>範囲：</strong>最大値 − 最小値。簡単だが外れ値に弱い。<br>
<strong>IQR：</strong>Q3 − Q1。中央50%の範囲。外れ値に強い。<br>
<strong>分散：</strong>偏差の2乗の平均。ばらつきの基本指標。<br>
<strong>標準偏差：</strong>分散の平方根。元のデータと同じ単位。<br>
<strong>不偏分散：</strong>n−1で割る。母分散の推定に使用。<br>
<strong>変動係数：</strong>標準偏差÷平均。異なるスケールのばらつき比較に使用。
</div>
`,
            quiz: [
                {
                    id: "q104_1",
                    type: "choice",
                    question: "データ {4, 6, 8, 10, 12} の標本分散はいくつですか？（平均は8）",
                    options: ["4", "8", "10", "2.83"],
                    answer: 1,
                    explanation: "偏差²の合計 = (4-8)² + (6-8)² + (8-8)² + (10-8)² + (12-8)² = 16 + 4 + 0 + 4 + 16 = 40。標本分散 = 40 ÷ 5 = 8 です。"
                },
                {
                    id: "q104_2",
                    type: "choice",
                    question: "不偏分散で偏差の2乗和を割る数はどれですか？（nはデータ数）",
                    options: ["n", "n + 1", "n − 1", "n − 2"],
                    answer: 2,
                    explanation: "不偏分散ではn−1（自由度）で割ります。標本平均を使って偏差を計算するとき、偏差の合計が0という制約があるため、自由に動ける偏差はn−1個だけです。n−1で割ることで、母分散の不偏推定量になります。"
                },
                {
                    id: "q104_3",
                    type: "fill",
                    question: "標準偏差を平均値で割って100を掛けた指標を何といいますか？漢字4文字で答えてください。",
                    answer: "変動係数",
                    explanation: "変動係数（CV: Coefficient of Variation）= 標準偏差 ÷ 平均値 × 100 (%)。単位やスケールが異なるデータのばらつきを比較する際に用います。例えば、身長と体重のばらつきを比較するときに便利です。"
                },
                {
                    id: "q104_4",
                    type: "choice",
                    question: "四分位範囲（IQR）の計算式として正しいものはどれですか？",
                    options: [
                        "最大値 − 最小値",
                        "Q3 − Q1",
                        "Q2 − Q1",
                        "(Q3 − Q1) ÷ 2"
                    ],
                    answer: 1,
                    explanation: "四分位範囲（IQR: Interquartile Range）= Q3（第3四分位数）− Q1（第1四分位数）です。データの中央50%が収まる範囲を表し、外れ値の影響を受けにくいばらつきの指標です。なお、(Q3−Q1)÷2 は四分位偏差と呼ばれる別の指標です。"
                },
                {
                    id: "q104_5",
                    type: "choice",
                    question: "データ {4, 6, 8, 10, 12} の不偏分散はいくつですか？（平均は8、偏差の2乗和は40）",
                    options: ["8", "10", "12", "6.32"],
                    answer: 1,
                    explanation: "不偏分散 = 偏差の2乗和 ÷ (n-1) = 40 ÷ (5-1) = 40 ÷ 4 = 10 です。同じデータでも標本分散（nで割る）は8ですが、不偏分散（n-1で割る）は10となり、やや大きくなります。"
                }
            ]
        },
        {
            id: 105,
            title: "箱ひげ図と相関",
            duration: "15分",
            content: `
<h2>📦 箱ひげ図と相関</h2>

<p>箱ひげ図はデータの分布を視覚的に要約するグラフ、散布図と相関係数は2つの変数の関係を分析するツールです。</p>

<h3>📦 箱ひげ図（ボックスプロット）</h3>

<p>箱ひげ図は5つの要約統計量（五数要約）を使ってデータの分布を表現します。</p>

<div class="visual-box">
<div class="visual-box-title">箱ひげ図の構成要素</div>
<div style="position:relative; height:180px; margin:20px 40px;">
<!-- ひげ（左） -->
<div style="position:absolute; top:70px; left:5%; width:15%; height:2px; background:#333;"></div>
<div style="position:absolute; top:50px; left:5%; width:1px; height:42px; background:#333;"></div>
<!-- 箱 -->
<div style="position:absolute; top:40px; left:20%; width:40%; height:62px; background:#bbdefb; border:2px solid #1976d2; border-radius:4px;"></div>
<!-- 中央値の線 -->
<div style="position:absolute; top:40px; left:38%; width:2px; height:62px; background:#d32f2f;"></div>
<!-- ひげ（右） -->
<div style="position:absolute; top:70px; left:60%; width:18%; height:2px; background:#333;"></div>
<div style="position:absolute; top:50px; left:78%; width:1px; height:42px; background:#333;"></div>
<!-- 外れ値 -->
<div style="position:absolute; top:65px; left:88%; width:10px; height:10px; background:#f44336; border-radius:50%;"></div>
<!-- ラベル -->
<div style="position:absolute; top:110px; left:2%; font-size:0.75em; text-align:center;">最小値<br>(ひげの端)</div>
<div style="position:absolute; top:110px; left:17%; font-size:0.75em; text-align:center;"><strong>Q1</strong><br>第1四分位数</div>
<div style="position:absolute; top:110px; left:34%; font-size:0.75em; text-align:center; color:#d32f2f;"><strong>Q2</strong><br>中央値</div>
<div style="position:absolute; top:110px; left:54%; font-size:0.75em; text-align:center;"><strong>Q3</strong><br>第3四分位数</div>
<div style="position:absolute; top:110px; left:72%; font-size:0.75em; text-align:center;">最大値<br>(ひげの端)</div>
<div style="position:absolute; top:110px; left:85%; font-size:0.75em; text-align:center; color:#f44336;">外れ値<br>●</div>
<!-- 箱の範囲 -->
<div style="position:absolute; top:18px; left:20%; width:40%; text-align:center; font-size:0.8em; color:#1976d2;">← IQR（四分位範囲）→</div>
</div>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 箱ひげ図の読み方</div>
<strong>箱の幅</strong>（IQR）：データの中央50%の範囲。箱が広いほどばらつきが大きい。<br>
<strong>中央値の位置</strong>：箱の中央にあれば左右対称、偏っていれば歪みがある。<br>
<strong>ひげの長さ</strong>：データの広がりを表す。片方だけ長いと、その方向に裾が長い。<br>
<strong>点（●）</strong>：外れ値を表す。
</div>

<h3>🔍 外れ値の判定（1.5 × IQR法）</h3>

<p>箱ひげ図では、以下の範囲を超える値を<strong>外れ値</strong>として扱います。</p>

<div class="visual-box">
<div class="visual-box-title">外れ値の判定基準</div>
<div style="background:#fff3e0; padding:15px; border-radius:8px; text-align:center; font-size:1.05em;">
<span class="katex-eq">Q_1 - 1.5 \\times IQR</span> より小さい値 → <strong>外れ値</strong>（下側）<br><br>
<span class="katex-eq">Q_3 + 1.5 \\times IQR</span> より大きい値 → <strong>外れ値</strong>（上側）
</div>
</div>

<div class="steps">
<div class="step">
<div class="step-num">例</div>
<div class="step-content">
Q1 = 40、Q3 = 70 の場合<br>
IQR = 70 − 40 = 30<br>
下側の境界：40 − 1.5 × 30 = 40 − 45 = <strong>−5</strong><br>
上側の境界：70 + 1.5 × 30 = 70 + 45 = <strong>115</strong><br>
→ −5未満 または 115より大きい値が外れ値
</div>
</div>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ひげの端に注意</div>
ひげの端は「最小値・最大値」ではなく、<strong>外れ値を除いたデータの最小値・最大値</strong>です。つまり、外れ値判定の境界内にある最も端のデータ点です。
</div>

<h3>📈 散布図と相関</h3>

<p>2つの量的変数の関係を視覚化するのが<strong>散布図</strong>（散点図）です。</p>

<div class="visual-box">
<div class="visual-box-title">散布図のパターン</div>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr>
<td style="padding:15px; width:33%;">
<div style="font-weight:bold; margin-bottom:8px;">正の相関</div>
<div style="width:120px; height:120px; margin:0 auto; position:relative; border-left:2px solid #333; border-bottom:2px solid #333;">
<div style="position:absolute; bottom:10%; left:10%; width:6px; height:6px; background:#1976d2; border-radius:50%;"></div>
<div style="position:absolute; bottom:20%; left:20%; width:6px; height:6px; background:#1976d2; border-radius:50%;"></div>
<div style="position:absolute; bottom:35%; left:30%; width:6px; height:6px; background:#1976d2; border-radius:50%;"></div>
<div style="position:absolute; bottom:40%; left:45%; width:6px; height:6px; background:#1976d2; border-radius:50%;"></div>
<div style="position:absolute; bottom:55%; left:55%; width:6px; height:6px; background:#1976d2; border-radius:50%;"></div>
<div style="position:absolute; bottom:65%; left:65%; width:6px; height:6px; background:#1976d2; border-radius:50%;"></div>
<div style="position:absolute; bottom:75%; left:78%; width:6px; height:6px; background:#1976d2; border-radius:50%;"></div>
<div style="position:absolute; bottom:85%; left:88%; width:6px; height:6px; background:#1976d2; border-radius:50%;"></div>
</div>
<div style="margin-top:8px; color:#1976d2;">↗ 右上がり<br>r &gt; 0</div>
</td>
<td style="padding:15px; width:33%;">
<div style="font-weight:bold; margin-bottom:8px;">相関なし</div>
<div style="width:120px; height:120px; margin:0 auto; position:relative; border-left:2px solid #333; border-bottom:2px solid #333;">
<div style="position:absolute; bottom:60%; left:15%; width:6px; height:6px; background:#9e9e9e; border-radius:50%;"></div>
<div style="position:absolute; bottom:20%; left:25%; width:6px; height:6px; background:#9e9e9e; border-radius:50%;"></div>
<div style="position:absolute; bottom:80%; left:35%; width:6px; height:6px; background:#9e9e9e; border-radius:50%;"></div>
<div style="position:absolute; bottom:45%; left:50%; width:6px; height:6px; background:#9e9e9e; border-radius:50%;"></div>
<div style="position:absolute; bottom:70%; left:60%; width:6px; height:6px; background:#9e9e9e; border-radius:50%;"></div>
<div style="position:absolute; bottom:30%; left:72%; width:6px; height:6px; background:#9e9e9e; border-radius:50%;"></div>
<div style="position:absolute; bottom:55%; left:85%; width:6px; height:6px; background:#9e9e9e; border-radius:50%;"></div>
<div style="position:absolute; bottom:10%; left:45%; width:6px; height:6px; background:#9e9e9e; border-radius:50%;"></div>
</div>
<div style="margin-top:8px; color:#9e9e9e;">バラバラ<br>r ≈ 0</div>
</td>
<td style="padding:15px; width:33%;">
<div style="font-weight:bold; margin-bottom:8px;">負の相関</div>
<div style="width:120px; height:120px; margin:0 auto; position:relative; border-left:2px solid #333; border-bottom:2px solid #333;">
<div style="position:absolute; bottom:85%; left:10%; width:6px; height:6px; background:#d32f2f; border-radius:50%;"></div>
<div style="position:absolute; bottom:75%; left:22%; width:6px; height:6px; background:#d32f2f; border-radius:50%;"></div>
<div style="position:absolute; bottom:60%; left:35%; width:6px; height:6px; background:#d32f2f; border-radius:50%;"></div>
<div style="position:absolute; bottom:50%; left:45%; width:6px; height:6px; background:#d32f2f; border-radius:50%;"></div>
<div style="position:absolute; bottom:40%; left:55%; width:6px; height:6px; background:#d32f2f; border-radius:50%;"></div>
<div style="position:absolute; bottom:25%; left:68%; width:6px; height:6px; background:#d32f2f; border-radius:50%;"></div>
<div style="position:absolute; bottom:15%; left:80%; width:6px; height:6px; background:#d32f2f; border-radius:50%;"></div>
<div style="position:absolute; bottom:8%; left:90%; width:6px; height:6px; background:#d32f2f; border-radius:50%;"></div>
</div>
<div style="margin-top:8px; color:#d32f2f;">↘ 右下がり<br>r &lt; 0</div>
</td>
</tr>
</table>
</div>

<h3>📐 相関係数（ピアソンの積率相関係数）</h3>

<p>2つの変数の<strong>直線的な関係の強さと方向</strong>を表す指標です。</p>

<div class="visual-box">
<div class="visual-box-title">相関係数の式</div>
<p><span class="katex-eq display">r = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum_{i=1}^{n}(x_i - \\bar{x})^2} \\cdot \\sqrt{\\sum_{i=1}^{n}(y_i - \\bar{y})^2}}</span></p>
<p style="text-align:center;">= xとyの共分散 ÷ （xの標準偏差 × yの標準偏差）</p>
</div>

<div class="visual-box">
<div class="visual-box-title">相関係数の目安</div>
<table style="width:100%; border-collapse:collapse; text-align:center;">
<tr style="background:#e3f2fd;">
<th style="padding:8px; border:1px solid #ddd;">相関係数 r</th>
<th style="padding:8px; border:1px solid #ddd;">相関の強さ</th>
<th style="padding:8px; border:1px solid #ddd;">イメージ</th>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">r = 1</td>
<td style="padding:8px; border:1px solid #ddd;">完全な正の相関</td>
<td style="padding:8px; border:1px solid #ddd;">全点が右上がりの直線上</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">0.7 ≤ r < 1</td>
<td style="padding:8px; border:1px solid #ddd;">強い正の相関</td>
<td style="padding:8px; border:1px solid #ddd;">右上がりの傾向が明確</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">0.4 ≤ r < 0.7</td>
<td style="padding:8px; border:1px solid #ddd;">中程度の正の相関</td>
<td style="padding:8px; border:1px solid #ddd;">右上がり傾向あり</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">0.2 ≤ r < 0.4</td>
<td style="padding:8px; border:1px solid #ddd;">弱い正の相関</td>
<td style="padding:8px; border:1px solid #ddd;">やや右上がり</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">−0.2 < r < 0.2</td>
<td style="padding:8px; border:1px solid #ddd;">ほぼ相関なし</td>
<td style="padding:8px; border:1px solid #ddd;">まとまりがない</td>
</tr>
<tr>
<td style="padding:8px; border:1px solid #ddd;">r = −1</td>
<td style="padding:8px; border:1px solid #ddd;">完全な負の相関</td>
<td style="padding:8px; border:1px solid #ddd;">全点が右下がりの直線上</td>
</tr>
</table>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 相関係数の性質</div>
1. <strong>−1 ≤ r ≤ 1</strong> の範囲を取る<br>
2. <strong>単位に依存しない</strong>（cmをmに変えてもrは同じ）<br>
3. <strong>直線的な関係のみ</strong>を測る（曲線的な関係は検出できない場合がある）<br>
4. xとyを入れ替えてもrは同じ
</div>

<h3>⚠️ 相関と因果の違い</h3>

<p>統計学で<strong>最も重要な注意点</strong>のひとつです。</p>

<div class="visual-box">
<div class="visual-box-title">相関 ≠ 因果</div>
<table style="width:100%; border-collapse:collapse;">
<tr style="background:#ffebee;">
<td style="padding:12px; border:1px solid #ddd;">
<strong>❌ 間違い：</strong>「アイスの売上と溺死事故数に正の相関がある → アイスが溺死を引き起こす」
</td>
</tr>
<tr style="background:#e8f5e9;">
<td style="padding:12px; border:1px solid #ddd;">
<strong>✅ 正しい理解：</strong>「両方とも気温（第3の変数）の影響を受けている → 見かけ上の相関（疑似相関）」
</td>
</tr>
</table>
</div>

<div class="visual-box">
<div class="visual-box-title">疑似相関のしくみ</div>
<div style="text-align:center; padding:15px;">
<div style="display:inline-block; padding:10px 20px; background:#ffeb3b; border-radius:8px; font-weight:bold;">🌡️ 気温（交絡因子）</div>
<div style="margin:10px 0;">
<span style="font-size:1.5em;">↙</span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span style="font-size:1.5em;">↘</span>
</div>
<div style="display:flex; justify-content:center; gap:40px;">
<div style="padding:10px 20px; background:#bbdefb; border-radius:8px;">🍦 アイスの売上</div>
<div style="padding:10px 20px; background:#bbdefb; border-radius:8px;">🏊 溺死事故数</div>
</div>
<div style="margin-top:10px; font-size:0.9em; color:#666;">
← 見かけ上の相関（疑似相関）→
</div>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 覚えておこう</div>
<strong>「相関があるからといって因果関係があるとは限らない」</strong><br>
相関が見られる場合、以下の可能性を検討する必要があります：<br>
1. X → Y（XがYの原因）<br>
2. Y → X（YがXの原因）<br>
3. Z → X かつ Z → Y（第3の変数による疑似相関）<br>
4. 単なる偶然の一致
</div>

<div class="info-box success">
<div class="info-box-title">✅ まとめ</div>
<strong>箱ひげ図：</strong>五数要約（最小値、Q1、中央値、Q3、最大値）を視覚化。外れ値は点で表示。<br>
<strong>外れ値判定：</strong>Q1 − 1.5×IQR 未満 または Q3 + 1.5×IQR 超の値。<br>
<strong>散布図：</strong>2変数の関係を点の分布で表現。<br>
<strong>相関係数 r：</strong>−1〜1の範囲で直線的関係の強さと方向を示す。<br>
<strong>相関 ≠ 因果：</strong>疑似相関や交絡因子に注意が必要。
</div>
`,
            quiz: [
                {
                    id: "q105_1",
                    type: "choice",
                    question: "箱ひげ図において、Q1 = 20、Q3 = 50 のとき、上側の外れ値と判定される基準は？",
                    options: [
                        "50より大きい値",
                        "80より大きい値",
                        "95より大きい値",
                        "100より大きい値"
                    ],
                    answer: 2,
                    explanation: "IQR = Q3 − Q1 = 50 − 20 = 30。上側の外れ値の基準は Q3 + 1.5 × IQR = 50 + 1.5 × 30 = 50 + 45 = 95。したがって、95より大きい値が外れ値と判定されます。"
                },
                {
                    id: "q105_2",
                    type: "choice",
                    question: "ピアソンの相関係数 r の取りうる範囲として正しいものはどれですか？",
                    options: [
                        "0 ≤ r ≤ 1",
                        "−1 ≤ r ≤ 1",
                        "−∞ < r < ∞",
                        "0 < r < 1"
                    ],
                    answer: 1,
                    explanation: "ピアソンの積率相関係数は −1 以上 1 以下の値を取ります。r = 1 は完全な正の相関、r = −1 は完全な負の相関、r = 0 は（直線的な）相関なしを意味します。"
                },
                {
                    id: "q105_3",
                    type: "choice",
                    question: "「アイスの売上と水難事故件数に正の相関がある」ことから言えることとして、最も適切なものはどれですか？",
                    options: [
                        "アイスの売上が水難事故を引き起こしている",
                        "水難事故がアイスの売上を増やしている",
                        "気温などの第3の変数が両方に影響している可能性がある",
                        "この2つの変数には因果関係がある"
                    ],
                    answer: 2,
                    explanation: "相関関係があっても因果関係があるとは限りません。この例では、気温という第3の変数（交絡因子）が両方に影響を与えているため、見かけ上の相関（疑似相関）が生じています。「相関≠因果」は統計学の重要な原則です。"
                },
                {
                    id: "q105_4",
                    type: "fill",
                    question: "箱ひげ図の外れ値判定で使用する基準は「Q3 + ？ × IQR」です。？に入る数値を答えてください。",
                    answer: "1.5",
                    explanation: "外れ値の判定基準は、上側が Q3 + 1.5 × IQR、下側が Q1 − 1.5 × IQR です。この1.5という係数は、正規分布の場合にデータの約99.3%がこの範囲に含まれることから設定されたものです。"
                },
                {
                    id: "q105_5",
                    type: "choice",
                    question: "相関係数について正しい記述はどれですか？",
                    options: [
                        "相関係数は曲線的な関係も正しく測定できる",
                        "相関係数はデータの単位に依存する",
                        "相関係数が0であれば、2変数は完全に独立である",
                        "相関係数はxとyを入れ替えても同じ値になる"
                    ],
                    answer: 3,
                    explanation: "ピアソンの相関係数は、xとyを入れ替えても同じ値になります（対称性）。他の選択肢について：相関係数は直線的な関係のみを測定します。単位に依存しません（標準化されているため）。相関係数が0でも非線形の関係がある場合があるため、独立とは限りません。"
                }
            ]
        }
    ]
};
