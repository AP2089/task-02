<template>
  <header class="header">
    <div class="center">
      <div class="header__wrap">
        <h1 class="header__title">{{$t('documents')}}</h1>
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item">
              <ButtonFavorites
                @click="$router.push('/')"
              />
            </li>
            <li class="header__nav-item">
              <ButtonAdd
                :title="$t('new.type')"
                @click="$router.push('/')"
              />
            </li>
            <li class="header__nav-item">
              <ButtonAdd
                :title="$t('new.document')"
                @click="$router.push('/')"
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import ButtonFavorites from '@/components/ui/ButtonFavorites';
import ButtonAdd from '@/components/ui/ButtonAdd';

export default {
  name: 'Header',
  components: {
    ButtonFavorites,
    ButtonAdd
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding-top: 33px;
  margin-bottom: 23px;

  &__wrap {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  &__title {
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 1.09;
    margin-right: 15px;
  }

  &__nav {
    margin-left: 15px;
  }

  &__nav-list {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
  }

  &__nav-item {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0 10px 0 0;
    padding: 0;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>