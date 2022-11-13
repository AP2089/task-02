<template>
  <div
    :class="[
      'search',
      {'active': isActive}
    ]"
  
  >
    <Sprite
      name="loupe"
      class="search__icon-loupe"
    />
    <input
      type="text"
      :placeholder="placeholder"
      class="search__inputbox"
      :value="phrase"
      @input="onInput"
    />
    <button
      class="search__btn-clear"
      @click="onClear"
    >
      <Sprite
        name="close"
        class="search__btn-clear-icon"
      />
    </button>
    <Transition name="fade">
      <div
        class="search__autocomplete"
        v-if="autocomplete.length > 0"
      >
        <div 
          class="search__autocomplete-item"
          v-for="item in autocomplete"
          :key="item.id"
          @click="onChoose(item)"
        >
          <div
            class="search__autocomplete-title"
            v-if="item.title"
            v-html="item.title"
          ></div>
          <div
            class="search__autocomplete-category"
            v-if="item.category"
          >
            {{item.category.title}}
          </div>
          <div
            class="search__autocomplete-description"
            v-if="item.description"
            v-html="item.description"
          ></div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import i18n from '@/translations';

export default {
  name: 'Search',
  props: {
    data: {
      type: Array,
      required: true
    },
    method: {
      type: Function,
      required: true
    },
    placeholder: {
      type: String,
      default: i18n.global.t('search')
    },
    minCharNumber: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      phrase: '',
      isActive: false,
      autocomplete: []
    }
  },
  methods: {
    onInput(event) {
      this.phrase = event.target.value;

      if (this.phrase.length >= this.minCharNumber) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }

      this.autocomplete = this.method(this.data, this.phrase);
    },
    onClear() {
      this.phrase = '';
      this.isActive = false;
      this.autocomplete = [];
    },
    onChoose(data) {
      this.$emit('choose', data);
      this.onClear();
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/placeholder';

.search {
  $rs: &;
  max-width: 564px;
  margin-bottom: 20px;
  position: relative;

  &__icon-loupe {
    display: block;
    width: 15px;
    height: 14px;
    fill: $color-secondary;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  &__inputbox {
    display: block;
    width: 100%;
    padding: 0 15px 10px 25px;
    margin: 0;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: $color-global;
    border-bottom: 1px solid $color-secondary;
    background-color: transparent;
    position: relative;
    z-index: 1;
    outline: none;
    transition: border-bottom-color .5s ease 0s;

    @include placeholder {
      font-style: italic;
      font-weight: 400;
      font-size: 15px;
      color: $color-secondary;
      opacity: 1;
    }

    &:focus {
      border-bottom-color: $color-info;
    }
  }

  &__btn-clear {
    display: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    opacity: 1;
    transition: opacity .5s ease 0s;

    &:hover {
      opacity: .7;
    }
  }

  &__btn-clear-icon {
    display: block;
    width: 11px;
    height: 11px;
    fill: $color-danger;
  }

  &__autocomplete {
    width: 100%;
    background-color: #ffffff;
    border: 1px solid $color-service;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 100;
    box-shadow: 2px 2px 5px 0px $color-service;
    max-height: 400px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  &__autocomplete-item {
    padding: 10px;
    background-color: #ffffff;
    cursor: pointer;
    border-bottom: 1px solid $color-service;
    transition: background-color .5s ease 0s;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background-color: $color-service;
    }
  }

  &__autocomplete-title {
    font-size: 13px;
    line-height: 1.2;
    color: $color-global;
    margin-bottom: 3px;
  }

  &__autocomplete-category {
    font-size: 10px;
    line-height: 1.2;
    color: $color-secondary;
    margin-bottom: 3px;
  }

  &__autocomplete-description {
    font-size: 11px;
    line-height: 1.2;
    color: $color-global;
  }

  &.active {
    #{$rs}__btn-clear {
      display: block;
    }
  }
}
</style>