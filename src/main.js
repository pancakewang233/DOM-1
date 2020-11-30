const div = dom.create("<div>newDiv</div>");
console.log(div);

dom.after(test, div);

const div3 = dom.create("<div id='parent'></div>")
dom.wrap(test, div3)

const nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(test, 'title', 'Hi, i`m Pancake')
const title = dom.attr(test, 'title')
console.log(`title: ${title}`)

dom.text(test, '你好，这是新内容')

dom.style(test, {border: '1px solid red', color:'blue'})
console.log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid black')

dom.class.add(test, 'red')
dom.class.remove(test, 'red')
console.log(dom.class.has(test, 'red'))

dom.on(test, 'click', ()=>{
    console.log('点击了')
})

const testDiv = dom.find('#test')[0]
console.log(testDiv)
const test2 = dom.find('#test2  ')[0]
console.log(dom.find('.red', test2)[0])

console.log(dom.parent(test))

console.log(dom.siblings(dom.find('#s2')[0]))
console.log(dom.next(dom.find('#s2')[0]))
console.log(dom.previous(dom.find('#s2')[0]))

const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n)=> dom.style(n, 'color', 'red'))

console.log(dom.index(s2))