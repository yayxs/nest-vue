<template>
  <v-app id="rootApp">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- 应用栏-->
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="white">
      <v-app-bar-nav-icon color="eee" @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down"></span>
      </v-toolbar-title>

      <!-- <v-spacer /> -->
    </v-app-bar>
    <!-- 主要内容 -->
    <v-content>
      我是主要内容区域
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {},
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { title: '音乐', icon: 'mdi-view-dashboard' },
      { title: '视频', icon: 'mdi-image' },
      { title: '写作', icon: 'mdi-help-box' }
    ]
  })
}
</script>
