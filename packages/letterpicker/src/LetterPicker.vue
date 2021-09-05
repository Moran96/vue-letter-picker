<template>
  <div class="letter-picker">
    <div  class="letter-picker-container">
      <el-popover
        placement="bottom"
        popper-class="letter-popper"
        v-model="visible"
        trigger="click">
        <div class="letters-item-container">
          <p
            v-for="letter in optionList"
            :key="letter.value"
            class="letter-item"
            :class="{ active: isActive(letter.value) }"
            @click="onSelectLetter(letter.value)">
            {{ letter.label }}
          </p>
        </div>
        <p slot="reference" style="height:32px;">{{value}}</p>
      </el-popover>
      <span v-show="!value" class="custom-placeholder">{{placeholder}}</span>
      <span v-show="value" class="custom-close" @click="onClickClear">
        <i class="el-input__icon el-icon-circle-close"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LetterPicker',
  props: {
    value: {
      type: String,
      require: true,
      default: ''
    },
    placeholder: {
      type: String,
      require: false,
      default: 'please select letter'
    },
    type: {
      type: String,
      require: false,
      default: 'uppercase' // uppercase or lowercase
    }
  },
  data () {
    return {
      visible: false,
      optionList: []
    }
  },
  methods: {
    /** @desc update v-model */
    updateVal (val) {
      this.$emit('input', val)
    },

    /** @desc 样式选中样式 */
    isActive (val) {
      const { value } = this
      return value === val
    },

    /**
     * @desc 生成字母列表 A-65 a-97
     */
    generateLetter () {
      const { type } = this
      const startCharCode = (type === 'uppercase') ? 65 : 97
      const len = 26
      const letterList = []
      for (let i = startCharCode; i < (startCharCode + len); i++) {
        const letter = String.fromCharCode(i)
        letterList.push({
          label: letter,
          value: letter
        })
      }
      this.optionList = letterList
    },

    /** @desc 选中时触发 */
    onSelectLetter (val) {
      this.visible = false
      this.updateVal(val)
    },

    /** @desc 清空当前选项 */
    onClickClear () {
      this.updateVal('')
    }
  },
  created () {
    this.generateLetter()
  }
}
</script>

<style lang="scss">
$letter-gray: #C0C4CC;
$letter-light-gray: #DCDFE6;
.letter-picker {
  text-align: left;
  p {
    margin: 0;
  }
  .letter-picker-container {
    position: relative;
    z-index: 1;
    width: 207px;
    height: 32px;
    padding-left: 15px;
    border: 1px solid $letter-light-gray;
    border-radius: 4px;
    line-height: 32px;
    background-color: #FFF;
    cursor: pointer;
    &:hover {
      border-color: $letter-gray;
    }
    .custom-close {
      position: absolute;
      z-index: 3;
      top: 0;
      right: 0;
      width: 28px;
      height: 100%;
      .el-icon-circle-close {
        color: $letter-light-gray;
        line-height: 32px;
        &:hover {
          color: #2c3e50;
        }
      }
    }
    .custom-placeholder {
      position: absolute;
      top: 0;
      z-index: -1;
      color: $letter-gray;
      font-size: 13px;
    }
  }
}
.letter-popper {
  .letters-item-container {
    width: 300px;
    user-select: none;
  }
  .letter-item {
    display: inline-block;
    vertical-align: top;
    width: 42px;
    height: 24px;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: #409eff;
    }
  }
  .active {
    color: #FFF;
    background-color: #409eff;
    &:hover {
      color: #FFF;
    }
  }
}
</style>
