/**
 * 线性插值函数，用于计算两个数之间的插值
 * @param a 起始值
 * @param b 结束值
 * @param n 插值比例
 * @returns 插值结果
 */
function lerp(a: number, b: number, n: number): number {
  return (1 - n) * a + n * b
}

/**
 * 获取元素的指定样式属性值
 * @param el HTMLElement 元素
 * @param attr 样式属性名
 * @returns 样式属性值，如果获取失败返回 false
 */
const getStyle = (el: HTMLElement, attr: string): string | false => {
  try {
    return (window.getComputedStyle(el) as any)[attr]
  } catch (e) {
    console.error(e)
  }
  return false
}

/**
 * 初始化游标
 * @returns 新创建的游标对象
 */
const cursorInit = (): Cursor => {
  const mainCursor = new Cursor()
  return mainCursor
}

/**
 * 游标类
 */
class Cursor {
  pos: { curr: null | { x: number; y: number }; prev: null | { x: number; y: number } }
  pt: string[]
  cursor: HTMLDivElement
  scr: HTMLStyleElement

  /**
   * 构造函数
   */
  constructor() {
    this.pos = {
      curr: null,
      prev: null
    }
    this.pt = []
    this.cursor = document.createElement('div')
    this.cursor.id = 'cursor'
    this.cursor.classList.add('xs-hidden')
    this.cursor.classList.add('hidden')
    this.scr = document.createElement('style')
    this.create()
    this.init()
    this.render()
  }

  /**
   * 移动游标
   * @param left 水平位置
   * @param top 垂直位置
   */
  move(left: number, top: number) {
    this.cursor.style.left = `${left}px`
    this.cursor.style.top = `${top}px`
  }

  /**
   * 创建游标和相关样式
   */
  create() {
    document.body.appendChild(this.cursor)

    const elements = document.getElementsByTagName('*')
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i]
      if (getStyle(el as HTMLElement, 'cursor') === 'pointer') {
        this.pt.push(el.outerHTML)
      }
    }

    this.scr.innerHTML = `* {cursor: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='10px' height='10px'><circle cx='4' cy='4' r='4' fill='white' /></svg>") 4 4, auto!important}`
    document.body.appendChild(this.scr)
  }

  /**
   * 刷新游标
   */
  refresh() {
    this.scr.remove()
    this.cursor.classList.remove('active')
    this.pos = {
      curr: null,
      prev: null
    }
    this.pt = []

    this.create()
    this.init()
    this.render()
  }

  /**
   * 初始化游标事件监听
   */
  init() {
    document.onmousemove = (e: MouseEvent) => {
      if (this.pos.curr === null) {
        this.move(e.clientX - 8, e.clientY - 8)
      }
      this.pos.curr = {
        x: e.clientX - 8,
        y: e.clientY - 8
      }
      this.cursor.classList.remove('hidden')
    }
    document.onmouseenter = () => {
      this.cursor.classList.remove('hidden')
    }
    document.onmouseleave = () => {
      this.cursor.classList.add('hidden')
    }
    document.onmousedown = () => {
      this.cursor.classList.add('active')
    }
    document.onmouseup = () => {
      this.cursor.classList.remove('active')
    }
  }

  /**
   * 渲染游标位置
   */
  render() {
    if (this.pos.prev && this.pos.curr) {
      this.pos.prev.x = lerp(this.pos.prev.x, this.pos.curr.x, 0.35)
      this.pos.prev.y = lerp(this.pos.prev.y, this.pos.curr.y, 0.35)
      this.move(this.pos.prev.x, this.pos.prev.y)
    } else {
      this.pos.prev = this.pos.curr
    }
    requestAnimationFrame(() => this.render())
  }
}

export default cursorInit
