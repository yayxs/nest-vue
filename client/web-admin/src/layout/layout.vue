<template>
  <div class="wrapper">
    <!-- Container 布局容器 -->
    <el-container>
      <el-aside width="200px">
        <!-- Aside content -->
        <section>
          <el-menu :default-active="$route.path" style="height:100vh">
            <el-submenu
              v-for="(item, index) in menu.items"
              :index="`item${index}`"
              :key="`submenus${index}`"
            >
              <template slot="title">{{ item.title }}</template>
              <el-menu-item v-for="(subItem, subIndex) in item.items" :key="subIndex"
              :index="subItem.path">
                {{ subItem.title }}
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </section>
      </el-aside>
      <el-container>
        <el-header height="">
          <!-- Header content -->
          <section>
            头部内容
          </section>
        </el-header>
        <el-main height="">
          <!-- Main content -->
          <section>
            主要内容
          </section>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({})
export default class Layout extends Vue {
  menu = {
    items: [
      {
        title: '专栏管理',
        items: [
          {
            title: '增加专栏',
            path: '/coluom/add',
          },
          {
            title: '删除专栏',
            path: '/coluom/del',
          },
        ],
      },
      {
        title: '运营管理',
        items: [
          {
            title: '用户管理',
            path: '/users/list',
          },
        ],
      },
    ],
  };
}
</script>

<style scoped lang="scss"></style>
