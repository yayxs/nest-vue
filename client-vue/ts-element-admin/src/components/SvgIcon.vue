<template>
  <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import {
  Component, Prop, Vue,
} from 'vue-property-decorator';

@Component({
  // components: {}
})
export default class SvgIcon extends Vue {
  // prop
  @Prop({ default: '', required: true }) iconClass!: string;

  @Prop({ default: '', required: true }) className!: string;

  //
  // computed
  get iconName(): string {
    return `#icon-${this.iconClass}`;
  }

  // methods
  private svgClass() {
    if (this.className) {
      return `svg-icon ${this.className}`;
    }
    return 'svg-icon';
  }
}

</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
