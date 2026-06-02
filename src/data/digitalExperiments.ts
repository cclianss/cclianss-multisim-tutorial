export interface DigitalExperiment {
  id: string;
  title: string;
  description: string;
  components: string[];
  circuitImage: string;
  theory: string;
  truthTable?: string[][];
  steps: string[];
  expectedResults: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const digitalExperiments: DigitalExperiment[] = [
  {
    id: 'basic-gates',
    title: '基本逻辑门验证',
    description: '验证AND、OR、NOT、NAND、NOR、XOR等基本逻辑门的功能，理解布尔代数运算规则',
    components: ['逻辑门 AND, OR, NOT, NAND, NOR, XOR', '直流电源 Vcc (5V)', '接地符号 Ground', '输入开关 SPST x2', 'LED指示器 LED x6'],
    circuitImage: 'https://aka.doubaocdn.com/s/3Wjr1wWmlc',
    theory: '逻辑门是数字电路的基本构件，实现布尔逻辑运算。AND门：只有所有输入为1时输出才为1；OR门：任一输入为1输出即为1；NOT门：取反运算；NAND门是AND门的取反；NOR门是OR门的取反；XOR门：当两个输入不同时输出为1。这些基本门可以组合实现任意复杂的逻辑功能。',
    truthTable: [
      ['A', 'B', 'AND', 'OR', 'NAND', 'NOR', 'XOR'],
      ['0', '0', '0', '0', '1', '1', '0'],
      ['0', '1', '0', '1', '1', '0', '1'],
      ['1', '0', '0', '1', '1', '0', '1'],
      ['1', '1', '1', '1', '0', '0', '0']
    ],
    steps: [
      '打开Multisim，创建新电路',
      '点击Place TTL，选择AND2门（74LS08）',
      '选择OR2门（74LS32）、NOT门（74LS04）',
      '选择NAND2门（74LS00）、NOR2门（74LS02）、XOR2门（74LS86）',
      '放置两个SPST开关作为输入A和B',
      '连接Vcc(5V)和地',
      '将开关A和B连接到每个门的输入端',
      '每个门的输出端连接一个LED指示器',
      'LED的另一端接地',
      '运行仿真，依次测试四种输入组合：00、01、10、11',
      '记录每个门的输出状态',
      '验证是否符合标准真值表'
    ],
    expectedResults: '各逻辑门的输出完全符合标准真值表。AND门仅在A=1且B=1时输出1；OR门只要有一个输入为1就输出1；NOT门将输入取反；NAND是AND的取反；NOR是OR的取反；XOR在两输入不同时输出1。',
    difficulty: 'beginner'
  },
  {
    id: 'half-adder',
    title: '半加器电路',
    description: '使用基本逻辑门构建半加器，实现两个1位二进制数的相加，理解加法器的基本原理',
    components: ['XOR门 74LS86', 'AND门 74LS08', '输入开关 SPST x2', 'LED指示器 LED x2', '直流电源 Vcc (5V)', '接地符号 Ground'],
    circuitImage: 'https://aka.doubaocdn.com/s/3Wjr1wWmlc',
    theory: '半加器是最基本的加法电路，用于实现两个1位二进制数A和B的相加。它产生两个输出：和(S)与进位(C)。和输出由XOR门实现：S = A XOR B；进位输出由AND门实现：C = A AND B。半加器只能处理两个1位数相加，不考虑来自低位的进位输入。',
    truthTable: [
      ['A', 'B', 'S (和)', 'C (进位)'],
      ['0', '0', '0', '0'],
      ['0', '1', '1', '0'],
      ['1', '0', '1', '0'],
      ['1', '1', '0', '1']
    ],
    steps: [
      '创建新电路，放置一个XOR门（74LS86）',
      '放置一个AND门（74LS86）',
      '放置两个SPST开关作为输入A和B',
      '连接Vcc(5V)和地',
      '将输入A和B同时连接到XOR门和AND门的输入端',
      'XOR门的输出作为和(S)，连接到一个LED',
      'AND门的输出作为进位(C)，连接到另一个LED',
      'LED另一端接地',
      '运行仿真，依次测试四种输入组合',
      '记录和与进位的输出状态',
      '验证是否符合半加器真值表'
    ],
    expectedResults: '当A和B不同时，和S为1；当A和B都为1时，进位C为1。四种输入组合的输出完全符合半加器真值表。半加器成功实现了1位二进制加法。',
    difficulty: 'beginner'
  }
];
