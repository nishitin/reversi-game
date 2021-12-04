import { useState } from "react"

export const Board = () => {
  // const whitePlayer = setPlayer(true)
  // const blackPlayer = setPlayer(false)

  // console.log(blackPlayer)

  //メモ: 白が値１ 黒が値2 何も置いてない場所は0にしてその総数で勝敗を決める
  //メモ: 1同士に挟まれたものはひっくり返す
  //最初におけるのはwhiteプレイヤーが先行の場合 x:4, y:2 x:5, y:3
  // white [2][4], [3][5] [4][2] [5][2]
  // black [2][3], [3][2] [4][5], [5][4]
  let boardArr = new Array(8)

  for (let i = 0; i < 8; i++){
    boardArr[i] = new Array(8)
    for ( let j = 0; j < 8; j++){
      boardArr[i][j] = 0
    }
  }
  //メモ　ひとつで渡したい　要チェックや
  boardArr[4][4] = 1
  boardArr[3][3] = 1
  boardArr[3][4] = -1
  boardArr[4][3] = -1
  console.table(boardArr)

  return (
    <div>
      <p className="board-text">アイウエオ</p>
      <table border="1">
          {boardArr.map ((e) => {
            return (
             <tr className="table-tr">
               <th>{e[1]}</th>
               <th>{e[2]}</th>
               <th>{e[3]}</th>
               <th>{e[4]}</th>
               <th>{e[5]}</th>
               <th>{e[6]}</th>
               <th>{e[7]}</th>
             </tr>
            )
          })}
      </table>
      <button>ゲームスタート</button>
    </div>
  )
}