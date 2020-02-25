<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      permanent
      expand-on-hover
      mini-variant-width="56"
      width="160"
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row
            v-if="item.heading"
            :key="item.heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- 头像 -->
      <v-avatar color="teal" size="36">
        <img
          src="https://yayxs.github.io/head.jpg"
          alt="Yayxs"
        >
      </v-avatar>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">洋小洋同学</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="请输入搜索"
        class="hidden-sm-and-down"
      />
      <v-spacer />
      <div class="my-2">
        <v-btn small class="primary">
          登录
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn small @click="handleRegister">
          注册
        </v-btn>
      </div>
      <v-btn icon @click="handleToGH">
        <v-icon>fab fa-github</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer
      absolute
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>@yayxs</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: 'mdi-contacts', text: '首页' },
      { icon: 'mdi-history', text: '读书' },
      { icon: 'mdi-history', text: '娱乐' },
      { icon: 'mdi-content-copy', text: '社区' },
      { icon: 'mdi-settings', text: '设置' },
      { icon: 'mdi-help-circle', text: '帮助' }

    ]
  }),
  methods: {
    handleToGH () {
      global.console.log('跳转到github')
      window.open('https://github.com/yayxs')
    },
    // 注册
    handleRegister () {
      // 跳转到注册页
      global.console.log('跳转到注册页')
      this.$router.push({ path: '/register' })
    }
  }
}
</script>
