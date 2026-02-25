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
  }
];
