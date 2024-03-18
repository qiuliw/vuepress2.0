<template><div><h1 id="javase" tabindex="-1"><a class="header-anchor" href="#javase"><span>JavaSE</span></a></h1>
<h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量"><span>常量</span></a></h2>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">SPRING</span> <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>static确保只有一份，final确保不可修改，这两同时修饰的变量称做常量</p>
</blockquote>
<p>常量池</p>
<p>Short、Int、Long：-128~127
Float、Double：没有缓存（常量池）</p>
<p>输入 Scanner</p>
<div class="language-JAVA line-numbers-mode" data-ext="JAVA" data-title="JAVA"><pre v-pre class="language-JAVA"><code>引入
import java.util.Scanner

创建对象
Scanner scan =new Scanner(System.in);

接受数据
scan.nextInt()，scan.nextDouble()，...

停止输入
scan.close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h2>
<p>静态初始化</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>arrayName<span class="token operator">=</span><span class="token keyword">new</span> type<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>element1<span class="token punctuation">,</span>element2<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
type<span class="token punctuation">[</span><span class="token punctuation">]</span> arrayname<span class="token operator">=</span><span class="token punctuation">{</span>element1<span class="token punctuation">,</span>element2<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>动态初始化</p>
<ul>
<li>
<p>arrayName=new typr[length]</p>
<p>整数类型默认值为 0，浮点类型默认值为 0.0，字符类型默认值为‘\u0000’布尔类型默认值为 fause，引用类型默认值为 null</p>
</li>
</ul>
<h2 id="变长形参" tabindex="-1"><a class="header-anchor" href="#变长形参"><span>变长形参</span></a></h2>
<p>如果在定义方法时，在最后一个形参的类型后增加三个点...，则表明该形参可以接收多个参数值，多个参数值被当成数组传入</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>修饰符 返回值类型 方法名（参数类型 参数，参数类型<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> 参数）<span class="token punctuation">{</span>
<span class="token comment">//方法体</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="this" tabindex="-1"><a class="header-anchor" href="#this"><span>this</span></a></h2>
<p>区分局部变量和成员变量</p>
<p>本质：代表方法调用者的地址值</p>
<h2 id="lambda" tabindex="-1"><a class="header-anchor" href="#lambda"><span>lambda</span></a></h2>
<p>lambda 可以用来简化匿名内部类的书写</p>
<p>lambda 表达式只能简化函数式接口的匿名内部类的写法</p>
<p>函数式接口：有且仅有一个抽象方法的接口叫做函数式接口，接口上方可以加 @FunctionalInterface 注释</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span><span class="token keyword">new</span> compar<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token annotation punctuation">@override</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> o1<span class="token punctuation">,</span><span class="token class-name">Intager</span> o2<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token number">01</span><span class="token operator">-</span><span class="token number">02</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token constant">ARRAYS</span><span class="token punctuation">.</span><span class="token function">SORT</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token class-name">Intefer</span> <span class="token number">01</span><span class="token punctuation">,</span><span class="token class-name">Intager</span> <span class="token number">02</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token number">01</span><span class="token operator">-</span><span class="token number">02</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="file" tabindex="-1"><a class="header-anchor" href="#file"><span>File</span></a></h2>
<p>File是java.io包下的类，代表与平台无关的文件和目录；</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>nowcoder<span class="token punctuation">.</span>chapter3<span class="token punctuation">.</span>part39</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * File
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IODemo1</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
<span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token comment">// 创建</span>
file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"C:/work/alpha/1.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
file<span class="token punctuation">.</span><span class="token function">createNewFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 删除</span>
<span class="token comment">//file.delete();</span>

<span class="token comment">// 改名</span>
<span class="token comment">//file.renameTo(new File("C:/work/alpha/2.txt"));</span>

<span class="token comment">// 判断</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"是否存在:"</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"是否文件:"</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"是否可读:"</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">canRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"是否可写:"</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">canWrite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"绝对路径:"</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">isAbsolute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 访问</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"文件名称:"</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"文件路径:"</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"绝对路径:"</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"上级目录:"</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"文件长度:"</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"修改时间:"</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">lastModified</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 目录操作</span>
file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"C:/work/alpha/a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
file<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">getParentFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 删除,改名,判断,访问方法对目录也适用.</span>

<span class="token comment">// 相对路径</span>
file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"abc.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
file<span class="token punctuation">.</span><span class="token function">createNewFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"文件路径:"</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"绝对路径:"</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"上级目录:"</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"上级目录:"</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">getAbsoluteFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类"><span>抽象类</span></a></h2>
<p>约束子类必须重写 <code v-pre>abstract</code></p>
<ol>
<li>抽象方法必须在抽象类中（抽象类不一定包括抽象方法）</li>
<li>子类必须重写抽象父类的抽象方法</li>
</ol>
<blockquote>
<p>模板模式：抽象类作为子类的通用模板，子类在抽象类的基础上进行扩展、改造，但子类总体上会保留抽象类的行为模式</p>
<p>abstract 只能修饰类和方法，它不能和 final 同时使用</p>
</blockquote>
<h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口"><span>接口</span></a></h2>
<p>接口不提供任何实现，接口内部定义的所有的方法都是抽象方法</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre v-pre class="language-cpp"><code><span class="token punctuation">[</span>修饰符<span class="token punctuation">]</span> interface 接口名 extends 父接口<span class="token number">1</span><span class="token punctuation">,</span>父接口<span class="token number">2</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>修饰符可以是 public，也可省略，默认为包访问级别</li>
<li>一个接口可以有多个直接接口，但接口只能继承于接口，不能继承于类</li>
</ol>
<p>Java8 运行在接口中定义默认方法和静态方法，这两类方法可以提供方法实现</p>
<h2 id="static-关键字" tabindex="-1"><a class="header-anchor" href="#static-关键字"><span>static 关键字</span></a></h2>
<p>含义</p>
<ul>
<li>static 修饰的成员是类的成员，该成员属于类，不属于单个对象</li>
</ul>
<p>修饰</p>
<ol>
<li>Java 类中可包含成员变量、方法、构造方法、初始化块、内部类；</li>
<li>其中，static 可以修饰的是成员变量、方法、初始化块、内部类。·</li>
</ol>
<p>类变量</p>
<ol>
<li>以 static 修饰的成员变量叫类变量（静态变量）</li>
<li>类变量属于类，它随类的信息存储在方法区（1 份），并不随对象存储在堆区；</li>
<li>类变量可以通过类名来访问，也可以通过对象名来访问，建议通过类名访问它</li>
</ol>
<p>类方法</p>
<ol>
<li>以 static 修饰的方法叫类方法（静态方法）；</li>
<li>类方法属于类，可以通过类名来访问，也可以通过对象名来访问，建议通过类名访问</li>
</ol>
<p>静态块</p>
<ol>
<li>以 static 修饰的初始化块叫静态初始化块</li>
<li>静态块属于类，在类加载的时候被隐式调用一次，之后便再也不会被调用了。</li>
</ol>
<p>重要规则</p>
<ul>
<li>
<p>类成员不能访问实例成员</p>
<p>原因：可能出现类成员已初始化完成，但实例成员还未初始化的情况</p>
</li>
</ul>
<h2 id="final-关键字" tabindex="-1"><a class="header-anchor" href="#final-关键字"><span>final 关键字</span></a></h2>
<p><strong>final 关键字可用于修饰类、方法、变量；</strong></p>
<ul>
<li>final 关键字修饰的类不可以被继承</li>
<li>final 关键字修饰的方法不可以被重写</li>
<li>final 修饰的变量，一旦获得了初始值，就不可以被修改</li>
</ul>
<p><strong>final 修饰成员变量</strong></p>
<ul>
<li>类的变量：可在声明时指定初始值，也可在静态初始化块中指定初始值；</li>
<li>实例变量：可在声明时指定初始值，也可在普通初始化块或构造方法中指定初始值；</li>
</ul>
<p><strong>final 修饰局部变量</strong></p>
<ul>
<li>可在声明变量时指定初始值，也可在后面的代码中指定初始值</li>
</ul>
<p><strong>final 修饰引用类型变量</strong></p>
<ol>
<li>引用类型变量，保存的仅仅是一个引用(地址)</li>
<li>final 只保证这个引用类型变量所引用的地址不会发生改变，但这个对象的内容可以发生改变</li>
</ol>
<p><strong>final 变量的宏替换原则</strong>
满足下述三个条件的变量相当于直接量</p>
<ol>
<li>使用 final 关键字修饰</li>
<li>在声明该变量的时候置指定了初始值</li>
<li>该初始值可以在编译时被确定</li>
</ol>
<p>编译时，编译器会把程序中所有用到该变量的地方直接替换成它的值，这个过程叫“宏替换”</p>
<h2 id="内部类" tabindex="-1"><a class="header-anchor" href="#内部类"><span>内部类</span></a></h2>
<p>在类内部定义的类叫做内部类，而包含了内部类的类叫做外部类</p>
<div class="language-x86asm line-numbers-mode" data-ext="x86asm" data-title="x86asm"><pre v-pre class="language-x86asm"><code>class A{
	class B { }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>作用</p>
<ol>
<li>内部类提供了一种新的封装方式，可以将内部类隐藏于外部类内部</li>
<li>便于访问外部类成员，如成员内部类可以直接访问外部类私有成员</li>
<li>对于那些仅需使用一次的类，采用内部类（匿名内部类）更方便</li>
</ol>
<p>成员内部类</p>
<ol>
<li>定义在外部类内部，与其他成员平级</li>
<li>可以被任意访问修饰符修饰，有四种访问级别</li>
<li>被 static 修饰的成员内部类叫静态内部类，否则叫非静态内部类</li>
</ol>
<p>局部内部类</p>
<ul>
<li>在方法内定义的内部类叫做局部内部类，它仅仅在这个方法内部有效</li>
</ul>
<p>匿名内部类</p>
<ul>
<li>定义在方法调用之时，它没有类名，适合创建只是用一次的类</li>
</ul>
<p>访问</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>外部类<span class="token punctuation">.</span>内部类 实例名<span class="token operator">=</span><span class="token keyword">new</span> 外部类<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">new</span> 内部类<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="枚举类" tabindex="-1"><a class="header-anchor" href="#枚举类"><span>枚举类</span></a></h2>
<p>规范​</p>
<ol>
<li>枚举类是特殊的类</li>
<li>枚举类可以定义成员变量</li>
<li>枚举类默认继承于 java.lang.Enum 类</li>
<li>非抽象枚举类默认使用 final 修饰</li>
<li>枚举类的构造方法默认使用 private 修饰，并且只能使用 private 修饰；</li>
<li>枚举类的所有实例，必须在类中第一行显示列出，它们默认是public static final的</li>
</ol>
<p>定义</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">enum</span> <span class="token class-name">Gender</span><span class="token punctuation">{</span>
	<span class="token constant">MALE</span><span class="token punctuation">,</span><span class="token constant">FEMALE</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>    <span class="token keyword">enum</span> <span class="token class-name">Gender</span> <span class="token keyword">implements</span> <span class="token class-name">Printer</span><span class="token punctuation">{</span>
<span class="token constant">MALME</span><span class="token punctuation">,</span><span class="token constant">FEMALE</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">enum</span>  <span class="token class-name">Genders</span> <span class="token keyword">implements</span> <span class="token class-name">Printer</span><span class="token punctuation">{</span>
<span class="token constant">AGE</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span>  <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token constant">SEX</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>抽象枚举类</p>
<ol>
<li>可以在枚举类中定义抽象方法，此时枚举类为抽象类，但不能用 abstract 修饰该类;</li>
<li>枚举类需要显示创建枚举值，所以每个枚举值都需要实现抽象方法，否则会编译报错。</li>
<li>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code> <span class="token keyword">enum</span> <span class="token class-name">Gender</span><span class="token punctuation">{</span>
 	<span class="token function">MALE</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
 	<span class="token function">FEMALE</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
 	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="方法区" tabindex="-1"><a class="header-anchor" href="#方法区"><span>方法区</span></a></h2>
<h2 id="垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#垃圾回收机制"><span>垃圾回收机制</span></a></h2>
<p>当程序创建引用类型数据时，JVM会在堆内存中为之分配一块内存区。</p>
<p>当这份数据不再被任何变量引用时，它就成了垃圾，对应的内存区就等待垃圾回收器的回收。</p>
<h2 id="finalize-方法" tabindex="-1"><a class="header-anchor" href="#finalize-方法"><span>finalize 方法</span></a></h2>
<p>定义在 <code v-pre>java.lang.Object</code> 类中：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>protect <span class="token keyword">void</span> <span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> thorows <span class="token class-name">Throwable</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>用于清理对象占用的资源</li>
<li>垃圾回收器在回收某对象的内存之前，会先调用它的 finalize 方法；</li>
<li>针对某一对象，垃圾回收器最多只会调用它的 finalize 方法一次</li>
</ol>
<p>内存状态</p>
<p>强制垃圾回收</p>
<ol>
<li>System.gc();</li>
<li>Runtime.getRuntime().gc();</li>
</ol>
<p>通知垃圾回收器进行垃圾回收，但是是否回收以及回收时机依然由垃圾回收器决定</p>
<h1 id="java-常用-api" tabindex="-1"><a class="header-anchor" href="#java-常用-api"><span>Java 常用 API</span></a></h1>
<p>Application Programming Interface ，应用程序接口，应用程序规范</p>
<h2 id="系统相关类" tabindex="-1"><a class="header-anchor" href="#系统相关类"><span>系统相关类</span></a></h2>
<p>System 类</p>
<ol>
<li>System 类代表当前 Java 程序的运行平台；</li>
<li>System 类不允许被实例化，它所提供的变量和方法全是<strong>静态的</strong>；</li>
<li>System 类提供了代表标准输入，标准输出、错误输出的静态变量；</li>
<li>System 类提供了访问环境变量、访问系统属性、加载文件、加载动态链接库等方法。</li>
</ol>
<p>Runtime 类</p>
<ol>
<li>Runtime 类代表 Java 程序的运行环境；</li>
<li>Runtime 类符合<strong>单例模式</strong>，我们只能通过 getRuntime()获得该类型的唯一实例；</li>
<li>Runtime 类提供了访问 JVM 相关信息的方法，如获取 CPU 数量、获取空闲内存数等。</li>
</ol>
<h2 id="用户输入" tabindex="-1"><a class="header-anchor" href="#用户输入"><span>用户输入</span></a></h2>
<p>main()的参数</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

命令：java 字节码文件 字符串<span class="token number">1</span> 字符串<span class="token number">2</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Scanner 类</p>
<p>Scanner 是一个文本扫描器</p>
</div></template>


