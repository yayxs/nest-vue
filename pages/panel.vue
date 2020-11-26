<template>
<div>
  <section class="panel">
    <input type="checkbox" hidden id="checkbox1">
    <input type="checkbox" hidden id="checkbox2">
    <input type="checkbox" hidden id="checkbox2">
    <article>
      <label for="checkbox1">列表1</label>
      <p>内容1<br>内容2<br>内容3<br>内容4</p>
    </article>
    <article>
      <label for="checkbox2">列表2</label>
      <p>内容1<br>内容2<br>内容3<br>内容4</p>
    </article>
    <article>
      <label for="checkbox2">列表3</label>
      <p>内容1<br>内容2<br>内容3<br>内容4</p>
    </article>
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
.panel{
  width: 300px;
  article{
    cursor: pointer;
    & + article{
      margin-top: 5px;
    }
  }
  input {
    &:nth-child(1):checked ~ article:nth-of-type(1) p,
    &:nth-child(2):checked ~ article:nth-of-type(2) p,
    &:nth-child(3):checked ~ article:nth-of-type(3) p
    {
      max-height: 600px;
      border-bottom-width: 1px;
    }
  }
  label{
    display: block;
    padding: 0 20px;
    height: 40px;
    background-color: #f66;
    cursor: pointer;
    line-height: 40px;
    font-size: 16px;
    color: #fff;
  }
  p{
    overflow: hidden;
    padding: 0 20px;
    border: 1px solid #f66;
    border-top: none;
    border-bottom-width: 0;
    max-height: 0;
    line-height: 40px;
    transition: all 500ms;
  }
}
</style>
