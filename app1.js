/*
プロジェクトで使う主な機能
* event listeners
* query Selectors
* arrow functions
* forEach
* setting time intervals and countdowns
*/

document.addEventListener('DOMContentLoaded',() => {

    // 定数
    const squares = document.querySelectorAll('.grid div')
    const startBtn = document.querySelector('.start')
    const scoreDisplay = document.querySelector('#score')
    const width = 10

    // 変数
    let score = 0
    let currentIndex = 0 // スネークの頭の位置
    let currentSnake = [] // スネークの頭と体の位置
    let appleIndex = 0
    let interval = 0
    let intervalTime = 0
    let direction = 1
    let speed = 0.9


    // ゲームスタート・リスタートのファンクション（関数）
    function startGame() {
        // 初期化（変数や要素などの設定を初期状態にしてゲームを始める）
        currentSnake.forEach(i =>
            squares[i].classList.remove('snake'))
        squares[appleIndex].classList.remove('apple')

        score = 0
        scoreDisplay.innerHTML = score

        currentSnake = [43,44]
        currentIndex = 44
        currentSnake.forEach(i =>
            squares[i].classList.add('snake'))
        direction = 1

        intervalTime = 1000
        clearInterval(interval)
        interval = setInterval(moveSnake,intervalTime)
    }

    // キーでスネークを操作するファンクション（関数）
    function control(e) {
        squares[currentIndex].classList.remove('snake')

        if (e.keyCode === 37) { // LEFT
            direction = -1
        } else if (e.keyCode === 39) { // RIGHT
            direction = 1
        } else if (e.keyCode === 38) { // UP ：-10 進む（１つ上のマス）
            direction = -width
        } else if (e.keyCode === 40) { // DOWN ： +10 進む（１つ下のマス）
            direction = width
        }
    }

    // スネークを動かすファンクション（関数）
    function moveSnake() {
        const tail = currentSnake.pop() // スネークの配列の最後の要素をtailに格納
        squares[tail].classList.remove('snake') // スネークの最後尾を消す
        currentSnake.unshift(currentSnake[0] + direction) // スネークの配列の最初の要素をdirection分移動
        squares[currentSnake[0]].classList.add('snake') // スネークの頭の位置を描画
    }

    // ファンクションを呼び出す為のイベントリスナーを設定
    document.addEventListener('keyup',control)
    startBtn.addEventListener('click',startGame)
})