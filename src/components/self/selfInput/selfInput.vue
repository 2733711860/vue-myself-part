<template>
	<div>
		<div class="self-input-cell" :class="{'self-input-cell--required' : isMust}">
			<div class="self-input-label">{{label}}</div>
			<div class="self-input-value">
				<input type="text" class="self-input-write" :placeholder="placeholder" :value="inputValue" @input="$emit('input', $event.target.value)" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		value: {
      type: [String, Number],
      default: ''
    },
    label: '',
    isMust: {
    	type: Boolean,
    	default: false
    }
	},
	data () {
		return {
			inputValue: this.value,
			placeholder: '请输入' + this.label
		}
	},
	mounted () {
	},
	watch: {
    value(val) {
    	if (val === this.inputValue) return
      this.inputValue = val
    }
  },
  methods: {
  }
}
</script>

<style scoped="scoped">
	.self-input-cell{
		position: relative;
		display: flex;
		justify-content: space-between;
		padding: .15rem;
		margin: 0 .1rem;
		border-bottom: 1px solid #DFDFDF;
	}
	.self-input-cell--required::before{
		position: absolute;
		left: .07rem;
		color: #ee0a24;
		content: '*';
	}
	.self-input-label{
		margin-right: .2rem;
	}
	.self-input-value{
		flex: 1;
	}
	.self-input-write{
		width: 100%;
		border: 0;
		outline: none;
		background-color: #FFFFFF;
		text-align: right;
	}
</style>