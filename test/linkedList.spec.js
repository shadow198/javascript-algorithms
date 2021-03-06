const expect = require('chai').expect
const LinkedList = require('../src/LinkedList/LinkedList.js').default

describe('链表测试单元', function () {
  it('prepend测试, 链表长度为0的情况下', function () {
    const linkedList = new LinkedList()
    linkedList.prepend('head')
    expect(linkedList.head.value).to.equals('head')
    expect(linkedList.tail.value).to.equals('head')
  })

  it('prepend测试, 链表长度不为0的情况下', function () {
    const linkedList = new LinkedList()
    linkedList.prepend('tail')
    linkedList.prepend('head')
    expect(linkedList.head.value).to.equals('head')
    expect(linkedList.tail.value).to.equals('tail')
    expect(linkedList.head.next).to.equals(linkedList.tail)
    expect(linkedList.tail.next).to.null
  })

  it('append测试, 链表长度为0的情况下', function () {
    const linkedList = new LinkedList()
    linkedList.prepend('tail')
    expect(linkedList.head.value).to.equals('tail')
    expect(linkedList.tail.value).to.equals('tail')
  })

  it('append测试, 链表长度不为0的情况下', function () {
    const linkedList = new LinkedList()
    linkedList.append('head')
    linkedList.append('tail')
    expect(linkedList.head.value).to.equals('head')
    expect(linkedList.tail.value).to.equals('tail')
    expect(linkedList.head.next).to.equals(linkedList.tail)
    expect(linkedList.tail.next).to.null 
  })

  it('链表长度为0, 删除节点, 返回null', function () {
    const linkedList = new LinkedList()
    expect(linkedList.delete()).to.null
  })

  it('链表长度为1, 删除节点, 返回head', function () {
    const linkedList = new LinkedList()
    linkedList.append('head')
    expect(linkedList.delete('head').value).to.equals('head')
    expect(linkedList.head).to.null
    expect(linkedList.tail).to.null
  })

  it('链表长度为2, 删除节点, 返回null', function () {
    const linkedList = new LinkedList()
    linkedList.append('head')
    linkedList.append('tail')
    expect(linkedList.delete('head').value).to.equals('head')
    expect(linkedList.head.value).to.equals('tail')
    expect(linkedList.tail.value).to.equals('tail')
  })

  it('链表长度为0, find测试', function () {
    const linkedList = new LinkedList()
    expect(linkedList.find('head')).to.false
  })

  it('链表长度为1, find测试', function () {
    const linkedList = new LinkedList()
    linkedList.append('head')
    expect(linkedList.find('head')).to.true
    expect(linkedList.find('tail')).to.false
  })

  it('链表长度为2, find测试', function () {
    const linkedList = new LinkedList()
    linkedList.append('head')
    linkedList.append('tail')
    expect(linkedList.find('head')).to.true
    expect(linkedList.find('tail')).to.true
    expect(linkedList.find('body')).to.false
  })

  it('链表长度为0, 测试deleteTail', function () {
    const linkedList = new LinkedList()
    expect(linkedList.deleteTail()).to.null
  })

  it('链表长度为1, 测试deleteTail', function () {
    const linkedList = new LinkedList()
    linkedList.append('head')
    expect(linkedList.deleteTail().value).to.equals('head')
  })

  it('链表长度为2, 测试deleteTail', function () {
    const linkedList = new LinkedList()
    linkedList.append('head')
    linkedList.append('tail')
    linkedList.deleteTail()
    expect(linkedList.tail.value).to.equals('head')
    expect(linkedList.head.value).to.equals('head')
  })

  it('链表长度为0, 测试deleteHead', function () {
    const linkedList = new LinkedList()
    expect(linkedList.deleteHead()).to.null
  })

  it('链表长度为1, 测试deleteHead', function () {
    const linkedList = new LinkedList()
    linkedList.append('head')
    expect(linkedList.deleteHead().value).to.equals('head')
  })

  it('链表长度为2, 测试deleteHead', function () {
    const linkedList = new LinkedList()
    linkedList.append('head')
    linkedList.append('tail')
    expect(linkedList.deleteHead().value).to.equals('head')
    expect(linkedList.head.value).to.equals('tail')
    expect(linkedList.tail.value).to.equals('tail')
  })

  it('toArray', function () {
    const linkedList = new LinkedList()
    let arr = []
    linkedList.append('head')
    linkedList.append('body')
    linkedList.append('tail')
    arr = linkedList.toArray()
    arr = arr.map(a => a.value)
    expect(arr).to.deep.equals(['head', 'body', 'tail'])
  })

  it('fromArray', function () {
    const linkedList = new LinkedList()
    linkedList.fromArray(['head', 'tail'])
    expect(linkedList.head.value).to.equals('head')
    expect(linkedList.tail.value).to.equals('tail')
  })
})