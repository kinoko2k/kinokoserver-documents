---
sidebar_label: チャットについて
sidebar_position: 1
---
# チャットについて
当鯖は、PluginのLunaChatを導入しており、チャットではローマ字で打つと、勝手に日本語へ変換してくれる機能があります。

荒らし対策として、時々チャットを遮断する場合があります。

## チャットに関するコマンドリスト
| コマンド | 説明 | 権限レベル |
| --- | --- | --- |
| /jp on/off | 日本語変換をするかどうか | player |
| /ch create [channel] | 指定した名前のチャンネルを作成します。 | player |
| /ch join [channel] | 指定したチャンネルに参加します。 | player |
| /ch join ! | 発言先を通常のチャットに戻します。(/ch !でも可) | player |
| /ch leave [channel] | 指定したチャンネルから退出します。 | player |
| /ch info [channel] | 指定したチャンネルのメンバー情報等を確認できます。 | player |
| .![message] | メッセージ前に!をつけることで、チャンネル外にメッセージを送ります。 | player |
| .$[message] | メッセージ前に$をつけることで、メッセージをローマ字のまま送ることができます。 | player |
| /ch template [number] [template] | テンプレートを設定します。 | op |
| /ch set default [player] [channel] | 指定したプレイヤーを別のチャンネルに設定できます。 | op |

## チャットカラー
| 色 | カラーコード | MOTDコード |
| --- | --- | --- |
| Black | &0 | 	\u00A70 |
| DarkGray | &8 | \u00A78 |
| DarkRed | &4 | \u00A74 |
| DarkPurple | &5 | \u00A75 |
| DarkBlue | &1 | \u00A71 |
| DarkGreen | &2 | \u00A72 |
| Gray | &7 | \u00A77 |
| Red | &c | \u00A7c |
| LightPurple | &d | \u00A7d |
| Blue | &9 | \u00A79 |
| Aqua | &b | \u00A7b |
| Green | &a | \u00A7a |
| Yellow | &e | \u00A7e |
| Gold | &6 | \u00A76 |
| White | &f | \u00A7f |

## 装飾コード
| 名前 | 意味 | カラーコード | MOTDコード |
| --- | --- | --- | --- |
| Bold | 太文字 | &l | \u00A7l |
| Strikethrough | 取り消し線 | &m | \u00A7m |
| UnderLine | 下線 | &n | \u00A7n |
| Italic | 斜体 | &o | \u00A70 |
| Obfuscated | 難読化 | &k | \u00A7k |
| Reset | リセット | &r | \u00A7r |
| NewLine | 新しい行 | \n | \n |