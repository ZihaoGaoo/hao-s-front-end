### defer & async
- defer  
立即下载，但等整个页面都解析完毕后再执行  
（规定第一个先于第二个defer执行，并都先于DOMContentLoaded；实际并不是😄）
- async  
立即下载，页面解析完后，async无序执行

### canvas & svg
- svg  
用xml描述2D图形；svg Dom元素都是可用的；svg对象属性改变会自动重现图形

- canvas  
通过js绘制；像素级渲染；不依赖分辨率；支持事件处理器；绘制完成后不会更改（位置发生变化需要重新绘制）