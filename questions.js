const questionsData = [
  {
    id: 1,
    title: "第1問：直方体の面・辺・頂点の数",
    description: "直方体（ちょくほうたい）の基本的なつくりについて答えましょう。",
    svg: `<svg width="200" height="150" viewBox="0 0 200 150">
            <rect x="40" y="60" width="80" height="60" fill="#E3F2FD" stroke="#1E88E5" stroke-width="2"/>
            <polygon points="40,60 70,30 150,30 120,60" fill="#BBDEFB" stroke="#1E88E5" stroke-width="2"/>
            <polygon points="120,60 150,30 150,90 120,120" fill="#90CAF9" stroke="#1E88E5" stroke-width="2"/>
          </svg>`,
    subQuestions: [
      { id: "1_1", text: "直方体には、面はいくつありますか。", type: "number", answer: "6", unit: "つ" },
      { id: "1_2", text: "直方体には、辺はいくつありますか。", type: "number", answer: "12", unit: "本" },
      { id: "1_3", text: "直方体には、頂点（かど）はいくつありますか。", type: "number", answer: "8", unit: "つ" }
    ]
  },
  {
    id: 2,
    title: "第2問：直方体と立方体のちがい",
    description: "直方体と立方体は、それぞれどんな形の面で囲まれているか答えましょう。",
    svg: `<svg width="250" height="120" viewBox="0 0 250 120">
            <g transform="translate(10, 20)">
              <rect x="20" y="30" width="60" height="40" fill="#F3E5F5" stroke="#8E24AA" stroke-width="2"/>
              <polygon points="20,30 40,10 100,10 80,30" fill="#E1BEE7" stroke="#8E24AA" stroke-width="2"/>
              <polygon points="80,30 100,10 100,50 80,70" fill="#CE93D8" stroke="#8E24AA" stroke-width="2"/>
              <text x="45" y="90" font-size="12" font-weight="bold">直方体</text>
            </g>
            <g transform="translate(140, 20)">
              <rect x="20" y="20" width="50" height="50" fill="#E8F5E9" stroke="#43A047" stroke-width="2"/>
              <polygon points="20,20 40,0 90,0 70,20" fill="#C8E6C9" stroke="#43A047" stroke-width="2"/>
              <polygon points="70,20 90,0 90,50 70,70" fill="#A5D6A7" stroke="#43A047" stroke-width="2"/>
              <text x="40" y="90" font-size="12" font-weight="bold">立方体</text>
            </g>
          </svg>`,
    subQuestions: [
      { id: "2_1", text: "直方体は、どんな形の面で囲まれていますか。", type: "select", options: ["長方形だけ、または長方形と正方形", "正方形だけ", "三角形と長方形"], answer: "長方形だけ、または長方形と正方形", unit: "" },
      { id: "2_2", text: "立方体は、どんな形の面で囲まれていますか。", type: "select", options: ["長方形だけ", "長方形と正方形", "正方形だけ"], answer: "正方形だけ", unit: "" }
    ]
  },
  {
    id: 3,
    title: "第3問：辺の長さ",
    description: "たて3cm、横5cm、高さ4cmの直方体について答えましょう。",
    svg: `<svg width="200" height="150" viewBox="0 0 200 150">
            <rect x="50" y="60" width="80" height="50" fill="none" stroke="#333" stroke-width="2"/>
            <polygon points="50,60 80,30 160,30 130,60" fill="none" stroke="#333" stroke-width="2"/>
            <polygon points="130,60 160,30 160,80 130,110" fill="none" stroke="#333" stroke-width="2"/>
            <text x="80" y="130" font-size="14" font-weight="bold">横: 5cm</text>
            <text x="0" y="90" font-size="14" font-weight="bold">高さ: 4cm</text>
            <text x="140" y="100" font-size="14" font-weight="bold">たて: 3cm</text>
          </svg>`,
    subQuestions: [
      { id: "3_1", text: "長さが5cmの辺は全部で何本ありますか。", type: "number", answer: "4", unit: "本" },
      { id: "3_2", text: "長さが4cmの辺は全部で何本ありますか。", type: "number", answer: "4", unit: "本" }
    ]
  },
  {
    id: 4,
    title: "第4問：面と面の平行と垂直",
    description: "右の直方体について答えましょう。",
    svg: `<svg width="180" height="140" viewBox="0 0 180 140">
            <rect x="30" y="60" width="80" height="50" fill="none" stroke="#E65100" stroke-width="2"/>
            <polygon points="30,60 60,30 140,30 110,60" fill="#FFE0B2" stroke="#E65100" stroke-width="2"/>
            <polygon points="110,60 140,30 140,80 110,110" fill="none" stroke="#E65100" stroke-width="2"/>
            <text x="75" y="50" font-size="14" font-weight="bold" fill="#E65100">あ</text>
          </svg>`,
    subQuestions: [
      { id: "4_1", text: "面(あ)に平行な面（向かい合った面）はいくつありますか。", type: "number", answer: "1", unit: "つ" },
      { id: "4_2", text: "面(あ)に垂直な面（となり合った面）はいくつありますか。", type: "number", answer: "4", unit: "つ" }
    ]
  },
  {
    id: 5,
    title: "第5問：面と辺の垂直",
    description: "直方体の面と辺について答えましょう。",
    svg: `<svg width="180" height="140" viewBox="0 0 180 140">
            <rect x="30" y="60" width="80" height="50" fill="none" stroke="#333" stroke-width="2"/>
            <polygon points="30,60 60,30 140,30 110,60" fill="#B3E5FC" stroke="#333" stroke-width="2"/>
            <polygon points="110,60 140,30 140,80 110,110" fill="none" stroke="#333" stroke-width="2"/>
            <text x="70" y="50" font-size="14" font-weight="bold">青い面</text>
          </svg>`,
    subQuestions: [
      { id: "5_1", text: "青い面に垂直な辺（青い面につきささるような辺）はいくつありますか。", type: "number", answer: "4", unit: "本" },
      { id: "5_2", text: "青い面に平行な辺はいくつありますか。", type: "number", answer: "4", unit: "本" }
    ]
  },
  {
    id: 6,
    title: "第6問：辺と辺の平行と垂直",
    description: "直方体ABCD-EFGHについて答えましょう。赤い辺ABをもとに考えます。",
    svg: `<svg width="180" height="140" viewBox="0 0 180 140">
            <rect x="30" y="60" width="80" height="50" fill="none" stroke="#333" stroke-width="2"/>
            <polygon points="30,60 60,30 140,30 110,60" fill="none" stroke="#333" stroke-width="2"/>
            <polygon points="110,60 140,30 140,80 110,110" fill="none" stroke="#333" stroke-width="2"/>
            <line x1="30" y1="60" x2="110" y2="60" stroke="#D32F2F" stroke-width="4"/>
            <text x="20" y="55" font-size="12">A</text><text x="115" y="55" font-size="12">B</text>
            <text x="145" y="30" font-size="12">C</text><text x="50" y="25" font-size="12">D</text>
            <text x="20" y="120" font-size="12">E</text><text x="115" y="120" font-size="12">F</text>
            <text x="145" y="90" font-size="12">G</text><text x="50" y="75" font-size="12">H</text>
          </svg>`,
    subQuestions: [
      { id: "6_1", text: "辺ABに平行な辺はいくつありますか。", type: "number", answer: "3", unit: "本" },
      { id: "6_2", text: "辺ABに垂直に交わる辺はいくつありますか。", type: "number", answer: "4", unit: "本" }
    ]
  },
  {
    id: 7,
    title: "第7問：見取図（みとりず）",
    description: "全体の形がわかるようにかいた図を「見取図」といいます。",
    svg: `<svg width="150" height="150" viewBox="0 0 150 150">
            <rect x="30" y="60" width="60" height="50" fill="none" stroke="#333" stroke-width="2"/>
            <polygon points="30,60 50,40 110,40 90,60" fill="none" stroke="#333" stroke-width="2"/>
            <polygon points="90,60 110,40 110,90 90,110" fill="none" stroke="#333" stroke-width="2"/>
            <line x1="30" y1="110" x2="50" y2="90" stroke="#E91E63" stroke-dasharray="4" stroke-width="2"/>
            <line x1="50" y1="90" x2="110" y2="90" stroke="#E91E63" stroke-dasharray="4" stroke-width="2"/>
            <line x1="50" y1="90" x2="50" y2="40" stroke="#E91E63" stroke-dasharray="4" stroke-width="2"/>
          </svg>`,
    subQuestions: [
      { id: "7_1", text: "見取図をかくとき、うら側にかくれて見えない辺（ピンク色の線）は、どのような線でかきますか。", type: "select", options: ["実線（普通の線）", "点線（てんせん）", "波線（なみせん）"], answer: "点線（てんせん）", unit: "" },
      { id: "7_2", text: "直方体の見取図で、見えない辺（点線）は全部で何本かく必要がありますか。", type: "number", answer: "3", unit: "本" }
    ]
  },
  {
    id: 8,
    title: "第8問：空間の点の位置",
    description: "頂点Eをもとにして、空間の点の位置を (横, たて, 高さ) で表します。",
    svg: `<svg width="220" height="160" viewBox="0 0 220 160">
            <rect x="40" y="70" width="80" height="40" fill="none" stroke="#333" stroke-width="2"/>
            <polygon points="40,70 60,40 140,40 120,70" fill="none" stroke="#333" stroke-width="2"/>
            <polygon points="120,70 140,40 140,80 120,110" fill="none" stroke="#333" stroke-width="2"/>
            <line x1="40" y1="110" x2="60" y2="80" stroke="#999" stroke-dasharray="4"/>
            <line x1="60" y1="80" x2="140" y2="80" stroke="#999" stroke-dasharray="4"/>
            <line x1="60" y1="80" x2="60" y2="40" stroke="#999" stroke-dasharray="4"/>
            <text x="30" y="65" font-size="12">A</text><text x="110" y="65" font-size="12">B</text>
            <text x="145" y="35" font-size="12">C</text><text x="50" y="35" font-size="12">D</text>
            <text x="25" y="120" font-size="14" font-weight="bold" fill="red">E</text><text x="110" y="120" font-size="12">F</text>
            <text x="145" y="90" font-size="12">G</text><text x="50" y="90" font-size="12">H</text>
            <text x="70" y="125" font-size="10">横:5cm</text>
            <text x="5" y="95" font-size="10">高さ:4cm</text>
            <text x="125" y="110" font-size="10">たて:3cm</text>
          </svg>`,
    subQuestions: [
      { id: "8_1", text: "頂点Aの位置は (横0, たて0, 高さ4) です。頂点Cの位置はどう表しますか。", type: "select", options: ["(横5, たて3, 高さ4)", "(横5, たて0, 高さ4)", "(横0, たて3, 高さ4)"], answer: "(横5, たて3, 高さ4)", unit: "" },
      { id: "8_2", text: "頂点Gの位置はどう表しますか。", type: "select", options: ["(横5, たて3, 高さ0)", "(横5, たて3, 高さ4)", "(横0, たて3, 高さ0)"], answer: "(横5, たて3, 高さ0)", unit: "" }
    ]
  },
  {
    id: 9,
    title: "第9問：展開図（てんかいず）と平行な面",
    description: "直方体の展開図を組み立てて箱をつくります。",
    svg: `<svg width="220" height="160" viewBox="0 0 220 160">
            <rect x="80" y="20" width="40" height="30" fill="#E8F5E9" stroke="#388E3C" stroke-width="1.5"/>
            <rect x="80" y="50" width="40" height="50" fill="#C8E6C9" stroke="#388E3C" stroke-width="1.5"/>
            <rect x="40" y="50" width="40" height="50" fill="#A5D6A7" stroke="#388E3C" stroke-width="1.5"/>
            <rect x="120" y="50" width="40" height="50" fill="#81C784" stroke="#388E3C" stroke-width="1.5"/>
            <rect x="160" y="50" width="40" height="50" fill="#66BB6A" stroke="#388E3C" stroke-width="1.5"/>
            <rect x="80" y="100" width="40" height="30" fill="#E8F5E9" stroke="#388E3C" stroke-width="1.5"/>
            <text x="95" y="40" font-size="14" font-weight="bold">あ</text>
            <text x="55" y="80" font-size="14" font-weight="bold">い</text>
            <text x="95" y="80" font-size="14" font-weight="bold">う</text>
            <text x="135" y="80" font-size="14" font-weight="bold">え</text>
            <text x="175" y="80" font-size="14" font-weight="bold">お</text>
            <text x="95" y="120" font-size="14" font-weight="bold">か</text>
          </svg>`,
    subQuestions: [
      { id: "9_1", text: "組み立てたとき、面(あ)と向かい合う（平行になる）面はどれですか。", type: "select", options: ["う", "え", "か"], answer: "か", unit: "" },
      { id: "9_2", text: "組み立てたとき、面(い)と向かい合う（平行になる）面はどれですか。", type: "select", options: ["う", "え", "お"], answer: "え", unit: "" }
    ]
  },
  {
    id: 10,
    title: "第10問：正しい展開図を見つける",
    description: "アとイの展開図のうち、組み立てると立方体になるのはどちらか考えましょう。",
    svg: `<svg width="240" height="120" viewBox="0 0 240 120">
            <g transform="translate(10, 20)">
              <text x="0" y="10" font-size="12" font-weight="bold">ア</text>
              <rect x="20" y="20" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="40" y="20" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="60" y="20" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="80" y="20" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="40" y="0" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="40" y="40" width="20" height="20" fill="#FFF" stroke="#333"/>
            </g>
            <g transform="translate(130, 20)">
              <text x="0" y="10" font-size="12" font-weight="bold">イ</text>
              <rect x="20" y="20" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="40" y="20" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="60" y="20" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="80" y="20" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="20" y="0" width="20" height="20" fill="#FFF" stroke="#333"/>
              <rect x="20" y="40" width="20" height="20" fill="#FFF" stroke="#333"/>
            </g>
          </svg>`,
    subQuestions: [
      { id: "10_1", text: "組み立てて、面が重ならずに立方体の箱ができるのはどちらですか。", type: "select", options: ["ア", "イ"], answer: "ア", unit: "" }
    ]
  }
];