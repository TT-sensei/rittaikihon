const questionsData = [
  {
    id: 1,
    title: "第1問：立体のなかま分け",
    description: "次のア〜オの立体で、直方体はどれですか。また、立方体はどれですか。（複数の場合はすべて選びましょう）",
    svg: `<svg width="250" height="100" viewBox="0 0 250 100">
            <text x="10" y="20" font-size="14" font-weight="bold">ア: 円柱</text>
            <text x="70" y="20" font-size="14" font-weight="bold">イ: 立方体</text>
            <text x="140" y="20" font-size="14" font-weight="bold">ウ: 三角柱</text>
            <text x="20" y="70" font-size="14" font-weight="bold">エ: 直方体</text>
            <text x="100" y="70" font-size="14" font-weight="bold">オ: 直方体</text>
          </svg>`,
    subQuestions: [
      { id: "1_1", text: "直方体はどれですか。", type: "select", options: ["ア, ウ", "イ", "エ, オ", "イ, エ, オ"], answer: "エ, オ", unit: "" },
      { id: "1_2", text: "立方体はどれですか。", type: "select", options: ["ア", "イ", "ウ", "エ"], answer: "イ", unit: "" }
    ]
  },
  {
    id: 2,
    title: "第2問：ひごとねん土で作る立体",
    description: "5cmの竹ひごを1辺とし、3gのねん土を1つの頂点として、立方体の形をつくります。",
    svg: `<svg width="150" height="150" viewBox="0 0 150 150">
            <rect x="30" y="50" width="60" height="60" fill="none" stroke="#333" stroke-width="2"/>
            <rect x="50" y="30" width="60" height="60" fill="none" stroke="#333" stroke-dasharray="4" stroke-width="2"/>
            <line x1="30" y1="50" x2="50" y2="30" stroke="#333" stroke-width="2"/>
            <line x1="90" y1="50" x2="110" y2="30" stroke="#333" stroke-width="2"/>
            <line x1="90" y1="110" x2="110" y2="90" stroke="#333" stroke-width="2"/>
            <line x1="30" y1="110" x2="50" y2="90" stroke="#333" stroke-dasharray="4" stroke-width="2"/>
            <circle cx="30" cy="50" r="4" fill="#E91E63"/><circle cx="90" cy="50" r="4" fill="#E91E63"/>
            <circle cx="90" cy="110" r="4" fill="#E91E63"/><circle cx="30" cy="110" r="4" fill="#E91E63"/>
            <circle cx="50" cy="30" r="4" fill="#E91E63"/><circle cx="110" cy="30" r="4" fill="#E91E63"/>
            <circle cx="110" cy="90" r="4" fill="#E91E63"/><circle cx="50" cy="90" r="4" fill="#E91E63"/>
          </svg>`,
    subQuestions: [
      { id: "2_1", text: "必要な竹ひごの長さは、あわせて何cmですか。", type: "number", answer: "60", unit: "cm" },
      { id: "2_2", text: "必要なねん土の重さは、あわせて何gですか。", type: "number", answer: "24", unit: "g" }
    ]
  },
  {
    id: 3,
    title: "第3問：直方体の辺と面積",
    description: "1つの頂点に集まっている3つの辺の長さが4cm, 5cm, 8cmの直方体があります。",
    svg: `<svg width="200" height="150" viewBox="0 0 200 150">
            <rect x="40" y="60" width="80" height="50" fill="#E0F7FA" stroke="#00838F" stroke-width="2"/>
            <polygon points="40,60 70,30 150,30 120,60" fill="#B2EBF2" stroke="#00838F" stroke-width="2"/>
            <polygon points="120,60 150,30 150,80 120,110" fill="#80DEEA" stroke="#00838F" stroke-width="2"/>
            <text x="70" y="125" font-size="14" font-weight="bold">8cm</text>
            <text x="5" y="90" font-size="14" font-weight="bold">5cm</text>
            <text x="135" y="105" font-size="14" font-weight="bold">4cm</text>
          </svg>`,
    subQuestions: [
      { id: "3_1", text: "すべての辺の長さを合計すると何cmになりますか。", type: "number", answer: "68", unit: "cm" },
      { id: "3_2", text: "すべての面の面積を合計すると何cm²になりますか。", type: "number", answer: "184", unit: "cm²" }
    ]
  },
  {
    id: 4,
    title: "第4問：箱にかけるリボン",
    description: "立方体の箱に十字にリボンをかけ、結び目に20cm使うと、使ったリボンの長さは212cmになりました。",
    svg: `<svg width="150" height="150" viewBox="0 0 150 150">
            <rect x="40" y="50" width="60" height="60" fill="#FFF3E0" stroke="#E65100" stroke-width="2"/>
            <polygon points="40,50 60,30 120,30 100,50" fill="#FFE0B2" stroke="#E65100" stroke-width="2"/>
            <polygon points="100,50 120,30 120,90 100,110" fill="#FFCC80" stroke="#E65100" stroke-width="2"/>
            <line x1="70" y1="50" x2="70" y2="110" stroke="#D32F2F" stroke-width="4"/>
            <line x1="40" y1="80" x2="100" y2="80" stroke="#D32F2F" stroke-width="4"/>
            <line x1="70" y1="50" x2="90" y2="30" stroke="#D32F2F" stroke-width="4"/>
            <line x1="100" y1="80" x2="120" y2="60" stroke="#D32F2F" stroke-width="4"/>
          </svg>`,
    subQuestions: [
      { id: "4_1", text: "この立方体の箱の1辺の長さは何cmですか。", type: "number", answer: "24", unit: "cm" }
    ]
  },
  {
    id: 5,
    title: "第5問：空間にある点の位置",
    description: "頂点Eをもとにして、頂点Cの位置は (横8cm, たて6cm, 高さ4cm) と表します。",
    svg: `<svg width="220" height="150" viewBox="0 0 220 150">
            <rect x="40" y="60" width="80" height="40" fill="none" stroke="#333" stroke-width="2"/>
            <polygon points="40,60 60,30 140,30 120,60" fill="none" stroke="#333" stroke-width="2"/>
            <polygon points="120,60 140,30 140,70 120,100" fill="none" stroke="#333" stroke-width="2"/>
            <line x1="40" y1="100" x2="60" y2="70" stroke="#999" stroke-dasharray="4"/>
            <line x1="60" y1="70" x2="140" y2="70" stroke="#999" stroke-dasharray="4"/>
            <line x1="60" y1="70" x2="60" y2="30" stroke="#999" stroke-dasharray="4"/>
            <text x="30" y="55" font-size="12" font-weight="bold">A</text><text x="110" y="55" font-size="12" font-weight="bold">B</text>
            <text x="145" y="25" font-size="12" font-weight="bold">C</text><text x="50" y="25" font-size="12" font-weight="bold">D</text>
            <text x="30" y="110" font-size="12" font-weight="bold" fill="red">E</text><text x="110" y="110" font-size="12" font-weight="bold">F</text>
            <text x="145" y="80" font-size="12" font-weight="bold">G</text><text x="50" y="80" font-size="12" font-weight="bold">H</text>
          </svg>`,
    subQuestions: [
      { id: "5_1", text: "点Aの位置を表しましょう。", type: "select", options: ["(横0, たて0, 高さ4)", "(横8, たて0, 高さ4)", "(横0, たて6, 高さ4)"], answer: "(横0, たて0, 高さ4)", unit: "" },
      { id: "5_2", text: "点Gの位置を表しましょう。", type: "select", options: ["(横8, たて6, 高さ4)", "(横8, たて6, 高さ0)", "(横0, たて6, 高さ0)"], answer: "(横8, たて6, 高さ0)", unit: "" }
    ]
  },
  {
    id: 6,
    title: "第6問：直方体の展開図",
    description: "直方体の展開図を組み立てたときについて答えましょう。",
    svg: `<svg width="220" height="150" viewBox="0 0 220 150">
            <rect x="70" y="20" width="40" height="30" fill="#E8F5E9" stroke="#388E3C" stroke-width="1.5"/>
            <rect x="70" y="50" width="40" height="50" fill="#C8E6C9" stroke="#388E3C" stroke-width="1.5"/>
            <rect x="30" y="50" width="40" height="50" fill="#A5D6A7" stroke="#388E3C" stroke-width="1.5"/>
            <rect x="110" y="50" width="40" height="50" fill="#81C784" stroke="#388E3C" stroke-width="1.5"/>
            <rect x="150" y="50" width="40" height="50" fill="#66BB6A" stroke="#388E3C" stroke-width="1.5"/>
            <rect x="70" y="100" width="40" height="30" fill="#E8F5E9" stroke="#388E3C" stroke-width="1.5"/>
            <text x="85" y="40" font-size="14" font-weight="bold">あ</text><text x="45" y="75" font-size="14" font-weight="bold">い</text>
            <text x="85" y="75" font-size="14" font-weight="bold">う</text><text x="125" y="75" font-size="14" font-weight="bold">え</text>
            <text x="165" y="75" font-size="14" font-weight="bold">お</text><text x="85" y="120" font-size="14" font-weight="bold">か</text>
          </svg>`,
    subQuestions: [
      { id: "6_1", text: "面(あ)と平行になる面はどれですか。", type: "select", options: ["い", "う", "え", "か"], answer: "か", unit: "" },
      { id: "6_2", text: "面(い)と平行になる面はどれですか。", type: "select", options: ["う", "え", "お", "か"], answer: "え", unit: "" }
    ]
  },
  {
    id: 7,
    title: "第7問：辺と辺の平行と垂直",
    description: "直方体ABCD-EFGHについて答えましょう。",
    svg: `<svg width="180" height="140" viewBox="0 0 180 140">
            <rect x="30" y="50" width="80" height="50" fill="none" stroke="#2196F3" stroke-width="2"/>
            <polygon points="30,50 60,20 140,20 110,50" fill="none" stroke="#2196F3" stroke-width="2"/>
            <polygon points="110,50 140,20 140,70 110,100" fill="none" stroke="#2196F3" stroke-width="2"/>
            <line x1="30" y1="100" x2="60" y2="70" stroke="#90CAF9" stroke-dasharray="4"/>
            <line x1="60" y1="70" x2="140" y2="70" stroke="#90CAF9" stroke-dasharray="4"/>
            <line x1="60" y1="70" x2="60" y2="20" stroke="#90CAF9" stroke-dasharray="4"/>
            <text x="20" y="45" font-size="12">A</text><text x="100" y="45" font-size="12">B</text>
            <text x="145" y="20" font-size="12">C</text><text x="50" y="15" font-size="12">D</text>
            <text x="20" y="110" font-size="12">E</text><text x="100" y="110" font-size="12">F</text>
            <text x="145" y="80" font-size="12">G</text><text x="50" y="65" font-size="12">H</text>
          </svg>`,
    subQuestions: [
      { id: "7_1", text: "辺AEに平行な辺はいくつありますか。", type: "number", answer: "3", unit: "つ" },
      { id: "7_2", text: "辺ABに垂直に交わる辺はいくつありますか。", type: "number", answer: "4", unit: "つ" }
    ]
  },
  {
    id: 8,
    title: "第8問：平面上の点の位置",
    description: "方眼上の点の位置を (横, たて) で表します。点Aを (0, 0) とします。",
    svg: `<svg width="200" height="180" viewBox="0 0 200 180">
            <g stroke="#E0E0E0" stroke-width="1">
              <line x1="20" y1="20" x2="20" y2="140"/> <line x1="40" y1="20" x2="40" y2="140"/>
              <line x1="60" y1="20" x2="60" y2="140"/> <line x1="80" y1="20" x2="80" y2="140"/>
              <line x1="100" y1="20" x2="100" y2="140"/> <line x1="120" y1="20" x2="120" y2="140"/>
              <line x1="140" y1="20" x2="140" y2="140"/> <line x1="160" y1="20" x2="160" y2="140"/>
              <line x1="20" y1="20" x2="160" y2="20"/> <line x1="20" y1="40" x2="160" y2="40"/>
              <line x1="20" y1="60" x2="160" y2="60"/> <line x1="20" y1="80" x2="160" y2="80"/>
              <line x1="20" y1="100" x2="160" y2="100"/> <line x1="20" y1="120" x2="160" y2="120"/>
              <line x1="20" y1="140" x2="160" y2="140"/>
            </g>
            <text x="10" y="150" font-size="12" font-weight="bold">A</text>
            <circle cx="60" cy="80" r="4" fill="#1565C0"/> <text x="65" y="75" font-size="12" font-weight="bold">B</text>
            <circle cx="120" cy="60" r="4" fill="#1565C0"/> <text x="125" y="55" font-size="12" font-weight="bold">C</text>
          </svg>`,
    subQuestions: [
      { id: "8_1", text: "点Bの位置は (横2, たて3) です。点Cの位置を表しましょう。", type: "select", options: ["(横4, たて5)", "(横5, たて4)", "(横6, たて3)"], answer: "(横5, たて4)", unit: "" }
    ]
  },
  {
    id: 9,
    title: "第9問：直方体の面と面の垂直",
    description: "右の図のような直方体があります。",
    svg: `<svg width="150" height="120" viewBox="0 0 150 120">
            <rect x="30" y="40" width="70" height="50" fill="#FFF9C4" stroke="#FBC02D" stroke-width="2"/>
            <polygon points="30,40 50,20 120,20 100,40" fill="#FFF59D" stroke="#FBC02D" stroke-width="2"/>
            <polygon points="100,40 120,20 120,70 100,90" fill="#FFF176" stroke="#FBC02D" stroke-width="2"/>
            <text x="60" y="70" font-size="14" font-weight="bold">あ</text>
            <text x="70" y="35" font-size="14" font-weight="bold">い</text>
            <text x="105" y="60" font-size="14" font-weight="bold">う</text>
          </svg>`,
    subQuestions: [
      { id: "9_1", text: "面(あ)に垂直な面はいくつありますか。", type: "number", answer: "4", unit: "つ" }
    ]
  },
  {
    id: 10,
    title: "第10問：見取図の完成",
    description: "直方体の見取図をかくとき、見えない辺は点線でかきます。",
    svg: `<svg width="150" height="150" viewBox="0 0 150 150">
            <rect x="30" y="50" width="60" height="60" fill="none" stroke="#333" stroke-width="2"/>
            <polygon points="30,50 50,30 110,30 90,50" fill="none" stroke="#333" stroke-width="2"/>
            <polygon points="90,50 110,30 110,90 90,110" fill="none" stroke="#333" stroke-width="2"/>
            </svg>`,
   subQuestions: [
      { id: "10_1", text: "見えない辺（点線）は全部で何本かく必要がありますか。", type: "number", answer: "3", unit: "本" }
    ]
  },
          {
    id: 11,
    title: "第11問：直方体の面・辺・頂点",
    description: "直方体や立方体の基本的なつくりについて答えましょう。",
    svg: `<svg width="250" height="120" viewBox="0 0 250 120">
            <rect x="20" y="40" width="70" height="60" fill="none" stroke="#673AB7" stroke-width="2"/>
            <polygon points="20,40 40,20 90,20 70,40" fill="none" stroke="#673AB7" stroke-width="2"/>
            <polygon points="90,40 70,40 70,100 90,100" fill="none" stroke="#673AB7" stroke-width="2"/>
            <rect x="140" y="40" width="60" height="60" fill="none" stroke="#673AB7" stroke-width="2"/>
            <polygon points="140,40 160,20 220,20 200,40" fill="none" stroke="#673AB7" stroke-width="2"/>
            <polygon points="220,40 200,40 200,100 220,100" fill="none" stroke="#673AB7" stroke-width="2"/>
            <text x="35" y="115" font-size="12" font-weight="bold" fill="#333">直方体</text>
            <text x="160" y="115" font-size="12" font-weight="bold" fill="#333">立方体</text>
          </svg>`,
    subQuestions: [
      { id: "11_1", text: "直方体や立方体に、面はいくつありますか。", type: "number", answer: "6", unit: "つ" },
      { id: "11_2", text: "直方体や立方体に、辺はいくつありますか。", type: "number", answer: "12", unit: "本" },
      { id: "11_3", text: "直方体や立方体に、頂点はいくつありますか。", type: "number", answer: "8", unit: "つ" }
    ]
  },
  {
    id: 12,
    title: "第12問：平面上の点の位置(2)",
    description: "右の図で、点Aの位置は (横2, たて1) です。",
    svg: `<svg width="200" height="160" viewBox="0 0 200 160">
            <g stroke="#E0E0E0" stroke-width="1">
              <line x1="30" y1="20" x2="30" y2="120"/> <line x1="60" y1="20" x2="60" y2="120"/>
              <line x1="90" y1="20" x2="90" y2="120"/> <line x1="120" y1="20" x2="120" y2="120"/>
              <line x1="150" y1="20" x2="150" y2="120"/> <line x1="180" y1="20" x2="180" y2="120"/>
              <line x1="30" y1="20" x2="180" y2="20"/> <line x1="30" y1="45" x2="180" y2="45"/>
              <line x1="30" y1="70" x2="180" y2="70"/> <line x1="30" y1="95" x2="180" y2="95"/>
              <line x1="30" y1="120" x2="180" y2="120"/>
            </g>
            <text x="15" y="130" font-size="12">0</text>
            <circle cx="90" cy="95" r="4" fill="#D32F2F"/> <text x="95" y="90" font-size="12" font-weight="bold" fill="#D32F2F">A</text>
            <circle cx="150" cy="45" r="4" fill="#1976D2"/> <text x="155" y="40" font-size="12" font-weight="bold" fill="#1976D2">B</text>
            <circle cx="60" cy="70" r="4" fill="#388E3C"/> <text x="65" y="65" font-size="12" font-weight="bold" fill="#388E3C">C</text>
          </svg>`,
    subQuestions: [
      { id: "12_1", text: "点Bの位置を表しましょう。", type: "select", options: ["(横4, たて3)", "(横3, たて4)", "(横5, たて2)"], answer: "(横4, たて3)", unit: "" },
      { id: "12_2", text: "(横1, たて2) の位置にある点はどれですか。", type: "select", options: ["A", "B", "C"], answer: "C", unit: "" }
    ]
  },
  {
    id: 13,
    title: "第13問：直方体のすべての辺の長さ",
    description: "たてが3cm、横が5cm、高さが4cmの直方体があります。",
    svg: `<svg width="180" height="150" viewBox="0 0 180 150">
            <rect x="50" y="60" width="80" height="50" fill="#E8EAF6" stroke="#3F51B5" stroke-width="2"/>
            <polygon points="50,60 80,30 160,30 130,60" fill="#C5CAE9" stroke="#3F51B5" stroke-width="2"/>
            <polygon points="130,60 160,30 160,80 130,110" fill="#9FA8DA" stroke="#3F51B5" stroke-width="2"/>
            <text x="85" y="130" font-size="14" font-weight="bold">横: 5cm</text>
            <text x="2" y="90" font-size="14" font-weight="bold">高さ: 4cm</text>
            <text x="140" y="105" font-size="14" font-weight="bold">たて: 3cm</text>
          </svg>`,
    subQuestions: [
      { id: "13_1", text: "長さが4cmの辺は全部で何本ありますか。", type: "number", answer: "4", unit: "本" },
      { id: "13_2", text: "すべての辺の長さをたすと何cmになりますか。", type: "number", answer: "48", unit: "cm" }
    ]
  },
  {
    id: 14,
    title: "第14問：立方体になる展開図",
    description: "次のア〜ウの図の中で、組み立てると立方体になるものはどれですか。",
    svg: `<svg width="250" height="150" viewBox="0 0 250 150">
            <g transform="translate(10, 30)">
              <text x="25" y="-10" font-size="12" font-weight="bold">ア</text>
              <rect x="20" y="0" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="0" y="20" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="20" y="20" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="40" y="20" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="20" y="40" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="20" y="60" width="20" height="20" fill="#FFF" stroke="#333"/>
            </g>
            <g transform="translate(90, 30)">
              <text x="25" y="-10" font-size="12" font-weight="bold">イ</text>
              <rect x="0" y="20" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="20" y="20" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="40" y="20" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="60" y="20" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="20" y="0" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="40" y="0" width="20" height="20" fill="#FFF" stroke="#333"/>
            </g>
            <g transform="translate(170, 30)">
              <text x="25" y="-10" font-size="12" font-weight="bold">ウ</text>
              <rect x="0" y="0" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="20" y="0" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="20" y="20" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="40" y="20" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="40" y="40" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="60" y="40" width="20" height="20" fill="#FFF" stroke="#333"/>
            </g>
          </svg>`,
    subQuestions: [
      { id: "14_1", text: "組み立てて立方体になるものをすべて選びましょう。", type: "select", options: ["ア", "ウ", "アとイ", "アとウ"], answer: "アとウ", unit: "" }
    ]
  },
  {
    id: 15,
    title: "第15問：直方体の平行な面の数",
    description: "直方体の面について答えましょう。",
    svg: `<svg width="150" height="120" viewBox="0 0 150 120">
            <rect x="30" y="40" width="70" height="50" fill="#FFF3E0" stroke="#EF6C00" stroke-width="2"/>
            <polygon points="30,40 50,20 120,20 100,40" fill="#FFE0B2" stroke="#EF6C00" stroke-width="2"/>
            <polygon points="100,40 120,20 120,70 100,90" fill="#FFCC80" stroke="#EF6C00" stroke-width="2"/>
          </svg>`,
    subQuestions: [
      { id: "15_1", text: "直方体には、平行な面の組はいくつありますか。", type: "number", answer: "3", unit: "組" }
    ]
  },
  {
    id: 16,
    title: "第16問：展開図を組み立てたときの辺",
    description: "下の展開図を組み立てて直方体を作ります。",
    svg: `<svg width="220" height="160" viewBox="0 0 220 160">
            <rect x="80" y="20" width="60" height="30" fill="none" stroke="#333" stroke-width="1.5"/>
            <rect x="80" y="50" width="60" height="50" fill="none" stroke="#333" stroke-width="1.5"/>
            <rect x="50" y="50" width="30" height="50" fill="none" stroke="#333" stroke-width="1.5"/>
            <rect x="140" y="50" width="30" height="50" fill="none" stroke="#333" stroke-width="1.5"/>
            <rect x="170" y="50" width="60" height="50" fill="none" stroke="#333" stroke-width="1.5"/>
            <rect x="80" y="100" width="60" height="30" fill="none" stroke="#333" stroke-width="1.5"/>
            <text x="82" y="15" font-size="12" font-weight="bold">A</text>
            <text x="135" y="15" font-size="12" font-weight="bold">B</text>
            <text x="175" y="45" font-size="12" font-weight="bold">C</text>
            <text x="225" y="45" font-size="12" font-weight="bold">D</text>
          </svg>`,
    subQuestions: [
      { id: "16_1", text: "組み立てたとき、辺ABとぴったり重なるのはどの辺ですか。", type: "select", options: ["辺CD", "辺Aの左側の辺", "辺Cの上の辺"], answer: "辺CD", unit: "" }
    ]
  },
  {
    id: 17,
    title: "第17問：空間にある点の位置(2)",
    description: "箱の中にあるボールの中心の位置を、頂点Oをもとにして (横, たて, 高さ) で表します。",
    svg: `<svg width="200" height="150" viewBox="0 0 200 150">
            <line x1="40" y1="120" x2="160" y2="120" stroke="#333" stroke-width="2"/> <line x1="40" y1="120" x2="40" y2="20" stroke="#333" stroke-width="2"/> <line x1="40" y1="120" x2="80" y2="80" stroke="#333" stroke-width="2"/> <text x="25" y="130" font-size="12" font-weight="bold">O</text>
            <text x="165" y="125" font-size="12">横</text>
            <text x="25" y="15" font-size="12">高さ</text>
            <text x="85" y="80" font-size="12">たて</text>
            <circle cx="100" cy="70" r="10" fill="#E91E63"/>
            <line x1="100" y1="70" x2="100" y2="100" stroke="#999" stroke-dasharray="4"/>
            <line x1="100" y1="100" x2="140" y2="120" stroke="#999" stroke-dasharray="4"/>
            <line x1="100" y1="100" x2="60" y2="80" stroke="#999" stroke-dasharray="4"/>
            <text x="135" y="135" font-size="12" font-weight="bold" fill="#000">3</text>
            <text x="50" y="75" font-size="12" font-weight="bold" fill="#000">2</text>
            <text x="90" y="65" font-size="12" font-weight="bold" fill="#000">4</text>
          </svg>`,
    subQuestions: [
      { id: "17_1", text: "ボールの位置を表しましょう。", type: "select", options: ["(横3, たて2, 高さ4)", "(横4, たて3, 高さ2)", "(横2, たて4, 高さ3)"], answer: "(横3, たて2, 高さ4)", unit: "" }
    ]
  },
  {
    id: 18,
    title: "第18問：面と辺の垂直",
    description: "直方体ABCD-EFGHについて答えましょう。",
    svg: `<svg width="180" height="140" viewBox="0 0 180 140">
            <rect x="30" y="50" width="80" height="50" fill="none" stroke="#009688" stroke-width="2"/>
            <polygon points="30,50 60,20 140,20 110,50" fill="#E0F2F1" stroke="#009688" stroke-width="2"/>
            <polygon points="110,50 140,20 140,70 110,100" fill="none" stroke="#009688" stroke-width="2"/>
            <line x1="30" y1="100" x2="60" y2="70" stroke="#80CBC4" stroke-dasharray="4"/>
            <line x1="60" y1="70" x2="140" y2="70" stroke="#80CBC4" stroke-dasharray="4"/>
            <line x1="60" y1="70" x2="60" y2="20" stroke="#80CBC4" stroke-dasharray="4"/>
            <text x="20" y="45" font-size="12">A</text><text x="100" y="45" font-size="12">B</text>
            <text x="145" y="20" font-size="12">C</text><text x="50" y="15" font-size="12">D</text>
            <text x="20" y="110" font-size="12">E</text><text x="100" y="110" font-size="12">F</text>
            <text x="145" y="80" font-size="12">G</text><text x="50" y="65" font-size="12">H</text>
          </svg>`,
    subQuestions: [
      { id: "18_1", text: "上の面（面ABCD）に垂直な辺はいくつありますか。", type: "number", answer: "4", unit: "本" }
    ]
  },
  {
    id: 19,
    title: "第19問：立方体の見取図",
    description: "1辺が4cmの立方体の見取図をかきました。",
    svg: `<svg width="150" height="150" viewBox="0 0 150 150">
            <rect x="40" y="60" width="50" height="50" fill="none" stroke="#333" stroke-width="2"/>
            <polygon points="40,60 60,40 110,40 90,60" fill="none" stroke="#333" stroke-width="2"/>
            <polygon points="90,60 110,40 110,90 90,110" fill="none" stroke="#333" stroke-width="2"/>
            <line x1="40" y1="110" x2="60" y2="90" stroke="#333" stroke-dasharray="4" stroke-width="1.5"/>
            <line x1="60" y1="90" x2="110" y2="90" stroke="#333" stroke-dasharray="4" stroke-width="1.5"/>
            <line x1="60" y1="90" x2="60" y2="40" stroke="#333" stroke-dasharray="4" stroke-width="1.5"/>
          </svg>`,
    subQuestions: [
      { id: "19_1", text: "この見取図で、見えている面はいくつありますか。", type: "number", answer: "3", unit: "つ" },
      { id: "19_2", text: "この見取図で、見えない（点線でつながっている）頂点はいくつありますか。", type: "number", answer: "1", unit: "つ" }
    ]
  },
  {
    id: 20,
    title: "第20問：展開図から垂直な面を見つける",
    description: "下の展開図を組み立てて直方体をつくります。",
    svg: `<svg width="220" height="150" viewBox="0 0 220 150">
            <rect x="70" y="20" width="40" height="30" fill="#E1F5FE" stroke="#03A9F4" stroke-width="1.5"/>
            <rect x="70" y="50" width="40" height="50" fill="#B3E5FC" stroke="#03A9F4" stroke-width="1.5"/>
            <rect x="30" y="50" width="40" height="50" fill="#81D4FA" stroke="#03A9F4" stroke-width="1.5"/>
            <rect x="110" y="50" width="40" height="50" fill="#4FC3F7" stroke="#03A9F4" stroke-width="1.5"/>
            <rect x="150" y="50" width="40" height="50" fill="#29B6F6" stroke="#03A9F4" stroke-width="1.5"/>
            <rect x="70" y="100" width="40" height="30" fill="#E1F5FE" stroke="#03A9F4" stroke-width="1.5"/>
            <text x="85" y="40" font-size="14" font-weight="bold">A</text><text x="45" y="75" font-size="14" font-weight="bold">B</text>
            <text x="85" y="75" font-size="14" font-weight="bold">C</text><text x="125" y="75" font-size="14" font-weight="bold">D</text>
            <text x="165" y="75" font-size="14" font-weight="bold">E</text><text x="85" y="120" font-size="14" font-weight="bold">F</text>
          </svg>`,
    subQuestions: [
      { id: "20_1", text: "面Cに垂直になる面はいくつありますか。", type: "number", answer: "4", unit: "つ" }
    ]
  },
  ];