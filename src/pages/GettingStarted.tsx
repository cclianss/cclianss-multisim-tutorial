import Card from '../components/Card';
import StepItem from '../components/StepItem';
import { BookOpen, Monitor, MousePointer, Cpu, Battery, Zap, Waves, Sliders } from 'lucide-react';

export default function GettingStarted() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-serif text-gray-900 mb-4">
            入门指南
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            从零开始学习Multisim，从安装到基本操作，一步步带你入门
          </p>
        </div>

        {/* Multisim简介 */}
        <Card className="mb-8">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">什么是Multisim？</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <p className="text-gray-700 leading-relaxed">
                Multisim是美国国家仪器公司(NI)推出的专业电路仿真软件，广泛应用于电子工程教学与研发领域。
                它基于SPICE仿真引擎，支持从原理图绘制、元件建模到电路仿真的全流程操作。
                <br /><br />
                使用Multisim，工程师和学生可以在虚拟环境中搭建、仿真和调试电路，从而减少电路的设计成本和研发周期。
                软件提供了丰富的虚拟电子器件和仪器仪表，让电路理论通过可视化手段呈现。
              </p>
              <img 
                src="https://aka.doubaocdn.com/s/1GCv1wWmlc" 
                alt="Multisim作用" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </Card>

        {/* 软件安装 */}
        <Card className="mb-8">
          <div className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-primary-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">软件安装</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">系统要求</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Windows 10/11 或 macOS 10.15+
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    4GB RAM 或更高
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    5GB 可用硬盘空间
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Intel i3 或同等处理器
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">安装步骤</h3>
                <div className="space-y-3">
                  <StepItem number={1} content="访问NI官网，下载Multisim学生版或教育版" />
                  <StepItem number={2} content="运行安装程序，按照向导提示完成安装" />
                  <StepItem number={3} content="激活软件（需要NI账号或许可证）" />
                  <StepItem number={4} content="首次启动，选择初始设置和工作区" />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* 界面介绍 */}
        <Card className="mb-8">
          <div className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-accent-100 rounded-lg">
                <Monitor className="h-6 w-6 text-accent-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">界面介绍</h2>
            </div>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Multisim 14.0 主界面</h3>
            <div className="mb-8">
              <img 
                src="https://aka.doubaocdn.com/s/VIAh1wWmlc" 
                alt="Multisim 14.0主界面" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">设计窗口</h3>
            <div className="mb-8">
              <img 
                src="https://aka.doubaocdn.com/s/IipK1wWmlc" 
                alt="设计窗口" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">菜单栏</h3>
            <div className="mb-8">
              <img 
                src="https://aka.doubaocdn.com/s/Tolc1wWmlc" 
                alt="菜单栏" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">工具栏</h3>
            <div className="mb-8">
              <img 
                src="https://aka.doubaocdn.com/s/lpJs1wWmlc" 
                alt="工具栏" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">元器件栏和仪器仪表栏</h3>
            <div className="mb-8">
              <img 
                src="https://aka.doubaocdn.com/s/49bA1wWmlc" 
                alt="元器件栏和仪器仪表栏" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <Cpu className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-blue-900">菜单栏</h3>
                <p className="text-sm text-blue-700">文件、编辑、视图、放置、仿真、工具等菜单</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <Battery className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-semibold text-green-900">元件库</h3>
                <p className="text-sm text-green-700">电源、无源元件、半导体、测量仪器等</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <Sliders className="h-8 w-8 text-orange-600 mb-2" />
                <h3 className="font-semibold text-orange-900">工具栏</h3>
                <p className="text-sm text-orange-700">常用操作按钮，运行、暂停、新建等</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <Zap className="h-8 w-8 text-purple-600 mb-2" />
                <h3 className="font-semibold text-purple-900">工作区</h3>
                <p className="text-sm text-purple-700">放置元件、连线的主要工作区域</p>
              </div>
            </div>
          </div>
        </Card>

        {/* 元器件介绍 */}
        <Card className="mb-8">
          <div className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-green-100 rounded-lg">
                <Cpu className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">常用元器件</h2>
            </div>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">基本器件 - 放置步骤</h3>
            <p className="text-gray-600 mb-4">1）点击"Place Basic"（放置基本器件）</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/5GUG1wWmlc" 
                alt="放置基本器件" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 mb-4">2）选择恰当的器件和参数</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/UrE11wWmlc" 
                alt="选择器件和参数" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 mb-4">3）此时"Select a Component"窗口关闭，左单击鼠标将器件图标放置在电路图图纸的恰当位置上。</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/UvG61wWmlc" 
                alt="放置器件" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">电解电容</h3>
            <p className="text-gray-600 mb-4">电解电容是具有"极性"的电容。使用的时候，电解电容的正极应与电源的"+"极相连，负极应与电源的"-"极相连。</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/dWxd1wWmlc" 
                alt="电解电容" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">开关</h3>
            <p className="text-gray-600 mb-4">选择SPST（单刀单掷开关）</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/xFtC1wWmlc" 
                alt="开关" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 mb-4">使用鼠标或快捷键，可以让开关在"打开"和"闭合"两个状态之间切换。</p>
            <p className="text-gray-600 mb-4"><strong>修改快捷键：</strong>左双击开关的图标，在"SPST"窗口中点击"Value"选项卡，在"Key for toggle"后的下拉菜单中选择快捷键。</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/rHyC1wWmlc" 
                alt="修改开关快捷键" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">电位器</h3>
            <p className="text-gray-600 mb-4">通过调节电位器，可以改变滑动端和两个固定端之间的电阻。</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/USfn1wWmlc" 
                alt="电位器" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 mb-4"><strong>调节电位器-第一种方法：</strong>将鼠标悬停在电位器上，会出现滑杆。用鼠标拖动滑杆，便可改变电位器滑动端与两个固定端之间的电阻阻值。</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/Dbyq1wWmlc" 
                alt="调节电位器方法一" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 mb-4"><strong>调节电位器-第二种方法：</strong>如果电位器的图标中出现"Key=A"，意味着按动"A"键就可以按照固定的增量增加滑动端与下固定端之间的电阻阻值占总阻值的百分比；而按动"A"键+Shift键就可以减小这个百分比。</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/yglM1wWmlc" 
                alt="调节电位器方法二" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">二极管和稳压二极管</h3>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/UCaH1wWmlc" 
                alt="二极管" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 mb-4">1）点击"Place Diode"（放置二极管）</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/spma1wWmlc" 
                alt="放置二极管" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 mb-4">2）在弹出的"Select a Component"窗口中，点击"Diode"（二极管）或"ZENER"（稳压二极管），并选择恰当的型号，最后点击"OK"</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/ZHoN1wWmlc" 
                alt="选择二极管型号" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">晶体管</h3>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/1e7L1wWmlc" 
                alt="晶体管" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 mb-4">1）点击"Place Transistor"（放置晶体管）</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/tKHr1wWmlc" 
                alt="放置晶体管" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 mb-4">2）在弹出的"Select a Component"窗口中，选择恰当的器件和型号，最后点击"OK"。</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/EyPV1wWmlc" 
                alt="选择晶体管型号" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">集成运算放大器</h3>
            <p className="text-gray-600 mb-4">集成运算放大器简称运放，是一种高增益、高输入阻抗、低输出阻抗的直接耦合放大器。</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/Vamd1wWmlc" 
                alt="集成运算放大器" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 mb-4">1）点击"Place Analog"（放置模拟元器件）</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/V5PC1wWmlc" 
                alt="放置模拟元器件" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 mb-4">2）在弹出的"Select a Component"窗口中，点击"OPAMP"，并选择恰当的器件（这里我们以LM324AD为例），最后点击"OK"。</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/UfpJ1wWmlc" 
                alt="选择运放" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">交、直流电压源和"地"</h3>
            <p className="text-gray-600 mb-4">1）点击"Place Source"（放置电源）</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/IQnV1wWmlc" 
                alt="放置电源" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 mb-4"><strong>直流电压源：</strong>选择"POWER_SOURCES"，点击"DC_POWER"，最后点击"OK"</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/TmQv1wWmlc" 
                alt="直流电压源" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 mb-4">此时"Select a Component"窗口关闭，左单击鼠标将直流电压源图标放置在电路图图纸的恰当位置上。</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/f1Ts1wWmlc" 
                alt="放置直流电压源" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 mb-4"><strong>修改电压值：</strong>左双击直流电压源图标，在弹出的"DC_POWER"窗口中点击"Value"选项卡，在"Voltage(V)："后填写新的电压值，最后点击"OK"</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/auSW1wWmlc" 
                alt="修改电压值" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 mb-4"><strong>交流电压源：</strong>选择"SIGNAL_VOLTAGE_SOURCES"，点击"AC_VOLTAGE"，最后点击"OK"。</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/aBFH1wWmlc" 
                alt="交流电压源" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </Card>

        {/* 基本操作 */}
        <Card className="mb-8">
          <div className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <MousePointer className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">基本操作</h2>
            </div>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">元器件的旋转</h3>
            <p className="text-gray-600 mb-4">选中元器件后，按R键可以顺时针旋转90度。</p>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">修改元器件的标志符</h3>
            <p className="text-gray-600 mb-4">双击元器件图标，在弹出的窗口中可以修改标志符和参数。</p>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">删除元器件</h3>
            <p className="text-gray-600 mb-4">选中元器件后，按Delete键或右键选择Delete删除。</p>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">器件的连接</h3>
            <p className="text-gray-600 mb-4">点击元件引脚开始连线，移动鼠标到目标引脚或节点，点击完成连接。</p>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">删除导线</h3>
            <p className="text-gray-600 mb-4">选中导线后，按Delete键删除。</p>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">网络名称 (Net Name) - 整理混乱的电路图</h3>
            <p className="text-gray-600 mb-4"><strong>电路图 未使用网络名称：</strong></p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/lS091wWmld" 
                alt="未使用网络名称的电路图" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 mb-4"><strong>电路图 使用网络名称：</strong></p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/61lo1wWmld" 
                alt="使用网络名称的电路图" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 mb-4"><strong>net name 使用步骤：</strong></p>
            <p className="text-gray-600 mb-4">1. 找到元件，Ctrl + J 添加节点，伸出来根线</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/EJ8x1wWmld" 
                alt="添加节点" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 mb-4">2. 鼠标左键双击这根线</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/hjxr1wWmld" 
                alt="双击导线" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 mb-4">3. net name 命名时的注意事项</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/1KUP1wWmld" 
                alt="命名注意事项" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 mb-4">4. 示波器的接口伸出来线 并 做相关命名</p>
            <div className="mb-6">
              <img 
                src="https://aka.doubaocdn.com/s/RPFg1wWmld" 
                alt="示波器接口命名" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600">连接完成，点击运行按钮，就可以在示波器上看到波形了。</p>
          </div>
        </Card>

        {/* 仪器仪表 */}
        <Card>
          <div className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Waves className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">仪器仪表</h2>
            </div>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">万用表</h3>
            <p className="text-gray-600 mb-4">测量电压、电流、电阻。可选择AC/DC模式。</p>
            <p className="text-gray-600 mb-4"><strong>万用表参数设置窗口：</strong></p>
            <div className="mb-8">
              <img 
                src="https://aka.doubaocdn.com/s/3Wjr1wWmlc" 
                alt="万用表" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">函数发生器</h3>
            <p className="text-gray-600 mb-4">产生正弦波、方波、三角波等信号源。</p>
            <p className="text-gray-600 mb-4"><strong>函数发生器设置窗口：</strong></p>
            <div className="mb-8">
              <img 
                src="https://aka.doubaocdn.com/s/uW9H1wWmlc" 
                alt="函数发生器" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-4">双踪示波器</h3>
            <p className="text-gray-600 mb-4">观察信号波形，测量频率、周期、幅度。</p>
            <p className="text-gray-600 mb-4"><strong>示波器的面板：</strong></p>
            <div className="mb-8">
              <img 
                src="https://aka.doubaocdn.com/s/3Wjr1wWmlc" 
                alt="示波器面板" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <p className="text-red-600 font-semibold mb-8">注意：使用示波器时，记得将探头连接到正确的测量点，并设置合适的时基和电压档位。</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
