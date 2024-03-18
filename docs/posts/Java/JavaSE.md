# JavaSE

## 常量

```java
public static final int SPRING =1;
```

>static确保只有一份，final确保不可修改，这两同时修饰的变量称做常量

常量池

Short、Int、Long：-128~127
Float、Double：没有缓存（常量池）

输入 Scanner

```JAVA
引入
import java.util.Scanner

创建对象
Scanner scan =new Scanner(System.in);

接受数据
scan.nextInt()，scan.nextDouble()，...

停止输入
scan.close()
```


## 数组

静态初始化

```java
arrayName=new type[]{element1,element2,...}
type[] arrayname={element1,element2,...}
```

动态初始化

* arrayName=new typr[length]

  整数类型默认值为 0，浮点类型默认值为 0.0，字符类型默认值为‘\u0000’布尔类型默认值为 fause，引用类型默认值为 null

## 变长形参

如果在定义方法时，在最后一个形参的类型后增加三个点...，则表明该形参可以接收多个参数值，多个参数值被当成数组传入

```java
修饰符 返回值类型 方法名（参数类型 参数，参数类型... 参数）{
//方法体
}
```

## this

区分局部变量和成员变量

本质：代表方法调用者的地址值

## lambda

lambda 可以用来简化匿名内部类的书写

lambda 表达式只能简化函数式接口的匿名内部类的写法

函数式接口：有且仅有一个抽象方法的接口叫做函数式接口，接口上方可以加 @FunctionalInterface 注释

```java
Arrays.sort(arr,new compar<Integer>()){
	@override
	public int compare(Integer o1,Intager o2){
		return 01-02;
	}
}
```

```java
ARRAYS.SORT(arr,(Intefer 01,Intager 02)->{
return 01-02
```



## File

File是java.io包下的类，代表与平台无关的文件和目录；

```java
package com.nowcoder.chapter3.part39;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;

/**
 * File
 */
public class IODemo1{

    public static void main(String[] args) throws IOException {
File file = null;

// 创建
file = new File("C:/work/alpha/1.txt");
file.createNewFile();

// 删除
//file.delete();

// 改名
//file.renameTo(new File("C:/work/alpha/2.txt"));

// 判断
System.out.println("是否存在:" + file.exists());
System.out.println("是否文件:" + file.isFile());
System.out.println("是否可读:" + file.canRead());
System.out.println("是否可写:" + file.canWrite());
System.out.println("绝对路径:" + file.isAbsolute());
// 访问
System.out.println("文件名称:" + file.getName());
System.out.println("文件路径:" + file.getPath());
System.out.println("绝对路径:" + file.getAbsolutePath());
System.out.println("上级目录:" + file.getParent());
System.out.println("文件长度:" + file.length());
System.out.println("修改时间:" + file.lastModified());

// 目录操作
file = new File("C:/work/alpha/a");
file.mkdir();

System.out.println(Arrays.toString(file.listFiles()));
System.out.println(Arrays.toString(file.getParentFile().listFiles()));

// 删除,改名,判断,访问方法对目录也适用.

// 相对路径
file = new File("abc.txt");
file.createNewFile();

System.out.println("文件路径:" + file.getPath());
System.out.println("绝对路径:" + file.getAbsolutePath());
System.out.println("上级目录:" + file.getParent());
System.out.println("上级目录:" + file.getAbsoluteFile().getParent());
    }
}
```

## 抽象类

约束子类必须重写 `abstract`

1. 抽象方法必须在抽象类中（抽象类不一定包括抽象方法）
2. 子类必须重写抽象父类的抽象方法

> 模板模式：抽象类作为子类的通用模板，子类在抽象类的基础上进行扩展、改造，但子类总体上会保留抽象类的行为模式
>
> abstract 只能修饰类和方法，它不能和 final 同时使用
>

## 接口

接口不提供任何实现，接口内部定义的所有的方法都是抽象方法

```cpp
[修饰符] interface 接口名 extends 父接口1,父接口2,...()
```

1. 修饰符可以是 public，也可省略，默认为包访问级别
2. 一个接口可以有多个直接接口，但接口只能继承于接口，不能继承于类

Java8 运行在接口中定义默认方法和静态方法，这两类方法可以提供方法实现


## static 关键字

含义

* static 修饰的成员是类的成员，该成员属于类，不属于单个对象

修饰

1. Java 类中可包含成员变量、方法、构造方法、初始化块、内部类；
2. 其中，static 可以修饰的是成员变量、方法、初始化块、内部类。·

类变量

1. 以 static 修饰的成员变量叫类变量（静态变量）
2. 类变量属于类，它随类的信息存储在方法区（1 份），并不随对象存储在堆区；
3. 类变量可以通过类名来访问，也可以通过对象名来访问，建议通过类名访问它

类方法

1. 以 static 修饰的方法叫类方法（静态方法）；
2. 类方法属于类，可以通过类名来访问，也可以通过对象名来访问，建议通过类名访问

静态块

1. 以 static 修饰的初始化块叫静态初始化块
2. 静态块属于类，在类加载的时候被隐式调用一次，之后便再也不会被调用了。

