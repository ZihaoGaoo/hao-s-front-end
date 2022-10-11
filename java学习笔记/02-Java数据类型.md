### StringBuffer和StringBuilder

对字符串进行修改时用到。

StringBuilder 相较于 StringBuffer 有速度优势

```Java
public class RunoobTest{
    public static void main(String args[]){
        StringBuilder sb = new StringBuilder(10);
        sb.append("Runoob..");
        sb.insert(8, "Java");
        sb.delete(5,8);
    }
}
```

### 枚举
从数据结构中取回连续元素的方式

### Vector
与传统数组类似，Vector大小能根据需要动态变化

### Stack
Vector的子类
```Java
boolean empty()  // 判断是否为空
Object peek()  // 返回栈顶部的对象，但不移除
Object pop()  // 返回栈顶对象并移除
Object push(Object element)  // 栈顶压入对象
int search(Object element)  // 返回对象在栈中位置
```

### Hashtable
和HashMap类很相似，但是它支持同步
```Java
void clear( )  // 将此哈希表清空，使其不包含任何键。
Object clone( )  // 创建此哈希表的浅表副本。
boolean contains(Object value)  // 测试此映射表中是否存在与指定值关联的键。
boolean containsKey(Object key)  // 测试指定对象是否为此哈希表中的键。
boolean containsValue(Object value)  // 如果此 Hashtable 将一个或多个键映射到此值，则返回 true。
Enumeration elements( )  // 返回此哈希表中的值的枚举。
Object get(Object key)  // 返回指定键所映射到的值，如果此映射不包含此键的映射，则返回 null. 更确切地讲，如果此映射包含满足 (key.equals(k)) 的从键 k 到值 v 的映射，则此方法返回 v；否则，返回 null。
boolean isEmpty( )  // 测试此哈希表是否没有键映射到值。
Enumeration keys( )  // 返回此哈希表中的键的枚举。
Object put(Object key, Object value)  // 将指定 key 映射到此哈希表中的指定 value。
void rehash( )  // 增加此哈希表的容量并在内部对其进行重组，以便更有效地容纳和访问其元素。
Object remove(Object key)  // 从哈希表中移除该键及其相应的值。
int size( )  // 返回此哈希表中的键的数量。
String toString( )  // 返回此 Hashtable 对象的字符串表示形式，其形式为 ASCII 字符 ", " （逗号加空格）分隔开的、括在括号中的一组条目。
```

### ArrayList
可以动态修改的数组
```Java
ArrayList<String> sites = new ArrayList<String>();
sites.add("value")  // 添加值
sites.get(int index)  // 得到索引对应的值
sites.set(int index, Object value)  // 修改索引位置的值
sites.remove(int index)  // 删除索引位置元素
sites.size()  // 获取数组大小
```

### LinkedList
```Java
public boolean add(E e)  // 链表末尾添加元素，返回是否成功，成功为 true，失败为 false。
public void add(int index, E element)	 // 向指定位置插入元素。
public boolean addAll(Collection c)  //	将一个集合的所有元素添加到链表后面，返回是否成功，成功为 true，失败为 false。
public boolean addAll(int index, Collection c)  //	将一个集合的所有元素添加到链表的指定位置后面，返回是否成功，成功为 true，失败为 false。
public void addFirst(E e)	 // 元素添加到头部。
public void addLast(E e)	 // 元素添加到尾部。
public boolean offer(E e)	 // 向链表末尾添加元素，返回是否成功，成功为 true，失败为 false。
public boolean offerFirst(E e)	 // 头部插入元素，返回是否成功，成功为 true，失败为 false。
public boolean offerLast(E e)	 // 尾部插入元素，返回是否成功，成功为 true，失败为 false。
public void clear()	 // 清空链表。
public E removeFirst()	 // 删除并返回第一个元素。
public E removeLast()	 // 删除并返回最后一个元素。
public boolean remove(Object o)	 // 删除某一元素，返回是否成功，成功为 true，失败为 false。
public E remove(int index)	 // 删除指定位置的元素。
public E poll()	 // 删除并返回第一个元素。
public E remove()	 // 删除并返回第一个元素。
public boolean contains(Object o)	 // 判断是否含有某一元素。
public E get(int index)	 // 返回指定位置的元素。
public E getFirst()	 // 返回第一个元素。
public E getLast()	 // 返回最后一个元素。
public int indexOf(Object o)	 // 查找指定元素从前往后第一次出现的索引。
public int lastIndexOf(Object o)	 // 查找指定元素最后一次出现的索引。
public E peek()	 // 返回第一个元素。
public E element()	 // 返回第一个元素。
public E peekFirst()	 // 返回头部元素。
public E peekLast()	 // 返回尾部元素。
public E set(int index, E element)	 // 设置指定位置的元素。
public Object clone()	 // 克隆该列表。
public Iterator descendingIterator()	 // 返回倒序迭代器。
public int size()	 // 返回链表元素个数。
public ListIterator listIterator(int index)	 // 返回从指定位置开始到末尾的迭代器。
public Object[] toArray()	 // 返回一个由链表元素组成的数组。
public T[] toArray(T[] a)	 // 返回一个由链表元素转换类型而成的数组。
```