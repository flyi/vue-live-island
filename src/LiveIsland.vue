 <template>
    <div
      v-show="!isHide"
      :class="['live-island-wrapper', 'fixed', 'inset-x-0', 'top-[--top]', 'z-[9999]', wrapperClassName]"
      :style="{
        '--top': topStyle,
        '--small-width': smallWidthStyle,
        '--small-height': smallHeightStyle,
        '--large-width': largeWidthStyle,
        '--large-height': largeHeightStyle,
        '--large-radius': largeRadiusStyle,
      }"
    >
      <div
        v-if="isClickType"
        :class="['live-island-overlay', { 'fixed inset-0': !isSmall }]"
        @click="onClose"
      />
  
      <div
        :class="[
          'live-island',
          'absolute',
          'left-1/2',
          'top-0',
          'h-[--small-height]',
          'w-[--small-width]',
          'overflow-hidden',
          'rounded-[--small-height]',
          'bg-black',
          'text-white',
          '[box-shadow:inset_0_0_0_1.5px_rgb(255_255_255/0.15),0_1px_2px_rgb(0_0_0/0.2)]',
          '[transform:translate(-50%)_scale(var(--scale,1))] [&>*]:duration-200',
          className,
          {
            [smallClassName]:
              isSmall &&
              (initialAnimation || hasMount),
            'cursor-pointer': isSmall,
            'select-none': isSmall,
            'duration-300': isSmall,
            'hover:[--scale:1.05]': isSmall,
            'animate-[turn-to-small_0.4s_ease-out_both]':
              isSmall &&
              (initialAnimation || hasMount),
            [largeClassName]: !isSmall,
            'animate-[turn-to-large_0.4s_ease-out_both]': !isSmall,
          },
        ]"
        @click="isClickType ? onOpen() : null"
        @mouseenter="!isClickType ? onOpen() : null"
        @mouseleave="!isClickType ? onClose() : null"
      >
        <slot />
      </div>
  
      <div
        class="live-island-camera pointer-events-none absolute left-1/2 top-[calc(var(--small-height)*0.5)] ml-[calc(var(--small-height)*1.14)] aspect-square h-[calc(var(--small-height)*0.24)] rounded-full [background-color:#080928] [background:radial-gradient(#6667ac,transparent_50%)_33.3%_10%/75%_50%_no-repeat,radial-gradient(#454680,transparent_50%)_60%_85%/50%_50%_no-repeat] [box-shadow:inset_0_0_0.25em_#4c4da3] [transform:translate(-50%,-50%)]"
        :style="{
          '--small-height': smallHeightStyle,
        }"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import {
    computed,
    onMounted,
    onUnmounted,
    ref,
    watch
  } from 'vue'
  
  const getVal = (val: number | string): string => {
    return typeof val === 'number' ? `${val}px` : val
  }
  
  const props = defineProps({
    className: {
      type: String,
      default: ''
    },
    top: {
      type: [Number, String],
      default: 10
    },
    smallClassName: {
      type: String,
      default: ''
    },
    smallWidth: {
      type: [Number, String],
      default: 96
    },
    smallHeight: {
      type: [Number, String],
      default: 30
    },
    largeClassName: {
      type: String,
      default: ''
    },
    largeWidth: {
      type: [Number, String],
      default: 400
    },
    largeHeight: {
      type: [Number, String],
      default: 180
    },
    largeRadius: {
      type: [Number, String],
      default: 36
    },
    wrapperClassName: {
      type: String,
      default: ''
    },
    triggerType: {
      type: String,
      default: 'click' // | 'hover'
    },
    initialAnimation: {
      type: Boolean,
      default: false
    }
  })
  
  const emits = defineEmits(['change'])
  
  const isHide = ref(true)
  const isSmall = ref(true)
  const hasMount = ref(false)
  const isClickType = computed(() => props.triggerType === 'click')
  
  const topStyle = computed(() => getVal(props.top))
  const smallWidthStyle = computed(() => getVal(props.smallWidth))
  const smallHeightStyle = computed(() => getVal(props.smallHeight))
  const largeWidthStyle = computed(() => getVal(props.largeWidth))
  const largeHeightStyle = computed(() => getVal(props.largeHeight))
  const largeRadiusStyle = computed(() => getVal(props.largeRadius))
  
  const onOpen = () => {
    navigator.vibrate?.(200)
    isSmall.value = false
    emits('change', true)
  }
  
  const onClose = () => {
    isSmall.value = true
    //   hasMount.value = false
    emits('change', false)
  }
  
  const onScroll = () => {
    if (isClickType.value) {
      onClose()
    }
  }
  
  onMounted(() => {
    isHide.value = false
    setTimeout(() => {
      hasMount.value = true
    }, 10)
  
    if (isClickType.value) {
      window.addEventListener('scroll', onScroll, true)
    }
  })
  
  onUnmounted(() => {
    if (isClickType.value) {
      window.removeEventListener('scroll', onScroll, true)
    }
  })
  
  watch(isClickType, (newValue) => {
    if (!newValue) {
      onClose()
    }
  })
  
  </script>
  
  <style lang="scss"  scoped>
  .live-island-wrapper {
    --top: 10px;
    --small-width: 96px;
    --small-height: 30px;
    --large-width: 400px;
    --large-height: 180px;
    --large-radius: 36px;
  }
  
  .live-island {
    --small-height: 30px;
    --small-width: 96px;
    --scale: 1;
  }

// LiveIsland.scss
@tailwind utilities;

@keyframes turn-to-large {
  50% {
    @apply h-[calc(var(--large-height)*1.02)] w-[calc(var(--large-width)*1.02)] rounded-[--large-radius] [box-shadow:inset_0_0_0_1.5px_rgb(255_255_255/0.1),0_16px_40px_rgb(0_0_0/0.7)];
  }

  100% {
    @apply h-[--large-height] w-[--large-width] rounded-[--large-radius] [box-shadow:inset_0_0_0_1.5px_rgb(255_255_255/0.1),0_16px_40px_rgb(0_0_0/0.7)];
  }
}

@keyframes turn-to-small {
  0% {
    @apply h-[--large-height] w-[--large-width] rounded-[--large-radius] [box-shadow:inset_0_0_0_1.5px_rgb(255_255_255/0.1),0_16px_40px_rgb(0_0_0/0.7)];
  }

  50% {
    @apply h-[calc(var(--small-height)*0.94)] w-[calc(var(--small-width)*0.94)];
  }
}
  </style>
  