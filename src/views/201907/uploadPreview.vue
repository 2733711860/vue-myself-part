<template>
    <div class="m-uploadImg-demo">
        <div class="content">
            <div class="text">
                <ul class="imgList">
                    <li class="imgItem imgItem1" v-for="(item, $index) in loadImgs" @click="show($index)">
                        <i class="remove" @click.stop="removeImg($index)"></i>
                        <img :preview='$index' :src="item.src" style="max-width: 100%;max-height: 100%;" />
                    </li>
                </ul>
                <div class="imgItem uploadIcon">
                    <cubee-upload-img @loadend="loadend"></cubee-upload-img>
                </div>
            </div>
        </div>
        <el-button @click='submit'>上传</el-button>
    </div>
</template>

<script>
import cubeeUploadImg from '../../components/previewUpload/previewUpload.vue'

export default {
    components: {
        cubeeUploadImg,
    },
    methods: {
    	//删除
        removeImg(index) {
            this.loadImgs.splice(index,1);
            this.$previewRefresh(); //刷新，防止预览失效
        },
        //上传图片
        loadend() {
            console.log(this.loadImgs)
            this.$previewRefresh(); //刷新，防止预览失效
        },
        //预览
        show (index) {
        },
        //提交上传
        submit() {
            console.log(this.loadImgs)
        }
    },
    data () {
        return {
            loadImgs: [],
        }
    }
}
</script>
<style lang="scss" scoped>
	.imgItem1{
		position: relative;
		margin-right: .2rem;
	}
	.remove {
        width: .15rem;
        height: .15rem;
        background: rgba(0,0,0,0.6) url(../../assets/icon-remove.png) center no-repeat;
        background-size: .1rem .1rem;
        position: absolute;
        border-radius: 100%;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        -webkit-transform: translate(50%,-50%);
    }
    .uploadIcon {
        border: 1px dashed #358AD6;
        border-radius: 2px;
        position: relative;
        label {
            width: 100%;
            height: 100%;
            display: block;
            position: relative;
            z-index: 10;
        }
    }
    .uploadIcon:after {
        width: 0.54rem;
        height: 0.06rem;
        background: #609ED6;
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
    }
    .uploadIcon:before {
        width: 0.54rem;
        height: 0.06rem;
        background: #609ED6;
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%) rotateZ(90deg);
        -webkit-transform: translate(-50%,-50%) rotateZ(90deg);
    }
    .imgItem{
    	width: 1.2rem;
    	height: 1.2rem;
    }
    
    .m-uploadImg-demo {
        padding-bottom: 1rem;
        font-size: 12px;
        .content {
            height: 100%;
            .text {
                padding: 0.2rem;
                background-color: #FFF;
                .imgList {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                }
            }
        }
       
    }
</style>