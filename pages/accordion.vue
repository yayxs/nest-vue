<template>
<div>
  <section class="accordion">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </section>
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
.accordion{
  display: flex;
  width: 600px;
  height: 200px;
  li{
    flex: 1;
    cursor: pointer;
    list-style: none;
    transform: all 300ms;
    &:nth-child(1){
      background-color: #f66;
    }
    &:nth-child(2){
      background-color: #66f;
    }
    &:nth-child(3){
      background-color: #f90;
    }
    &:nth-child(4){
      background-color: #090;
    }
    &:nth-child(5){
      background-color: #9c3;
    }
    &:nth-child(6){
      background-color: #3c9;
    }
    &:hover{
      flex: 2;
      background-color: #ccc;
    }
  }
}
</style>
