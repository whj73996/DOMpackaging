window.dom = {
  find(selector) {
    return document.querySelectorAll(selector)
  },
  style(node, name, value) {
    if (arguments.length === 3) {
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name ==='string') {          //instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链
        console.log(name);
        return node.style[name]
      } else if (typeof name === 'object') {   
        const object = name
        for (let k in object) {
          node.style[k] = object[k]
        }
      }
    }
  },
  each(nodeList,fn) {
    for (let i = 0; i < nodeList.length; i++){
      fn.call(null,nodeList[i])
    }
  },
};

const div = dom.find("#test>.red")[0]; // 获取对应的元素
dom.style(div, "color", "red"); // 设置 div.style.color
dom.style(div,{color :'white',width:'100px'}) //通过对象设置样式
console.log(dom.style(div, 'color')); //获取样式value

const divList = dom.find(".red"); // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)); // 遍历 divList 里的所有元素
