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
  const boardNumber = new Array(8)
  const turn = 0 //初期値0　1 黒先行 -1白先行


    for (let i = 0; i < boardNumber.length; i++){
      boardNumber[i] = new Array(8)
    // 8 * 8が完成
  }


  return (
    <div>
      <table border="1">
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>●</th>
          <th>◯</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>◯</th>
          <th>●</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </table>
    </div>
  )
}