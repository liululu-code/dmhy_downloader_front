<template>
  <div class="quick_search">
    <form action="/topics/list" method="get">
      <input
        id="keyword"
        type="text"
        class="quick_input ac_input"
        maxlength="50"
        x-webkit-speech=""
        lang="zh-tw"
        x-webkit-grammar="builtin:translate"
        name="keyword"
        value=""
        autocomplete="off"
      />
      <input type="submit" class="formButton" value=" 搜尋 " />&nbsp;<a
        href="javascript:void(0)"
        onclick="showHideAdvSearch()"
        >高級&nbsp;<span id="searchMode">▲</span></a
      >
      <div id="AdvSearch" style="display: block">
        <p>
          在下列分類中搜索：<select name="sort_id" id="AdvSearchSort">
            <option value="0">全部</option>
            <option
              value="2"
              style="color: red; --darkreader-inline-color: #ff1a1a"
              data-darkreader-inline-color=""
            >
              動畫
            </option>
            <option
              value="31"
              style="color: red; --darkreader-inline-color: #ff1a1a"
              data-darkreader-inline-color=""
            >
              季度全集
            </option>
            <option
              value="3"
              style="color: green; --darkreader-inline-color: #72ff72"
              data-darkreader-inline-color=""
            >
              漫畫
            </option>
            <option
              value="41"
              style="color: green; --darkreader-inline-color: #72ff72"
              data-darkreader-inline-color=""
            >
              港台原版
            </option>
            <option
              value="42"
              style="color: green; --darkreader-inline-color: #72ff72"
              data-darkreader-inline-color=""
            >
              日文原版
            </option>
            <option
              value="4"
              style="color: purple; --darkreader-inline-color: #ff72ff"
              data-darkreader-inline-color=""
            >
              音樂
            </option>
            <option
              value="43"
              style="color: purple; --darkreader-inline-color: #ff72ff"
              data-darkreader-inline-color=""
            >
              動漫音樂
            </option>
            <option
              value="44"
              style="color: purple; --darkreader-inline-color: #ff72ff"
              data-darkreader-inline-color=""
            >
              同人音樂
            </option>
            <option
              value="15"
              style="color: purple; --darkreader-inline-color: #ff72ff"
              data-darkreader-inline-color=""
            >
              流行音樂
            </option>
            <option
              value="6"
              style="color: blue; --darkreader-inline-color: #337dff"
              data-darkreader-inline-color=""
            >
              日劇
            </option>
            <option
              value="7"
              style="color: orange; --darkreader-inline-color: #ffae1a"
              data-darkreader-inline-color=""
            >
              ＲＡＷ
            </option>
            <option
              value="9"
              style="color: rgb(14, 185, 231); --darkreader-inline-color: #2dc9f2"
              data-darkreader-inline-color=""
            >
              遊戲
            </option>
            <option
              value="17"
              style="color: rgb(14, 185, 231); --darkreader-inline-color: #2dc9f2"
              data-darkreader-inline-color=""
            >
              電腦遊戲
            </option>
            <option
              value="18"
              style="color: rgb(14, 185, 231); --darkreader-inline-color: #2dc9f2"
              data-darkreader-inline-color=""
            >
              電視遊戲
            </option>
            <option
              value="19"
              style="color: rgb(14, 185, 231); --darkreader-inline-color: #2dc9f2"
              data-darkreader-inline-color=""
            >
              掌機遊戲
            </option>
            <option
              value="20"
              style="color: rgb(14, 185, 231); --darkreader-inline-color: #2dc9f2"
              data-darkreader-inline-color=""
            >
              網絡遊戲
            </option>
            <option
              value="21"
              style="color: rgb(14, 185, 231); --darkreader-inline-color: #2dc9f2"
              data-darkreader-inline-color=""
            >
              遊戲周邊
            </option>
            <option
              value="12"
              style="color: brown; --darkreader-inline-color: #d76363"
              data-darkreader-inline-color=""
            >
              特攝
            </option>
            <option
              value="1"
              style="color: black; --darkreader-inline-color: #e8e6e3"
              data-darkreader-inline-color=""
            >
              其他
            </option>
          </select>
        </p>
        <p>
          在下列聯盟中搜索：<select name="team_id" id="AdvSearchTeam">
            <option value="0">全部</option>
            <option value="117">動漫花園</option>
            <option value="823">拨雪寻春</option>
            <option value="801">NC-Raws</option>
            <option value="669">喵萌奶茶屋</option>
            <option value="803">Lilith-Raws</option>
            <option value="648">魔星字幕团</option>
            <option value="619">桜都字幕组</option>
            <option value="767">天月動漫&amp;發佈組</option>
            <option value="185">极影字幕社</option>
            <option value="657">LoliHouse</option>
            <option value="151">悠哈C9字幕社</option>
            <option value="749">幻月字幕组</option>
            <option value="390">天使动漫论坛</option>
            <option value="303">动漫国字幕组</option>
            <option value="241">幻樱字幕组</option>
            <option value="47">爱恋字幕社</option>
            <option value="805">DBD制作组</option>
            <option value="604">c.c动漫</option>
            <option value="550">萝莉社活动室</option>
            <option value="283">千夏字幕组</option>
            <option value="772">IET字幕組</option>
            <option value="288">诸神kamigami字幕组</option>
            <option value="804">霜庭云花Sub</option>
            <option value="755">GMTeam</option>
            <option value="454">风车字幕组</option>
            <option value="37">雪飄工作室(FLsnow)</option>
            <option value="764">MCE汉化组</option>
            <option value="488">丸子家族</option>
            <option value="731">星空字幕组</option>
            <option value="574">梦蓝字幕组</option>
            <option value="504">LoveEcho!</option>
            <option value="650">SweetSub</option>
            <option value="630">枫叶字幕组</option>
            <option value="479">Little Subbers!</option>
            <option value="321">轻之国度</option>
            <option value="649">云光字幕组</option>
            <option value="520">豌豆字幕组</option>
            <option value="626">驯兽师联盟</option>
            <option value="666">中肯字幕組</option>
            <option value="781">SW字幕组</option>
            <option value="576">银色子弹字幕组</option>
            <option value="434">风之圣殿</option>
            <option value="665">YWCN字幕组</option>
            <option value="228">KRL字幕组</option>
            <option value="49">华盟字幕社</option>
            <option value="627">波洛咖啡厅</option>
            <option value="88">动音漫影</option>
            <option value="581">VCB-Studio</option>
            <option value="407">DHR動研字幕組</option>
            <option value="719">80v08</option>
            <option value="732">肥猫压制</option>
            <option value="680">Little字幕组</option>
            <option value="613">AI-Raws</option>
            <option value="806">离谱Sub</option>
            <option value="812">虹咲学园烤肉同好会</option>
            <option value="636">ARIA吧汉化组</option>
            <option value="75">柯南事务所</option>
            <option value="821">百冬練習組</option>
            <option value="641">冷番补完字幕组</option>
            <option value="765">爱咕字幕组</option>
            <option value="822">極彩字幕组</option>
            <option value="217">AQUA工作室</option>
            <option value="592">未央阁联盟</option>
            <option value="703">届恋字幕组</option>
            <option value="808">夜莺家族</option>
            <option value="734">TD-RAWS</option>
            <option value="447">夢幻戀櫻</option>
            <option value="790">WBX-SUB</option>
            <option value="807">Liella!の烧烤摊</option>
            <option value="814">Amor字幕组</option>
            <option value="813">MingYSub</option>
            <option value="835">小白GM</option>
            <option value="832">Sakura</option>
            <option value="845">PMFAN字幕组</option>
            <option value="817">EMe</option>
            <option value="818">Alchemist</option>
            <option value="819">黑岩射手吧字幕组</option>
            <option value="816">ANi</option>
            <option value="844">DBFC字幕组</option>
            <option value="836">MSB制作組</option>
          </select>
        </p>
        <p>
          按下列順序排列：<select name="order">
            <option value="date-desc">發佈時間從後往前</option>
            <option value="date-asc">發佈時間從前往後</option>
            <option value="rel">相關度</option>
          </select>
        </p>
        <p><a href="/announce#ann108">瞭解更多</a></p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