重要规则

* 类成员不能访问实例成员

  原因：可能出现类成员已初始化完成，但实例成员还未初始化的情况

## final 关键字

**final 关键字可用于修饰类、方法、变量；**

* final 关键字修饰的类不可以被继承
* final 关键字修饰的方法不可以被重写
* final 修饰的变量，一旦获得了初始值，就不可以被修改

**final 修饰成员变量**

* 类的变量：可在声明时指定初始值，也可在静态初始化块中指定初始值；
* 实例变量：可在声明时指定初始值，也可在普通初始化块或构造方法中指定初始值；

**final 修饰局部变量**

* 可在声明变量时指定初始值，也可在后面的代码中指定初始值

**final 修饰引用类型变量**

1. 引用类型变量，保存的仅仅是一个引用(地址)
2. final 只保证这个引用类型变量所引用的地址不会发生改变，但这个对象的内容可以发生改变

**final 变量的宏替换原则**
满足下述三个条件的变量相当于直接量

1. 使用 final 关键字修饰
2. 在声明该变量的时候置指定了初始值
3. 该初始值可以在编译时被确定

编译时，编译器会把程序中所有用到该变量的地方直接替换成它的值，这个过程叫“宏替换”

## 内部类

在类内部定义的类叫做内部类，而包含了内部类的类叫做外部类

```x86asm
class A{
	class B { }
}
```

作用

1. 内部类提供了一种新的封装方式，可以将内部类隐藏于外部类内部
2. 便于访问外部类成员，如成员内部类可以直接访问外部类私有成员
3. 对于那些仅需使用一次的类，采用内部类（匿名内部类）更方便

成员内部类

1. 定义在外部类内部，与其他成员平级
2. 可以被任意访问修饰符修饰，有四种访问级别
3. 被 static 修饰的成员内部类叫静态内部类，否则叫非静态内部类

局部内部类

* 在方法内定义的内部类叫做局部内部类，它仅仅在这个方法内部有效

匿名内部类

* 定义在方法调用之时，它没有类名，适合创建只是用一次的类

访问

```java
外部类.内部类 实例名=new 外部类().new 内部类()
```

## 枚举类

规范​

1. 枚举类是特殊的类
2. 枚举类可以定义成员变量
3. 枚举类默认继承于 java.lang.Enum 类
4. 非抽象枚举类默认使用 final 修饰
5. 枚举类的构造方法默认使用 private 修饰，并且只能使用 private 修饰；
6. 枚举类的所有实例，必须在类中第一行显示列出，它们默认是public static final的

定义

```java
enum Gender{
	MALE,FEMALE;
}
```

接口

```java
    enum Gender implements Printer{
MALME,FEMALE;
public void print(){}
    }
```

```java
enum  Genders implements Printer{
AGE{
    public  void print(){ };
},
SEX{
    public void print(){ };
};
    }

```

抽象枚举类

1. 可以在枚举类中定义抽象方法，此时枚举类为抽象类，但不能用 abstract 修饰该类;
2. 枚举类需要显示创建枚举值，所以每个枚举值都需要实现抽象方法，否则会编译报错。
3. ```java
    enum Gender{
    	MALE(){public void print(){...}},
    	FEMALE(){public void print(){} };
    	public abstract void print();
    }
    ```

## 方法区

## 垃圾回收机制

当程序创建引用类型数据时，JVM会在堆内存中为之分配一块内存区。

当这份数据不再被任何变量引用时，它就成了垃圾，对应的内存区就等待垃圾回收器的回收。

## finalize 方法

定义在 `java.lang.Object` 类中：

```java
protect void finalize() thorows Throwable{}
```

1. 用于清理对象占用的资源
2. 垃圾回收器在回收某对象的内存之前，会先调用它的 finalize 方法；
3. 针对某一对象，垃圾回收器最多只会调用它的 finalize 方法一次

内存状态

强制垃圾回收

1. System.gc();
2. Runtime.getRuntime().gc();

通知垃圾回收器进行垃圾回收，但是是否回收以及回收时机依然由垃圾回收器决定

# Java 常用 API

Application Programming Interface ，应用程序接口，应用程序规范

## 系统相关类

System 类

1. System 类代表当前 Java 程序的运行平台；
2. System 类不允许被实例化，它所提供的变量和方法全是**静态的**；
3. System 类提供了代表标准输入，标准输出、错误输出的静态变量；
4. System 类提供了访问环境变量、访问系统属性、加载文件、加载动态链接库等方法。


Runtime 类

1. Runtime 类代表 Java 程序的运行环境；
2. Runtime 类符合**单例模式**，我们只能通过 getRuntime()获得该类型的唯一实例；
3. Runtime 类提供了访问 JVM 相关信息的方法，如获取 CPU 数量、获取空闲内存数等。

## 用户输入

main()的参数

```java
public static void main(String[] args){}

命令：java 字节码文件 字符串1 字符串2 ...
```

Scanner 类

Scanner 是一个文本扫描器
