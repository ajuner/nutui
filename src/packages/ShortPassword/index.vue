<template>
  <view>
    <nut-dialog
      title="请输入密码"
      :visible="dialogShow"
      @ok-btn-click="sureClick"
      @cancel-btn-click="dialogShow = false"
      @close="close"
      :noFooter="noButton"
    >
      <view class="nut-shortpsd-subtitle">您使用了虚拟资产，请进行验证</view>
      <view class="nut-input-w">
        <input
          ref="realpwd"
          class="nut-input-real"
          type="number"
          maxlength="6"
          v-model="realInput"
          @input="changeValue"
        />
        <view class="nut-shortpsd-fake" @click="focus">
          <view class="nut-shortpsd-li"
            ><view class="nut-shortpsd-icon" v-if="realInput.length > 0"></view
          ></view>
          <view class="nut-shortpsd-li"
            ><view class="nut-shortpsd-icon" v-if="realInput.length > 1"></view
          ></view>
          <view class="nut-shortpsd-li"
            ><view class="nut-shortpsd-icon" v-if="realInput.length > 2"></view
          ></view>
          <view class="nut-shortpsd-li"
            ><view class="nut-shortpsd-icon" v-if="realInput.length > 3"></view
          ></view>
          <view v-if="length >= 5" class="nut-shortpsd-li"
            ><view class="nut-shortpsd-icon" v-if="realInput.length > 4"></view
          ></view>
          <view v-if="length == 6" class="nut-shortpsd-li"
            ><view class="nut-shortpsd-icon" v-if="realInput.length > 5"></view
          ></view>
        </view>
      </view>
      <view class="nut-shortpsd-message">
        <view class="nut-shortpsd-error">{{ errorMsg }}</view>
        <view class="nut-shortpsd-forget">
          <nut-icon class="icon" size="11px" name="tips"></nut-icon
          >忘记密码</view
        >
      </view>
    </nut-dialog>
  </view>
</template>

<script lang="ts">
import { ref, onMounted, watch, reactive, watchEffect } from 'vue';
import { createComponent } from '@/utils/create';
const { create } = createComponent('shortpassword');
export default create({
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    errorMsg: {
      type: String,
      default: ''
    },
    noButton: {
      type: Boolean,
      default: true
    },
    length: {
      type: String || Number,
      default: 6
    }
  },
  setup(props, { emit }) {
    const dialogShow = ref(false);
    const realInput = ref(props.value);
    const realpwd = ref();
    // 方法
    function sureClick() {
      emit('sureClick');
    }
    function focus() {
      realpwd.value.focus();
    }
    function changeValue(e: Event) {
      const input = e.target as HTMLInputElement;
      let val = input.value;
      if (val.length > Number(props.length)) {
        val = val.slice(0, Number(props.length));
      }
      if (realInput.value.length > Number(props.length)) {
        realInput.value = realInput.value.slice(0, Number(props.length));
      }
      emit('input', val);
      emit('update:value', val);
    }
    function close() {
      emit('update:isVisible', false);
    }
    watch(
      () => props.isVisible,
      val => {
        if (val) {
          dialogShow.value = true;
        } else {
          dialogShow.value = false;
        }
      }
    );
    return {
      dialogShow,
      sureClick,
      realInput,
      realpwd,
      focus,
      changeValue,
      close
    };
  }
});
</script>

<style scoped lang="scss">
@import 'index.scss';
</style>
