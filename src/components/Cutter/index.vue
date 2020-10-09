<template>
  <v-dialog
    v-model="visible"
    width="500"
    class="cutter-dialog"
  >
    <template v-slot:activator="{ attrs }">
      <input v-show="false" id="file" type="file" @change="getFile">
      <v-card
        v-show="preview"
        width="200"
        height="200"
        class="preview"
        @click="addFile"
      >
        <div class="preview-mask">
          <v-icon color="#fff">create</v-icon>
        </div>
        <v-img
          :src="preview"
          height="200"
          @click="addFile"
        />
      </v-card>
      <v-btn
        v-show="!preview"
        width="80"
        height="80"
        v-bind="attrs"
        class="cutter-btn"
        @click="addFile"
      >
        <v-icon left>add</v-icon>
        上传图片
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2">
        图片裁剪
      </v-card-title>

      <v-divider />

      <div class="cropper-content">
        <div class="cropper" style="text-align:center">
          <vueCropper
            ref="cropper"
            :img="cutterImg"
            :output-size="option.size"
            :output-type="option.outputType"
            :info="true"
            :full="option.full"
            :can-move="option.canMove"
            :can-move-box="option.canMoveBox"
            :original="option.original"
            :auto-crop="option.autoCrop"
            :fixed="isAvatar"
            :fixed-number="option.fixedNumber"
            :center-box="option.centerBox"
            :info-true="option.infoTrue"
            :fixed-box="option.fixedBox"
            @realTime="realTime"
          />
        </div>
      </div>
      <v-card-actions>
        <v-spacer />
        <v-btn
          text
          color="primary"
          @click="finish"
        >
          确认
        </v-btn>
        <v-btn text @click="close">
          取消
        </v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>
</template>

<script>
import VueCropper from 'vue-cropper'
import { doUpload } from '@/api/common'
import compression, { convertBase64UrlToBlob } from '@/utils/compression'

export default {
  name: 'Cutter',
  components: {
    VueCropper
  },
  props: {
    // 预览地址
    preview: {
      type: String,
      default: ''
    },

    // 是否位头像
    isAvatar: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cutterImg: '',
      visible: false,
      option: {
        info: true, // 裁剪框的大小信息
        outputSize: 0.8, // 裁剪生成图片的质量
        outputType: 'jpeg', // 裁剪生成图片的格式
        canScale: true, // 图片是否允许滚轮缩放
        autoCrop: true, // 是否默认生成截图框
        fixedBox: false, // 固定截图框大小 不允许改变
        // fixedNumber: [7, 5], // 截图框的宽高比例
        full: true, // 是否输出原图比例的截图
        canMoveBox: true, // 截图框能否拖动
        original: false, // 上传图片按照原始比例渲染
        centerBox: true, // 截图框是否被限制在图片里面
        infoTrue: true // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
      },
      // 防止重复提交
      loading: false
    }
  },
  methods: {
    close() {
      this.visible = false
    },

    // 打开图片
    addFile() {
      document.getElementById('file').click()
    },

    // 获取图片file
    getFile() {
      const file = document.getElementById('file').files[0]
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        const src = fileReader.result
        this.cutterImg = src
        this.visible = true
      }
    },

    realTime(data) {
      // 实时预览函数
      const imgAxis = this.$refs.cropper.getImgAxis()
      const cropAxis = this.$refs.cropper.getCropAxis()
      const cropImgX = cropAxis.x1 - imgAxis.x1
      const cropImgY = cropAxis.y1 - imgAxis.y1
      data.x = cropImgX
      data.y = cropImgY
      // 把数据返给父组件
      this.$emit('getPreview', data)
    },

    // 点击裁剪，这一步是可以拿到处理后的地址
    finish() {
      this.$refs.cropper.getCropBlob((data) => {
        this.loading = true
        compression(data, {
          quality: 0.2
        }, async(base64Codes) => {
          const img = convertBase64UrlToBlob(base64Codes)
          const formData = new FormData()
          formData.append('file', img, 'mazey-test.jpeg')
          const res = await doUpload(formData)
          this.$emit('success', res.data)
          this.loading = false
          this.close()
        })
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss">
.cropper-content {
  .cropper {
    width: auto;
    height: 300px;
  }
}

.preview {
  position: relative;

  .preview-mask {
    position: absolute;
    top: 0;bottom: 0;left: 0;right: 0;
    display: none;
    background: rgba(0,0,0,0.5);
    z-index: 999;
  }

  &:hover {
    .preview-mask {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.cutter-btn {
  .v-btn__content {
    display: flex!important;
    flex-direction: column!important;
    justify-content: center!important;
    align-items: center!important;

    .v-icon {
      margin: 0;
    }
  }
}
</style>
