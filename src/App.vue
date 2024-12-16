<template>
  <div class="main-container">
    <el-form :model="searchForm">
      <el-form-item>
        <div class="search-container">
          <el-input
            v-model="searchForm.input"
            placeholder="今天看点什么"
            style="width: 800px"
          ></el-input>
          <el-button type="primary" size="default" @click="searchHandle"> 搜索 </el-button>
          <!-- <el-button type="info" size="default" @click="">
            <el-icon>
              <CaretBottom />
            </el-icon>
          </el-button> -->
        </div>
      </el-form-item>
      <el-form-item size="normal">
        <div class="more-container">
          <div class="category-box">
            <p>在下列分類中搜索：</p>
            <el-select class="select-box" v-model="searchForm.categoryValue">
              <el-option value="0" label="全部"></el-option>
              <el-option
                value="2"
                label="動畫"
                style="color: red; --darkreader-inline-color: #ff1a1a"
              ></el-option>
              <el-option
                value="31"
                label="季度全集"
                style="color: red; --darkreader-inline-color: #ff1a1a"
              ></el-option>
              <el-option
                value="3"
                label="漫畫"
                style="color: green; --darkreader-inline-color: #72ff72"
              ></el-option>
              <el-option
                value="41"
                label="港台原版"
                style="color: green; --darkreader-inline-color: #72ff72"
              ></el-option>
              <el-option
                value="42"
                label="日文原版"
                style="color: green; --darkreader-inline-color: #72ff72"
              ></el-option>
              <el-option
                value="4"
                label="音樂"
                style="color: purple; --darkreader-inline-color: #ff72ff"
              ></el-option>
              <el-option
                value="43"
                label="動漫音樂"
                style="color: purple; --darkreader-inline-color: #ff72ff"
              ></el-option>
              <el-option
                value="44"
                label="同人音樂"
                style="color: purple; --darkreader-inline-color: #ff72ff"
              ></el-option>
              <el-option
                value="15"
                label="流行音樂"
                style="color: purple; --darkreader-inline-color: #ff72ff"
              ></el-option>
              <el-option
                value="6"
                label="日劇"
                style="color: blue; --darkreader-inline-color: #337dff"
              ></el-option>
              <el-option
                value="7"
                label="ＲＡＷ"
                style="color: orange; --darkreader-inline-color: #ffae1a"
              ></el-option>
              <el-option
                value="9"
                label="遊戲"
                style="color: rgb(14, 185, 231); --darkreader-inline-color: #2dc9f2"
              ></el-option>
              <el-option
                value="17"
                label="電腦遊戲"
                style="color: rgb(14, 185, 231); --darkreader-inline-color: #2dc9f2"
              ></el-option>
              <el-option
                value="18"
                label="電視遊戲"
                style="color: rgb(14, 185, 231); --darkreader-inline-color: #2dc9f2"
              ></el-option>
              <el-option
                value="19"
                label="掌機遊戲"
                style="color: rgb(14, 185, 231); --darkreader-inline-color: #2dc9f2"
              ></el-option>
              <el-option
                value="20"
                label="網絡遊戲"
                style="color: rgb(14, 185, 231); --darkreader-inline-color: #2dc9f2"
              ></el-option>
              <el-option
                value="21"
                label="遊戲周邊"
                style="color: rgb(14, 185, 231); --darkreader-inline-color: #2dc9f2"
              ></el-option>
              <el-option
                value="12"
                label="特攝"
                style="color: brown; --darkreader-inline-color: #d76363"
              ></el-option>
              <el-option
                value="1"
                label="其他"
                style="color: black; --darkreader-inline-color: #e8e6e3"
              ></el-option>
            </el-select>
          </div>
          <div class="category-box">
            在下列聯盟中搜索：
            <el-select class="select-box" v-model="searchForm.teamValue">
              <el-option value="0" label="全部"></el-option>
              <el-option value="117" label="動漫花園"></el-option>
              <el-option value="823" label="拨雪寻春"></el-option>
              <el-option value="801" label="NC-Raws"></el-option>
              <el-option value="669" label="喵萌奶茶屋"></el-option>
              <el-option value="803" label="Lilith-Raws"></el-option>
              <el-option value="648" label="魔星字幕团"></el-option>
              <el-option value="619" label="桜都字幕组"></el-option>
              <el-option value="767" label="天月動漫&amp;發佈組"></el-option>
              <el-option value="185" label="极影字幕社"></el-option>
              <el-option value="657" label="LoliHouse"></el-option>
              <el-option value="151" label="悠哈C9字幕社"></el-option>
              <el-option value="749" label="幻月字幕组"></el-option>
              <el-option value="390" label="天使动漫论坛"></el-option>
              <el-option value="303" label="动漫国字幕组"></el-option>
              <el-option value="241" label="幻樱字幕组"></el-option>
              <el-option value="47" label="爱恋字幕社"></el-option>
              <el-option value="805" label="DBD制作组"></el-option>
              <el-option value="604" label="c.c动漫"></el-option>
              <el-option value="550" label="萝莉社活动室"></el-option>
              <el-option value="283" label="千夏字幕组"></el-option>
              <el-option value="772" label="IET字幕組"></el-option>
              <el-option value="288" label="诸神kamigami字幕组"></el-option>
              <el-option value="804" label="霜庭云花Sub"></el-option>
              <el-option value="755" label="GMTeam"></el-option>
              <el-option value="454" label="风车字幕组"></el-option>
              <el-option value="37" label="雪飄工作室(FLsnow)"></el-option>
              <el-option value="764" label="MCE汉化组"></el-option>
              <el-option value="488" label="丸子家族"></el-option>
              <el-option value="731" label="星空字幕组"></el-option>
              <el-option value="574" label="梦蓝字幕组"></el-option>
              <el-option value="504" label="LoveEcho!"></el-option>
              <el-option value="650" label="SweetSub"></el-option>
              <el-option value="630" label="枫叶字幕组"></el-option>
              <el-option value="479" label="Little Subbers!"></el-option>
              <el-option value="321" label="轻之国度"></el-option>
              <el-option value="649" label="云光字幕组"></el-option>
              <el-option value="520" label="豌豆字幕组"></el-option>
              <el-option value="626" label="驯兽师联盟"></el-option>
              <el-option value="666" label="中肯字幕組"></el-option>
              <el-option value="781" label="SW字幕组"></el-option>
              <el-option value="576" label="银色子弹字幕组"></el-option>
              <el-option value="434" label="风之圣殿"></el-option>
              <el-option value="665" label="YWCN字幕组"></el-option>
              <el-option value="228" label="KRL字幕组"></el-option>
              <el-option value="49" label="华盟字幕社"></el-option>
              <el-option value="627" label="波洛咖啡厅"></el-option>
              <el-option value="88" label="动音漫影"></el-option>
              <el-option value="581" label="VCB-Studio"></el-option>
              <el-option value="407" label="DHR動研字幕組"></el-option>
              <el-option value="719" label="80v08"></el-option>
              <el-option value="732" label="肥猫压制"></el-option>
              <el-option value="680" label="Little字幕组"></el-option>
              <el-option value="613" label="AI-Raws"></el-option>
              <el-option value="806" label="离谱Sub"></el-option>
              <el-option value="812" label="虹咲学园烤肉同好会"></el-option>
              <el-option value="636" label="ARIA吧汉化组"></el-option>
              <el-option value="75" label="柯南事务所"></el-option>
              <el-option value="821" label="百冬練習組"></el-option>
              <el-option value="641" label="冷番补完字幕组"></el-option>
              <el-option value="765" label="爱咕字幕组"></el-option>
              <el-option value="822" label="極彩字幕组"></el-option>
              <el-option value="217" label="AQUA工作室"></el-option>
              <el-option value="592" label="未央阁联盟"></el-option>
              <el-option value="703" label="届恋字幕组"></el-option>
              <el-option value="808" label="夜莺家族"></el-option>
              <el-option value="734" label="TD-RAWS"></el-option>
              <el-option value="447" label="夢幻戀櫻"></el-option>
              <el-option value="790" label="WBX-SUB"></el-option>
              <el-option value="807" label="Liella!の烧烤摊"></el-option>
              <el-option value="814" label="Amor字幕组"></el-option>
              <el-option value="813" label="MingYSub"></el-option>
              <el-option value="835" label="小白GM"></el-option>
              <el-option value="832" label="Sakura"></el-option>
              <el-option value="845" label="PMFAN字幕组"></el-option>
              <el-option value="817" label="EMe"></el-option>
              <el-option value="818" label="Alchemist"></el-option>
              <el-option value="819" label="黑岩射手吧字幕组"></el-option>
              <el-option value="816" label="ANi"></el-option>
              <el-option value="844" label="DBFC字幕组"></el-option>
              <el-option value="836" label="MSB制作組"></el-option>
            </el-select>
          </div>
          <div class="category-box">
            按下列順序排列：
            <el-select class="select-box" v-model="searchForm.sortValue">
              <el-option value="date-desc" label="發佈時間從後往前"></el-option>
              <el-option value="date-asc" label="發佈時間從前往後"></el-option>
              <el-option value="rel" label="相關度"></el-option>
            </el-select>
          </div>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import { search } from '@/api/search/index'
const searchForm = ref({
  input: '',
  categoryValue: '',
  sortValue: '',
  teamValue: '',
})

async function searchHandle() {
  console.log(searchForm.value)
  const result = await search(searchForm.value)
  if (result.code === 200) {
    console.log('ok')
  }
}
</script>

<style lang="scss">
.main-container {
  display: flex;
  width: 1080px;
  // height: 100px;
  margin: 20px auto;
  justify-content: center;
  align-items: center;

  background-color: pink;

  .search-container {
    display: flex;
    align-items: center;
  }

  .more-container {
    width: 100%;
    display: flex;
    gap: 10px;
    // justify-content: space-between;
    // align-items: center;

    .category-box {
      display: flex;
      align-items: center;
      // background-color: blue;

      .select-box {
        width: 100px;
      }
    }
  }
}
</style>
