<template>
  <v-container>
    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <v-row>
      <!-- 第一列 -->
      <v-col
        cols="6"
        md="2"
      />
      <!-- 第二列 -->
      <v-col
        cols="6"
        md="6"
      >
        <!-- 文章列表 -->
        <v-card
          max-width="900"
          class="mx-auto"
        >
          <v-list-item>
            <v-list-item-avatar color="grey" />
            <v-list-item-content>
              <v-list-item-title class="headline">
                NodeJS爬虫实战
              </v-list-item-title>
              <v-list-item-subtitle>by yayxs</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
            height="100"
          />

          <v-card-text>
            这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述
          </v-card-text>

          <v-card-actions>
            <v-btn
              text
              color="deep-purple accent-4"
            >
              Read
            </v-btn>
            <v-btn
              text
              color="deep-purple accent-4"
            >
              Bookmark
            </v-btn>
            <v-spacer />
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        <!-- 分页 -->
        <v-row>
          <div class="text-center">
            <v-pagination
              v-model="page"
              :length="4"
              circle
            />
          </div>
        </v-row>
      </v-col>
      <!-- 第三列 -->
      <v-col
        cols="6"
        md="4"
      >
        <v-card
          max-width="400"
          class="mx-auto"
        >
          <v-container>
            <v-row dense>
              <v-col cols="12">
                <v-card
                  color="#385F73"
                  dark
                >
                  <v-card-title class="headline">
                    Unlimited music now
                  </v-card-title>

                  <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

                  <v-card-actions>
                    <v-btn text>
                      Listen Now
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <v-col
                v-for="(item, i) in items"
                :key="i"
                cols="12"
              >
                <v-card
                  :color="item.color"
                  dark
                >
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="headline"
                        v-text="item.title"
                      />

                      <v-card-subtitle v-text="item.artist" />
                    </div>

                    <v-avatar
                      class="ma-3"
                      size="125"
                      tile
                    >
                      <v-img :src="item.src" />
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

        <!-- 天气 -->
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline">
                San Francisco
              </v-list-item-title>
              <v-list-item-subtitle>Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row align="center">
              <v-col class="display-3" cols="6">
                23&deg;C
              </v-col>
              <v-col cols="6">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                  alt="Sunny image"
                  width="92"
                />
              </v-col>
            </v-row>
          </v-card-text>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-send</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cloud-download</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle>48%</v-list-item-subtitle>
          </v-list-item>

          <v-slider
            v-model="time"
            :max="6"
            :tick-labels="labels"
            class="mx-4"
            ticks
          />

          <v-list class="transparent">
            <v-list-item
              v-for="item in forecast"
              :key="item.day"
            >
              <v-list-item-title>{{ item.day }}</v-list-item-title>

              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-subtitle class="text-right">
                {{ item.temp }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>

          <v-divider />

          <v-card-actions>
            <v-btn text>
              Full Report
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {

  },
  data: () => ({
    page: 1,
    items: [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People'
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding'
      }
    ],
    // 天气
    labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
    time: 0,
    forecast: [
      { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
      { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
      { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' }
    ]
  })
}
</script>

<style lang="scss" scoped>

</style>
