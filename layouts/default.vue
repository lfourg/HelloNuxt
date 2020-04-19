<template>
  <div>
    <header>
      <ul>
        <li>
          <NLink to="/">首页</NLink>
        </li>
        <li>
          <NLink to="/news/1">新闻中心</NLink>
        </li>
        <li>
          <NLink to="/about">关于我们</NLink>
        </li>
      </ul>
    </header>
    <nuxt/>
  </div>
</template>

<style scoped lang="scss">
  ul {
    padding: 30px;
    border-bottom: 1px solid #ddd;
    background: #698894;

    li {
      display: inline-block;
      margin-right: 20px;

      a {
        color: #fff;
      }
    }
  }
</style>
