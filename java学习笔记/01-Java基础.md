## Java特性
封装、继承、多态

### 封装  
Java不支持多继承，通过implements可变相具有多继承的特性


### 重写/重载

重写：`子类对父类`可访问方法的返回值和形参都不变，核心重写

重载：在`一个类`里面，方法名字相同

```java
class Animal{
   public void move(){
      System.out.println("动物可以移动");
   }
}
 
class Dog extends Animal{
   public void move(){
      System.out.println("狗可以跑和走");
   }
}
```

### 多态
不同子类在继承时对同一方法进行重写（同时父类引用指向子类对象：Parent p = new Child()）

多态的实现方式：重写、接口、抽象类和抽象方法

### 接口
抽象方法的集合，接口类的方法会被隐式定义为`public abstract`
- 接口不能用于实例化对象。
- 接口没有构造方法。
- 接口中所有的方法必须是抽象方法，Java 8 之后 接口中可以使用 default 关键字修饰的非抽象方法。
- 接口不能包含成员变量，除了 static 和 final 变量。
- 接口不是被类继承了，而是要被类实现。
- 接口支持多继承

### 抽象类
没有包含足够的信息来描绘一个具体的对象，无法被实例化。

