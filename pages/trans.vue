<template>
<div>
  <div class="box"></div>
</div>
</template>

<script>
export default {
data() {
return {

}
},
methods: {

},
mounted() {

}
}
</script>
<style scoped lang='scss'>
.box{
  width: 50px;
  height: 20px;
  background-color: #ccc;
  &:hover{
    width: 100px;
    height: 50px;
    background-color: black ;
    transition: all 1s ease;
  }
}
</style>
