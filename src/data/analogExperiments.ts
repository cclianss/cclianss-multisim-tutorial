export interface AnalogExperiment {
  id: string;
  title: string;
  description: string;
  components: string[];
  circuitImage: string;
  theory: string;
  steps: string[];
  expectedResults: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const analogExperiments: AnalogExperiment[] = [
  {
    id: 'rc-circuit',
    title: 'RC充放电电路',
    description: '学习RC电路的充放电过程，观察电容电压的变化规律，理解时间常数的概念',
    components: ['直流电源 DC_POWER (5V)', '电阻器 R (10kΩ)', '电容器 C (10μF)', '示波器 Oscilloscope', '单刀单掷开关 SPST'],
    circuitImage: 'https://aka.doubaocdn.com/s/3Wjr1wWmlc',
    theory: 'RC电路是由电阻R和电容C组成的电路。当开关闭合时，电容开始充电，电压按指数规律上升；当开关断开时，电容通过电阻放电，电压按指数规律下降。时间常数τ = R×C，决定了充放电的快慢。充电时，电容电压达到约63.2%电源电压的时间等于一个时间常数。',
    steps: [
      '打开Multisim，创建新的空白电路文件',
      '点击Place Source，选择POWER_SOURCES中的DC_POWER，设置电压为5V',
      '点击Place Basic，选择RESISTOR，放置10kΩ电阻',
      '点击Place Basic，选择CAPACITOR，放置10μF电容',
      '点击Place Basic，选择SWITCH中的SPST开关',
      '点击Place Instrument，选择Oscilloscope示波器',
      '连接电路：电源正极 → 开关 → 电阻 → 电容 → 电源负极',
      '示波器通道A连接到电容两端',
      '双击开关，在Value选项卡设置快捷键为Space',
      '点击运行按钮开始仿真',
      '按Space键闭合开关，观察充电波形',
      '再次按Space键断开开关，观察放电波形',
      '测量时间常数，验证τ = RC = 0.1s'
    ],
    expectedResults: '充电时电容电压呈指数上升曲线，从0V逐渐接近5V。放电时电容电压呈指数下降曲线，从5V逐渐接近0V。时间常数约为0.1秒，即电容电压达到约3.16V的时间。示波器显示的波形为典型的RC充放电曲线。',
    difficulty: 'beginner'
  },
  {
    id: 'diode-rectifier',
    title: '二极管桥式整流电路',
    description: '构建桥式整流电路，观察交流到直流的转换过程，理解滤波电容的作用',
    components: ['交流电压源 AC_VOLTAGE (12V RMS, 50Hz)', '四个整流二极管 Diode (1N4001)', '滤波电容 Capacitor (100μF)', '负载电阻 Resistor (1kΩ)', '示波器 Oscilloscope', '万用表 Multimeter'],
    circuitImage: 'https://aka.doubaocdn.com/s/3Wjr1wWmlc',
    theory: '桥式整流电路由四个二极管组成电桥结构，可以将交流电转换为脉动直流电。在交流正半周，两个二极管导通；在负半周，另外两个二极管导通，使得负载电阻上始终有同一方向的电流流过。滤波电容并联在负载两端，可以减小输出电压的纹波，使输出更接近平滑直流。',
    steps: [
      '创建新电路，放置交流电压源，设置12V RMS，50Hz',
      '点击Place Diode，放置四个1N4001二极管',
      '按桥式结构连接二极管：D1阳极接交流正，D2阳极接交流负',
      'D1阴极和D2阴极连接在一起作为输出正极',
      'D3阴极接交流正，D4阴极接交流负',
      'D3阳极和D4阳极连接在一起作为输出负极',
      '放置1kΩ负载电阻，连接在输出正负极之间',
      '示波器通道A测量交流输入，通道B测量输出',
      '运行仿真，观察无滤波时的输出波形',
      '放置100μF电解电容，并联在负载电阻两端',
      '注意电解电容的极性，正极接输出正极',
      '再次运行仿真，观察滤波后的输出波形',
      '用万用表测量输出电压的平均值'
    ],
    expectedResults: '无滤波电容时，输出为全波整流的脉动直流，电压在0到约16.9V之间波动。添加滤波电容后，纹波显著减小，输出电压接近平滑直流，平均值约为12V左右。电容值越大，纹波越小，但体积和成本也会增加。',
    difficulty: 'intermediate'
  }
];
